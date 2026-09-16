import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Tag, ArrowRight, Heart, Sparkles, CheckCircle, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  const [couponCode, setCouponCode] = useState('ANNIVERSARY20');
  const [discountApplied, setDiscountApplied] = useState(true);
  const [giftNote, setGiftNote] = useState('');
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const discountAmount = discountApplied ? Math.round(subtotal * 0.2) : 0;
  const deliveryFee = subtotal > 1500 || cartItems.length === 0 ? 0 : 99;
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyCoupon = () => {
    if (couponCode.trim().toUpperCase() === 'ANNIVERSARY20') {
      setDiscountApplied(true);
    } else {
      alert('Invalid coupon code. Try ANNIVERSARY20 for 20% off!');
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setCheckoutSuccess(true);

    // Trigger romantic celebration confetti!
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f43f5e', '#ec4899', '#fbbf24', '#ffffff']
      });
    } catch (e) {
      console.log('Confetti triggered');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-rose-950/95 border-l border-rose-800/60 shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-rose-900/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-rose-400" />
              <h2 className="text-lg font-serif font-bold text-white">Your Shopping Bag</h2>
              <span className="text-xs bg-rose-900/60 px-2 py-0.5 rounded-full text-rose-200">
                ({cartItems.reduce((acc, i) => acc + (i.quantity || 1), 0)} items)
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-rose-300 hover:text-white hover:bg-rose-900/60 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body - Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {checkoutSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40 animate-bounce">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white">Order Confirmed! 🎉</h3>
                <p className="text-xs text-rose-200/80 leading-relaxed max-w-xs mx-auto">
                  Thank you for celebrating your milestone with us. Your custom anniversary gift is being crafted with love!
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      onClearCart();
                      setCheckoutSuccess(false);
                      onClose();
                    }}
                    className="px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-medium text-xs shadow-lg"
                  >
                    Continue Browsing Gifts
                  </button>
                </div>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <Heart className="w-12 h-12 text-rose-400/40 mx-auto animate-pulse" />
                <p className="text-sm font-medium text-rose-200">Your bag is currently empty</p>
                <p className="text-xs text-rose-300/60">Explore our curated anniversary collection to add gifts.</p>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 p-3 rounded-2xl bg-rose-900/30 border border-rose-800/40 items-center"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-xl object-cover border border-rose-800/50"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-semibold text-rose-100 truncate">{item.title}</h4>
                      {item.customization && (
                        <p className="text-[10px] text-amber-300 font-mono truncate">
                          Customized: {item.customization.partner1 ? `${item.customization.partner1} & ${item.customization.partner2}` : 'Personalized Engraving'}
                        </p>
                      )}
                      <p className="text-xs font-serif font-bold text-white mt-1">
                        ₹{item.price.toLocaleString('en-IN')}
                      </p>

                      {/* Quantity Selector */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) - 1)}
                          className="w-5 h-5 rounded bg-rose-900/60 text-rose-200 flex items-center justify-center hover:bg-rose-800 text-xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs text-rose-100 font-semibold">{item.quantity || 1}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                          className="w-5 h-5 rounded bg-rose-900/60 text-rose-200 flex items-center justify-center hover:bg-rose-800 text-xs"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-1.5 text-rose-400 hover:text-rose-200 transition"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* Gift Card Message Note Input */}
                <div className="pt-2">
                  <label className="block text-xs font-medium text-rose-300 mb-1">Add Free Gift Card Message</label>
                  <textarea
                    rows={2}
                    placeholder="Write a sweet romantic message to print on the gift card..."
                    value={giftNote}
                    onChange={(e) => setGiftNote(e.target.value)}
                    className="w-full bg-rose-900/30 border border-rose-800/40 rounded-xl p-2.5 text-xs text-rose-100 placeholder-rose-300/40 focus:outline-none focus:border-rose-500"
                  />
                </div>

                {/* Promo Code Box */}
                <div className="pt-2">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-rose-300/60" />
                      <input
                        type="text"
                        placeholder="Coupon Code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-rose-900/30 border border-rose-800/40 text-xs text-rose-100 uppercase focus:outline-none focus:border-rose-500 font-mono"
                      />
                    </div>
                    <button
                      onClick={handleApplyCoupon}
                      className="px-3 py-1.5 bg-rose-800 hover:bg-rose-700 text-white rounded-xl text-xs font-semibold"
                    >
                      Apply
                    </button>
                  </div>
                  {discountApplied && (
                    <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1 font-medium">
                      <Sparkles className="w-3 h-3" /> Code ANNIVERSARY20 applied (20% OFF)!
                    </p>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer - Calculations & Checkout */}
          {!checkoutSuccess && cartItems.length > 0 && (
            <div className="p-6 border-t border-rose-900/50 bg-rose-950 space-y-3">
              <div className="space-y-1.5 text-xs text-rose-200/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-emerald-400 font-medium">
                    <span>Anniversary Discount (20%)</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Express Anniversary Shipping</span>
                  <span>{deliveryFee === 0 ? <strong className="text-emerald-400">FREE</strong> : `₹${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-rose-900/50">
                  <span>Total Amount</span>
                  <span className="text-rose-200 font-serif">₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-semibold text-sm shadow-xl shadow-rose-600/30 flex items-center justify-center gap-2 transition"
              >
                <span>Proceed to Romantic Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
