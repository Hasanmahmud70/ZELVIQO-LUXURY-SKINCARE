// ZELVIQO Luxury Skin Care - Complete Multi-Page Storefront Engine
const WHATSAPP_NUMBER = "8801860821074";

const translations = {
  en: {
    topNotice: "✨ 100% Authentic Imported Skincare | Use Code <strong>GLOW10</strong> for 10% Extra Off",
    searchBtn: "Search",
    myCart: "My Cart",
    menuMain: "EXPLORE STORE",
    menuCats: "SKINCARE CATEGORIES",
    menuSupport: "PAGES & SUPPORT",
    navHome: "🏠 Home",
    navAll: "✨ All Skincare Products",
    navBuilder: "🎁 Build Your Combo (15% Off)",
    navQuiz: "🔬 Skin Type Quiz",
    navGuide: "📖 Skincare Routine Guide",
    navProfile: "👤 My Profile & Orders",
    navTrack: "🚚 Track Your Order",
    navAbout: "🏛️ About Us",
    navPolicy: "🛡️ Delivery & Return Policy",
    navContact: "📞 Contact Us",
    flashText: "Up to 27% Off on Authentic Serums & Combos!",
    endsIn: "Ends in:",
    shopByCat: "Shop by Category",
    viewAll: "View All →",
    popularTitle: "Popular Skincare Essentials",
    seeFullCatalog: "See Full Catalog →"
  },
  bn: {
    topNotice: "✨ ১০০% অরিজিনাল ইমপোর্টেড স্কিনকেয়ার | <strong>GLOW10</strong> কোডে ১০% অতিরিক্ত ছাড়!",
    searchBtn: "খুঁজুন",
    myCart: "আমার কার্ট",
    menuMain: "স্টোর মেনু",
    menuCats: "স্কিনকেয়ার ক্যাটাগরি",
    menuSupport: "অন্যান্য পেজ ও সাপোর্ট",
    navHome: "🏠 হোম পেজ",
    navAll: "✨ সব স্কিনকেয়ার প্রোডাক্ট",
    navBuilder: "🎁 নিজের কম্বো বানান (১৫% ছাড়)",
    navQuiz: "🔬 স্কিন টাইপ কুইজ",
    navGuide: "📖 স্কিনকেয়ার রুটিন গাইড",
    navProfile: "👤 আমার প্রোফাইল ও অর্ডার",
    navTrack: "🚚 অর্ডার ট্র্যাক করুন",
    navAbout: "🏛️ আমাদের সম্পর্কে (About Us)",
    navPolicy: "🛡️ ডেলিভারি ও রিটার্ন পলিসি",
    navContact: "📞 যোগাযোগ করুন",
    flashText: "অরিজিনাল সিরাম ও কম্বো প্যাকে ২৭% পর্যন্ত ছাড়!",
    endsIn: "অফার শেষ হতে বাকি:",
    shopByCat: "ক্যাটাগরি অনুযায়ী কিনুন",
    viewAll: "সব দেখুন →",
    popularTitle: "জনপ্রিয় স্কিনকেয়ার প্রোডাক্টসমূহ",
    seeFullCatalog: "সম্পূর্ণ ক্যাটালগ দেখুন →"
  }
};

let currentLang = "en";

