const WHATSAPP_NUMBER = "8801860821074";
const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwjqxcIDPSqAQSOzNXamFNI9osBzSCqoo433-pMoipL5hDY7B8SWeXAPiVVwmBzKFVx/exec";

function trackMetaEvent(eventName, payload = {}) {
  if (typeof window.fbq === "function") window.fbq("track", eventName, payload);
}

const translations = {
  en: {
    topNotice: "100% Authentic Imported Skincare &bull; Use Code <strong>GLOW10</strong> for 10% Extra Off",
    searchBtn: "Search",
    myCart: "My Cart",
    menuMain: "EXPLORE STORE",
    menuCats: "SKINCARE CATEGORIES",
    menuSupport: "CLIENT SERVICES",
    navHome: "Home (Top 12 Hits)",
    navAll: "All Skincare Products (16)",
    navBuilder: "Build Your Combo (15% Off)",
    navQuiz: "Skin Consultation Quiz",
    navGuide: "Daily Routine Guide",
    navProfile: "My Profile & Glow Points",
    navTrack: "Track Your Parcel",
    navAbout: "About ZELVIQO",
    navPolicy: "Delivery & Return Policy",
    navContact: "Contact Concierge",
    flashText: "Up to 27% Off on Authentic Serums & Value Combos",
    endsIn: "Ends in:",
    shopByCat: "Shop by Skincare Category",
    viewAll: "Browse All 16 Products →",
    popularTitle: "Top 12 Most-Loved Bestsellers"
  },
  bn: {
    topNotice: "১০০% অরিজিনাল ইমপোর্টেড স্কিনকেয়ার &bull; <strong>GLOW10</strong> কোডে ১০% অতিরিক্ত ছাড়",
    searchBtn: "খুঁজুন",
    myCart: "আমার কার্ট",
    menuMain: "স্টোর মেনু",
    menuCats: "স্কিনকেয়ার ক্যাটাগরি",
    menuSupport: "কাস্টমার সার্ভিস",
    navHome: "হোম পেজ (সেরা ১২টি প্রোডাক্ট)",
    navAll: "সব স্কিনকেয়ার প্রোডাক্ট (১৬টি)",
    navBuilder: "নিজের কম্বো বানান (১৫% ছাড়)",
    navQuiz: "স্কিন কনসালটেশন কুইজ",
    navGuide: "দৈনিক স্কিনকেয়ার গাইড",
    navProfile: "আমার প্রোফাইল ও পয়েন্ট",
    navTrack: "অর্ডার ট্র্যাক করুন",
    navAbout: "আমাদের সম্পর্কে (About Us)",
    navPolicy: "ডেলিভারি ও রিটার্ন পলিসি",
    navContact: "যোগাযোগ করুন",
    flashText: "অরিজিনাল সিরাম ও কম্বো প্যাকে ২৭% পর্যন্ত ছাড়",
    endsIn: "অফার শেষ হতে বাকি:",
    shopByCat: "ক্যাটাগরি অনুযায়ী কিনুন",
    viewAll: "সব ১৬টি প্রোডাক্ট দেখুন →",
    popularTitle: "সেরা ১২টি হিট স্কিনকেয়ার প্রোডাক্ট"
  }
};

let currentLang = "en";

const categoryMeta = {
  all: { title: "All Skincare Products", desc: "Complete collection of 100% authentic imported skincare across all categories." },
  cleanser: { title: "Face Wash & Gentle Cleansers", desc: "Soap-free, pH-balanced face washes to purify pores without drying skin." },
  toner: { title: "Hydrating Toners & Essences", desc: "Soothing pH-balancing toners & essences for deep hydration and barrier prep." },
  serum: { title: "Targeted Face Serums", desc: "Concentrated Vitamin C, Niacinamide & Alpha Arbutin serums for visible glow." },
  moisturizer: { title: "Moisturizers & Night Gels", desc: "Deep barrier-repair hydration for soft, plump, healthy-looking skin." },
  sunscreen: { title: "Sunscreen SPF 50+ PA+++", desc: "Lightweight, zero-white-cast sun protection tailored for Bangladeshi weather." },
  combo: { title: "Curated Value Combo Sets", desc: "Complete multi-step skincare bundles with extra savings." }
};

