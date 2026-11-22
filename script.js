// ZELVIQO Luxury Skin Care - Product Catalog Data
// Replace or add your product images inside the "images/" folder matching the exact filenames below.
const products = [
  {
    id: 1,
    name: "Dr. Rashel Vitamin C Brightening & Anti-Aging Face Serum",
    category: "serum",
    volume: "50ml",
    regularPrice: 850,
    salePrice: 650,
    image: "images/product-1.jpg"
  },
  {
    id: 2,
    name: "Care & Repair UV Defense Sunscreen SPF 50+ PA+++",
    category: "sunscreen",
    volume: "60ml",
    regularPrice: 950,
    salePrice: 740,
    image: "images/product-2.jpg"
  },
  {
    id: 3,
    name: "Niacinamide 10% + Zinc Pore Refining Glow Serum",
    category: "serum",
    volume: "30ml",
    regularPrice: 1100,
    salePrice: 890,
    image: "images/product-3.jpg"
  },
  {
    id: 4,
    name: "Ceramide & Hyaluronic Gentle Hydrating Face Cleanser",
    category: "cleanser",
    volume: "150ml",
    regularPrice: 780,
    salePrice: 620,
    image: "images/product-4.jpg"
  },
  {
    id: 5,
    name: "24K Gold & Rosewater Barrier Repair Gel Moisturizer",
    category: "moisturizer",
    volume: "100g",
    regularPrice: 1250,
    salePrice: 980,
    image: "images/product-5.jpg"
  },
  {
    id: 6,
    name: "Ultra-Light Invisible Matte Aqua Sun Gel SPF 50+",
    category: "sunscreen",
    volume: "50ml",
    regularPrice: 1050,
    salePrice: 850,
    image: "images/product-6.jpg"
  },
  {
    id: 7,
    name: "Alpha Arbutin Dark Spot Corrector Night Elixir",
    category: "serum",
    volume: "30ml",
    regularPrice: 1150,
    salePrice: 920,
    image: "images/product-7.jpg"
  },
  {
    id: 8,
    name: "ZELVIQO Complete Day-Glow Duo (Vitamin C + SPF 50+)",
    category: "combo",
    volume: "2-Piece Set",
    regularPrice: 1800,
    salePrice: 1320,
    image: "images/product-8.jpg"
  }
];

let cart = [];
let activeCategory = "all";
let searchQuery = "";

// DOM Elements
const productGrid = document.getElementById("productGrid");
const categoryFilters = document.getElementById("categoryFilters");
const searchInput = document.getElementById("searchInput");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartSubtotalEl = document.getElementById("cartSubtotal");
const checkoutModal = document.getElementById("checkoutModal");
const deliveryAreaSelect = document.getElementById("deliveryArea");

// Render Product Cards
function renderProducts() {
  const filtered = products.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    productGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding:40px; color:#646e68;">No skincare products found matching your search.</p>`;
    return;
  }

  productGrid.innerHTML = filtered
    .map((product) => {
      const discount = Math.round(((product.regularPrice - product.salePrice) / product.regularPrice) * 100);
      return `
        <article class="product-card">
          <div class="card-media">
            ${discount > 0 ? `<span class="discount-tag">-${discount}% OFF</span>` : ""}
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
          </div>
          <div class="card-body">
            <span class="card-cat">${product.category}</span>
            <h3 class="card-title">${product.name}</h3>
            <span class="card-volume">Net Vol: ${product.volume}</span>
            <div class="price-row">
              <span class="price-now">৳${product.salePrice}</span>
              <span class="price-old">৳${product.regularPrice}</span>
            </div>
            <div class="card-actions">
              <button type="button" class="btn-add" onclick="addToCart(${product.id}, false)">Add to Bag</button>
              <button type="button" class="btn-order" onclick="addToCart(${product.id}, true)">Order Now</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

// Add to Cart
function addToCart(productId, openCheckoutImmediately = false) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();

  if (openCheckoutImmediately) {
    openCheckoutModal();
  } else {
    openCartDrawer();
  }
}

// Update Quantity
function changeQty(productId, delta) {
  const index = cart.findIndex((item) => item.id === productId);
  if (index === -1) return;

  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  updateCartUI();
}

// Calculate Subtotal
function getSubtotal() {
  return cart.reduce((sum, item) => sum + item.salePrice * item.qty, 0);
}

// Update Cart UI
function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalItems;

  const subtotal = getSubtotal();
  cartSubtotalEl.textContent = `৳${subtotal}`;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p class="empty-msg">Your bag is currently empty.</p>`;
    return;
  }

  cartItemsContainer.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div style="font-size:13px; color:#14362b; font-weight:700; margin-top:2px;">৳${item.salePrice} &times; ${item.qty}</div>
          <div class="qty-controls">
            <button type="button" class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
            <span>${item.qty}</span>
            <button type="button" class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// Drawer Controls
function openCartDrawer() {
  cartDrawer.classList.add("open");
  drawerBackdrop.classList.add("open");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  drawerBackdrop.classList.remove("open");
}

// Checkout Modal Controls
function openCheckoutModal() {
  if (cart.length === 0) {
    alert("Please add at least one skincare product to your bag first.");
    return;
  }
  closeCartDrawer();
  updateModalTotals();
  checkoutModal.classList.add("open");
}

function closeCheckoutModal() {
  checkoutModal.classList.remove("open");
}

function updateModalTotals() {
  const subtotal = getSubtotal();
  const shipping = subtotal >= 2000 ? 0 : Number(deliveryAreaSelect.value);
  document.getElementById("modalSubtotal").textContent = `৳${subtotal}`;
  document.getElementById("modalShipping").textContent = shipping === 0 ? "FREE (৳0)" : `৳${shipping}`;
  document.getElementById("modalGrandTotal").textContent = `৳${subtotal + shipping}`;
}

// Event Listeners
categoryFilters.addEventListener("click", (e) => {
  if (!e.target.classList.contains("pill")) return;
  document.querySelectorAll(".pill").forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");
  activeCategory = e.target.dataset.category;
  renderProducts();
});

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderProducts();
});

document.getElementById("openCartBtn").addEventListener("click", openCartDrawer);
document.getElementById("closeCartBtn").addEventListener("click", closeCartDrawer);
drawerBackdrop.addEventListener("click", closeCartDrawer);

document.getElementById("proceedCheckoutBtn").addEventListener("click", openCheckoutModal);
document.getElementById("closeModalBtn").addEventListener("click", closeCheckoutModal);
deliveryAreaSelect.addEventListener("change", updateModalTotals);

document.getElementById("codOrderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  alert(`Thank you, ${name}! Your ZELVIQO order has been received. We will call ${phone} shortly to confirm delivery.`);
  cart = [];
  updateCartUI();
  e.target.reset();
  closeCheckoutModal();
});

// Initialize Store
renderProducts();