const categoryMeta = {
  all: {
    title: "All Skincare Products",
    desc: "Explore 100% authentic imported skincare curated for your daily routine."
  },
  cleanser: {
    title: "Face Wash & Gentle Cleansers",
    desc: "Soap-free, pH-balanced cleansers to purify pores without drying your skin."
  },
  serum: {
    title: "Face Serums & Treatments",
    desc: "Concentrated Vitamin C, Niacinamide & Alpha Arbutin serums for visible glow."
  },
  sunscreen: {
    title: "Sunscreen SPF 50+ PA+++",
    desc: "Lightweight, zero-white-cast sun protection tailored for Bangladeshi weather."
  },
  moisturizer: {
    title: "Moisturizers & Night Gels",
    desc: "Deep barrier-repair hydration for soft, plump, healthy-looking skin."
  },
  combo: {
    title: "Curated Value Combo Sets",
    desc: "Complete multi-step skincare bundles with extra savings."
  }
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
    ingredients: "Aqua, Ascorbic Acid (Vitamin C), Hyaluronic Acid, Niacinamide, Glycerin, Aloe Barbadensis Leaf Extract.",
    howToUse: "Apply 3-4 drops on clean face and neck every morning and night before moisturizer. Follow with SPF 50+ sunscreen during daytime.",
    reviews: [
      { user: "Nusrat Jahan (Uttara)", rating: 5, text: "100% original product! Within 2 weeks my skin looks much brighter." },
      { user: "Farhana Akter (Mirpur)", rating: 5, text: "Fast delivery and authentic packaging. Love ZELVIQO!" }
    ]
  },
  {
    id: 2,
    name: "Care & Repair UV Defense Sunscreen SPF 50+ PA+++",
    category: "sunscreen",
    categoryLabel: "Sunscreen",
    concern: "darkspot",
    volume: "60ml",
    skinType: "Oily, Combination & Normal Skin",
    regularPrice: 950,
    salePrice: 740,
    image: "product-2.jpg",
    description: "Specially formulated for humid Bangladeshi weather. Shields skin from harsh UVA/UVB rays with zero white cast, zero stickiness, and soothing barrier-repair ingredients.",
    ingredients: "Zinc Oxide, Titanium Dioxide, Centella Asiatica Extract, Panthenol (Vitamin B5), Hyaluronic Acid.",
    howToUse: "Apply generously across face and neck 15 minutes before sun exposure. Reapply every 3 hours when outdoors.",
    reviews: [
      { user: "Tania Rahman (Dhanmondi)", rating: 5, text: "Zero white cast and doesn't feel oily even in Dhaka heat." }
    ]
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
    ingredients: "Niacinamide (10%), Zinc PCA (1%), Tamarindus Indica Seed Gum, Pentylene Glycol.",
    howToUse: "Dispense 2-3 drops onto fingertips and gently pat into skin after cleansing, morning and evening.",
    reviews: [
      { user: "Sadia Islam (Banani)", rating: 5, text: "Controlled my excess oil and minimized pores noticeably." }
    ]
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
    ingredients: "Ceramide NP, Ceramide AP, Ceramide EOP, Sodium Hyaluronate, Glycerin.",
    howToUse: "Massage a coin-sized amount onto wet face in circular motions for 30 seconds, then rinse thoroughly with water.",
    reviews: [
      { user: "Mehjabin Chowdhury (Sylhet)", rating: 5, text: "Super gentle face wash, leaves skin soft and hydrated." }
    ]
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
    ingredients: "Rosa Damascena Flower Water, Colloidal Gold, Betaine, Allantoin, Sodium Hyaluronate.",
    howToUse: "Take a pea-sized amount and massage gently onto face and neck as the final step of your night routine or before sunscreen.",
    reviews: []
  },
  {
    id: 6,
    name: "Ultra-Light Invisible Matte Aqua Sun Gel SPF 50+",
    category: "sunscreen",
    categoryLabel: "Sunscreen",
    concern: "acne",
    volume: "50ml",
    skinType: "Oily & Sensitive Skin",
    regularPrice: 1050,
    salePrice: 850,
    image: "product-6.jpg",
    description: "Water-light aqua gel sunscreen that melts into skin in seconds. Leaves a velvety soft-matte finish ideal for hot and humid days.",
    ingredients: "Ethylhexyl Methoxycinnamate, Niacinamide, Green Tea Leaf Extract, Madecassoside.",
    howToUse: "Apply two fingers' worth evenly over face and ears every morning before stepping outside.",
    reviews: []
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
    ingredients: "Alpha-Arbutin (2%), Hydrolyzed Hyaluronic Acid, Lactic Acid, Ferulic Acid.",
    howToUse: "Apply 3 drops to clean skin at night before applying your moisturizer.",
    reviews: []
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
    ingredients: "Full-Size Dr. Rashel Vitamin C Serum (50ml) + Care & Repair UV Defense Sunscreen (60ml).",
    howToUse: "Step 1: Apply Vitamin C Serum on clean skin. Step 2: Lock it in with Care & Repair SPF 50+ Sunscreen.",
    reviews: []
  }
];

let cart = [];
let currentCategory = "all";
let cartDeliveryCharge = 70;
let appliedDiscountPercent = 0;

