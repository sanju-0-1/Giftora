/**
 * GIFTHORA - Birthday Gifts Page Interactive Script
 * Features: Live Filtering, Sort, Search, Matchmaker Wizard,
 * Quick View Modal with Personalization, Wishlist, Slide-Over Cart Drawer
 */

// Unique Birthday Gifts Catalog
const birthdayGifts = [
  {
    id: 1,
    title: "Personalized Celestial Star Map Plaque (Warm LED Base)",
    category: "personalized",
    categoryLabel: "Personalized",
    recipient: "her",
    price: 1299,
    originalPrice: 1999,
    discount: "35% OFF",
    rating: 4.9,
    reviewsCount: 238,
    badge: "⭐ Bestseller",
    perk: "Free Custom Name & Date Engraving",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=700&auto=format&fit=crop&q=80",
    description: "Recreate the exact night sky and constellation arrangement from the night they were born. Printed on high-grade optical acrylic and mounted on a solid beechwood LED lamp base."
  },
  {
    id: 2,
    title: "Vintage Engraved Mechanical Pocket Watch & Quill Set",
    category: "keepsakes",
    categoryLabel: "Keepsake",
    recipient: "him",
    price: 2499,
    originalPrice: 3499,
    discount: "28% OFF",
    rating: 4.8,
    reviewsCount: 142,
    badge: "👑 Unique Find",
    perk: "Comes in Velvet Royal Wooden Box",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&auto=format&fit=crop&q=80",
    description: "A timeless birthday keepsake for gentlemen and history buffs. Features an intricate skeleton gear dial, customized back engraving, and a calligraphic feather quill with ink."
  },
  {
    id: 3,
    title: "Explosion 3D Birthday Memory Box & Belgian Chocolate Vault",
    category: "personalized",
    categoryLabel: "Handcrafted",
    recipient: "friends",
    price: 899,
    originalPrice: 1499,
    discount: "40% OFF",
    rating: 4.9,
    reviewsCount: 312,
    badge: "🎁 Handcrafted",
    perk: "Holds 24 Photos + Hidden Gift Center",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=700&auto=format&fit=crop&q=80",
    description: "When closed, it appears as an elegant gift box; once opened, all multi-layered sides explode outwards revealing your cherished photos, handwritten notes, and artisan chocolates in the center."
  },
  {
    id: 4,
    title: "Custom Spotify Acrylic Song Plaque with Glowing Oak Stand",
    category: "personalized",
    categoryLabel: "Personalized",
    recipient: "friends",
    price: 749,
    originalPrice: 1199,
    discount: "37% OFF",
    rating: 4.7,
    reviewsCount: 420,
    badge: "🔥 Trending",
    perk: "Scannable Spotify Code",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=700&auto=format&fit=crop&q=80",
    description: "Imprint their favorite birthday soundtrack and a memorable photograph onto crystal-clear acrylic. Friends can scan the barcode on their phone to immediately play the song."
  },
  {
    id: 5,
    title: "Gourmet Artisanal Belgian Truffles & French Macarons Hamper",
    category: "hampers",
    categoryLabel: "Luxury Hamper",
    recipient: "all",
    price: 1850,
    originalPrice: 2500,
    discount: "26% OFF",
    rating: 4.9,
    reviewsCount: 188,
    badge: "🍫 Gourmet",
    perk: "Temperature Controlled Express Packaging",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=700&auto=format&fit=crop&q=80",
    description: "An indulgent sweet celebration box containing 16 handcrafted Belgian praline truffles, 8 Parisian almond macarons, and a mini celebratory birthday sparkling juice bottle."
  },
  {
    id: 6,
    title: "DIY Miniature Greenhouse Book Nook Kit with Warm Fairy Lights",
    category: "diy",
    categoryLabel: "Creative DIY",
    recipient: "her",
    price: 2799,
    originalPrice: 3899,
    discount: "28% OFF",
    rating: 4.9,
    reviewsCount: 95,
    badge: "✨ Unique Find",
    perk: "Touch-Activated Ambient LED",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=700&auto=format&fit=crop&q=80",
    description: "An enchanting 3D wooden craft puzzle that transforms into a glowing miniature greenhouse shelf insert between books. The ultimate birthday gift for book lovers and crafters."
  },
  {
    id: 7,
    title: "Custom 3D Subsurface Laser Crystal Photo Cube with RGB Base",
    category: "keepsakes",
    categoryLabel: "Keepsake",
    recipient: "milestone",
    price: 1699,
    originalPrice: 2399,
    discount: "29% OFF",
    rating: 4.8,
    reviewsCount: 164,
    badge: "💎 Keepsake",
    perk: "Permanent High-Definition 3D Laser",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=700&auto=format&fit=crop&q=80",
    description: "Convert any portrait photo into a breathtaking 3D holographic projection inside flawless optical K9 crystal. Illuminated with 7-color ambient fading LED modes."
  },
  {
    id: 8,
    title: "Retro Instant Print Film Camera & Birthday Scrapbook Bundle",
    category: "tech",
    categoryLabel: "Tech & Fun",
    recipient: "kids",
    price: 4599,
    originalPrice: 5999,
    discount: "23% OFF",
    rating: 4.8,
    reviewsCount: 210,
    badge: "📸 Top Rated",
    perk: "Includes 20 Film Sheets & Pastel Pens",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=700&auto=format&fit=crop&q=80",
    description: "Capture birthday memories on the spot. Comes with the camera, high-gloss film packs, gold metallic markers, stickers, and a hardcover birthday scrapbook."
  },
  {
    id: 9,
    title: "Artisanal Birthday Cake Candle & French Vanilla Aromatherapy Set",
    category: "wellness",
    categoryLabel: "Self-Care",
    recipient: "her",
    price: 1099,
    originalPrice: 1599,
    discount: "31% OFF",
    rating: 4.7,
    reviewsCount: 145,
    badge: "🕯️ Relaxing",
    perk: "100% Pure Soy Wax with Rainbow Sprinkles",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=700&auto=format&fit=crop&q=80",
    description: "Smells just like freshly baked birthday vanilla cake and sugar frosting. Hand-poured with real celebratory wax sprinkles and accompanied by a brass wick trimmer and matches."
  },
  {
    id: 10,
    title: "Monogrammed Full-Grain Italian Vegan Leather Duffle & Washbag",
    category: "luxury",
    categoryLabel: "Luxury Lifestyle",
    recipient: "him",
    price: 3199,
    originalPrice: 4499,
    discount: "29% OFF",
    rating: 4.9,
    reviewsCount: 178,
    badge: "💼 Premium",
    perk: "Free Gold Foil Monogramming",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=80",
    description: "Crafted for weekend getaways and classy travels. Features dedicated shoe compartment, waterproof interior lining, and complimentary gold embossed initials."
  },
  {
    id: 11,
    title: "Smart Temperature-Controlled Ceramic Coffee Mug & Charging Pad",
    category: "tech",
    categoryLabel: "Smart Tech",
    recipient: "him",
    price: 2299,
    originalPrice: 3199,
    discount: "28% OFF",
    rating: 4.8,
    reviewsCount: 132,
    badge: "⚡ Smart Tech",
    perk: "Maintains Exact 55°C All Day Long",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=700&auto=format&fit=crop&q=80",
    description: "Keeps morning coffee or birthday hot chocolate at the exact drinking temperature. The wireless coaster doubles as a fast smartphone charging pad."
  },
  {
    id: 12,
    title: "“365 Days of Why You're Special” Message Capsule Jar",
    category: "personalized",
    categoryLabel: "Heartfelt",
    recipient: "friends",
    price: 599,
    originalPrice: 899,
    discount: "33% OFF",
    rating: 4.9,
    reviewsCount: 460,
    badge: "❤️ Heartfelt",
    perk: "365 Blank Parchment Capsules & Rings",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=700&auto=format&fit=crop&q=80",
    description: "A vintage corked apothecary glass bottle containing 365 mini rolled message capsules. They can unroll one daily compliment, memory, or wish for an entire year."
  }
];

