// ═══════════════════════════════════════════════════════════════
// CART.JS -- Deborah Heinlen Fine Art
// Manages the shopping cart using localStorage.
// Include this file on every page that needs cart functionality.
// ═══════════════════════════════════════════════════════════════

const CART_KEY = 'dhfa_cart';

// ═══════════════════════════════════════════════════════════════
// SEASONAL SWITCH -- Christmas popup and homepage banner
// Set to false in January to hide both.  Set to true in October.
// ═══════════════════════════════════════════════════════════════
const CHRISTMAS_ACTIVE = true;

const CHRISTMAS_POPUP = {
  page:     '/christmas/',
  image:    '/images/christmas/winter-cardinal-card.webp',
  title:    'The Christmas Collection',
  text:     'Watercolor greeting cards and postcards.  Mix and match 10 or more and every card is just $4.',
  button:   'Shop Christmas Cards',
  delay:    4000,                    // milliseconds before it appears
  seenKey:  'dhfa_xmas_popup_2026'   // change the year each season so it shows again
};

// ── READ / WRITE ─────────────────────────────────────────────

function cartGet() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function cartSave(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  cartUpdateBadge();
}

// ── ADD TO CART ──────────────────────────────────────────────
// item shape:
// {
//   id:         'redbuds-in-bloom',
//   title:      'Redbuds in Bloom',
//   collection: 'Botanical Studies',
//   medium:     'metal' | 'canvas' | 'framed',
//   sizeKey:    '95',           -- the price/value key
//   sizeLabel:  '11x14',        -- human-readable size
//   price:      95,
//   image:      'images/...',
//   frameColor: 'Flat Black',   -- framed only, else null
//   matColor:   'Polar White',  -- framed only, else null
//   qty:        1
// }

function cartAdd(item) {
  const items = cartGet();

  // Build a unique key so the same print in different
  // sizes/mediums/frame combos are treated as separate items
  const uniqueKey = [
    item.id,
    item.medium,
    item.sizeKey,
    item.frameColor || '',
    item.matColor   || ''
  ].join('|');

  const existing = items.find(i => i.uniqueKey === uniqueKey);

  if (existing) {
    existing.qty += 1;
  } else {
    items.push({ ...item, uniqueKey, qty: 1 });
  }

  cartSave(items);
  cartShowConfirmation(item.title);
}

// ── REMOVE FROM CART ─────────────────────────────────────────

function cartRemove(uniqueKey) {
  const items = cartGet().filter(i => i.uniqueKey !== uniqueKey);
  cartSave(items);
}

// ── UPDATE QUANTITY ──────────────────────────────────────────

function cartUpdateQty(uniqueKey, qty) {
  const items = cartGet();
  const item  = items.find(i => i.uniqueKey === uniqueKey);
  if (!item) return;

  if (qty < 1) {
    cartRemove(uniqueKey);
    return;
  }

  item.qty = qty;
  cartSave(items);
}

// ── TOTAL ────────────────────────────────────────────────────

function cartTotal() {
  const items = cartGet();
  return items.reduce((sum, i) => sum + (cartUnitPrice(i, items) * i.qty), 0);
}

// ── BUNDLE PRICING (greeting cards and postcards) ────────────
// Needs stationery.js on the page.  Without it, items simply
// use their stored price.  The checkout Worker always has the
// final word on prices.

function cartHasStationeryPricing(medium) {
  return typeof STATIONERY_PRICING !== 'undefined' && !!STATIONERY_PRICING[medium];
}

function cartMediumCount(medium, items) {
  return (items || cartGet())
    .filter(i => i.medium === medium)
    .reduce((sum, i) => sum + i.qty, 0);
}

function cartUnitPrice(item, items) {
  if (!cartHasStationeryPricing(item.medium)) return item.price;
  const p = STATIONERY_PRICING[item.medium];
  const count = cartMediumCount(item.medium, items);
  return count >= STATIONERY_PRICING.bundleMin ? p.bundle : p.single;
}

// Status of one type's bundle, for messages on the cart page
function cartBundleStatus(medium, items) {
  if (!cartHasStationeryPricing(medium)) return null;
  const p       = STATIONERY_PRICING[medium];
  const min     = STATIONERY_PRICING.bundleMin;
  const count   = cartMediumCount(medium, items);
  const unlocked = count >= min;
  return {
    medium,
    label:    p.label,
    count,
    needed:   unlocked ? 0 : min - count,
    unlocked,
    single:   p.single,
    bundle:   p.bundle,
    savings:  unlocked ? count * (p.single - p.bundle) : 0,
    potential: min * (p.single - p.bundle)
  };
}

// ── SHIPPING ─────────────────────────────────────────────────
// Needs stationery.js on the page for the rules.

function cartShipping(subtotal) {
  if (typeof SHIPPING_RULES === 'undefined') return 0;
  return subtotal >= SHIPPING_RULES.freeAt ? 0 : SHIPPING_RULES.flatFee;
}

function cartItemCount() {
  return cartGet().reduce((sum, i) => sum + i.qty, 0);
}

// ── BADGE UPDATE ─────────────────────────────────────────────
// Updates the cart count shown in the header on every page.

function cartUpdateBadge() {
  const badge = document.getElementById('cartCount');
  if (!badge) return;
  const count = cartItemCount();
  badge.textContent = count > 0 ? ' (' + count + ')' : '';
}

// ── CONFIRMATION FLASH ───────────────────────────────────────
// Shows a brief "Added to cart" message near the button.

