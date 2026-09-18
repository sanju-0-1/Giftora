/* ==========================================================================
   ForeverLove - Anniversary Gifts Store JavaScript Engine
   Pure ES6+ JavaScript - No external libraries
   ========================================================================== */

// --- 1. ANNIVERSARY GIFT PRODUCTS DATA ---
const anniversaryGifts = [
    {
        id: 1,
        title: "Custom 3D LED Heart Acrylic Photo Lamp",
        category: "Home Decor",
        milestone: "1st Year",
        price: 44.99,
        originalPrice: 59.99,
        rating: 4.9,
        reviewsCount: 320,
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
        description: "A magical warm-glowing acrylic lamp customized with your favorite couple photograph, names, and anniversary date. Ideal for bedtime ambient lighting.",
        customizable: true
    },
    {
        id: 2,
        title: "Personalized Star Map of Our Special Night",
        category: "Keepsakes",
        milestone: "1st Year",
        price: 49.99,
        originalPrice: 65.00,
        rating: 4.8,
        reviewsCount: 210,
        badge: "Customizable",
        image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=600&q=80",
        description: "Accurate astronomical map showing how the night sky looked on your wedding or first date night. Framed in premium matte black or natural wood.",
        customizable: true
    },
    {
        id: 3,
        title: "Sterling Silver Interlocking Heart Couple Necklaces",
        category: "Jewelry",
        milestone: "Silver 25th",
        price: 84.99,
        originalPrice: 110.00,
        rating: 5.0,
        reviewsCount: 450,
        badge: "Top Rated",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
        description: "Matching 925 sterling silver necklaces that interlock perfectly together when paired. Includes custom initials engraving on the back.",
        customizable: true
    },
    {
        id: 4,
        title: "Handcrafted Wooden Memory Scrapbook Album",
        category: "Keepsakes",
        milestone: "5th Year",
        price: 34.99,
        originalPrice: 45.00,
        rating: 4.7,
        reviewsCount: 180,
        badge: "5th Wood Jubilee",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        description: "Carved birch wood cover scrapbook filled with 40 thick black photo pages, corner stickers, and metallic pens for capturing 5 years of memories.",
        customizable: true
    },
    {
        id: 5,
        title: "His & Hers Matching Luxury Quartz Pair Watches",
        category: "Jewelry",
        milestone: "10th Year",
        price: 129.99,
        originalPrice: 179.99,
        rating: 4.9,
        reviewsCount: 290,
        badge: "Luxury Gift",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
        description: "Elegant dual wristwatch set with rose gold casing, genuine leather straps, and water-resistant precision movement.",
        customizable: false
    },
    {
        id: 6,
        title: "Preserved Eternal Red Rose in Glass Dome",
        category: "Home Decor",
        milestone: "1st Year",
        price: 38.50,
        originalPrice: 50.00,
        rating: 4.8,
        reviewsCount: 380,
        badge: "Forever Rose",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
        description: "Real Ecuadorian rose naturally preserved to last 3+ years without water. Wrapped in LED fairy warm lights under a clear glass bell jar.",
        customizable: false
    },
    {
        id: 7,
        title: "25th Silver Jubilee Engraved Champagne Flutes Set",
        category: "Keepsakes",
        milestone: "Silver 25th",
        price: 64.99,
        originalPrice: 85.00,
        rating: 5.0,
        reviewsCount: 140,
        badge: "25th Jubilee",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
        description: "Set of 2 crystal champagne glasses with silver trim and personalized name laser etching. Packaged in a velvet satin presentation box.",
        customizable: true
    },
    {
        id: 8,
        title: "50th Golden Jubilee Memory Vault Box",
        category: "Keepsakes",
        milestone: "Gold 50th",
        price: 94.99,
        originalPrice: 125.00,
        rating: 5.0,
        reviewsCount: 95,
        badge: "50th Golden",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
        description: "Rich mahogany wood chest with polished 24K gold plated latches and custom nameplate. Built to store 50 years of family letters.",
        customizable: true
    },
    {
        id: 9,
        title: "Custom Anniversary Coordinates Bar Bracelet",
        category: "Personalized",
        milestone: "1st Year",
        price: 42.00,
        originalPrice: 55.00,
        rating: 4.7,
        reviewsCount: 160,
        badge: "Trending",
        image: "https://images.unsplash.com/photo-1611591475167-be08c7883e82?auto=format&fit=crop&w=600&q=80",
        description: "Minimalist stainless steel bar bracelet engraved with the exact latitude & longitude coordinates of where you got married.",
        customizable: true
    },
    {
        id: 10,
        title: "Romantic Couples Date Night Jar & 100 Idea Cards",
        category: "Keepsakes",
        milestone: "1st Year",
        price: 27.99,
        originalPrice: 35.00,
        rating: 4.9,
        reviewsCount: 510,
        badge: "Fun & Romantic",
        image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80",
        description: "Keep the spark alive! Glass jar filled with 100 scratch-off romantic date ideas categorized by budget and time.",
        customizable: false
    },
    {
        id: 11,
        title: "Custom Couple Silhouette Wooden Canvas",
        category: "Personalized",
        milestone: "5th Year",
        price: 52.99,
        originalPrice: 70.00,
        rating: 4.8,
        reviewsCount: 115,
        badge: "Handmade",
        image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=600&q=80",
        description: "Handcrafted silhouette art printed on textured canvas with real wood framing, featuring your names and wedding date.",
        customizable: true
    },
    {
        id: 12,
        title: "Aromatherapy Love Candle Set & Bath Salts",
        category: "Home Decor",
        milestone: "1st Year",
        price: 36.00,
        originalPrice: 48.00,
        rating: 4.6,
        reviewsCount: 230,
        badge: "Spa Pampering",
        image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80",
        description: "100% soy wax candles scented with Damask Rose & Vanilla Amber, paired with Himalayan rose bath salts for a relaxing anniversary bath.",
        customizable: false
    }
];