// Application State
let activeCategory = 'all';
let activeRecipient = 'all';
let activeSort = 'featured';
let searchQuery = '';
let cartItems = [];
let wishlistItems = new Set();
let modalCurrentProduct = null;
let modalQuantity = 1;

// DOM Elements
const productGrid = document.getElementById('productGrid');
const resultsCount = document.getElementById('resultsCount');
const searchInput = document.getElementById('searchInput');
const recipientFilter = document.getElementById('recipientFilter');
const sortFilter = document.getElementById('sortFilter');
const categoryChips = document.querySelectorAll('.category-chip');

// Cart Elements
const cartBtn = document.getElementById('cartBtn');
const cartBadge = document.getElementById('cartBadge');
const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartEmptyMsg = document.getElementById('cartEmptyMsg');
const cartSubtotalEl = document.getElementById('cartSubtotal');
const cartTotalEl = document.getElementById('cartTotal');
const greetingCheckbox = document.getElementById('greetingCheckbox');
const greetingInput = document.getElementById('greetingInput');
const checkoutBtn = document.getElementById('checkoutBtn');

// Quick View Modal Elements
const modalOverlay = document.getElementById('modalOverlay');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalImg = document.getElementById('modalImg');
const modalBadge = document.getElementById('modalBadge');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalRating = document.getElementById('modalRating');
const modalPrice = document.getElementById('modalPrice');
const modalOriginalPrice = document.getElementById('modalOriginalPrice');
const modalDiscount = document.getElementById('modalDiscount');
const modalDesc = document.getElementById('modalDesc');
const modalCustomInput = document.getElementById('modalCustomInput');
const modalQtyText = document.getElementById('modalQtyText');
const modalQtyMinus = document.getElementById('modalQtyMinus');
const modalQtyPlus = document.getElementById('modalQtyPlus');
const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');

