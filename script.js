// ZELVIQO Luxury Skin Care - Complete Storefront, Moving Showcase & Member Profile System
const categoryTitles = {
  all: "All Skincare Products",
  cleanser: "Face Wash & Gentle Cleansers",
  serum: "Targeted Face Serums",
  sunscreen: "Broad-Spectrum Sunscreens",
  moisturizer: "Hydrating Moisturizers & Gels",
  combo: "Curated Value Combo Sets"
};

const products = [
  {
    id: 1,
    name: "Dr. Rashel Vitamin C Brightening & Anti-Aging Face Serum",
    category: "serum",
    categoryLabel: "Face Serum",
    volume: "50ml",
    skinType: "All Skin Types",
    origin: "Authentic Import",
    regularPrice: 850,
    salePrice: 650,
    image: "product-1.jpg",
    description: "A fast-absorbing daily antioxidant serum infused with pure Vitamin C and Hyaluronic Acid to fade dullness, boost natural collagen, and give your skin an even, glass-like glow.",
    benefits: [
      "Visibly brightens uneven skin tone and dark spots",
      "Boosts collagen to reduce fine lines and fatigue",
      "Deeply hydrates without leaving a greasy residue"
    ],
    howToUse: "Apply 3-4 drops on clean face and neck every morning and night before moisturizer. Follow with SPF 50+ sunscreen during daytime."
  },
  {
    id: 2,
    name: "Care & Repair UV Defense Sunscreen SPF 50+ PA+++",
    category: "sunscreen",
    categoryLabel: "Sunscreen",
    volume: "60ml",
    skinType: "Oily, Combination & Normal Skin",
    origin: "Authentic Import",
    regularPrice: 950,
    salePrice: 740,
    image: "product-2.jpg",
    description: "Specially formulated for humid Bangladeshi weather. Shields skin from harsh UVA/UVB rays with zero white cast, zero stickiness, and soothing barrier-repair ingredients.",
    benefits: [
      "Broad-spectrum SPF 50+ PA+++ sun protection",
      "Zero white cast and sweat-resistant lightweight finish",
      "Prevents sun tan, pigmentation, and premature aging"
    ],
    howToUse: "Apply generously across face and neck 15 minutes before sun exposure. Reapply every 3 hours when outdoors."
  },
  {
    id: 3,
    name: "Niacinamide 10% + Zinc Pore Refining Glow Serum",
    category: "serum",
    categoryLabel: "Face Serum",
    volume: "30ml",
    skinType: "Oily & Acne-Prone Skin",
    origin: "Authentic Import",
    regularPrice: 1100,
    salePrice: 890,
    image: "product-3.jpg",
    description: "High-strength 10% Niacinamide balanced with Zinc PCA to control excess sebum, minimize enlarged pores, and calm active breakouts for smooth, clear skin.",
    benefits: [
      "Controls excess oil and midday shine",
      "Tightens the appearance of enlarged pores",
      "Fades post-acne marks and strengthens skin barrier"
    ],
    howToUse: "Dispense 2-3 drops onto fingertips and gently pat into skin after cleansing, morning and evening."
  },
  {
    id: 4,
    name: "Ceramide & Hyaluronic Gentle Hydrating Face Cleanser",
    category: "cleanser",
    categoryLabel: "Face Wash & Cleanser",
    volume: "150ml",
    skinType: "Dry, Sensitive & Normal Skin",
    origin: "Authentic Import",
    regularPrice: 780,
    salePrice: 620,
    image: "product-4.jpg",
    description: "Soap-free, pH-balanced daily face wash enriched with 3 essential Ceramides and Hyaluronic Acid to lift away dirt, sunscreen, and pollution without stripping natural moisture.",
    benefits: [
      "Deeply cleanses pores without tightness or dryness",
      "Restores and protects the natural moisture barrier",
      "Fragrance-free and safe for sensitive skin"
    ],
    howToUse: "Massage a coin-sized amount onto wet face in circular motions for 30 seconds, then rinse thoroughly with water."
  },
  {
    id: 5,
    name: "24K Gold & Rosewater Barrier Repair Gel Moisturizer",
    category: "moisturizer",
    categoryLabel: "Moisturizer",
    volume: "100g",
    skinType: "All Skin Types",
    origin: "Authentic Import",
    regularPrice: 1250,
    salePrice: 980,
    image: "product-5.jpg",
    description: "A cooling water-gel moisturizer infused with Damascus rosewater and micro-gold peptides that locks in 24-hour hydration while keeping skin plump and refreshed.",
    benefits: [
      "Instant cooling hydration without clogging pores",
      "Plumps fine dehydration lines for bouncy skin",
      "Works smoothly under sunscreen and makeup"
    ],
    howToUse: "Take a pea-sized amount and massage gently onto face and neck as the final step of your night routine or before sunscreen."
  },
  {
    id: 6,
    name: "Ultra-Light Invisible Matte Aqua Sun Gel SPF 50+",
    category: "sunscreen",
    categoryLabel: "Sunscreen",
    volume: "50ml",
    skinType: "Oily & Sensitive Skin",
    origin: "Authentic Import",
    regularPrice: 1050,
    salePrice: 850,
    image: "product-6.jpg",
    description: "Water-light aqua gel sunscreen that melts into skin in seconds. Leaves a velvety soft-matte finish ideal for hot and humid days.",
    benefits: [
      "Water-based gel texture with instant absorption",
      "Controls oil while protecting against UV damage",
      "No eye stinging and zero greasy feel"
    ],
    howToUse: "Apply two fingers' worth evenly over face and ears every morning before stepping outside."
  },
  {
    id: 7,
    name: "Alpha Arbutin Dark Spot Corrector Night Elixir",
    category: "serum",
    categoryLabel: "Face Serum",
    volume: "30ml",
    skinType: "All Skin Types",
    origin: "Authentic Import",
    regularPrice: 1150,
    salePrice: 920,
    image: "product-7.jpg",
    description: "Concentrated 2% Alpha Arbutin night treatment designed to target stubborn melasma, sunspots, and hyperpigmentation while you sleep.",
    benefits: [
      "Reduces stubborn dark patches and uneven pigmentation",
      "Gentle daily brightening without skin irritation",
      "Promotes clearer, luminous complexion in 3-4 weeks"
    ],
    howToUse: "Apply 3 drops to clean skin at night before applying your moisturizer."
  },
  {
    id: 8,
    name: "ZELVIQO Complete Day-Glow Duo (Vitamin C + SPF 50+)",
    category: "combo",
    categoryLabel: "Combo Set",
    volume: "50ml + 60ml Set",
    skinType: "All Skin Types",
    origin: "Curated Bundle",
    regularPrice: 1800,
    salePrice: 1320,
    image: "product-8.jpg",
    description: "Our bestselling morning protection and glow bundle. Pair Dr. Rashel Vitamin C Serum with Care & Repair SPF 50+ Sunscreen for maximum brightening and UV defense.",
    benefits: [
      "Save ৳480 compared to buying individually",
      "Complete 2-step morning glow & sun protection routine",
      "Eligible for discounted nationwide delivery"
    ],
    howToUse: "Step 1: Apply Vitamin C Serum on clean skin. Step 2: Lock it in with Care & Repair SPF 50+ Sunscreen."
  }
];