// ================= LANGUAGE SWITCHER (EN | বাং) =================
function toggleLanguage() {
  currentLang = currentLang === "en" ? "bn" : "en";
  const dict = translations[currentLang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.innerHTML = dict[key];
  });
}

// ================= MULTI-PAGE ROUTER =================
function navigateTo(pageName, param = null, pushState = true) {
  closeMenuDrawer();

  document.querySelectorAll(".page-view").forEach((view) => view.classList.remove("active"));
  const targetPage = document.getElementById(`page-${pageName}`);
  if (targetPage) targetPage.classList.add("active");

  document.querySelectorAll(".drawer-link").forEach((btn) => {
    const navKey = btn.dataset.nav;
    const isMatch =
      (pageName === "home" && navKey === "home") ||
      (pageName === "category" && param === "all" && navKey === "all-products") ||
      (pageName === "category" && navKey === param) ||
      navKey === pageName;
    btn.classList.toggle("active", isMatch);
  });

  document.querySelectorAll(".b-nav-item").forEach((btn) => {
    const bKey = btn.dataset.bnav;
    const isMatch =
      (pageName === "home" && bKey === "home") ||
      (pageName === "category" && bKey === "shop") ||
      (pageName === "profile" && bKey === "profile");
    btn.classList.toggle("active", isMatch);
  });

  if (pageName === "home") {
    renderProductCards("homeProductGrid", products.slice(0, 8));
  } else if (pageName === "category") {
    currentCategory = param || "all";
    const meta = categoryMeta[currentCategory] || categoryMeta.all;
    document.getElementById("catBreadcrumbName").textContent = meta.title;
    document.getElementById("catPageTitle").textContent = meta.title;
    document.getElementById("catPageDesc").textContent = meta.desc;

    document.querySelectorAll(".c-tab").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.cat === currentCategory);
    });
    renderCategoryPageProducts();
  } else if (pageName === "product") {
    renderFullProductPage(Number(param) || 1);
  } else if (pageName === "builder") {
    initCustomComboBuilder();
  } else if (pageName === "profile") {
    renderProfilePage();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  if (pushState) {
    const hash = param ? `#${pageName}/${param}` : `#${pageName}`;
    history.pushState({ pageName, param }, "", hash);
  }
}

window.addEventListener("popstate", (e) => {
  if (e.state && e.state.pageName) {
    navigateTo(e.state.pageName, e.state.param, false);
  } else {
    navigateTo("home", null, false);
  }
});

// ================= 3-LINE MENU DRAWER =================
const navDrawer = document.getElementById("navDrawer");
const menuBackdrop = document.getElementById("menuBackdrop");

function openMenuDrawer() {
  navDrawer.classList.add("open");
  menuBackdrop.classList.add("open");
}

function closeMenuDrawer() {
  navDrawer.classList.remove("open");
  menuBackdrop.classList.remove("open");
}

document.getElementById("openMenuBtn").addEventListener("click", openMenuDrawer);
document.getElementById("closeMenuBtn").addEventListener("click", closeMenuDrawer);
menuBackdrop.addEventListener("click", closeMenuDrawer);