// 16 Products Total: Top 12 have isHit: true (Shown on Homepage), All 16 shown inside Categories
const defaultProducts = [
  {
    id: 1,
    isHit: true,
    name: "Dr. Rashel Vitamin C Brightening & Anti-Aging Face Serum",
    category: "serum",
    categoryLabel: "Face Serum",
    concern: "brightening",
    volume: "50ml",
    skinType: "All Skin Types",
    regularPrice: 850,
    salePrice: 650,
    inStock: true,
    image: "product-1.jpg",
    gallery: ["product-1.jpg", "product-11.jpg"],
    description: "Fast-absorbing daily antioxidant serum infused with pure Vitamin C and Hyaluronic Acid to fade dullness and give a luminous glass-skin glow.",
    ingredients: "Aqua, Ascorbic Acid (Vitamin C), Hyaluronic Acid, Niacinamide, Glycerin.",
    howToUse: "Apply 3–4 drops on clean face and neck every morning and night before moisturizer.",
    reviews: [{ user: "Nusrat Jahan (Uttara)", text: "100% original product! Within 2 weeks my skin looks noticeably brighter." }]
  },
  {
    id: 2,
    isHit: true,
    name: "Care & Repair UV Defense Sunscreen SPF 50+ PA+++",
    category: "sunscreen",
    categoryLabel: "Sunscreen",
    concern: "darkspot",
    volume: "60ml",
    skinType: "Oily, Combination & Normal",
    regularPrice: 950,
    salePrice: 740,
    inStock: true,
    image: "product-2.jpg",
    gallery: ["product-2.jpg", "product-8.jpg"],
    description: "Specially formulated for humid Bangladeshi weather. Shields skin from UVA/UVB rays with zero white cast and zero stickiness.",
    ingredients: "Zinc Oxide, Titanium Dioxide, Centella Asiatica Extract, Panthenol (Vitamin B5).",
    howToUse: "Apply generously across face and neck 15 minutes before sun exposure.",
    reviews: [{ user: "Tania Rahman (Dhanmondi)", text: "Zero white cast and never feels oily even in Dhaka heat." }]
  },
  {
    id: 3,
    isHit: true,
    name: "Simple Kind to Skin Refreshing Facial Wash",
    category: "cleanser",
    categoryLabel: "Face Wash & Cleanser",
    concern: "hydration",
    volume: "150ml",
    skinType: "Sensitive & All Skin Types",
    regularPrice: 720,
    salePrice: 560,
    inStock: true,
    image: "product-3.jpg",
    gallery: ["product-3.jpg", "product-5.jpg"],
    description: "100% soap-free, fragrance-free gentle face wash enriched with Pro-Vitamin B5 and Vitamin E to cleanse impurities without irritation.",
    ingredients: "Aqua, Cocamidopropyl Betaine, Panthenol (Pro-Vitamin B5), Tocopheryl Acetate (Vitamin E).",
    howToUse: "Lather a small amount in hands, massage gently onto wet skin, and rinse thoroughly.",
    reviews: [{ user: "Maliha Chowdhury (Mirpur)", text: "Best daily face wash! Leaves skin clean and never feels tight." }]
  },
  {
    id: 4,
    isHit: true,
    name: "Niacinamide 10% + Zinc Pore Refining Glow Serum",
    category: "serum",
    categoryLabel: "Face Serum",
    concern: "acne",
    volume: "30ml",
    skinType: "Oily & Acne-Prone",
    regularPrice: 1100,
    salePrice: 890,
    inStock: true,
    image: "product-4.jpg",
    gallery: ["product-4.jpg", "product-1.jpg"],
    description: "High-strength 10% Niacinamide balanced with Zinc PCA to control excess sebum, minimize pores, and calm active breakouts.",
    ingredients: "Niacinamide (10%), Zinc PCA (1%), Tamarindus Indica Seed Gum, Pentylene Glycol.",
    howToUse: "Dispense 2–3 drops onto fingertips and gently pat into skin after cleansing.",
    reviews: [{ user: "Sadia Islam (Banani)", text: "Controlled my excess oil and minimized pores noticeably." }]
  },
  {
    id: 5,
    isHit: true,
    name: "Ceramide & Hyaluronic Gentle Hydrating Cleanser",
    category: "cleanser",
    categoryLabel: "Face Wash & Cleanser",
    concern: "hydration",
    volume: "150ml",
    skinType: "Dry & Sensitive",
    regularPrice: 780,
    salePrice: 620,
    inStock: true,
    image: "product-5.jpg",
    gallery: ["product-5.jpg", "product-3.jpg"],
    description: "Barrier-supporting daily cleanser with 3 essential Ceramides and Hyaluronic Acid to lift away dirt while locking in moisture.",
    ingredients: "Ceramide NP, Ceramide AP, Ceramide EOP, Sodium Hyaluronate, Glycerin.",
    howToUse: "Massage onto wet face for 30 seconds, then rinse thoroughly with water.",
    reviews: []
  },
  {
    id: 6,
    isHit: true,
    name: "Rosewater & Niacinamide Hydrating Glow Toner",
    category: "toner",
    categoryLabel: "Toner & Essence",
    concern: "brightening",
    volume: "150ml",
    skinType: "All Skin Types",
    regularPrice: 820,
    salePrice: 650,
    inStock: true,
    image: "product-6.jpg",
    gallery: ["product-6.jpg", "product-13.jpg"],
    description: "Alcohol-free soothing toner distilled from Damascus rose petals and Niacinamide to tighten pores and prep skin for serums.",
    ingredients: "Rosa Damascena Flower Water, Niacinamide, Panthenol, Sodium Hyaluronate.",
    howToUse: "Apply with a cotton pad or pat directly onto clean face after washing.",
    reviews: []
  },
  {
    id: 7,
    isHit: true,
    name: "24K Gold & Rosewater Barrier Repair Gel Moisturizer",
    category: "moisturizer",
    categoryLabel: "Moisturizer & Night Gel",
    concern: "hydration",
    volume: "100g",
    skinType: "All Skin Types",
    regularPrice: 1250,
    salePrice: 980,
    inStock: true,
    image: "product-7.jpg",
    gallery: ["product-7.jpg", "product-14.jpg"],
    description: "Cooling water-gel moisturizer infused with Damascus rosewater and micro-gold peptides that locks in 24-hour hydration.",
    ingredients: "Rosa Damascena Flower Water, Colloidal Gold, Betaine, Allantoin, Sodium Hyaluronate.",
    howToUse: "Massage gently onto face and neck as the final step of your routine.",
    reviews: []
  },
  {
    id: 8,
    isHit: true,
    name: "Ultra-Light Invisible Matte Aqua Sun Gel SPF 50+",
    category: "sunscreen",
    categoryLabel: "Sunscreen",
    concern: "acne",
    volume: "50ml",
    skinType: "Oily & Sensitive",
    regularPrice: 1050,
    salePrice: 850,
    inStock: true,
    image: "product-8.jpg",
    gallery: ["product-8.jpg", "product-2.jpg"],
    description: "Water-light aqua gel sunscreen that melts into skin in seconds with a soft-matte finish.",
    ingredients: "Ethylhexyl Methoxycinnamate, Niacinamide, Green Tea Leaf Extract, Madecassoside.",
    howToUse: "Apply two fingers' worth evenly over face every morning.",
    reviews: []
  },
  {
    id: 9,
    isHit: true,
    name: "Alpha Arbutin 2% Dark Spot Corrector Night Serum",
    category: "serum",
    categoryLabel: "Face Serum",
    concern: "darkspot",
    volume: "30ml",
    skinType: "All Skin Types",
    regularPrice: 1150,
    salePrice: 920,
    inStock: true,
    image: "product-9.jpg",
    gallery: ["product-9.jpg", "product-4.jpg"],
    description: "Concentrated 2% Alpha Arbutin night treatment designed to target stubborn sunspots, acne marks, and hyperpigmentation.",
    ingredients: "Alpha-Arbutin (2%), Hydrolyzed Hyaluronic Acid, Lactic Acid, Ferulic Acid.",
    howToUse: "Apply 3 drops to clean skin at night before moisturizer.",
    reviews: []
  },
  {
    id: 10,
    isHit: true,
    name: "Salicylic Acid 2% Anti-Acne Pore Clearing Face Wash",
    category: "cleanser",
    categoryLabel: "Face Wash & Cleanser",
    concern: "acne",
    volume: "120ml",
    skinType: "Oily & Acne-Prone",
    regularPrice: 790,
    salePrice: 640,
    inStock: true,
    image: "product-10.jpg",
    gallery: ["product-10.jpg", "product-3.jpg"],
    description: "Deep-cleansing BHA foaming face wash that unclogs blackheads, reduces excess oil, and prevents future acne breakouts.",
    ingredients: "Salicylic Acid (2%), Tea Tree Leaf Oil, Centella Asiatica, Glycerin.",
    howToUse: "Use morning and night; massage gently onto damp skin for 30 seconds and rinse.",
    reviews: []
  },
  {
    id: 11,
    isHit: true,
    name: "ZELVIQO Complete Day-Glow Duo (Vitamin C + SPF 50+)",
    category: "combo",
    categoryLabel: "Combo Set",
    concern: "brightening",
    volume: "50ml + 60ml Set",
    skinType: "All Skin Types",
    regularPrice: 1800,
    salePrice: 1320,
    inStock: true,
    image: "product-11.jpg",
    gallery: ["product-11.jpg", "product-1.jpg", "product-2.jpg"],
    description: "Our bestselling morning protection and glow bundle pairing Dr. Rashel Vitamin C Serum with Care & Repair SPF 50+ Sunscreen.",
    ingredients: "Full-Size Vitamin C Serum (50ml) + Care & Repair UV Defense Sunscreen (60ml).",
    howToUse: "Step 1: Apply Vitamin C Serum. Step 2: Lock it in with SPF 50+ Sunscreen.",
    reviews: []
  },
  {
    id: 12,
    isHit: true,
    name: "Glass-Skin 3-Step Routine (Face Wash + Serum + Sunscreen)",
    category: "combo",
    categoryLabel: "Combo Set",
    concern: "brightening",
    volume: "Full 3-Product Kit",
    skinType: "All Skin Types",
    regularPrice: 2520,
    salePrice: 1890,
    inStock: true,
    image: "product-12.jpg",
    gallery: ["product-12.jpg", "product-3.jpg", "product-1.jpg"],
    description: "Complete daily morning glow set including Simple Facial Wash, Vitamin C Brightening Serum, and SPF 50+ PA+++ Sunscreen.",
    ingredients: "Simple Facial Wash (150ml) + Dr. Rashel Vitamin C Serum (50ml) + SPF 50+ Sunscreen (60ml).",
    howToUse: "Cleanse with Face Wash, apply Vitamin C Serum, and finish with SPF 50+ Sunscreen.",
    reviews: []
  },
  // Additional 4 Category-Exclusive Products (Shown inside Categories & Search)
  {
    id: 13,
    isHit: false,
    name: "Centella Asiatica Calming & Soothing Face Toner",
    category: "toner",
    categoryLabel: "Toner & Essence",
    concern: "acne",
    volume: "120ml",
    skinType: "Sensitive & Acne-Prone",
    regularPrice: 890,
    salePrice: 710,
    inStock: true,
    image: "product-13.jpg",
    gallery: ["product-13.jpg", "product-6.jpg"],
    description: "Ultra-gentle Centella Cica toner that calms redness, strengthens sensitive skin barrier, and restores optimal pH balance.",
    ingredients: "Centella Asiatica Extract, Madecassoside, Panthenol, Allantoin.",
    howToUse: "Pat gently onto skin right after cleansing.",
    reviews: []
  },
  {
    id: 14,
    isHit: false,
    name: "Hyaluronic Acid Deep Moisture Barrier Night Cream",
    category: "moisturizer",
    categoryLabel: "Moisturizer & Night Gel",
    concern: "hydration",
    volume: "50g",
    skinType: "Dry & Normal",
    regularPrice: 1180,
    salePrice: 940,
    inStock: true,
    image: "product-14.jpg",
    gallery: ["product-14.jpg", "product-7.jpg"],
    description: "Rich yet non-comedogenic overnight recovery cream formulated with multi-molecular Hyaluronic Acid and Shea Butter.",
    ingredients: "Sodium Hyaluronate, Ceramide NP, Squalane, Butyrospermum Parkii Butter.",
    howToUse: "Apply evenly to face and neck every night before sleep.",
    reviews: []
  },
  {
    id: 15,
    isHit: false,
    name: "Snail Mucin 96% Power Repair Hydrating Essence",
    category: "toner",
    categoryLabel: "Toner & Essence",
    concern: "darkspot",
    volume: "100ml",
    skinType: "All Skin Types",
    regularPrice: 1450,
    salePrice: 1190,
    inStock: true,
    image: "product-15.jpg",
    gallery: ["product-15.jpg", "product-6.jpg"],
    description: "Lightweight, fast-absorbing essence with 96% Snail Secretion Filtrate to repair damaged skin texture and boost elasticity.",
    ingredients: "Snail Secretion Filtrate (96%), Betaine, Sodium Hyaluronate, Panthenol.",
    howToUse: "Apply 2 pumps after toner and pat gently until fully absorbed.",
    reviews: []
  },
  {
    id: 16,
    isHit: false,
    name: "Acne & Oil Control Complete 3-Step Clear Skin Kit",
    category: "combo",
    categoryLabel: "Combo Set",
    concern: "acne",
    volume: "3-Product Set",
    skinType: "Oily & Acne-Prone",
    regularPrice: 2940,
    salePrice: 2150,
    inStock: true,
    image: "product-16.jpg",
    gallery: ["product-16.jpg", "product-10.jpg", "product-4.jpg"],
    description: "Targeted anti-acne bundle combining Salicylic Acid Face Wash, Niacinamide 10% Serum, and Matte Aqua Sun Gel SPF 50+.",
    ingredients: "Salicylic Acid Face Wash + Niacinamide 10% Serum + Aqua Sun Gel SPF 50+.",
    howToUse: "Cleanse with Salicylic Face Wash, apply Niacinamide Serum, and protect with Aqua Sun Gel.",
    reviews: []
  }
];