let cart = [];
let activeCategory = "all";
let searchQuery = "";
let detailModalQty = 1;

// DOM References
const productGrid = document.getElementById("productGrid");
const movingProductTrack = document.getElementById("movingProductTrack");
const topNavMenu = document.getElementById("topNavMenu");
const searchInput = document.getElementById("searchInput");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartSubtotalEl = document.getElementById("cartSubtotal");
const checkoutModal = document.getElementById("checkoutModal");
const deliveryAreaSelect = document.getElementById("deliveryArea");
const productDetailModal = document.getElementById("productDetailModal");
const productDetailContent = document.getElementById("productDetailContent");
const authModal = document.getElementById("authModal");

// ================= MOVING SHOWCASE SLIDER =================
function renderMovingShowcase() {
  // Duplicate items so the marquee loops seamlessly
  const loopList = [...products, ...products];
  movingProductTrack.innerHTML = loopList
    .map(
      (item) => `
      <div class="marquee-card" onclick="openProductDetails(${item.id})">
        <img src="${item.image}" alt="${item.name}" />
        <div class="marquee-card-info">
          <div class="marquee-card-title">${item.name}</div>
          <div class="marquee-card-price">৳${item.salePrice} <span style="font-size:11px; color:#888; text-decoration:line-through;">৳${item.regularPrice}</span></div>
          <div class="marquee-card-cta">Click for Details &rarr;</div>
        </div>
      </div>
    `
    )
    .join("");
}