function cartShowConfirmation(title) {
  let msg = document.getElementById('cartConfirmMsg');
  if (!msg) {
    msg = document.createElement('div');
    msg.id = 'cartConfirmMsg';
    msg.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: #2e2419;
      color: #f5f0e8;
      font-family: 'Jost', sans-serif;
      font-size: 0.72rem;
      font-weight: 300;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      padding: 1rem 1.8rem;
      z-index: 9999;
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    `;
    document.body.appendChild(msg);
  }

  msg.textContent = title + ' added to cart';
  msg.style.opacity = '1';

  clearTimeout(msg._timeout);
  msg._timeout = setTimeout(() => {
    msg.style.opacity = '0';
  }, 2500);
}

// ── INIT ─────────────────────────────────────────────────────
// Run on every page load to keep the badge current.

document.addEventListener('DOMContentLoaded', cartUpdateBadge);

// ═══════════════════════════════════════════════════════════════
// CHRISTMAS POPUP
// Centered, once per visitor per season, easy to close.
// Skips the cart, success, and Christmas pages.
// Controlled by CHRISTMAS_ACTIVE at the top of this file.
// ═══════════════════════════════════════════════════════════════

function christmasPopupInit() {
  if (!CHRISTMAS_ACTIVE) return;

  const path = window.location.pathname;
  if (/\/(cart|christmas)(\/|$)/.test(path) || /success/.test(path)) return;

  try {
    if (localStorage.getItem(CHRISTMAS_POPUP.seenKey)) return;
  } catch { return; }

  setTimeout(christmasPopupShow, CHRISTMAS_POPUP.delay);
}

function christmasPopupShow() {
  try { localStorage.setItem(CHRISTMAS_POPUP.seenKey, '1'); } catch {}

  const style = document.createElement('style');
  style.textContent = `
    .xmas-pop-overlay {
      position: fixed; inset: 0; z-index: 9000;
      background: rgba(46, 36, 25, 0.55);
      display: flex; align-items: center; justify-content: center;
      padding: 1.5rem;
      opacity: 0; transition: opacity 0.4s ease;
    }
    .xmas-pop-overlay.show { opacity: 1; }
    .xmas-pop {
      position: relative;
      background: #f5f0e8;
      width: 100%; max-width: 440px;
      text-align: center;
      padding: 2.4rem 2.2rem 2.2rem;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      border-top: 5px solid #82262f;
      transform: translateY(16px); transition: transform 0.4s ease;
    }
    .xmas-pop-overlay.show .xmas-pop { transform: translateY(0); }
    .xmas-pop img {
      display: block; width: 72%; max-width: 280px; aspect-ratio: 1 / 1;
      object-fit: contain; margin: 0 auto 1.4rem;
      filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.18));
      pointer-events: none; user-select: none; -webkit-user-drag: none;
    }
    .xmas-pop h2 {
      font-family: 'Cormorant Garamond', serif; font-weight: 300;
      font-size: 2rem; color: #2e2419; letter-spacing: 0.03em;
      line-height: 1.1; margin-bottom: 0.8rem;
    }
    .xmas-pop p {
      font-family: 'Jost', sans-serif; font-weight: 300;
      font-size: 0.9rem; color: #6b5c4a; line-height: 1.7;
      margin-bottom: 1.6rem;
    }
    .xmas-pop a {
      display: inline-block;
      font-family: 'Jost', sans-serif; font-weight: 300;
      font-size: 0.7rem; letter-spacing: 0.24em; text-transform: uppercase;
      color: #f5f0e8; background: #82262f; text-decoration: none;
      padding: 0.95rem 2.2rem; transition: background 0.25s;
    }
    .xmas-pop a:hover { background: #5a1a22; }
    .xmas-pop-close {
      position: absolute; top: 0.6rem; right: 0.7rem;
      width: 2.4rem; height: 2.4rem;
      background: none; border: none; cursor: pointer;
      font-size: 1.6rem; line-height: 1; color: #6b5c4a;
    }
    .xmas-pop-close:hover { color: #2e2419; }
    .xmas-pop a:focus-visible, .xmas-pop-close:focus-visible { outline: 2px solid #6b5c4a; outline-offset: 3px; }
    @media (max-width: 600px) {
      .xmas-pop { max-width: 320px; padding: 1.8rem 1.4rem 1.6rem; }
      .xmas-pop img { width: 55%; margin-bottom: 1rem; }
      .xmas-pop h2 { font-size: 1.6rem; }
      .xmas-pop p { font-size: 0.82rem; margin-bottom: 1.2rem; }
    }
    @media (prefers-reduced-motion: reduce) {
      .xmas-pop-overlay, .xmas-pop { transition: none; }
    }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement('div');
  overlay.className = 'xmas-pop-overlay';
  overlay.innerHTML = `
    <div class="xmas-pop" role="dialog" aria-modal="true" aria-labelledby="xmasPopTitle">
      <button type="button" class="xmas-pop-close" aria-label="Close">&times;</button>
      <img src="${CHRISTMAS_POPUP.image}" alt="" />
      <h2 id="xmasPopTitle">${CHRISTMAS_POPUP.title}</h2>
      <p>${CHRISTMAS_POPUP.text}</p>
      <a href="${CHRISTMAS_POPUP.page}">${CHRISTMAS_POPUP.button}</a>
    </div>`;
  document.body.appendChild(overlay);

  const previousFocus = document.activeElement;
  requestAnimationFrame(() => overlay.classList.add('show'));
  overlay.querySelector('.xmas-pop-close').focus();

  function close() {
    overlay.classList.remove('show');
    document.removeEventListener('keydown', onKey);
    setTimeout(() => overlay.remove(), 400);
    if (previousFocus && previousFocus.focus) previousFocus.focus();
  }
  function onKey(e) { if (e.key === 'Escape') close(); }

  overlay.querySelector('.xmas-pop-close').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', onKey);
}

document.addEventListener('DOMContentLoaded', christmasPopupInit);