// ================= PRODUCT CARDS (WITH ADD TO CART & INSTANT ORDER NOW) =================
function renderProductCards(containerId, list) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = list
    .map((product) => {
      const discount = Math.round(((product.regularPrice - product.salePrice) / product.regularPrice) * 100);
      return `
        <article class="product-card">
          <div class="card-media" onclick="navigateTo('product', ${product.id})">
            ${discount > 0 ? `<span class="discount-tag">${discount}% OFF</span>` : ""}
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
          </div>
          <div class="card-body">
            <span class="card-cat">${product.categoryLabel}</span>
            <h3 class="card-title" onclick="navigateTo('product', ${product.id})">${product.name}</h3>
            <span class="card-volume">Net Vol: ${product.volume}</span>
            <div class="price-row">
              <span class="price-now">৳${product.salePrice}</span>
              <span class="price-old">৳${product.regularPrice}</span>
            </div>
            <div class="card-btn-pair">
              <button type="button" class="btn-card-cart" onclick="addToCart(${product.id}, 1, false)">Add to Cart</button>
              <button type="button" class="btn-card-order" onclick="addToCart(${product.id}, 1, true)">Order Now</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCategoryPageProducts() {
  let list = currentCategory === "all" ? [...products] : products.filter((p) => p.category === currentCategory);
  const sortVal = document.getElementById("catSortSelect").value;
  if (sortVal === "low-high") list.sort((a, b) => a.salePrice - b.salePrice);
  if (sortVal === "high-low") list.sort((a, b) => b.salePrice - a.salePrice);
  renderProductCards("categoryProductGrid", list);
}

// ================= FULL PRODUCT DETAIL PAGE + CUSTOMER REVIEWS =================
function renderFullProductPage(productId) {
  const product = products.find((p) => p.id === productId) || products[0];
  const discount = Math.round(((product.regularPrice - product.salePrice) / product.regularPrice) * 100);

  document.getElementById("prodBreadcrumbCat").textContent = product.categoryLabel;
  document.getElementById("prodBreadcrumbCat").onclick = () => navigateTo("category", product.category);
  document.getElementById("prodBreadcrumbTitle").textContent = product.name;

  const savedReviews = JSON.parse(localStorage.getItem(`zelviqo_rev_${product.id}`) || "[]");
  const allReviews = [...product.reviews, ...savedReviews];

  document.getElementById("fullProductDetailContainer").innerHTML = `
    <div class="full-product-card">
      <div class="full-product-grid">
        <div class="full-prod-img">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="full-prod-info">
          <span class="card-cat">${product.categoryLabel}</span>
          <h1>${product.name}</h1>

          <div class="detail-meta">
            <span>Volume: <strong>${product.volume}</strong></span>
            <span>Skin Type: <strong>${product.skinType}</strong></span>
            <span>Rating: <strong>4.9 ★ (${allReviews.length} Reviews)</strong></span>
          </div>

          <div class="detail-price-box">
            <span class="detail-price-now">৳${product.salePrice}</span>
            <span class="price-old">৳${product.regularPrice}</span>
            ${discount > 0 ? `<span style="background:#c0392b; color:#fff; font-size:11px; padding:3px 8px; border-radius:4px; font-weight:700;">SAVE ${discount}%</span>` : ""}
          </div>

          <div class="detail-tabs-bar">
            <button type="button" class="d-tab-btn active" onclick="switchProductTab('desc', this)">Description</button>
            <button type="button" class="d-tab-btn" onclick="switchProductTab('ing', this)">Key Ingredients</button>
            <button type="button" class="d-tab-btn" onclick="switchProductTab('use', this)">How to Use</button>
          </div>

          <div id="tab-desc" class="detail-tab-panel">${product.description}</div>
          <div id="tab-ing" class="detail-tab-panel" style="display:none;">${product.ingredients}</div>
          <div id="tab-use" class="detail-tab-panel" style="display:none;">${product.howToUse}</div>

          <div style="display:flex; gap:12px; flex-wrap:wrap;">
            <button type="button" class="btn-add" style="padding:12px 22px;" onclick="addToCart(${product.id}, 1, false)">+ Add to My Cart</button>
            <button type="button" class="btn-primary" style="padding:12px 26px;" onclick="addToCart(${product.id}, 1, true)">Order Now (Cash on Delivery)</button>
          </div>
        </div>
      </div>

      <!-- Verified Customer Reviews -->
      <div class="reviews-box">
        <h3 style="color:var(--emerald-dark); margin-bottom:12px;">Customer Reviews (${allReviews.length})</h3>
        <div>
          ${
            allReviews.length === 0
              ? `<p style="font-size:13px; color:var(--text-muted); margin-bottom:12px;">Be the first to review this product!</p>`
              : allReviews
                  .map(
                    (r) => `
                  <div class="review-item">
                    <strong>${r.user}</strong> <span style="color:#d49b35;">★★★★★</span>
                    <p style="margin-top:4px; color:var(--text-muted);">${r.text}</p>
                  </div>
                `
                  )
                  .join("")
          }
        </div>

        <form onsubmit="submitProductReview(event, ${product.id})" style="margin-top:14px; display:flex; gap:8px; flex-wrap:wrap;">
          <input type="text" id="revReviewerName" required placeholder="Your Name" style="padding:9px; border:1px solid var(--border-color); border-radius:6px; flex:1;" />
          <input type="text" id="revReviewerText" required placeholder="Write your experience..." style="padding:9px; border:1px solid var(--border-color); border-radius:6px; flex:2;" />
          <button type="submit" class="btn-primary">Post Review</button>
        </form>
      </div>
    </div>
  `;
}

function submitProductReview(e, productId) {
  e.preventDefault();
  const user = document.getElementById("revReviewerName").value.trim();
  const text = document.getElementById("revReviewerText").value.trim();
  const saved = JSON.parse(localStorage.getItem(`zelviqo_rev_${productId}`) || "[]");
  saved.push({ user, rating: 5, text });
  localStorage.setItem(`zelviqo_rev_${productId}`, JSON.stringify(saved));
  renderFullProductPage(productId);
}

function switchProductTab(tabKey, btnEl) {
  document.querySelectorAll(".d-tab-btn").forEach((b) => b.classList.remove("active"));
  btnEl.classList.add("active");
  document.getElementById("tab-desc").style.display = tabKey === "desc" ? "block" : "none";
  document.getElementById("tab-ing").style.display = tabKey === "ing" ? "block" : "none";
  document.getElementById("tab-use").style.display = tabKey === "use" ? "block" : "none";
}

// ================= BUILD YOUR OWN COMBO (15% OFF) =================
function initCustomComboBuilder() {
  const cleansers = products.filter((p) => p.category === "cleanser");
  const serums = products.filter((p) => p.category === "serum");
  const sunscreens = products.filter((p) => p.category === "sunscreen");

  document.getElementById("buildStep1").innerHTML = cleansers
    .map((p) => `<option value="${p.id}">${p.name} (৳${p.salePrice})</option>`)
    .join("");
  document.getElementById("buildStep2").innerHTML = serums
    .map((p) => `<option value="${p.id}">${p.name} (৳${p.salePrice})</option>`)
    .join("");
  document.getElementById("buildStep3").innerHTML = sunscreens
    .map((p) => `<option value="${p.id}">${p.name} (৳${p.salePrice})</option>`)
    .join("");

  calculateCustomCombo();
}

function calculateCustomCombo() {
  const p1 = products.find((p) => p.id === Number(document.getElementById("buildStep1").value));
  const p2 = products.find((p) => p.id === Number(document.getElementById("buildStep2").value));
  const p3 = products.find((p) => p.id === Number(document.getElementById("buildStep3").value));
  if (!p1 || !p2 || !p3) return;

  const regSum = p1.salePrice + p2.salePrice + p3.salePrice;
  const discountedSum = Math.round(regSum * 0.85);
  document.getElementById("comboRegPrice").textContent = `৳${regSum}`;
  document.getElementById("comboOfferPrice").textContent = `৳${discountedSum}`;
}

function addCustomComboToCart() {
  const ids = [
    Number(document.getElementById("buildStep1").value),
    Number(document.getElementById("buildStep2").value),
    Number(document.getElementById("buildStep3").value)
  ];
  ids.forEach((id) => addToCart(id, 1, false));
  appliedDiscountPercent = 15;
  openCartDrawer();
}

// ================= SKIN TYPE QUIZ =================
function generateQuizResult() {
  const concern = document.getElementById("quizConcern").value;
  const matched = products.filter((p) => p.concern === concern || p.category === "sunscreen").slice(0, 3);

  document.getElementById("quizResultsArea").innerHTML = `
    <h3 style="color:var(--emerald-dark); margin-bottom:12px;">✨ Your Recommended Routine:</h3>
    <div class="product-grid" id="quizResultGrid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));"></div>
  `;
  renderProductCards("quizResultGrid", matched);
}

// ================= MY CART WITH BUILT-IN DELIVERY CHARGE CALCULATOR =================
function addToCart(productId, qty = 1, openCheckoutImmediately = false) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  const existing = cart.find((c) => c.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  updateCartUI();

  if (openCheckoutImmediately) {
    openCheckoutModal();
  } else {
    openCartDrawer();
  }
}

function changeQty(productId, delta) {
  const idx = cart.findIndex((c) => c.id === productId);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCartUI();
}

function setCartDeliveryZone(charge) {
  cartDeliveryCharge = charge;
  document.getElementById("zoneDhakaBtn").classList.toggle("active", charge === 70);
  document.getElementById("zoneOutsideBtn").classList.toggle("active", charge === 130);
  document.getElementById("deliveryArea").value = String(charge);
  updateCartUI();
}

function getSubtotal() {
  return cart.reduce((sum, item) => sum + item.salePrice * item.qty, 0);
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = getSubtotal();
  const actualDelivery = subtotal === 0 ? 0 : subtotal >= 2000 ? 0 : cartDeliveryCharge;
  const grandTotal = subtotal + actualDelivery;

  document.getElementById("cartCount").textContent = totalItems;
  document.getElementById("bottomCartCount").textContent = totalItems;
  document.getElementById("headerBagTotal").textContent = `৳${grandTotal}`;
  document.getElementById("cartSubtotal").textContent = `৳${subtotal}`;
  document.getElementById("cartDeliveryFee").textContent =
    subtotal >= 2000 && subtotal > 0 ? "FREE (৳0)" : `৳${actualDelivery}`;
  document.getElementById("cartGrandTotal").textContent = `৳${grandTotal}`;

  const target = 2000;
  const pct = Math.min(100, Math.round((subtotal / target) * 100));
  document.getElementById("freeShipProgress").style.width = `${pct}%`;
  document.getElementById("freeShipText").innerHTML =
    subtotal >= target
      ? `🎉 You unlocked <strong>FREE Home Delivery</strong>!`
      : `Add <strong>৳${target - subtotal}</strong> more for <strong>FREE Delivery</strong>!`;

  const container = document.getElementById("cartItemsContainer");
  if (cart.length === 0) {
    container.innerHTML = `<p class="empty-msg">Your cart is currently empty.</p>`;
    return;
  }

  container.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div style="flex:1;">
          <div style="font-size:13px; font-weight:600;">${item.name}</div>
          <div style="font-size:13px; font-weight:700; color:#0c2b21;">৳${item.salePrice} &times; ${item.qty}</div>
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

const cartDrawer = document.getElementById("cartDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");

function openCartDrawer() {
  cartDrawer.classList.add("open");
  drawerBackdrop.classList.add("open");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  drawerBackdrop.classList.remove("open");
}

document.getElementById("openCartBtn").addEventListener("click", openCartDrawer);
document.getElementById("closeCartBtn").addEventListener("click", closeCartDrawer);
drawerBackdrop.addEventListener("click", closeCartDrawer);

// ================= CHECKOUT & DIGITAL INVOICE RECEIPT =================
const checkoutModal = document.getElementById("checkoutModal");
const deliveryAreaSelect = document.getElementById("deliveryArea");

function openCheckoutModal() {
  if (cart.length === 0) {
    alert("Please add at least one product to your cart first.");
    return;
  }
  closeCartDrawer();
  deliveryAreaSelect.value = String(cartDeliveryCharge);

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
    msgEl.textContent = "✓ 10% Promo Discount Applied!";
    msgEl.style.color = "#157347";
  } else {
    appliedDiscountPercent = 0;
    msgEl.textContent = "Invalid code. Try GLOW10.";
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

document.getElementById("proceedCheckoutBtn").addEventListener("click", openCheckoutModal);
document.getElementById("closeModalBtn").addEventListener("click", () => checkoutModal.classList.remove("open"));
deliveryAreaSelect.addEventListener("change", () => {
  setCartDeliveryZone(Number(deliveryAreaSelect.value));
  updateModalTotals();
});

document.getElementById("codOrderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const address = document.getElementById("custAddress").value.trim();
  const subtotal = getSubtotal();
  const discountAmount = Math.round((subtotal * appliedDiscountPercent) / 100);
  const afterDiscount = subtotal - discountAmount;
  const shipping = afterDiscount >= 2000 ? 0 : Number(deliveryAreaSelect.value);
  const total = afterDiscount + shipping;

  const orderId = String(Math.floor(100000 + Math.random() * 900000));
  const itemsListText = cart.map((i) => `${i.name} (x${i.qty}) - ৳${i.salePrice * i.qty}`).join("\n");
  const itemsSummary = cart.map((i) => `${i.name} (x${i.qty})`).join(", ");

  const allOrders = JSON.parse(localStorage.getItem("zelviqo_orders") || "[]");
  allOrders.unshift({
    orderId,
    name,
    phone,
    address,
    total,
    itemsSummary,
    date: new Date().toLocaleDateString("en-GB"),
    status: "Confirmed & Processing"
  });
  localStorage.setItem("zelviqo_orders", JSON.stringify(allOrders));

  // Build WhatsApp Order Slip URL
  const waMsg = encodeURIComponent(
    `*NEW ORDER - ZELVIQO LUXURY SKIN CARE*\nOrder ID: #${orderId}\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\n\n*Items:*\n${itemsListText}\n\nDelivery: ৳${shipping}\n*Total Payable (COD): ৳${total}*`
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;

  // Show Digital Invoice Receipt Modal
  document.getElementById("invoiceReceiptBody").innerHTML = `
    <div style="border:1px dashed var(--emerald-main); padding:14px; border-radius:8px; background:var(--bg-page); margin-bottom:14px;">
      <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
        <strong>Invoice #${orderId}</strong>
        <span>${new Date().toLocaleDateString("en-GB")}</span>
      </div>
      <p style="font-size:13px;"><strong>Customer:</strong> ${name} (${phone})</p>
      <p style="font-size:13px; margin-bottom:8px;"><strong>Address:</strong> ${address}</p>
      <div style="font-size:12.5px; border-top:1px solid var(--border-color); padding-top:8px;">
        ${itemsSummary}
      </div>
      <div style="font-size:15px; font-weight:700; color:var(--emerald-dark); margin-top:10px; border-top:1px solid var(--border-color); padding-top:8px;">
        Total Payable (COD): ৳${total}
      </div>
    </div>
    <a href="${waLink}" target="_blank" rel="noopener" class="btn-primary full-width" style="background:#25d366; text-decoration:none; display:block; margin-bottom:8px;">📲 Send Order Slip to WhatsApp</a>
    <button type="button" class="btn-add full-width" onclick="window.print()">🖨️ Print / Save Invoice</button>
  `;

  cart = [];
  appliedDiscountPercent = 0;
  updateCartUI();
  e.target.reset();
  checkoutModal.classList.remove("open");
  document.getElementById("invoiceModal").classList.add("open");
});