// ================= USER ACCOUNT & PROFILE SYSTEM =================
function getUsers() {
  return JSON.parse(localStorage.getItem("zelviqo_users") || "[]");
}

function saveUsers(users) {
  localStorage.setItem("zelviqo_users", JSON.stringify(users));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("zelviqo_current_user") || "null");
}

function setCurrentUser(user) {
  if (user) {
    localStorage.setItem("zelviqo_current_user", JSON.stringify(user));
  } else {
    localStorage.removeItem("zelviqo_current_user");
  }
  updateHeaderAuthUI();
}

function updateHeaderAuthUI() {
  const user = getCurrentUser();
  const nameEl = document.getElementById("headerUserName");
  const avatarEl = document.getElementById("headerUserAvatar");

  if (user) {
    const firstName = user.name.split(" ")[0];
    nameEl.textContent = firstName;
    avatarEl.textContent = firstName.charAt(0).toUpperCase();
  } else {
    nameEl.textContent = "Login / Sign Up";
    avatarEl.textContent = "👤";
  }
}

function switchAuthTab(mode) {
  const isLogin = mode === "login";
  document.getElementById("tabLoginBtn").classList.toggle("active", isLogin);
  document.getElementById("tabRegisterBtn").classList.toggle("active", !isLogin);
  document.getElementById("loginForm").style.display = isLogin ? "block" : "none";
  document.getElementById("registerForm").style.display = isLogin ? "none" : "block";
}

function openAccountModal() {
  const user = getCurrentUser();
  const formsView = document.getElementById("authFormsView");
  const profileView = document.getElementById("userProfileView");
  const titleEl = document.getElementById("authModalTitle");

  if (user) {
    titleEl.textContent = "My ZELVIQO Profile";
    formsView.style.display = "none";
    profileView.style.display = "block";

    document.getElementById("profileDisplayName").textContent = user.name;
    document.getElementById("profileDisplayPhone").textContent = user.phone;
    document.getElementById("profileBigAvatar").textContent = user.name.charAt(0).toUpperCase();
    document.getElementById("profileEditAddress").value = user.address || "";

    renderUserOrderHistory(user.phone);
  } else {
    titleEl.textContent = "Member Login / Create Profile";
    formsView.style.display = "block";
    profileView.style.display = "none";
  }

  authModal.classList.add("open");
}

function saveProfileAddress() {
  const user = getCurrentUser();
  if (!user) return;
  const newAddress = document.getElementById("profileEditAddress").value.trim();
  user.address = newAddress;
  setCurrentUser(user);

  const users = getUsers();
  const idx = users.findIndex((u) => u.phone === user.phone);
  if (idx !== -1) {
    users[idx].address = newAddress;
    saveUsers(users);
  }
  alert("Delivery address saved to your profile!");
}

function renderUserOrderHistory(phone) {
  const allOrders = JSON.parse(localStorage.getItem("zelviqo_orders") || "[]");
  const myOrders = allOrders.filter((o) => o.phone === phone);
  const container = document.getElementById("userOrderHistoryList");

  if (myOrders.length === 0) {
    container.innerHTML = `<p class="empty-msg">No orders placed from this account yet.</p>`;
    return;
  }

  container.innerHTML = myOrders
    .map(
      (ord) => `
      <div class="history-item">
        <div style="display:flex; justify-content:space-between; font-weight:700; color:#0f2e24;">
          <span>Order #${ord.orderId}</span>
          <span>৳${ord.total}</span>
        </div>
        <div style="color:#5e6963; margin-top:2px;">${ord.itemsSummary}</div>
        <div style="font-size:11px; color:#888; margin-top:2px;">${ord.date} • Status: Confirmed (COD)</div>
      </div>
    `
    )
    .join("");
}

function logoutUser() {
  setCurrentUser(null);
  authModal.classList.remove("open");
}

