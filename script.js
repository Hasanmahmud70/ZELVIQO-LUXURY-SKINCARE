// ZELVIQO Luxury Skin Care - Arogga-Inspired Storefront Engine
const categoryTitles = {
  all: "All Skincare Products",
  cleanser: "Face Wash & Gentle Cleansers",
  serum: "Targeted Face Serums",
  sunscreen: "Broad-Spectrum Sunscreens",
  moisturizer: "Hydrating Moisturizers & Gels",
  combo: "Curated Value Combo Sets",
  wishlist: "My Saved Wishlist"
};

const products = [
  {
    id: 1,
    name: "Dr. Rashel Vitamin C Brightening & Anti-Aging Face Serum",
    category: "serum",
    categoryLabel: "Face Serum",
    concern: "brightening",
    volume: "50ml",
    skinType: "All Skin Types",
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
    concern: "sun",
    volume: "60ml",
    skinType: "Oily, Combination & Normal Skin",
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
    concern: "acne",
    volume: "30ml",
    skinType: "Oily & Acne-Prone Skin",
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
    concern: "hydration",
    volume: "150ml",
    skinType: "Dry, Sensitive & Normal Skin",
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
    concern: "hydration",
    volume: "100g",
    skinType: "All Skin Types",
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
    concern: "sun",
    volume: "50ml",
    skinType: "Oily & Sensitive Skin",
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
    concern: "darkspot",
    volume: "30ml",
    skinType: "All Skin Types",
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
    concern: "brightening",
    volume: "50ml + 60ml Set",
    skinType: "All Skin Types",
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
let wishlist = JSON.parse(localStorage.getItem("zelviqo_wishlist") || "[]");
let activeCategory = "all";
let activeConcern = "all";
let searchQuery = "";
let sortBy = "featured";
let appliedDiscountPercent = 0;

// DOM Elements
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const searchDropdown = document.getElementById("searchDropdown");
const cartDrawer = document.getElementById("cartDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const checkoutModal = document.getElementById("checkoutModal");
const deliveryAreaSelect = document.getElementById("deliveryArea");
const productDetailModal = document.getElementById("productDetailModal");
const authModal = document.getElementById("authModal");

// ================= MOVING SHOWCASE =================
function renderMovingShowcase() {
  const track = document.getElementById("movingProductTrack");
  const loopItems = [...products, ...products];
  track.innerHTML = loopItems
    .map(
      (p) => `
      <div class="marquee-chip" onclick="openProductDetails(${p.id})">
        <img src="${p.image}" alt="${p.name}" />
        <span>${p.name.split(" ").slice(0, 4).join(" ")}</span>
        <strong>৳${p.salePrice}</strong>
      </div>
    `
    )
    .join("");
}

// ================= WISHLIST =================
function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();
  const idx = wishlist.indexOf(productId);
  if (idx === -1) {
    wishlist.push(productId);
  } else {
    wishlist.splice(idx, 1);
  }
  localStorage.setItem("zelviqo_wishlist", JSON.stringify(wishlist));
  updateWishlistBadge();
  renderProducts();
}

function updateWishlistBadge() {
  document.getElementById("wishlistCount").textContent = wishlist.length;
}

function toggleWishlistFilter() {
  if (activeCategory === "wishlist") {
    selectCategory("all");
  } else {
    activeCategory = "wishlist";
    activeConcern = "all";
    document.querySelectorAll(".side-link, .m-pill").forEach((el) => el.classList.remove("active"));
    document.getElementById("catalogHeading").textContent = categoryTitles.wishlist;
    renderProducts();
    document.getElementById("catalogSection").scrollIntoView({ behavior: "smooth" });
  }
}

// ================= FILTERING & SORTING =================
function selectCategory(category) {
  activeCategory = category;
  document.querySelectorAll(".side-link").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.category === category);
  });
  document.querySelectorAll(".m-pill").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.category === category);
  });
  document.getElementById("catalogHeading").textContent = categoryTitles[category] || "Skincare Products";
  renderProducts();
}