// ================= SMART WHATSAPP CHAT WIDGET =================
function toggleWaBox() {
  document.getElementById("waChatBox").classList.toggle("open");
}

function sendPresetWa(text) {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
}

function sendCustomWa() {
  const input = document.getElementById("waCustomMsg");
  const msg = input.value.trim();
  if (!msg) return;
  input.value = "";
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}

// ================= MOVING SHOWCASE & LIVE SEARCH =================
function renderMovingShowcase() {
  const track = document.getElementById("movingProductTrack");
  const loopItems = [...products, ...products];
  track.innerHTML = loopItems
    .map(
      (p) => `
      <div class="marquee-chip" onclick="navigateTo('product', ${p.id})">
        <img src="${p.image}" alt="${p.name}" />
        <span>${p.name.split(" ").slice(0, 4).join(" ")}</span>
        <strong>৳${p.salePrice}</strong>
      </div>
    `
    )
    .join("");
}

const searchInput = document.getElementById("searchInput");
const searchDropdown = document.getElementById("searchDropdown");

searchInput.addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  if (!q) {
    searchDropdown.classList.remove("open");
    return;
  }
  const hits = products.filter((p) => p.name.toLowerCase().includes(q) || p.categoryLabel.toLowerCase().includes(q));
  searchDropdown.innerHTML =
    hits.length === 0
      ? `<div style="padding:12px; font-size:13px;">No matching products found.</div>`
      : hits
          .map(
            (h) => `
          <div class="search-hit" onclick="navigateTo('product', ${h.id}); searchDropdown.classList.remove('open');">
            <img src="${h.image}" alt="${h.name}" />
            <div>
              <div style="font-size:13px; font-weight:600;">${h.name}</div>
              <div style="font-size:12px; font-weight:700; color:#0c2b21;">৳${h.salePrice}</div>
            </div>
          </div>
        `
          )
          .join("");
  searchDropdown.classList.add("open");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-wrapper")) searchDropdown.classList.remove("open");
});