// Register Submit
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("regName").value.trim();
  const phone = document.getElementById("regPhone").value.trim();
  const address = document.getElementById("regAddress").value.trim();
  const password = document.getElementById("regPassword").value;

  const users = getUsers();
  if (users.some((u) => u.phone === phone)) {
    alert("An account with this mobile number already exists. Please login.");
    switchAuthTab("login");
    return;
  }

  const newUser = { name, phone, address, password };
  users.push(newUser);
  saveUsers(users);
  setCurrentUser(newUser);
  e.target.reset();
  openAccountModal();
});

// Login Submit
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const phone = document.getElementById("loginPhone").value.trim();
  const password = document.getElementById("loginPassword").value;

  const users = getUsers();
  const matched = users.find((u) => u.phone === phone && u.password === password);
  if (!matched) {
    alert("Invalid mobile number or password. Please try again or create a new account.");
    return;
  }

  setCurrentUser(matched);
  e.target.reset();
  openAccountModal();
});

// ================= CATALOG & CATEGORY TABS =================
function selectCategory(category) {
  activeCategory = category;

  document.querySelectorAll(".nav-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.category === category);
  });

  document.getElementById("catalogHeading").textContent = categoryTitles[category] || "Skincare Products";
  document.getElementById("catalogKicker").textContent = category === "all" ? "ALL ESSENTIALS" : category.toUpperCase();

  renderProducts();
}

