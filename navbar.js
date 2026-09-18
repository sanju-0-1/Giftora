/**
 * Giftora - Unified Navbar Script
 * Enables mobile navigation toggle, scroll effects, and cross-module drawer triggers.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!toggleBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('show');
      }
    });

    // Close menu when a link inside is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });
  }

  // Scroll Header Shadow Animation
  const navbarWrapper = document.getElementById('navbar-wrapper');
  if (navbarWrapper) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 15) {
        navbarWrapper.classList.add('scrolled');
      } else {
        navbarWrapper.classList.remove('scrolled');
      }
    });
  }

  // Unified Wishlist & Cart Click Handlers
  const wishlistTriggers = document.querySelectorAll('#wishlist-toggle-btn, #wishlistBtn');
  const cartTriggers = document.querySelectorAll('#cart-toggle-btn, #cartBtn');

  wishlistTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // 1. Check for Anniversary Wishlist Drawer
      const annivWishlistDrawer = document.getElementById('wishlist-drawer');
      if (annivWishlistDrawer) {
        annivWishlistDrawer.classList.add('open');
        document.body.style.overflow = 'hidden';
        return;
      }

      // 2. Check for Valentine Wishlist Modal
      const valWishlistModal = document.getElementById('wishlistModal');
      if (valWishlistModal) {
        valWishlistModal.classList.remove('hidden');
        return;
      }

      // 3. Birthday or general page toast/scroll fallback
      if (typeof openWishlistModal === 'function') {
        openWishlistModal();
      } else {
        const featuredSec = document.getElementById('featured') || document.getElementById('gifts-section') || document.getElementById('products');
        if (featuredSec) featuredSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  cartTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // 1. Anniversary Cart Drawer
      const annivCartDrawer = document.getElementById('cart-drawer');
      if (annivCartDrawer) {
        annivCartDrawer.classList.add('open');
        document.body.style.overflow = 'hidden';
        return;
      }

      // 2. Birthday Cart Drawer
      const bdayCartDrawer = document.getElementById('cartDrawerOverlay');
      if (bdayCartDrawer) {
        bdayCartDrawer.classList.add('open');
        document.body.style.overflow = 'hidden';
        return;
      }

      // 3. Valentine Cart Modal
      const valCartModal = document.getElementById('cartModal');
      if (valCartModal) {
        valCartModal.classList.remove('hidden');
        return;
      }

      // 4. Default fallback (e.g. index page)
      const featuredSec = document.getElementById('featured') || document.getElementById('occasions');
      if (featuredSec) featuredSec.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