function selectConcern(concern) {
  activeConcern = concern;
  document.querySelectorAll(".concern-chip").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.concern === concern);
  });
  renderProducts();
}

function resetAllFilters() {
  activeCategory = "all";
  activeConcern = "all";
  searchQuery = "";
  searchInput.value = "";
  selectCategory("all");
  selectConcern("all");
}

function renderProducts() {
  let filtered = products.filter((item) => {
    if (activeCategory === "wishlist") {
      return wishlist.includes(item.id);
    }
    const matchesCat = activeCategory === "all" || item.category === activeCategory;
    const matchesConcern = activeConcern === "all" || item.concern === activeConcern;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesConcern && matchesSearch;
  });

  if (sortBy === "low-high") {
    filtered.sort((a, b) => a.salePrice - b.salePrice);
  } else if (sortBy === "high-low") {
    filtered.sort((a, b) => b.salePrice - a.salePrice);
  } else if (sortBy === "discount") {
    filtered.sort(
      (a, b) =>
        (b.regularPrice - b.salePrice) / b.regularPrice -
        (a.regularPrice - a.salePrice) / a.regularPrice
    );
  }

  document.getElementById("productCounter").textContent = `Showing ${filtered.length} authentic product${filtered.length === 1 ? "" : "s"}`;

  if (filtered.length === 0) {
    productGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding:40px; background:#fff; border-radius:12px; color:#606b65;">No skincare products found matching this filter.</p>`;
    return;
  }

  productGrid.innerHTML = filtered
    .map((product) => {
      const discount = Math.round(((product.regularPrice - product.salePrice) / product.regularPrice) * 100);
      const inCart = cart.find((c) => c.id === product.id);
      const isWished = wishlist.includes(product.id);

      const actionBtnHtml = inCart
        ? `<div class="inline-stepper">
            <button type="button" onclick="changeQty(${product.id}, -1)">-</button>
            <span>${inCart.qty} in Bag</span>
            <button type="button" onclick="changeQty(${product.id}, 1)">+</button>
          </div>`
        : `<button type="button" class="btn-add-full" onclick="addToCart(${product.id})">+ Add to Bag</button>`;

      return `
        <article class="product-card">
          <div class="card-media" onclick="openProductDetails(${product.id})">
            ${discount > 0 ? `<span class="discount-tag">${discount}% OFF</span>` : ""}
            <button type="button" class="wish-heart-btn" onclick="toggleWishlist(${product.id}, event)" title="Save to Wishlist">${isWished ? "❤️" : "🤍"}</button>
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
          </div>
          <div class="card-body">
            <span class="card-cat">${product.categoryLabel}</span>
            <h3 class="card-title" onclick="openProductDetails(${product.id})">${product.name}</h3>
            <span class="card-volume">Net Vol: ${product.volume}</span>
            <div class="price-row">
              <span class="price-now">৳${product.salePrice}</span>
              <span class="price-old">৳${product.regularPrice}</span>
            </div>
            ${actionBtnHtml}
          </div>
        </article>
      `;
    })
    .join("");
}

// ================= LIVE SEARCH DROPDOWN =================
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.trim();
  renderProducts();

  if (!searchQuery) {
    searchDropdown.classList.remove("open");
    return;
  }

  const hits = products.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5);
  if (hits.length === 0) {
    searchDropdown.innerHTML = `<div style="padding:12px; font-size:13px; color:#606b65;">No matching products found.</div>`;
  } else {
    searchDropdown.innerHTML = hits
      .map(
        (h) => `
        <div class="search-hit" onclick="openProductDetails(${h.id}); searchDropdown.classList.remove('open');">
          <img src="${h.image}" alt="${h.name}" />
          <div>
            <div style="font-size:13px; font-weight:600;">${h.name}</div>
            <div style="font-size:12px; color:#0c2b21; font-weight:700;">৳${h.salePrice}</div>
          </div>
        </div>
      `
      )
      .join("");
  }
  searchDropdown.classList.add("open");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-wrapper")) {
    searchDropdown.classList.remove("open");
  }
});