function renderProducts() {
  const filtered = products.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  document.getElementById("productCounter").textContent = `Showing ${filtered.length} product${filtered.length === 1 ? "" : "s"}`;

  if (filtered.length === 0) {
    productGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding:40px; color:#5e6963;">No skincare products found matching your selection.</p>`;
    return;
  }

  productGrid.innerHTML = filtered
    .map((product) => {
      const discount = Math.round(((product.regularPrice - product.salePrice) / product.regularPrice) * 100);
      return `
        <article class="product-card">
          <div class="card-media" onclick="openProductDetails(${product.id})">
            ${discount > 0 ? `<span class="discount-tag">-${discount}% OFF</span>` : ""}
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            <span class="quick-view-hint">View Details</span>
          </div>
          <div class="card-body">
            <span class="card-cat">${product.categoryLabel}</span>
            <h3 class="card-title" onclick="openProductDetails(${product.id})">${product.name}</h3>
            <span class="card-volume">Net Vol: ${product.volume}</span>
            <div class="price-row">
              <span class="price-now">৳${product.salePrice}</span>
              <span class="price-old">৳${product.regularPrice}</span>
            </div>
            <div class="card-actions">
              <button type="button" class="btn-add" onclick="addToCart(${product.id}, 1, false)">Add to Bag</button>
              <button type="button" class="btn-order" onclick="addToCart(${product.id}, 1, true)">Order Now</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

// ================= PRODUCT DETAIL VIEW =================
function openProductDetails(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  detailModalQty = 1;
  const discount = Math.round(((product.regularPrice - product.salePrice) / product.regularPrice) * 100);

  productDetailContent.innerHTML = `
    <div class="detail-image-box">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div class="detail-info">
      <span class="card-cat">${product.categoryLabel}</span>
      <h2>${product.name}</h2>

      <div class="detail-meta">
        <span>Volume: <strong>${product.volume}</strong></span>
        <span>Skin Type: <strong>${product.skinType}</strong></span>
        <span>Status: <strong>In Stock (${product.origin})</strong></span>
      </div>

      <div class="detail-price-box">
        <span class="detail-price-now">৳${product.salePrice}</span>
        <span class="price-old">৳${product.regularPrice}</span>
        ${discount > 0 ? `<span style="background:#b83b3b; color:#fff; font-size:11px; padding:3px 8px; border-radius:4px; font-weight:700;">SAVE ${discount}%</span>` : ""}
      </div>

      <div class="detail-section-block">
        <h4>Product Description</h4>
        <p>${product.description}</p>
      </div>

      <div class="detail-section-block">
        <h4>Key Benefits</h4>
        <ul class="detail-benefits-list">
          ${product.benefits.map((b) => `<li>${b}</li>`).join("")}
        </ul>
      </div>

      <div class="detail-section-block">
        <h4>How to Use</h4>
        <p>${product.howToUse}</p>
      </div>

      <div class="detail-purchase-row">
        <div class="detail-qty-box">
          <button type="button" onclick="updateDetailQty(-1)">-</button>
          <span id="detailQtyValue">1</span>
          <button type="button" onclick="updateDetailQty(1)">+</button>
        </div>
        <button type="button" class="btn-add" style="padding:12px 20px; font-size:13px;" onclick="addFromDetail(${product.id}, false)">Add to Bag</button>
        <button type="button" class="btn-order" style="padding:12px 24px; font-size:13px;" onclick="addFromDetail(${product.id}, true)">Order Now (COD)</button>
      </div>
    </div>
  `;

  productDetailModal.classList.add("open");
}

function updateDetailQty(delta) {
  detailModalQty = Math.max(1, detailModalQty + delta);
  const el = document.getElementById("detailQtyValue");
  if (el) el.textContent = detailModalQty;
}

function addFromDetail(productId, openCheckoutImmediately) {
  productDetailModal.classList.remove("open");
  addToCart(productId, detailModalQty, openCheckoutImmediately);
}

// ================= CART & CHECKOUT =================
function addToCart(productId, quantity = 1, openCheckoutImmediately = false) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += quantity;
  } else {
    cart.push({ ...product, qty: quantity });
  }

  updateCartUI();

  if (openCheckoutImmediately) {
    openCheckoutModal();
  } else {
    openCartDrawer();
  }
}

function changeQty(productId, delta) {
  const index = cart.findIndex((item) => item.id === productId);
  if (index === -1) return;

  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  updateCartUI();
}

function getSubtotal() {
  return cart.reduce((sum, item) => sum + item.salePrice * item.qty, 0);
}

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
          <div style="font-size:13px; color:#0f2e24; font-weight:700; margin-top:2px;">৳${item.salePrice} &times; ${item.qty}</div>
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

function openCartDrawer() {
  cartDrawer.classList.add("open");
  drawerBackdrop.classList.add("open");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  drawerBackdrop.classList.remove("open");
}

function openCheckoutModal() {
  if (cart.length === 0) {
    alert("Please add at least one skincare product to your bag first.");
    return;
  }
  closeCartDrawer();

  // Auto-fill checkout fields if user is logged in
  const user = getCurrentUser();
  if (user) {
    document.getElementById("custName").value = user.name || "";
    document.getElementById("custPhone").value = user.phone || "";
    document.getElementById("custAddress").value = user.address || "";
  }

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
topNavMenu.addEventListener("click", (e) => {
  if (!e.target.classList.contains("nav-tab")) return;
  selectCategory(e.target.dataset.category);
  document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderProducts();
});

document.getElementById("accountBtn").addEventListener("click", openAccountModal);
document.getElementById("closeAuthModalBtn").addEventListener("click", () => {
  authModal.classList.remove("open");
});

document.getElementById("closeDetailModalBtn").addEventListener("click", () => {
  productDetailModal.classList.remove("open");
});

productDetailModal.addEventListener("click", (e) => {
  if (e.target === productDetailModal) {
    productDetailModal.classList.remove("open");
  }
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
  const subtotal = getSubtotal();
  const shipping = subtotal >= 2000 ? 0 : Number(deliveryAreaSelect.value);
  const total = subtotal + shipping;

  // Save order history for member profile
  const allOrders = JSON.parse(localStorage.getItem("zelviqo_orders") || "[]");
  allOrders.unshift({
    orderId: Math.floor(100000 + Math.random() * 900000),
    phone,
    total,
    itemsSummary: cart.map((i) => `${i.name} (x${i.qty})`).join(", "),
    date: new Date().toLocaleDateString("en-GB")
  });
  localStorage.setItem("zelviqo_orders", JSON.stringify(allOrders));

  alert(`Thank you, ${name}! Your ZELVIQO order has been received. We will call ${phone} shortly to confirm delivery.`);
  cart = [];
  updateCartUI();
  e.target.reset();
  closeCheckoutModal();
});

// Initialize Everything
updateHeaderAuthUI();
renderMovingShowcase();
renderProducts();