function getProducts() {
  return JSON.parse(localStorage.getItem("zelviqo_catalog_v2") || "null") || defaultProducts;
}

function saveProducts(list) {
  localStorage.setItem("zelviqo_catalog_v2", JSON.stringify(list));
}

function getHitProducts() {
  const all = getProducts();
  const hits = all.filter((p) => p.isHit !== false);
  return hits.slice(0, 12);
}

let cart = [];
let wishlist = JSON.parse(localStorage.getItem("zelviqo_wishlist") || "[]");
let recentlyViewed = JSON.parse(localStorage.getItem("zelviqo_recent") || "[]");
let currentCategory = "all";
let cartDeliveryCharge = 70;
let appliedDiscountPercent = 0;
let selectedPaymentMethod = "COD";

// Language Switcher
function toggleLanguage() {
  currentLang = currentLang === "en" ? "bn" : "en";
  const dict = translations[currentLang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.innerHTML = dict[key];
  });
}

// Multi-Page Router
function navigateTo(pageName, param = null, pushState = true) {
  closeMenuDrawer();
  document.querySelectorAll(".page-view").forEach((v) => v.classList.remove("active"));
  const target = document.getElementById(`page-${pageName}`);
  if (target) target.classList.add("active");

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
    renderProductCards("homeProductGrid", getHitProducts());
    renderRecentlyViewed();
    renderWatchAndShopReels();
  } else if (pageName === "category") {
    currentCategory = param || "all";
    const meta = categoryMeta[currentCategory] || categoryMeta.all;
    document.getElementById("catBreadcrumbName").textContent = meta.title;
    document.getElementById("catPageTitle").textContent = meta.title;
    document.getElementById("catPageDesc").textContent = meta.desc;
    document.querySelectorAll(".c-tab").forEach((t) => t.classList.toggle("active", t.dataset.cat === currentCategory));
    renderCategoryPageProducts();
  } else if (pageName === "product") {
    renderFullProductPage(Number(param) || 1);
  } else if (pageName === "builder") {
    initCustomComboBuilder();
  } else if (pageName === "profile") {
    renderProfilePage();
  } else if (pageName === "admin") {
    renderAdminDashboard();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  if (pushState) {
    history.pushState({ pageName, param }, "", param ? `#${pageName}/${param}` : `#${pageName}`);
  }
}