// ================= PRODUCT DETAIL MODAL + RELATED PRODUCTS =================
function openProductDetails(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const discount = Math.round(((product.regularPrice - product.salePrice) / product.regularPrice) * 100);
  const related = products.filter((p) => p.id !== product.id && (p.category === product.category || p.concern === product.concern)).slice(0, 3);

  document.getElementById("productDetailContent").innerHTML = `
    <div class="detail-grid">
      <div class="detail-image-box">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="detail-info">
        <span class="card-cat">${product.categoryLabel}</span>
        <h2>${product.name}</h2>

        <div class="detail-meta">
          <span>Volume: <strong>${product.volume}</strong></span>
          <span>Skin Type: <strong>${product.skinType}</strong></span>
          <span>Status: <strong>In Stock</strong></span>
        </div>

        <div class="detail-price-box">
          <span class="detail-price-now">৳${product.salePrice}</span>
          <span class="price-old">৳${product.regularPrice}</span>
          ${discount > 0 ? `<span style="background:#c0392b; color:#fff; font-size:11px; padding:3px 8px; border-radius:4px; font-weight:700;">SAVE ${discount}%</span>` : ""}
        </div>

        <div class="detail-section-block">
          <h4>Description</h4>
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

        <div style="display:flex; gap:10px; margin-top:16px;">
          <button type="button" class="btn-add" onclick="addToCart(${product.id}); productDetailModal.classList.remove('open'); openCartDrawer();">+ Add to Bag</button>
          <button type="button" class="btn-primary" onclick="addToCart(${product.id}); productDetailModal.classList.remove('open'); openCheckoutModal();">Order Now (COD)</button>
        </div>
      </div>
    </div>

    ${
      related.length > 0
        ? `<div class="related-section">
            <h4>Recommended With This Product</h4>
            <div class="related-grid">
              ${related
                .map(
                  (r) => `
                <div class="related-mini-card" onclick="openProductDetails(${r.id})">
                  <img src="${r.image}" alt="${r.name}" />
                  <div>
                    <div style="font-size:12px; font-weight:600;">${r.name.split(" ").slice(0, 5).join(" ")}</div>
                    <div style="font-size:12px; font-weight:700; color:#0c2b21;">৳${r.salePrice}</div>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>`
        : ""
    }
  `;

  productDetailModal.classList.add("open");
}

// ================= CART & FREE DELIVERY PROGRESS BAR =================
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  renderProducts();
}

function changeQty(productId, delta) {
  const index = cart.findIndex((item) => item.id === productId);
  if (index === -1) return;

  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  updateCartUI();
  renderProducts();
}

function getSubtotal() {
  return cart.reduce((sum, item) => sum + item.salePrice * item.qty, 0);
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = getSubtotal();

  document.getElementById("cartCount").textContent = totalItems;
  document.getElementById("headerBagTotal").textContent = `৳${subtotal}`;
  document.getElementById("cartSubtotal").textContent = `৳${subtotal}`;

  // Free Delivery Progress Bar (Target: 2000 BDT)
  const target = 2000;
  const pct = Math.min(100, Math.round((subtotal / target) * 100));
  document.getElementById("freeShipProgress").style.width = `${pct}%`;
  const freeShipText = document.getElementById("freeShipText");

  if (subtotal >= target) {
    freeShipText.innerHTML = `🎉 Congratulations! You unlocked <strong>FREE Home Delivery</strong>!`;
  } else {
    freeShipText.innerHTML = `Add <strong>৳${target - subtotal}</strong> more to unlock <strong>FREE Delivery</strong>!`;
  }

  const container = document.getElementById("cartItemsContainer");
  if (cart.length === 0) {
    container.innerHTML = `<p class="empty-msg">Your bag is currently empty.</p>`;
    return;
  }

  container.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div style="flex:1;">
          <div style="font-size:13px; font-weight:600;">${item.name}</div>
          <div style="font-size:13px; color:#0c2b21; font-weight:700;">৳${item.salePrice} &times; ${item.qty}</div>
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

// ================= CHECKOUT & COUPON CODE =================
function openCheckoutModal() {
  if (cart.length === 0) {
    alert("Please add at least one product to your bag first.");
    return;
  }
  closeCartDrawer();

  const user = getCurrentUser();
  if (user) {
    document.getElementById("custName").value = user.name || "";
    document.getElementById("custPhone").value = user.phone || "";
    document.getElementById("custAddress").value = user.address || "";
  }

  updateModalTotals();
  checkoutModal.classList.add("open");
}

function applyCoupon() {
  const code = document.getElementById("couponInput").value.trim().toUpperCase();
  const msgEl = document.getElementById("couponStatusMsg");

  if (code === "GLOW10" || code === "ZELVIQO10") {
    appliedDiscountPercent = 10;
    msgEl.textContent = "✓ Coupon applied! You received 10% extra discount.";
    msgEl.style.color = "#157347";
  } else {
    appliedDiscountPercent = 0;
    msgEl.textContent = "Invalid code. Try using GLOW10.";
    msgEl.style.color = "#c0392b";
  }
  updateModalTotals();
}

function updateModalTotals() {
  const subtotal = getSubtotal();
  const discountAmount = Math.round((subtotal * appliedDiscountPercent) / 100);
  const afterDiscount = subtotal - discountAmount;
  const shipping = afterDiscount >= 2000 ? 0 : Number(deliveryAreaSelect.value);

  document.getElementById("modalSubtotal").textContent = `৳${subtotal}`;
  const discountRow = document.getElementById("discountSummaryRow");
  if (discountAmount > 0) {
    discountRow.style.display = "flex";
    document.getElementById("modalDiscount").textContent = `-৳${discountAmount}`;
  } else {
    discountRow.style.display = "none";
  }

  document.getElementById("modalShipping").textContent = shipping === 0 ? "FREE (৳0)" : `৳${shipping}`;
  document.getElementById("modalGrandTotal").textContent = `৳${afterDiscount + shipping}`;
}

// ================= MEMBER PROFILE SYSTEM =================
function getUsers() {
  return JSON.parse(localStorage.getItem("zelviqo_users") || "[]");
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
    const first = user.name.split(" ")[0];
    nameEl.textContent = first;
    avatarEl.textContent = first.charAt(0).toUpperCase();
  } else {
    nameEl.textContent = "Login";
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

    const allOrders = JSON.parse(localStorage.getItem("zelviqo_orders") || "[]");
    const myOrders = allOrders.filter((o) => o.phone === user.phone);
    document.getElementById("userOrderHistoryList").innerHTML =
      myOrders.length === 0
        ? `<p style="font-size:12.5px; color:#606b65;">No orders placed yet.</p>`
        : myOrders
            .map(
              (o) => `
            <div class="history-item">
              <strong>Order #${o.orderId} — ৳${o.total}</strong>
              <div>${o.itemsSummary}</div>
              <small style="color:#777;">${o.date} • Confirmed</small>
            </div>
          `
            )
            .join("");
  } else {
    titleEl.textContent = "Login / Create Account";
    formsView.style.display = "block";
    profileView.style.display = "none";
  }
  authModal.classList.add("open");
}

function saveProfileAddress() {
  const user = getCurrentUser();
  if (!user) return;
  user.address = document.getElementById("profileEditAddress").value.trim();
  setCurrentUser(user);
  const users = getUsers();
  const idx = users.findIndex((u) => u.phone === user.phone);
  if (idx !== -1) {
    users[idx].address = user.address;
    localStorage.setItem("zelviqo_users", JSON.stringify(users));
  }
  alert("Address updated!");
}

function logoutUser() {
  setCurrentUser(null);
  authModal.classList.remove("open");
}

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("regName").value.trim();
  const phone = document.getElementById("regPhone").value.trim();
  const address = document.getElementById("regAddress").value.trim();
  const password = document.getElementById("regPassword").value;

  const users = getUsers();
  if (users.some((u) => u.phone === phone)) {
    alert("Account already exists. Please login.");
    switchAuthTab("login");
    return;
  }
  const newUser = { name, phone, address, password };
  users.push(newUser);
  localStorage.setItem("zelviqo_users", JSON.stringify(users));
  setCurrentUser(newUser);
  e.target.reset();
  openAccountModal();
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const phone = document.getElementById("loginPhone").value.trim();
  const password = document.getElementById("loginPassword").value;
  const matched = getUsers().find((u) => u.phone === phone && u.password === password);
  if (!matched) {
    alert("Wrong phone number or password.");
    return;
  }
  setCurrentUser(matched);
  e.target.reset();
  openAccountModal();
});

// ================= EVENT LISTENERS =================
document.getElementById("categoryMenuList").addEventListener("click", (e) => {
  const btn = e.target.closest(".side-link");
  if (btn) selectCategory(btn.dataset.category);
});

document.getElementById("mobileCatBar").addEventListener("click", (e) => {
  const btn = e.target.closest(".m-pill");
  if (btn) selectCategory(btn.dataset.category);
});

document.getElementById("concernMenuList").addEventListener("click", (e) => {
  const btn = e.target.closest(".concern-chip");
  if (btn) selectConcern(btn.dataset.concern);
});

document.getElementById("sortSelect").addEventListener("change", (e) => {
  sortBy = e.target.value;
  renderProducts();
});

document.getElementById("accountBtn").addEventListener("click", openAccountModal);
document.getElementById("closeAuthModalBtn").addEventListener("click", () => authModal.classList.remove("open"));
document.getElementById("closeDetailModalBtn").addEventListener("click", () => productDetailModal.classList.remove("open"));
document.getElementById("openCartBtn").addEventListener("click", openCartDrawer);
document.getElementById("closeCartBtn").addEventListener("click", closeCartDrawer);
drawerBackdrop.addEventListener("click", closeCartDrawer);
document.getElementById("proceedCheckoutBtn").addEventListener("click", openCheckoutModal);
document.getElementById("closeModalBtn").addEventListener("click", () => checkoutModal.classList.remove("open"));
deliveryAreaSelect.addEventListener("change", updateModalTotals);

document.getElementById("codOrderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const subtotal = getSubtotal();
  const discountAmount = Math.round((subtotal * appliedDiscountPercent) / 100);
  const afterDiscount = subtotal - discountAmount;
  const shipping = afterDiscount >= 2000 ? 0 : Number(deliveryAreaSelect.value);
  const total = afterDiscount + shipping;

  const allOrders = JSON.parse(localStorage.getItem("zelviqo_orders") || "[]");
  allOrders.unshift({
    orderId: Math.floor(100000 + Math.random() * 900000),
    phone,
    total,
    itemsSummary: cart.map((i) => `${i.name} (x${i.qty})`).join(", "),
    date: new Date().toLocaleDateString("en-GB")
  });
  localStorage.setItem("zelviqo_orders", JSON.stringify(allOrders));

  alert(`Thank you, ${name}! Your ZELVIQO order (#${allOrders[0].orderId}) is confirmed. We will call ${phone} shortly.`);
  cart = [];
  appliedDiscountPercent = 0;
  updateCartUI();
  renderProducts();
  e.target.reset();
  checkoutModal.classList.remove("open");
});

// Initialize Storefront
updateHeaderAuthUI();
updateWishlistBadge();
renderMovingShowcase();
renderProducts();
