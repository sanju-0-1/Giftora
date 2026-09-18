const products = [
  {
    id: 1,
    name: "Forever Rose Gift Box",
    category: "Gifts",
    price: 899,
    emoji: "🎁",
    desc: "A romantic gift box with a keepsake rose and surprises."
  },
  {
    id: 2,
    name: "Premium Red Roses",
    category: "Flowers",
    price: 799,
    emoji: "🌹",
    desc: "A beautiful bouquet of fresh red roses."
  },
  {
    id: 3,
    name: "Love You Chocolate Box",
    category: "Chocolates",
    price: 499,
    emoji: "🍫",
    desc: "A delicious assorted chocolate collection."
  },
  {
    id: 4,
    name: "Be My Valentine Card",
    category: "Cards",
    price: 199,
    emoji: "💌",
    desc: "A premium greeting card for your personal message."
  },
  {
    id: 5,
    name: "Cuddly Love Teddy",
    category: "Teddy",
    price: 699,
    emoji: "🧸",
    desc: "A soft teddy bear made for warm hugs."
  },
  {
    id: 6,
    name: "Rose & Chocolate Combo",
    category: "Gifts",
    price: 1099,
    emoji: "🌹🍫",
    desc: "A classic combination of roses and chocolates."
  },
  {
    id: 7,
    name: "Heartfelt Greeting Card",
    category: "Cards",
    price: 249,
    emoji: "💝",
    desc: "A charming heart-themed greeting card."
  },
  {
    id: 8,
    name: "Pink Rose Bouquet",
    category: "Flowers",
    price: 849,
    emoji: "💐",
    desc: "Elegant pink roses arranged beautifully."
  },
  {
    id: 9,
    name: "Luxury Truffle Box",
    category: "Chocolates",
    price: 649,
    emoji: "🍫",
    desc: "Rich assorted truffles in a premium box."
  },
  {
    id: 10,
    name: "Giant Love Teddy",
    category: "Teddy",
    price: 1199,
    emoji: "🧸",
    desc: "A giant fluffy teddy for a big warm hug."
  },
  {
    id: 11,
    name: "Personalized Love Box",
    category: "Gifts",
    price: 1299,
    emoji: "🎀",
    desc: "A curated box for photos, notes and surprises."
  },
  {
    id: 12,
    name: "Our Story Card Set",
    category: "Cards",
    price: 299,
    emoji: "💌",
    desc: "Romantic cards for sharing favorite memories."
  }
];


// ================================
// CART & WISHLIST
// ================================

let cart = JSON.parse(localStorage.getItem("loveCart") || "[]");

let wishlist = JSON.parse(
  localStorage.getItem("loveWishlist") || "[]"
);


// ================================
// HELPER FUNCTIONS
// ================================

const $ = (id) => document.getElementById(id);

const money = (number) =>
  "₹" + number.toLocaleString("en-IN");


// ================================
// SAVE DATA
// ================================

function save() {
  localStorage.setItem(
    "loveCart",
    JSON.stringify(cart)
  );

  localStorage.setItem(
    "loveWishlist",
    JSON.stringify(wishlist)
  );
}


// ================================
// DISPLAY PRODUCTS
// ================================

function renderProducts() {

  const searchText =
    $("searchInput").value.toLowerCase();

  const category =
    $("categoryFilter").value;

  const filteredProducts = products.filter(
    (product) => {

      const matchesCategory =
        category === "All" ||
        product.category === category;

      const matchesSearch =
        `${product.name}
        ${product.category}
        ${product.desc}`
          .toLowerCase()
          .includes(searchText);

      return matchesCategory && matchesSearch;
    }
  );


  $("productGrid").innerHTML =
    filteredProducts
      .map(
        (product) => `

        <article class="product">

          <button
            class="wish ${
              wishlist.includes(product.id)
                ? "active"
                : ""
            }"
            onclick="toggleWishlist(${product.id})"
          >
            ${
              wishlist.includes(product.id)
                ? "♥"
                : "♡"
            }
          </button>


          <div class="product-image">
            ${product.emoji}
          </div>


          <div class="product-info">

            <span class="badge">
              ${product.category}
            </span>


            <h3>
              ${product.name}
            </h3>


            <p>
              ${product.desc}
            </p>


            <div class="price-row">

              <span class="price">
                ${money(product.price)}
              </span>


              <button
                class="add-cart"
                onclick="addToCart(${product.id})"
              >
                Add 🛒
              </button>

            </div>

          </div>

        </article>

      `
      )
      .join("");


  $("noProducts").classList.toggle(
    "hidden",
    filteredProducts.length > 0
  );
}


// ================================
// ADD PRODUCT TO CART
// ================================

function addToCart(id) {

  const existingProduct =
    cart.find(
      (item) => item.id === id
    );


  if (existingProduct) {

    existingProduct.qty++;

  } else {

    cart.push({
      id: id,
      qty: 1
    });

  }


  save();

  renderCart();

  updateCounts();

  toast("Added to your cart ❤️");
}


// ================================
// CHANGE CART QUANTITY
// ================================

function changeQty(id, difference) {

  const item =
    cart.find(
      (product) => product.id === id
    );


  if (!item) {
    return;
  }


  item.qty += difference;


  if (item.qty <= 0) {

    cart =
      cart.filter(
        (product) => product.id !== id
      );

  }


  save();

  renderCart();

  updateCounts();
}


// ================================
// DISPLAY CART
// ================================