window.addEventListener("popstate", (e) => {
  if (e.state && e.state.pageName) navigateTo(e.state.pageName, e.state.param, false);
  else navigateTo("home", null, false);
});

// 3-Line Menu Drawer
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

// Wishlist
function toggleWishlist(productId) {
  const idx = wishlist.indexOf(productId);
  if (idx === -1) wishlist.push(productId);
  else wishlist.splice(idx, 1);
  localStorage.setItem("zelviqo_wishlist", JSON.stringify(wishlist));
  updateWishlistUI();
  renderProductCards("homeProductGrid", getHitProducts());
  renderCategoryPageProducts();
}

function updateWishlistUI() {
  document.getElementById("wishlistCount").textContent = wishlist.length;
  const container = document.getElementById("wishlistItemsContainer");
  const saved = getProducts().filter((p) => wishlist.includes(p.id));
  container.innerHTML =
    saved.length === 0
      ? `<p style="font-size:13.5px; color:var(--text-muted); text-align:center; padding:24px 0;">Your wishlist is empty. Tap the heart icon on any product to save it.</p>`
      : saved
          .map(
            (p) => `
          <div class="cart-item">
            <img src="${p.image}" alt="${p.name}" />
            <div style="flex:1;">
              <div style="font-size:13px; font-weight:600;">${p.name}</div>
              <div style="font-size:13px; font-weight:700; color:#0c2b21;">৳${p.salePrice}</div>
              <div style="margin-top:6px; display:flex; gap:6px;">
                <button type="button" class="btn-gold-sm" onclick="addToCart(${p.id}, 1, false); closeWishlistDrawer();">Add to Cart</button>
                <button type="button" class="qty-btn" onclick="toggleWishlist(${p.id})">&times;</button>
              </div>
            </div>
          </div>
        `
          )
          .join("");
}

function openWishlistDrawer() {
  updateWishlistUI();
  document.getElementById("wishlistDrawer").classList.add("open");
  document.getElementById("wishBackdrop").classList.add("open");
}

function closeWishlistDrawer() {
  document.getElementById("wishlistDrawer").classList.remove("open");
  document.getElementById("wishBackdrop").classList.remove("open");
}
document.getElementById("wishBackdrop").addEventListener("click", closeWishlistDrawer);

// Product Cards & Skin Concern Filter (Homepage = Top 12 Hits)
function filterHomeByConcern(concern, btnEl) {
  document.querySelectorAll(".cf-pill").forEach((b) => b.classList.remove("active"));
  btnEl.classList.add("active");
  const hits = getHitProducts();
  const list = concern === "all" ? hits : hits.filter((p) => p.concern === concern);
  renderProductCards("homeProductGrid", list);
}