// --- 2. GLOBAL STATE ---
let cart = [];
let wishlist = new Set();
let appliedDiscount = 0;
let currentCategory = 'all';

// --- 3. DOM ELEMENTS ---
document.addEventListener('DOMContentLoaded', () => {
    initFlyingHearts();
    initClickHeartExplosion();
    renderProducts(anniversaryGifts);
    setupFilterAndSearch();
    setupCartDrawer();
    setupQuickViewModal();
    setupLoveCardGenerator();
    setupMobileMenu();
});

// ==========================================================================
// 4. FLYING HEARTS BACKGROUND ENGINE 💖
// ==========================================================================
function initFlyingHearts() {
    const container = document.getElementById('hearts-container');
    if (!container) return;

    const heartSymbols = ['💖', '❤️', '💕', '💗', '💌', '✨'];

    // Spawn heart periodically
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        
        // Random horizontal position (5% to 95%)
        const leftPos = Math.random() * 90 + 5;
        heart.style.left = leftPos + 'vw';

        // Random size (14px to 32px)
        const size = Math.random() * 18 + 14;
        heart.style.fontSize = size + 'px';

        // Random duration (6s to 12s)
        const duration = Math.random() * 6 + 6;
        heart.style.animationDuration = duration + 's';

        // Random horizontal swaying
        const sway = (Math.random() - 0.5) * 60;
        heart.style.transform = `translateX(${sway}px)`;

        container.appendChild(heart);

        // Remove element when animation completes
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);

    }, 700);
}

// Click to explode hearts at cursor location
function initClickHeartExplosion() {
    document.addEventListener('click', (e) => {
        // Avoid exploding on buttons or inputs if clicked directly
        if (e.target.closest('button') || e.target.closest('input') || e.target.closest('a')) return;

        const count = 6;
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'click-heart-particle';
            particle.innerHTML = '💖';
            particle.style.left = e.clientX + 'px';
            particle.style.top = e.clientY + 'px';

            const angle = (Math.PI * 2 * i) / count;
            const distance = Math.random() * 60 + 40;
            const tx = Math.cos(angle) * distance + 'px';
            const ty = Math.sin(angle) * distance + 'px';

            particle.style.setProperty('--tx', tx);
            particle.style.setProperty('--ty', ty);

            document.body.appendChild(particle);

            setTimeout(() => particle.remove(), 800);
        }
    });
}