// ================= PROFILE & ORDER TRACKING =================
function getUsers() {
  return JSON.parse(localStorage.getItem("zelviqo_users") || "[]");
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("zelviqo_current_user") || "null");
}

function setCurrentUser(user) {
  if (user) localStorage.setItem("zelviqo_current_user", JSON.stringify(user));
  else localStorage.removeItem("zelviqo_current_user");
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

function renderProfilePage() {
  const user = getCurrentUser();
  const authSec = document.getElementById("profileAuthSection");
  const dashSec = document.getElementById("profileDashboardSection");

  if (user) {
    authSec.style.display = "none";
    dashSec.style.display = "block";
    document.getElementById("profileDisplayName").textContent = user.name;
    document.getElementById("profileDisplayPhone").textContent = user.phone;
    document.getElementById("profileBigAvatar").textContent = user.name.charAt(0).toUpperCase();
    document.getElementById("profileEditAddress").value = user.address || "";

    const allOrders = JSON.parse(localStorage.getItem("zelviqo_orders") || "[]");
    const myOrders = allOrders.filter((o) => o.phone === user.phone);
    document.getElementById("userOrderHistoryList").innerHTML =
      myOrders.length === 0
        ? `<p style="font-size:13px; color:#5e6963;">No orders placed from this account yet.</p>`
        : myOrders
            .map(
              (o) => `
            <div class="history-item">
              <strong>Order #${o.orderId} — ৳${o.total}</strong>
              <div>${o.itemsSummary}</div>
              <small style="color:#666;">${o.date} • ${o.status}</small>
            </div>
          `
            )
            .join("");
  } else {
    authSec.style.display = "block";
    dashSec.style.display = "none";
  }
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
  alert("Saved!");
}

function logoutUser() {
  setCurrentUser(null);
  renderProfilePage();
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
  renderProfilePage();
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
  renderProfilePage();
});