function renderProductCards(containerId, list) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = list
    .map((product) => {
      const discount = Math.round(((product.regularPrice - product.salePrice) / product.regularPrice) * 100);
      const isWished = wishlist.includes(product.id);
      const outBadge = product.inStock === false ? `<span class="discount-tag" style="background:#555;">STOCK OUT</span>` : "";

      return `
        <article class="product-card">
          <div class="card-media">
            ${outBadge || (discount > 0 ? `<span class="discount-tag">${discount}% OFF</span>` : "")}
            <button type="button" class="wish-heart-btn ${isWished ? "active" : ""}" onclick="toggleWishlist(${product.id})" aria-label="Save to Wishlist">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="${isWished ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
            <button type="button" class="quick-eye-btn" onclick="openQuickView(${product.id})">Quick View</button>
            <img src="${product.image}" alt="${product.name}" loading="lazy" onclick="navigateTo('product', ${product.id})" />
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
  const all = getProducts();
  let list = currentCategory === "all" ? [...all] : all.filter((p) => p.category === currentCategory);
  const skinVal = document.getElementById("catSkinFilter").value;
  if (skinVal !== "all") {
    list = list.filter((p) => (p.skinType || "").toLowerCase().includes(skinVal.toLowerCase()) || (p.skinType || "").includes("All"));
  }
  const sortVal = document.getElementById("catSortSelect").value;
  if (sortVal === "low-high") list.sort((a, b) => a.salePrice - b.salePrice);
  if (sortVal === "high-low") list.sort((a, b) => b.salePrice - a.salePrice);
  renderProductCards("categoryProductGrid", list);
}

// Quick View Modal
function openQuickView(productId) {
  const product = getProducts().find((p) => p.id === productId);
  if (!product) return;
  document.getElementById("quickViewBody").innerHTML = `
    <div style="display:grid; grid-template-columns:1fr 1.2fr; gap:16px; align-items:center;">
      <img src="${product.image}" alt="${product.name}" style="width:100%; border-radius:8px; border:1px solid var(--border-color);" />
      <div>
        <span class="card-cat">${product.categoryLabel}</span>
        <h3 style="font-family:'Cormorant Garamond', serif; font-size:24px; color:var(--emerald-dark); margin:4px 0;">${product.name}</h3>
        <p style="font-size:12.5px; color:var(--text-muted); margin-bottom:8px;">${product.description}</p>
        <div style="font-size:12px; margin-bottom:10px;"><strong>Skin Type:</strong> ${product.skinType} &bull; <strong>Vol:</strong> ${product.volume}</div>
        <div class="price-row">
          <span class="price-now">৳${product.salePrice}</span>
          <span class="price-old">৳${product.regularPrice}</span>
        </div>
        <div style="display:flex; gap:8px;">
          <button type="button" class="btn-add" onclick="addToCart(${product.id}, 1, false); document.getElementById('quickViewModal').classList.remove('open');">Add to Cart</button>
          <button type="button" class="btn-primary" onclick="addToCart(${product.id}, 1, true); document.getElementById('quickViewModal').classList.remove('open');">Order Now</button>
        </div>
      </div>
    </div>
  `;
  document.getElementById("quickViewModal").classList.add("open");
}

// Recently Viewed Tracker
function recordRecentlyViewed(productId) {
  recentlyViewed = [productId, ...recentlyViewed.filter((id) => id !== productId)].slice(0, 4);
  localStorage.setItem("zelviqo_recent", JSON.stringify(recentlyViewed));
}

function renderRecentlyViewed() {
  const sec = document.getElementById("recentlyViewedSection");
  if (!sec || recentlyViewed.length === 0) return;
  const all = getProducts();
  const list = recentlyViewed.map((id) => all.find((p) => p.id === id)).filter(Boolean);
  if (list.length === 0) return;
  sec.style.display = "block";
  renderProductCards("recentlyViewedGrid", list);
}

// Watch & Shop Reels + Before/After Slider
function renderWatchAndShopReels() {
  const reelsData = [
    { id: 1, title: "Morning Vitamin C Glass-Skin Routine", img: "product-1.jpg", price: 650 },
    { id: 2, title: "Zero White-Cast Sunscreen Outdoor Test", img: "product-2.jpg", price: 740 },
    { id: 3, title: "Simple Facial Wash Gentle Foaming Demo", img: "product-3.jpg", price: 560 },
    { id: 11, title: "Complete Day-Glow Duo Unboxing", img: "product-11.jpg", price: 1320 }
  ];

  document.getElementById("watchShopGrid").innerHTML = reelsData
    .map(
      (r) => `
      <div class="reel-card">
        <span class="reel-play-badge">&#9654; REEL</span>
        <img src="${r.img}" alt="${r.title}" />
        <div class="reel-bottom-bar">
          <strong>${r.title}</strong>
          <button type="button" class="btn-gold-sm" onclick="addToCart(${r.id}, 1, true)">Shop Now &mdash; ৳${r.price}</button>
        </div>
      </div>
    `
    )
    .join("");
}

function updateBeforeAfter(val) {
  document.getElementById("baBeforeWrap").style.width = `${val}%`;
  document.getElementById("baDivider").style.left = `${val}%`;
}

// Full Product Detail Page
function renderFullProductPage(productId) {
  const all = getProducts();
  const product = all.find((p) => p.id === productId) || all[0];
  recordRecentlyViewed(product.id);
  trackMetaEvent("ViewContent", { content_name: product.name, value: product.salePrice, currency: "BDT" });

  const discount = Math.round(((product.regularPrice - product.salePrice) / product.regularPrice) * 100);
  const viewers = Math.floor(11 + Math.random() * 14);
  const stockLeft = Math.floor(4 + Math.random() * 6);

  document.getElementById("prodBreadcrumbCat").textContent = product.categoryLabel;
  document.getElementById("prodBreadcrumbCat").onclick = () => navigateTo("category", product.category);
  document.getElementById("prodBreadcrumbTitle").textContent = product.name;

  const gallery = product.gallery && product.gallery.length ? product.gallery : [product.image];
  const savedReviews = JSON.parse(localStorage.getItem(`zelviqo_rev_${product.id}`) || "[]");
  const allReviews = [...(product.reviews || []), ...savedReviews];

  // Pair companion product for Frequently Bought Together
  const companion = all.find((p) => p.id !== product.id && p.category !== product.category) || all[1];
  const bundlePrice = Math.round((product.salePrice + companion.salePrice) * 0.9);

  document.getElementById("fullProductDetailContainer").innerHTML = `
    <div class="full-product-card">
      <div class="full-product-grid">
        <div>
          <div class="zoom-gallery-wrap">
            <img id="mainZoomProductImg" src="${gallery[0]}" alt="${product.name}" />
          </div>
          <div class="thumb-strip">
            ${gallery.map((src) => `<img src="${src}" alt="Preview" onclick="document.getElementById('mainZoomProductImg').src='${src}'" />`).join("")}
          </div>
        </div>

        <div class="full-prod-info">
          <span class="card-cat">${product.categoryLabel}</span>
          <h1>${product.name}</h1>

          <div class="live-urgency-strip">
            <span class="urgency-pill">${viewers} clients viewing right now</span>
            <span class="urgency-pill" style="background:#fbeaea; color:#a62c2c;">Only ${stockLeft} units left in stock</span>
          </div>

          <div class="detail-meta">
            <span>Volume: <strong>${product.volume || "50ml"}</strong></span>
            <span>Skin Type: <strong>${product.skinType || "All Skin Types"}</strong></span>
            <span>Rating: <strong>4.9 &#9733; (${allReviews.length} Reviews)</strong></span>
          </div>

          <div class="detail-price-box">
            <span class="detail-price-now">৳${product.salePrice}</span>
            <span class="price-old">৳${product.regularPrice}</span>
            ${discount > 0 ? `<span style="background:#b93829; color:#fff; font-size:11px; padding:3px 8px; border-radius:4px; font-weight:700;">SAVE ${discount}%</span>` : ""}
          </div>

          <div class="detail-tabs-bar">
            <button type="button" class="d-tab-btn active" onclick="switchProductTab('desc', this)">Description</button>
            <button type="button" class="d-tab-btn" onclick="switchProductTab('ing', this)">Key Ingredients</button>
            <button type="button" class="d-tab-btn" onclick="switchProductTab('use', this)">How to Use</button>
          </div>

          <div id="tab-desc" class="detail-tab-panel">${product.description || "100% authentic imported skincare product."}</div>
          <div id="tab-ing" class="detail-tab-panel" style="display:none;">${product.ingredients || "Dermatologist-tested skin-safe ingredients."}</div>
          <div id="tab-use" class="detail-tab-panel" style="display:none;">${product.howToUse || "Apply gently on clean skin daily."}</div>

          <div style="display:flex; gap:12px; flex-wrap:wrap;">
            <button type="button" class="btn-add" style="padding:12px 22px;" onclick="addToCart(${product.id}, 1, false)">Add to Shopping Bag</button>
            <button type="button" class="btn-primary" style="padding:12px 26px;" onclick="addToCart(${product.id}, 1, true)">Order Now</button>
          </div>

          <!-- Frequently Bought Together Box -->
          <div class="fbt-box">
            <div style="font-size:11px; font-weight:800; letter-spacing:0.6px; color:var(--emerald-dark); margin-bottom:8px;">FREQUENTLY BOUGHT TOGETHER (SAVE 10%)</div>
            <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px;">
              <div style="font-size:13px;">
                <strong>This Item</strong> + <span>${companion.name.split(" ").slice(0, 4).join(" ")}</span>
                <div style="color:var(--emerald-dark); font-weight:700; margin-top:2px;">Bundle Price: ৳${bundlePrice} <del style="color:var(--text-muted); font-weight:400;">৳${product.salePrice + companion.salePrice}</del></div>
              </div>
              <button type="button" class="btn-gold-sm" onclick="addBothToCart(${product.id}, ${companion.id})">Add Both to Bag</button>
            </div>
          </div>
        </div>
      </div>

      <div class="reviews-box">
        <h3 style="color:var(--emerald-dark); margin-bottom:12px;">Verified Client Reviews (${allReviews.length})</h3>
        <div>
          ${
            allReviews.length === 0
              ? `<p style="font-size:13px; color:var(--text-muted); margin-bottom:12px;">Be the first to share your experience with this product.</p>`
              : allReviews.map((r) => `<div class="review-item"><strong>${r.user}</strong> <span style="color:#c59b6d;">&#9733;&#9733;&#9733;&#9733;&#9733;</span><p style="margin-top:4px; color:var(--text-muted);">${r.text}</p></div>`).join("")
          }
        </div>
        <form onsubmit="submitProductReview(event, ${product.id})" style="margin-top:14px; display:flex; gap:8px; flex-wrap:wrap;">
          <input type="text" id="revReviewerName" required placeholder="Your Name" style="padding:9px; border:1px solid var(--border-color); border-radius:6px; flex:1;" />
          <input type="text" id="revReviewerText" required placeholder="Write your review..." style="padding:9px; border:1px solid var(--border-color); border-radius:6px; flex:2;" />
          <button type="submit" class="btn-primary">Submit Review</button>
        </form>
      </div>
    </div>
  `;
}

function addBothToCart(id1, id2) {
  addToCart(id1, 1, false);
  addToCart(id2, 1, false);
  appliedDiscountPercent = 10;
  openCartDrawer();
}

function submitProductReview(e, productId) {
  e.preventDefault();
  const user = document.getElementById("revReviewerName").value.trim();
  const text = document.getElementById("revReviewerText").value.trim();
  const saved = JSON.parse(localStorage.getItem(`zelviqo_rev_${productId}`) || "[]");
  saved.push({ user, text });
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

// Custom Combo Builder & Quiz
function initCustomComboBuilder() {
  const all = getProducts();
  document.getElementById("buildStep1").innerHTML = all.filter((p) => p.category === "cleanser").map((p) => `<option value="${p.id}">${p.name} (৳${p.salePrice})</option>`).join("");
  document.getElementById("buildStep2").innerHTML = all.filter((p) => p.category === "serum").map((p) => `<option value="${p.id}">${p.name} (৳${p.salePrice})</option>`).join("");
  document.getElementById("buildStep3").innerHTML = all.filter((p) => p.category === "sunscreen").map((p) => `<option value="${p.id}">${p.name} (৳${p.salePrice})</option>`).join("");
  calculateCustomCombo();
}

function calculateCustomCombo() {
  const all = getProducts();
  const p1 = all.find((p) => p.id === Number(document.getElementById("buildStep1").value));
  const p2 = all.find((p) => p.id === Number(document.getElementById("buildStep2").value));
  const p3 = all.find((p) => p.id === Number(document.getElementById("buildStep3").value));
  if (!p1 || !p2 || !p3) return;
  const regSum = p1.salePrice + p2.salePrice + p3.salePrice;
  document.getElementById("comboRegPrice").textContent = `৳${regSum}`;
  document.getElementById("comboOfferPrice").textContent = `৳${Math.round(regSum * 0.85)}`;
}

function addCustomComboToCart() {
  [
    Number(document.getElementById("buildStep1").value),
    Number(document.getElementById("buildStep2").value),
    Number(document.getElementById("buildStep3").value)
  ].forEach((id) => addToCart(id, 1, false));
  appliedDiscountPercent = 15;
  openCartDrawer();
}

function generateQuizResult() {
  const concern = document.getElementById("quizConcern").value;
  const matched = getProducts().filter((p) => p.concern === concern || p.category === "sunscreen").slice(0, 3);
  document.getElementById("quizResultsArea").innerHTML = `
    <h3 style="color:var(--emerald-dark); margin-bottom:12px;">Your Tailored Routine:</h3>
    <div class="product-grid" id="quizResultGrid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));"></div>
  `;
  renderProductCards("quizResultGrid", matched);
}

// Cart & Upsell
function addToCart(productId, qty = 1, openCheckoutImmediately = false) {
  const product = getProducts().find((p) => p.id === productId);
  if (!product) return;
  trackMetaEvent("AddToCart", { content_name: product.name, value: product.salePrice, currency: "BDT" });

  const existing = cart.find((c) => c.id === productId);
  if (existing) existing.qty += qty;
  else cart.push({ ...product, qty });

  updateCartUI();
  if (openCheckoutImmediately) openCheckoutModal();
  else openCartDrawer();
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
  document.getElementById("cartDeliveryFee").textContent = subtotal >= 2000 && subtotal > 0 ? "FREE (৳0)" : `৳${actualDelivery}`;
  document.getElementById("cartGrandTotal").textContent = `৳${grandTotal}`;

  const target = 2000;
  document.getElementById("freeShipProgress").style.width = `${Math.min(100, Math.round((subtotal / target) * 100))}%`;
  document.getElementById("freeShipText").innerHTML =
    subtotal >= target
      ? `You unlocked <strong>Complimentary Free Delivery</strong>!`
      : `Add <strong>৳${target - subtotal}</strong> more for <strong>FREE Delivery</strong>`;

  const container = document.getElementById("cartItemsContainer");
  const upsellBox = document.getElementById("cartUpsellBox");

  if (cart.length === 0) {
    container.innerHTML = `<p style="font-size:13.5px; color:var(--text-muted); text-align:center; padding:24px 0;">Your shopping bag is currently empty.</p>`;
    upsellBox.style.display = "none";
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

  const upsellItem = getProducts().find((p) => !cart.some((c) => c.id === p.id));
  if (upsellItem) {
    upsellBox.style.display = "block";
    upsellBox.innerHTML = `
      <div style="font-size:10.5px; font-weight:800; letter-spacing:0.6px; color:var(--emerald-dark); margin-bottom:6px;">COMPLETE YOUR ROUTINE</div>
      <div style="display:flex; align-items:center; gap:8px;">
        <img src="${upsellItem.image}" style="width:42px; height:42px; border-radius:6px; object-fit:cover;" />
        <div style="flex:1; font-size:12px;">
          <strong>${upsellItem.name.split(" ").slice(0, 4).join(" ")}</strong>
          <div>৳${upsellItem.salePrice}</div>
        </div>
        <button type="button" class="btn-gold-sm" onclick="addToCart(${upsellItem.id}, 1, false)">+ Add</button>
      </div>
    `;
  } else {
    upsellBox.style.display = "none";
  }
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

// Checkout & Google Sheet Order Sync
const checkoutModal = document.getElementById("checkoutModal");
const deliveryAreaSelect = document.getElementById("deliveryArea");

function selectPaymentMethod(method, btnEl) {
  selectedPaymentMethod = method;
  document.querySelectorAll(".pay-tab").forEach((b) => b.classList.remove("active"));
  btnEl.classList.add("active");
  const mobileBox = document.getElementById("mobilePayBox");
  const trxInput = document.getElementById("paymentTrxId");
  if (method === "COD") {
    mobileBox.style.display = "none";
    trxInput.required = false;
  } else {
    mobileBox.style.display = "block";
    trxInput.required = true;
  }
}

function openCheckoutModal() {
  if (cart.length === 0) {
    alert("Please add at least one product to your bag first.");
    return;
  }
  closeCartDrawer();
  trackMetaEvent("InitiateCheckout", { value: getSubtotal(), currency: "BDT" });
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
  if (code === "GLOW10" || code === "ZELVIQO10" || code === "SPIN15") {
    appliedDiscountPercent = code === "SPIN15" ? 15 : 10;
    msgEl.textContent = `${appliedDiscountPercent}% Privilege Discount Applied`;
    msgEl.style.color = "#157347";
  } else {
    appliedDiscountPercent = 0;
    msgEl.textContent = "Invalid promo code. Try GLOW10.";
    msgEl.style.color = "#b93829";
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
  const trxId = document.getElementById("paymentTrxId").value.trim();
  const subtotal = getSubtotal();
  const discountAmount = Math.round((subtotal * appliedDiscountPercent) / 100);
  const afterDiscount = subtotal - discountAmount;
  const shipping = afterDiscount >= 2000 ? 0 : Number(deliveryAreaSelect.value);
  const total = afterDiscount + shipping;

  const orderId = String(Math.floor(100000 + Math.random() * 900000));
  const itemsListText = cart.map((i) => `${i.name} (x${i.qty}) - ৳${i.salePrice * i.qty}`).join("\n");
  const itemsSummary = cart.map((i) => `${i.name} (x${i.qty})`).join(", ");
  const paymentNote = selectedPaymentMethod === "COD" ? "Cash on Delivery" : `${selectedPaymentMethod} (TrxID: ${trxId})`;

  const orderRecord = {
    orderId,
    date: new Date().toLocaleString("en-GB"),
    name,
    phone,
    address,
    itemsSummary,
    shipping,
    total,
    payment: paymentNote,
    status: "Confirmed & Processing"
  };

  // Save locally for Order Tracking & Admin Panel
  const allOrders = JSON.parse(localStorage.getItem("zelviqo_orders") || "[]");
  allOrders.unshift(orderRecord);
  localStorage.setItem("zelviqo_orders", JSON.stringify(allOrders));

  // Send directly to Google Sheet
  if (GOOGLE_SHEET_WEBHOOK_URL) {
    fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderRecord)
    }).catch(() => {});
  }

  const user = getCurrentUser();
  if (user) {
    user.points = (user.points || 50) + Math.floor(total / 10);
    setCurrentUser(user);
  }

  trackMetaEvent("Purchase", { value: total, currency: "BDT" });

  const waMsg = encodeURIComponent(
    `*NEW ORDER - ZELVIQO LUXURY SKIN CARE*\nOrder ID: #${orderId}\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nPayment: ${paymentNote}\n\n*Items:*\n${itemsListText}\n\nDelivery: ৳${shipping}\n*Total Payable: ৳${total}*`
  );
  const waLink = `[https://wa.me/$](https://wa.me/$){WHATSAPP_NUMBER}?text=${waMsg}`;

  document.getElementById("invoiceReceiptBody").innerHTML = `
    <div style="border:1px dashed var(--emerald-main); padding:14px; border-radius:8px; background:var(--bg-page); margin-bottom:14px;">
      <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
        <strong>Order #${orderId}</strong>
        <span>${orderRecord.date}</span>
      </div>
      <p style="font-size:13px;"><strong>Client:</strong> ${name} (${phone})</p>
      <p style="font-size:13px;"><strong>Payment:</strong> ${paymentNote}</p>
      <p style="font-size:13px; margin-bottom:8px;"><strong>Address:</strong> ${address}</p>
      <div style="font-size:12.5px; border-top:1px solid var(--border-color); padding-top:8px;">${itemsSummary}</div>
      <div style="font-size:15px; font-weight:700; color:var(--emerald-dark); margin-top:10px; border-top:1px solid var(--border-color); padding-top:8px;">
        Total Payable: ৳${total}
      </div>
    </div>
    <a href="${waLink}" target="_blank" rel="noopener" class="btn-primary full-width" style="background:#1ea952; text-decoration:none; display:block; margin-bottom:8px;">Send Order Slip to WhatsApp</a>
    <button type="button" class="btn-add full-width" onclick="window.print()">Print / Save Receipt</button>
  `;

  cart = [];
  appliedDiscountPercent = 0;
  updateCartUI();
  e.target.reset();
  checkoutModal.classList.remove("open");
  document.getElementById("invoiceModal").classList.add("open");
});