// ==========================================================================
// 5. PRODUCT RENDERING & FILTERING 🛒
// ==========================================================================
function renderProducts(productsList) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    if (productsList.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-heart-crack"></i>
                <h3>No Anniversary Gifts Found</h3>
                <p>Try clearing your search query or selecting a different category filter.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = productsList.map(product => {
        const isLiked = wishlist.has(product.id);
        return `
            <div class="product-card" data-id="${product.id}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <button class="product-wishlist-btn ${isLiked ? 'liked' : ''}" onclick="toggleWishlist(${product.id}, this)" title="Add to Wishlist">
                    <i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart"></i>
                </button>
                
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.title}" class="product-img" loading="lazy">
                    <div class="product-overlay-actions">
                        <button class="quickview-btn" onclick="openQuickView(${product.id})">
                            <i class="fa-solid fa-eye"></i> Quick View
                        </button>
                    </div>
                </div>

                <div class="product-info">
                    <span class="product-category">${product.milestone} • ${product.category}</span>
                    <h3 class="product-title">${product.title}</h3>
                    
                    <div class="product-rating">
                        <i class="fa-solid fa-star"></i>
                        <strong>${product.rating}</strong>
                        <span>(${product.reviewsCount} reviews)</span>
                    </div>

                    <div class="product-bottom-row">
                        <div class="product-price">
                            $${product.price.toFixed(2)}
                            ${product.originalPrice ? `<del>$${product.originalPrice.toFixed(2)}</del>` : ''}
                        </div>
                        <button class="add-cart-btn" onclick="addToCart(${product.id})">
                            <i class="fa-solid fa-cart-plus"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function setupFilterAndSearch() {
    // Category Filter Buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.filter;
            applyFiltersAndSearch();
        });
    });

    // Milestone Cards Quick Filter
    const milestoneCards = document.querySelectorAll('.milestone-card');
    milestoneCards.forEach(card => {
        card.addEventListener('click', () => {
            const milestone = card.dataset.category;
            const targetSection = document.getElementById('gifts-section');
            targetSection.scrollIntoView({ behavior: 'smooth' });

            const filtered = anniversaryGifts.filter(p => p.milestone === milestone);
            renderProducts(filtered);
            showToast(`Filtered for ${milestone} Anniversary gifts! 💖`);
        });
    });

    // Search Input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', applyFiltersAndSearch);
    }

    // Sort Selection
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', applyFiltersAndSearch);
    }
}

function applyFiltersAndSearch() {
    const searchVal = (document.getElementById('search-input')?.value || '').toLowerCase().trim();
    const sortVal = document.getElementById('sort-select')?.value || 'featured';

    let result = anniversaryGifts.filter(product => {
        const matchesCategory = (currentCategory === 'all') || (product.category === currentCategory);
        const matchesSearch = product.title.toLowerCase().includes(searchVal) ||
                              product.description.toLowerCase().includes(searchVal) ||
                              product.category.toLowerCase().includes(searchVal) ||
                              product.milestone.toLowerCase().includes(searchVal);
        return matchesCategory && matchesSearch;
    });

    // Sort Logic
    if (sortVal === 'price-low') {
        result.sort((a, b) => a.price - b.price);
    } else if (sortVal === 'price-high') {
        result.sort((a, b) => b.price - a.price);
    } else if (sortVal === 'rating') {
        result.sort((a, b) => b.rating - a.rating);
    }

    renderProducts(result);
}

// ==========================================================================
// 6. WISHLIST TOGGLE 💖
// ==========================================================================
function toggleWishlist(productId, btnElement) {
    if (wishlist.has(productId)) {
        wishlist.delete(productId);
        btnElement.classList.remove('liked');
        btnElement.innerHTML = '<i class="fa-regular fa-heart"></i>';
        showToast("Removed from Wishlist");
    } else {
        wishlist.add(productId);
        btnElement.classList.add('liked');
        btnElement.innerHTML = '<i class="fa-solid fa-heart"></i>';
        showToast("Saved to your Anniversary Wishlist! 💖");
    }
    document.getElementById('wishlist-count').textContent = wishlist.size;
}

// ==========================================================================
// 7. CART MANAGEMENT & DRAWER 🛍️
// ==========================================================================
function setupCartDrawer() {
    const cartBtn = document.getElementById('cart-toggle-btn');
    const closeBtn = document.getElementById('cart-close-btn');
    const overlay = document.getElementById('cart-drawer-overlay');
    const drawer = document.getElementById('cart-drawer');

    cartBtn?.addEventListener('click', () => openCart());
    closeBtn?.addEventListener('click', () => closeCart());
    overlay?.addEventListener('click', () => closeCart());

    // Promo Code Handler
    document.getElementById('apply-promo-btn')?.addEventListener('click', () => {
        const promo = document.getElementById('promo-input').value.trim().toUpperCase();
        if (promo === 'LOVE2026') {
            appliedDiscount = 0.15; // 15% discount
            showToast("Success! 15% Anniversary Discount Applied! 🎉");
        } else {
            showToast("Invalid Promo Code. Try LOVE2026!");
        }
        updateCartUI();
    });

    // Checkout Handler
    document.getElementById('checkout-btn')?.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast("Your cart is empty! Add some anniversary gifts first.");
            return;
        }
        showToast("💖 Order Placed Successfully! Happy Anniversary!");
        cart = [];
        appliedDiscount = 0;
        updateCartUI();
        closeCart();
    });
}

function openCart() {
    document.getElementById('cart-drawer-overlay')?.classList.add('active');
    document.getElementById('cart-drawer')?.classList.add('active');
}

function closeCart() {
    document.getElementById('cart-drawer-overlay')?.classList.remove('active');
    document.getElementById('cart-drawer')?.classList.remove('active');
}

function addToCart(productId, customNote = "") {
    const product = anniversaryGifts.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId && item.customNote === customNote);

    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({
            ...product,
            qty: 1,
            customNote: customNote
        });
    }

    updateCartUI();
    openCart();
    showToast(`Added "${product.title}" to cart! 💖`);
}

function updateCartUI() {
    const container = document.getElementById('cart-items-container');
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const discountAmount = subtotal * appliedDiscount;
    const finalTotal = Math.max(0, subtotal - discountAmount);

    document.getElementById('cart-count').textContent = totalCount;
    document.getElementById('cart-item-count-text').textContent = totalCount;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-msg">
                <i class="fa-solid fa-heart-crack"></i>
                <p>Your anniversary cart is currently empty!</p>
                <a href="#gifts-section" class="btn btn-sm btn-primary" style="margin-top:15px;" onclick="closeCart()">Discover Gifts</a>
            </div>
        `;
        document.getElementById('discount-row').style.display = 'none';
        document.getElementById('cart-total-price').textContent = '$0.00';
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                ${item.customNote ? `<div class="cart-item-custom"><i class="fa-solid fa-wand-magic-sparkles"></i> Note: "${item.customNote}"</div>` : ''}
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
                    <button style="margin-left:auto; background:none; border:none; color:#e63946; cursor:pointer;" onclick="removeItem(${index})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </div>
    `).join('');

    if (appliedDiscount > 0) {
        document.getElementById('discount-row').style.display = 'flex';
        document.getElementById('discount-amount').textContent = `-$${discountAmount.toFixed(2)}`;
    } else {
        document.getElementById('discount-row').style.display = 'none';
    }

    document.getElementById('cart-total-price').textContent = `$${finalTotal.toFixed(2)}`;
}

function changeQty(index, delta) {
    if (cart[index]) {
        cart[index].qty += delta;
        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
        updateCartUI();
    }
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCartUI();
    showToast("Item removed from cart");
}

// ==========================================================================
// 8. QUICK VIEW MODAL 🔍
// ==========================================================================
function setupQuickViewModal() {
    const modal = document.getElementById('quickview-modal');
    const closeBtn = document.getElementById('modal-close-btn');

    closeBtn?.addEventListener('click', () => {
        modal?.classList.remove('active');
    });

    modal?.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });
}

function openQuickView(productId) {
    const product = anniversaryGifts.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('quickview-modal');
    const body = document.getElementById('modal-content-body');

    body.innerHTML = `
        <div class="modal-content-grid">
            <div class="modal-img-wrapper">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="modal-details">
                <span class="product-category">${product.milestone} • ${product.category}</span>
                <h3>${product.title}</h3>
                <div class="modal-price">$${product.price.toFixed(2)}</div>
                <p class="modal-description">${product.description}</p>
                
                ${product.customizable ? `
                    <div class="modal-custom-field">
                        <label for="modal-custom-input">Personalized Engraving / Couple Names 💕</label>
                        <input type="text" id="modal-custom-input" placeholder="e.g. Priya & Rahul - 14th Feb 2026">
                    </div>
                ` : ''}

                <button class="btn btn-primary btn-block" onclick="addCustomToCart(${product.id})">
                    <i class="fa-solid fa-cart-plus"></i> Add Customized Gift to Cart
                </button>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function addCustomToCart(productId) {
    const customInput = document.getElementById('modal-custom-input')?.value.trim() || "";
    addToCart(productId, customInput);
    document.getElementById('quickview-modal')?.classList.remove('active');
}

// ==========================================================================
// 9. LOVE CARD GENERATOR 💌
// ==========================================================================
function setupLoveCardGenerator() {
    const partnerInput = document.getElementById('partner-name');
    const yourNameInput = document.getElementById('your-name');
    const yearsInput = document.getElementById('years-together');
    const messageInput = document.getElementById('custom-message');
    const generateBtn = document.getElementById('generate-card-btn');
    const themeOptions = document.querySelectorAll('.theme-option');

    // Update Live Card
    function updateCardDisplay() {
        const partner = partnerInput?.value || "Dearest Love";
        const sender = yourNameInput?.value || "Your Partner";
        const years = yearsInput?.value || "5";
        const message = messageInput?.value || "Every single day with you feels like a beautiful dream.";

        document.getElementById('card-partner-preview').textContent = partner;
        document.getElementById('card-sender-preview').textContent = sender;
        document.getElementById('card-badge-preview').textContent = `Celebrating ${years} Beautiful Years`;
        document.getElementById('card-message-preview').textContent = `"${message}"`;
    }

    generateBtn?.addEventListener('click', updateCardDisplay);
    partnerInput?.addEventListener('input', updateCardDisplay);
    yourNameInput?.addEventListener('input', updateCardDisplay);
    messageInput?.addEventListener('input', updateCardDisplay);

    // Theme Selector
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            themeOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');

            const theme = option.dataset.theme;
            const display = document.getElementById('love-card-display');
            if (display) {
                display.className = `love-card-display theme-${theme}`;
            }
        });
    });

    // Copy Card Text Button
    document.getElementById('copy-card-btn')?.addEventListener('click', () => {
        const partner = partnerInput?.value || "Dearest Love";
        const sender = yourNameInput?.value || "Your Partner";
        const message = messageInput?.value || "";
        const years = yearsInput?.value || "5";

        const textToCopy = `Happy ${years}th Anniversary, ${partner}! 💕\n\n"${message}"\n\nWith all my love,\n${sender}`;

        navigator.clipboard.writeText(textToCopy).then(() => {
            showToast("Love Card message copied to clipboard! 📋💖");
        });
    });

    // Print / Save Card Button
    document.getElementById('print-card-btn')?.addEventListener('click', () => {
        window.print();
    });
}

// ==========================================================================
// 10. MOBILE MENU & TOAST UTILITIES
// ==========================================================================
function setupMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');

    toggleBtn?.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#ffffff';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        }
    });
}

function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-heart"></i> ${message}`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
