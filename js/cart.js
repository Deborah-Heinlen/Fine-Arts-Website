// ═══════════════════════════════════════════════════════════════
// CART.JS -- Deborah Heinlen Fine Art
// Manages the shopping cart using localStorage.
// Include this file on every page that needs cart functionality.
// ═══════════════════════════════════════════════════════════════

const CART_KEY = 'dhfa_cart';

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
  return cartGet().reduce((sum, i) => sum + (i.price * i.qty), 0);
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
  badge.textContent = count;
  badge.style.display = count > 0 ? 'inline' : 'none';
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