// Spin Wheel & Welcome Popup
function openSpinModal() {
  document.getElementById("spinWheelModal").classList.add("open");
}

function spinDiscountWheel() {
  const wheel = document.getElementById("wheelVisual");
  const btn = document.getElementById("spinActionBtn");
  btn.disabled = true;
  wheel.style.transform = "rotate(1080deg)";
  setTimeout(() => {
    document.getElementById("spinResultText").textContent = "Congratulations! Unlocked 15% OFF — Code: SPIN15";
    document.getElementById("couponInput").value = "SPIN15";
    appliedDiscountPercent = 15;
    btn.textContent = "Code SPIN15 Applied";
  }, 2200);
}

function closeWelcomePopup() {
  document.getElementById("welcomePopupModal").classList.remove("open");
  sessionStorage.setItem("zelviqo_welcomed", "1");
}

function claimWelcomeCode() {
  document.getElementById("couponInput").value = "GLOW10";
  appliedDiscountPercent = 10;
  closeWelcomePopup();
  navigateTo("category", "all");
}

setTimeout(() => {
  if (!sessionStorage.getItem("zelviqo_welcomed")) {
    document.getElementById("welcomePopupModal").classList.add("open");
  }
}, 4500);

// Admin Panel
function unlockAdminPanel() {
  const pass = document.getElementById("adminPassInput").value;
  if (pass === "zelviqo2026" || pass === "1234") {
    document.getElementById("adminLoginGate").style.display = "none";
    document.getElementById("adminDashboardArea").style.display = "block";
    renderAdminDashboard();
  } else {
    alert("Incorrect administrator password.");
  }
}