// Wishlist Badge
const wishlistBadge = document.getElementById('wishlistBadge');

// Matchmaker elements
const matchRecipient = document.getElementById('matchRecipient');
const matchVibe = document.getElementById('matchVibe');
const matchBudget = document.getElementById('matchBudget');
const matchmakerBtn = document.getElementById('matchmakerBtn');

// Toast Container
const toastContainer = document.getElementById('toastContainer');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupEventListeners();
  initConfetti();
});

// Render Product Catalog
function renderProducts() {
  let filtered = birthdayGifts.filter(gift => {
    // Category match
    const matchCategory = (activeCategory === 'all') || (gift.category === activeCategory);
    
    // Recipient match
    const matchRecip = (activeRecipient === 'all') || (gift.recipient === activeRecipient) || (gift.recipient === 'all');
    
    // Search query
    const query = searchQuery.toLowerCase().trim();
    const matchSearch = !query || 
      gift.title.toLowerCase().includes(query) || 
      gift.description.toLowerCase().includes(query) || 
      gift.categoryLabel.toLowerCase().includes(query);

    return matchCategory && matchRecip && matchSearch;
  });

  // Sorting
  if (activeSort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (activeSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Update Stats count
  resultsCount.textContent = `${filtered.length} unique gift${filtered.length === 1 ? '' : 's'}`;

  // Render HTML
  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🎁</div>
        <h3>No matching gifts found</h3>
        <p>Try resetting the category filter or search keywords.</p>
        <button class="btn-primary" onclick="resetAllFilters()">Show All Birthday Gifts</button>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filtered.map(gift => {
    const isWishlisted = wishlistItems.has(gift.id);
    return `
      <article class="product-card" data-id="${gift.id}">
        <div class="card-media">
          <img src="${gift.image}" alt="${gift.title}" loading="lazy">
          <span class="card-badge">${gift.badge}</span>
          <button class="wishlist-toggle-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist(${gift.id}, event)" 
                  title="Save to Birthday Wishlist"
                  aria-label="Save to Birthday Wishlist">
            ♥
          </button>
          <button class="quick-view-overlay-btn" onclick="openQuickView(${gift.id})">
            👁 Quick View
          </button>
        </div>
        
        <div class="card-body">
          <div class="card-meta-row">
            <span class="card-category-tag">${gift.categoryLabel}</span>
            <div class="card-rating">★ ${gift.rating} <span>(${gift.reviewsCount})</span></div>
          </div>

          <h3 class="card-title" title="${gift.title}">${gift.title}</h3>
          <p class="card-desc">${gift.description}</p>
          
          <div class="card-perk-badge">✨ ${gift.perk}</div>

          <div class="card-footer">
            <div class="price-wrap">
              <span class="current-price">₹${gift.price.toLocaleString('en-IN')}</span>
              <div class="original-price-wrap">
                <span class="original-price">₹${gift.originalPrice.toLocaleString('en-IN')}</span>
                <span class="discount-tag">${gift.discount}</span>
              </div>
            </div>
            
            <button class="btn-add-cart" onclick="addToCart(${gift.id}, 1)">
              + Add
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Reset filters
window.resetAllFilters = function() {
  activeCategory = 'all';
  activeRecipient = 'all';
  activeSort = 'featured';
  searchQuery = '';
  if (searchInput) searchInput.value = '';
  if (recipientFilter) recipientFilter.value = 'all';
  if (sortFilter) sortFilter.value = 'featured';

  categoryChips.forEach(chip => {
    chip.classList.toggle('active', chip.dataset.category === 'all');
  });

  renderProducts();
  showToast("Filters reset to show all gifts 🌟");
};

// Event Listeners
function setupEventListeners() {
  // Category Chips
  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.dataset.category;
      renderProducts();
    });
  });

  // Recipient Dropdown
  recipientFilter.addEventListener('change', (e) => {
    activeRecipient = e.target.value;
    renderProducts();
  });

  // Sort Dropdown
  sortFilter.addEventListener('change', (e) => {
    activeSort = e.target.value;
    renderProducts();
  });

  // Search input live filter
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProducts();
  });

  // Cart Drawer toggles
  cartBtn.addEventListener('click', openCartDrawer);
  closeCartBtn.addEventListener('click', closeCartDrawer);
  cartDrawerOverlay.addEventListener('click', (e) => {
    if (e.target === cartDrawerOverlay) closeCartDrawer();
  });

  // Greeting card checkbox
  greetingCheckbox.addEventListener('change', (e) => {
    if (e.target.checked) {
      greetingInput.classList.add('visible');
      greetingInput.focus();
    } else {
      greetingInput.classList.remove('visible');
    }
  });

  // Checkout button
  checkoutBtn.addEventListener('click', () => {
    if (cartItems.length === 0) {
      showToast("Your gift cart is empty! Add a gift first 🎁");
      return;
    }
    const total = calculateTotal();
    alert(`🎉 Congratulations! Your Gifthora Birthday order of ₹${total.toLocaleString('en-IN')} has been placed successfully!\n\nA handwritten greeting card and premium luxury packaging are included with love.`);
    cartItems = [];
    updateCartUI();
    closeCartDrawer();
    showToast("Order placed successfully! 🎂🎈");
  });

  // Quick View Modal
  modalCloseBtn.addEventListener('click', closeQuickView);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeQuickView();
  });

  modalQtyMinus.addEventListener('click', () => {
    if (modalQuantity > 1) {
      modalQuantity--;
      modalQtyText.textContent = modalQuantity;
    }
  });

  modalQtyPlus.addEventListener('click', () => {
    modalQuantity++;
    modalQtyText.textContent = modalQuantity;
  });

  modalAddToCartBtn.addEventListener('click', () => {
    if (modalCurrentProduct) {
      const customNote = modalCustomInput.value.trim();
      addToCart(modalCurrentProduct.id, modalQuantity, customNote);
      closeQuickView();
    }
  });

  // Matchmaker Wizard submit
  matchmakerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const recipient = matchRecipient.value;
    const vibe = matchVibe.value;
    const budget = matchBudget.value;

    // Filter based on matchmaker
    activeRecipient = recipient;
    recipientFilter.value = recipient;

    if (vibe !== 'all') {
      activeCategory = vibe;
      categoryChips.forEach(chip => {
        chip.classList.toggle('active', chip.dataset.category === vibe);
      });
    }

    renderProducts();

    // Scroll to catalog smoothly
    const catalogElem = document.getElementById('giftCatalog');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
    showToast("Matched the best birthday gifts for you! 🎯");
  });
}

// Wishlist Functionality
window.toggleWishlist = function(id, event) {
  if (event) event.stopPropagation();
  const gift = birthdayGifts.find(g => g.id === id);
  if (!gift) return;

  if (wishlistItems.has(id)) {
    wishlistItems.delete(id);
    showToast(`Removed "${gift.title.slice(0, 24)}..." from Wishlist`);
  } else {
    wishlistItems.add(id);
    showToast(`Saved "${gift.title.slice(0, 24)}..." to Wishlist ❤️`);
  }
  wishlistBadge.textContent = wishlistItems.size;
  renderProducts();
};

// Cart Drawer & Management
window.addToCart = function(id, quantity = 1, customNote = '') {
  const gift = birthdayGifts.find(g => g.id === id);
  if (!gift) return;

  const existing = cartItems.find(item => item.id === id && item.customNote === customNote);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cartItems.push({
      id: gift.id,
      title: gift.title,
      price: gift.price,
      image: gift.image,
      quantity: quantity,
      customNote: customNote
    });
  }

  updateCartUI();
  showToast(`Added "${gift.title.slice(0, 25)}..." to Cart! 🛍️`);
};

function updateCartUI() {
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  cartBadge.textContent = totalCount;

  if (cartItems.length === 0) {
    cartEmptyMsg.style.display = 'block';
    cartItemsContainer.innerHTML = '';
    cartSubtotalEl.textContent = '₹0';
    cartTotalEl.textContent = '₹0';
    return;
  }

  cartEmptyMsg.style.display = 'none';

  cartItemsContainer.innerHTML = cartItems.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.title}</h4>
        ${item.customNote ? `<div class="cart-item-custom-text">✨ Note: "${item.customNote}"</div>` : ''}
        <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
        <div class="cart-item-qty-row">
          <button class="cart-qty-btn" onclick="changeCartQty(${index}, -1)">-</button>
          <span class="cart-qty-num">${item.quantity}</span>
          <button class="cart-qty-btn" onclick="changeCartQty(${index}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeCartItem(${index})" title="Remove item">✕</button>
    </div>
  `).join('');

  const subtotal = calculateTotal();
  cartSubtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  cartTotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
}

window.changeCartQty = function(index, delta) {
  if (!cartItems[index]) return;
  cartItems[index].quantity += delta;
  if (cartItems[index].quantity <= 0) {
    cartItems.splice(index, 1);
  }
  updateCartUI();
};

window.removeCartItem = function(index) {
  if (!cartItems[index]) return;
  cartItems.splice(index, 1);
  updateCartUI();
  showToast("Item removed from your cart");
};

function calculateTotal() {
  return cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
}

function openCartDrawer() {
  cartDrawerOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  cartDrawerOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Quick View Modal Logic
window.openQuickView = function(id) {
  const gift = birthdayGifts.find(g => g.id === id);
  if (!gift) return;

  modalCurrentProduct = gift;
  modalQuantity = 1;

  modalImg.src = gift.image;
  modalBadge.textContent = gift.badge;
  modalCategory.textContent = gift.categoryLabel;
  modalTitle.textContent = gift.title;
  modalRating.innerHTML = `★ ${gift.rating} <span>(${gift.reviewsCount} customer reviews)</span>`;
  modalPrice.textContent = `₹${gift.price.toLocaleString('en-IN')}`;
  modalOriginalPrice.textContent = `₹${gift.originalPrice.toLocaleString('en-IN')}`;
  modalDiscount.textContent = gift.discount;
  modalDesc.textContent = gift.description;
  modalQtyText.textContent = modalQuantity;
  modalCustomInput.value = '';

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
};

function closeQuickView() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Toast Notifications
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// Subtle celebratory confetti decoration for the hero section
function initConfetti() {
  const hero = document.querySelector('.birthday-hero');
  if (!hero) return;

  const colors = ['#d94676', '#e5a93c', '#8b5cf6', '#38bdf8', '#fb7185'];
  for (let i = 0; i < 18; i++) {
    const particle = document.createElement('div');
    particle.className = 'hero-confetti-particle';
    const size = Math.floor(Math.random() * 8) + 6;
    particle.style.width = `${size}px`;
    particle.style.height = `${size * 1.5}px`;
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 85}%`;
    particle.style.animationDelay = `${Math.random() * 4}s`;
    particle.style.animationDuration = `${4 + Math.random() * 4}s`;
    hero.appendChild(particle);
  }
}