function renderCart() {

  if (cart.length === 0) {

    $("cartItems").innerHTML =
      `
        <p>
          Your cart is waiting for a
          little love. 💕
        </p>
      `;

  } else {

    $("cartItems").innerHTML =
      cart
        .map((item) => {

          const product =
            products.find(
              (product) =>
                product.id === item.id
            );


          return `

            <div class="cart-item">

              <div class="item-emoji">
                ${product.emoji}
              </div>


              <div class="item-info">

                <b>
                  ${product.name}
                </b>


                <small>
                  ${money(product.price)}
                </small>


                <div class="qty">

                  <button
                    onclick="changeQty(
                      ${product.id},
                      -1
                    )"
                  >
                    −
                  </button>


                  <span>
                    ${item.qty}
                  </span>


                  <button
                    onclick="changeQty(
                      ${product.id},
                      1
                    )"
                  >
                    +
                  </button>


                  <button
                    class="remove"
                    onclick="changeQty(
                      ${product.id},
                      -${item.qty}
                    )"
                  >
                    Remove
                  </button>

                </div>

              </div>

            </div>

          `;

        })
        .join("");
  }


  const total =
    cart.reduce(
      (sum, item) => {

        const product =
          products.find(
            (product) =>
              product.id === item.id
          );

        return (
          sum +
          product.price * item.qty
        );

      },
      0
    );


  $("cartTotal").textContent =
    money(total);
}


// ================================
// WISHLIST
// ================================

function toggleWishlist(id) {

  if (wishlist.includes(id)) {

    wishlist =
      wishlist.filter(
        (itemId) => itemId !== id
      );

    toast(
      "Removed from wishlist 💔"
    );

  } else {

    wishlist.push(id);

    toast(
      "Added to wishlist ❤️"
    );
  }


  save();

  renderProducts();

  renderWishlist();

  updateCounts();
}


// ================================
// DISPLAY WISHLIST
// ================================

function renderWishlist() {

  if (wishlist.length === 0) {

    $("wishlistItems").innerHTML =
      `
        <p>
          No saved gifts yet.
          Tap ♡ on a product to save it.
        </p>
      `;

    return;
  }


  $("wishlistItems").innerHTML =
    wishlist
      .map((id) => {

        const product =
          products.find(
            (item) => item.id === id
          );


        return `

          <div class="wish-item">

            <div class="item-emoji">
              ${product.emoji}
            </div>


            <div class="item-info">

              <b>
                ${product.name}
              </b>

              <small>
                ${money(product.price)}
              </small>

            </div>


            <button
              class="add-cart"
              onclick="addToCart(${product.id})"
            >
              Add
            </button>

          </div>

        `;

      })
      .join("");
}


// ================================
// UPDATE CART & WISHLIST COUNTS
// ================================

function updateCounts() {

  const cartCount =
    cart.reduce(
      (sum, item) =>
        sum + item.qty,
      0
    );


  $("cartCount").textContent =
    cartCount;


  $("wishlistCount").textContent =
    wishlist.length;
}


// ================================
// SIDE PANELS
// ================================

function openPanel(id) {

  $(id).classList.add("open");

  $("overlay").classList.add("open");
}


function closePanels() {

  document
    .querySelectorAll(".side-panel")
    .forEach((panel) => {

      panel.classList.remove("open");

    });


  $("overlay")
    .classList.remove("open");
}


// ================================
// TOAST MESSAGE
// ================================

function toast(message) {

  $("toast").textContent =
    message;


  $("toast")
    .classList.add("show");


  setTimeout(() => {

    $("toast")
      .classList.remove("show");

  }, 2200);
}


// ================================
// SEARCH
// ================================

$("searchInput").oninput =
  renderProducts;


// ================================
// CATEGORY FILTER
// ================================

$("categoryFilter").onchange =
  renderProducts;


// ================================
// CART BUTTON
// ================================

$("cartBtn").onclick = () => {

  renderCart();

  openPanel("cartPanel");
};


// ================================
// WISHLIST BUTTON
// ================================

$("wishlistBtn").onclick = () => {

  renderWishlist();

  openPanel("wishlistPanel");
};


// ================================
// OVERLAY
// ================================

$("overlay").onclick =
  closePanels;


// ================================
// CLOSE PANEL BUTTONS
// ================================

document
  .querySelectorAll(".close-panel")
  .forEach((button) => {

    button.onclick =
      closePanels;

  });


// ================================
// CATEGORY CARDS
// ================================

document
  .querySelectorAll(".category-card")
  .forEach((button) => {

    button.onclick = () => {

      const category =
        button.dataset.category;


      $("categoryFilter").value =
        category;


      renderProducts();


      $("products")
        .scrollIntoView({
          behavior: "smooth"
        });

    };

  });


// ================================
// CHECKOUT BUTTON
// ================================

$("checkoutBtn").onclick = () => {

  if (cart.length === 0) {

    toast(
      "Your cart is empty 💕"
    );

    return;
  }


  closePanels();


  $("checkoutModal")
    .classList.remove("hidden");
};


// ================================
// CLOSE CHECKOUT
// ================================

$("closeCheckout").onclick = () => {

  $("checkoutModal")
    .classList.add("hidden");

};


// ================================
// PLACE ORDER
// ================================

$("checkoutForm").onsubmit =
  (event) => {

    event.preventDefault();


    const orderId =
      "LV" +
      Math.floor(
        100000 +
        Math.random() * 900000
      );


    cart = [];


    save();

    renderCart();

    updateCounts();


    $("checkoutModal")
      .classList.add("hidden");


    event.target.reset();


    toast(
      "Order " +
      orderId +
      " placed successfully! ❤️"
    );
  };


// ================================
// INITIAL LOAD
// ================================

renderProducts();

renderCart();

renderWishlist();

updateCounts();