function renderAdminDashboard() {
  const all = getProducts();
  const orders = JSON.parse(localStorage.getItem("zelviqo_orders") || "[]");
  const revenue = orders.reduce((s, o) => s + (Number(o.total) || 0), 0);

  document.getElementById("admTotalProducts").textContent = all.length;
  document.getElementById("admTotalOrders").textContent = orders.length;
  document.getElementById("admTotalRevenue").textContent = `৳${revenue}`;

  document.getElementById("adminProductList").innerHTML = all
    .map(
      (p) => `
      <div class="admin-row">
        <div><strong>${p.name}</strong> &mdash; ৳${p.salePrice} (${p.inStock === false ? "Out of Stock" : "In Stock"}) &bull; <em>${p.isHit !== false ? "Homepage Hit" : "Category Only"}</em></div>
        <div style="display:flex; gap:6px;">
          <button type="button" class="btn-gold-sm" onclick="toggleAdminHit(${p.id})">Toggle Homepage Hit</button>
          <button type="button" class="btn-add" onclick="toggleAdminStock(${p.id})">Toggle Stock</button>
        </div>
      </div>
    `
    )
    .join("");

  document.getElementById("adminOrderList").innerHTML =
    orders.length === 0
      ? `<p style="font-size:13px; color:#666;">No orders recorded yet.</p>`
      : orders
          .map(
            (o, idx) => `
          <div class="admin-row">
            <div><strong>#${o.orderId}</strong> &bull; ${o.name} (${o.phone}) &bull; ৳${o.total} &bull; <em>${o.status}</em></div>
            <button type="button" class="btn-gold-sm" onclick="markOrderDelivered(${idx})">Mark Delivered</button>
          </div>
        `
          )
          .join("");
}