function searchOrderTracking() {
  const query = document.getElementById("trackInput").value.trim();
  const box = document.getElementById("trackResultBox");
  if (!query) return;

  const allOrders = JSON.parse(localStorage.getItem("zelviqo_orders") || "[]");
  const found = allOrders.filter((o) => o.phone === query || o.orderId === query);

  if (found.length === 0) {
    box.innerHTML = `<div style="padding:14px; background:#fbeaea; color:#a62c2c; border-radius:8px; font-size:13.5px;">No order found for "${query}".</div>`;
    return;
  }

  box.innerHTML = found
    .map(
      (o) => `
      <div style="padding:14px; background:var(--emerald-soft); border:1px solid #bfd4cb; border-radius:8px; margin-bottom:10px;">
        <div style="display:flex; justify-content:space-between; font-weight:700; color:var(--emerald-dark);">
          <span>Order #${o.orderId}</span>
          <span>৳${o.total}</span>
        </div>
        <div style="font-size:13px; margin:4px 0;">${o.itemsSummary}</div>
        <div style="font-size:12px; color:var(--emerald-main); font-weight:700;">Status: ${o.status} (${o.date})</div>
      </div>
    `
    )
    .join("");
}

// ================= FLASH SALE TIMER & SOCIAL PROOF TOAST =================
let countdownSeconds = 5 * 3600 + 42 * 60 + 19;
setInterval(() => {
  if (countdownSeconds > 0) countdownSeconds--;
  const h = String(Math.floor(countdownSeconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((countdownSeconds % 3600) / 60)).padStart(2, "0");
  const s = String(countdownSeconds % 60).padStart(2, "0");
  document.getElementById("timerHours").textContent = h;
  document.getElementById("timerMins").textContent = m;
  document.getElementById("timerSecs").textContent = s;
}, 1000);

const recentOrdersSample = [
  "Sadia (Dhanmondi) just ordered Vitamin C Serum",
  "Nusrat (Uttara) just ordered Day-Glow Combo Set",
  "Rafi (Mirpur 10) just ordered SPF 50+ Sunscreen",
  "Mitu (Chattogram) just ordered Niacinamide 10% Serum"
];
let toastIdx = 0;
setInterval(() => {
  const toast = document.getElementById("liveOrderToast");
  document.getElementById("liveToastText").textContent = recentOrdersSample[toastIdx % recentOrdersSample.length];
  toast.classList.add("show");
  toastIdx++;
  setTimeout(() => toast.classList.remove("show"), 4000);
}, 14000);

// Initialize Everything
updateHeaderAuthUI();
updateCartUI();
renderMovingShowcase();
navigateTo("home", null, false);