function adminAddNewProduct(e) {
  e.preventDefault();
  const list = getProducts();
  const cat = document.getElementById("admProdCat").value;
  list.unshift({
    id: Date.now(),
    isHit: document.getElementById("admProdHit").checked,
    name: document.getElementById("admProdName").value.trim(),
    category: cat,
    categoryLabel: cat.toUpperCase(),
    concern: "brightening",
    volume: "50ml",
    skinType: "All Skin Types",
    regularPrice: Number(document.getElementById("admProdReg").value),
    salePrice: Number(document.getElementById("admProdSale").value),
    inStock: true,
    image: document.getElementById("admProdImg").value.trim(),
    description: "100% authentic imported skincare.",
    ingredients: "Dermatologist-tested ingredients.",
    howToUse: "Apply daily on clean skin.",
    reviews: []
  });
  saveProducts(list);
  e.target.reset();
  renderAdminDashboard();
  alert("New product published!");
}

function toggleAdminHit(id) {
  const list = getProducts();
  const item = list.find((p) => p.id === id);
  if (item) item.isHit = item.isHit === false ? true : false;
  saveProducts(list);
  renderAdminDashboard();
}

function toggleAdminStock(id) {
  const list = getProducts();
  const item = list.find((p) => p.id === id);
  if (item) item.inStock = item.inStock === false ? true : false;
  saveProducts(list);
  renderAdminDashboard();
}

function markOrderDelivered(idx) {
  const orders = JSON.parse(localStorage.getItem("zelviqo_orders") || "[]");
  if (orders[idx]) orders[idx].status = "Delivered";
  localStorage.setItem("zelviqo_orders", JSON.stringify(orders));
  renderAdminDashboard();
}

// PWA Install
let deferredPrompt = null;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

function installZelviqoApp() {
  if (deferredPrompt) deferredPrompt.prompt();
  else alert("To install ZELVIQO App: Tap your browser menu and select 'Add to Home screen' or 'Install App'.");
}

// WhatsApp Concierge
function toggleWaBox() {
  document.getElementById("waChatBox").classList.toggle("open");
}

function sendPresetWa(text) {
  window.open(`[https://wa.me/$](https://wa.me/$){WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
}

function sendCustomWa() {
  const input = document.getElementById("waCustomMsg");
  const msg = input.value.trim();
  if (!msg) return;
  input.value = "";
  window.open(`[https://wa.me/$](https://wa.me/$){WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}

// Moving Showcase (Top 12 Hits) & Live Search (All 16 Products)
function renderMovingShowcase() {
  const track = document.getElementById("movingProductTrack");
  const hits = getHitProducts();
  track.innerHTML = [...hits, ...hits]
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
  const hits = getProducts().filter((p) => p.name.toLowerCase().includes(q) || p.categoryLabel.toLowerCase().includes(q));
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

// Profile & Tracking
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
    nameEl.textContent = "Account";
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
    document.getElementById("profilePointsVal").textContent = `${user.points || 50} pts`;
    document.getElementById("profileEditAddress").value = user.address || "";

    const myOrders = JSON.parse(localStorage.getItem("zelviqo_orders") || "[]").filter((o) => o.phone === user.phone);
    document.getElementById("userOrderHistoryList").innerHTML =
      myOrders.length === 0
        ? `<p style="font-size:13px; color:#5e6963;">No orders placed from this account yet.</p>`
        : myOrders
            .map((o) => `<div class="history-item"><strong>Order #${o.orderId} &mdash; ৳${o.total}</strong><div>${o.itemsSummary}</div><small style="color:#666;">${o.date} &bull; ${o.status}</small></div>`)
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
  alert("Address updated!");
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
    alert("Account already exists. Please sign in.");
    switchAuthTab("login");
    return;
  }
  const newUser = { name, phone, address, password, points: 50 };
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
    alert("Incorrect phone number or password.");
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

  const found = JSON.parse(localStorage.getItem("zelviqo_orders") || "[]").filter((o) => o.phone === query || o.orderId === query);
  if (found.length === 0) {
    box.innerHTML = `<div style="padding:14px; background:#fbeaea; color:#a62c2c; border-radius:8px; font-size:13.5px;">No parcel found matching "${query}".</div>`;
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

// Countdown & Social Proof Toast
let countdownSeconds = 5 * 3600 + 42 * 60 + 19;
setInterval(() => {
  if (countdownSeconds > 0) countdownSeconds--;
  document.getElementById("timerHours").textContent = String(Math.floor(countdownSeconds / 3600)).padStart(2, "0");
  document.getElementById("timerMins").textContent = String(Math.floor((countdownSeconds % 3600) / 60)).padStart(2, "0");
  document.getElementById("timerSecs").textContent = String(countdownSeconds % 60).padStart(2, "0");
}, 1000);

const recentOrdersSample = [
  "Sadia (Dhanmondi) ordered Vitamin C Serum",
  "Nusrat (Uttara) ordered Day-Glow Combo Set",
  "Rafi (Mirpur 10) ordered Simple Facial Wash",
  "Mitu (Chattogram) ordered Niacinamide 10% Serum"
];
let toastIdx = 0;
setInterval(() => {
  const toast = document.getElementById("liveOrderToast");
  document.getElementById("liveToastText").textContent = recentOrdersSample[toastIdx % recentOrdersSample.length];
  toast.classList.add("show");
  toastIdx++;
  setTimeout(() => toast.classList.remove("show"), 4000);
}, 14000);

// Initialize Storefront
updateHeaderAuthUI();
updateWishlistUI();
updateCartUI();
renderMovingShowcase();
navigateTo("home", null, false);
