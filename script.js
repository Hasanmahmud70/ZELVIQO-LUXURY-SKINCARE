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
    myCart: "কার্ট",
    menuMain: "মেনু",
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

// 16 Professionally Curated Authentic Skincare Products with Realistic BD Market Pricing (Top 12 isHit: true on Homepage)
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
    regularPrice: 820,
    salePrice: 620,
    inStock: true,
    image: "product-1.jpg",
    gallery: ["product-1.jpg", "product-1-2.jpg"],
    description: "Lightweight antioxidant Vitamin C serum that fades dullness, evens skin tone, and boosts natural radiance.",
    fullDetails: `
      <p>Reveal a brighter, smoother, and more radiant-looking complexion with <strong>Dr. Rashel Vitamin C Brightening &amp; Anti-Aging Face Serum</strong>. Specially formulated with stabilized Vitamin C and skin-conditioning humectants, this lightweight serum targets dullness, uneven skin tone, and dark spots while delivering lasting hydration.</p>
      <p>Enriched with antioxidant-rich Vitamin C and Hyaluronic Acid, it helps refine skin texture, soften the appearance of fine lines, and restore a healthy, luminous glow without leaving any greasy or heavy residue.</p>

      <h3>Key Benefits</h3>
      <ul>
        <li>Helps brighten dull, fatigued, and uneven-looking skin.</li>
        <li>Visibly reduces the appearance of dark spots, sun tan, and discoloration.</li>
        <li>Delivers deep hydration and helps lock in daily skin moisture.</li>
        <li>Softens the look of fine lines and improves overall skin elasticity.</li>
        <li>Provides daily antioxidant defense against pollution and UV stressors.</li>
      </ul>

      <h3>Key Ingredients</h3>
      <ol>
        <li><strong>Vitamin C (3-O-Ethyl Ascorbic Acid):</strong> A highly stable Vitamin C derivative that provides potent antioxidant protection, brightens dull skin, and helps fade dark spots.</li>
        <li><strong>Sodium Hyaluronate (Hyaluronic Acid):</strong> A moisture-binding humectant that draws hydration deep into the skin, leaving it plump and refreshed.</li>
        <li><strong>Glycerin &amp; Glycereth-26:</strong> Skin-conditioning moisturizing agents that prevent dryness and maintain a smooth, supple barrier.</li>
        <li><strong>Hydrolyzed Collagen:</strong> Supports skin firmness and helps maintain a smooth, youthful complexion.</li>
      </ol>

      <h3>How to Use</h3>
      <ol>
        <li>Start with a freshly cleansed face and gently pat your skin dry.</li>
        <li>Apply 3–4 drops of serum evenly onto your face and neck.</li>
        <li>Gently massage in upward and outward motions until fully absorbed.</li>
        <li>Follow with your favorite moisturizer to seal in hydration.</li>
        <li>During the daytime, always finish with a broad-spectrum SPF 50+ sunscreen.</li>
      </ol>

      <div class="unified-note-box">
        <strong>Recommended Usage:</strong> Morning and evening.<br>
        <strong>Important:</strong> Perform a patch test before first use. Avoid direct contact with eyes. Discontinue use if irritation occurs. For external use only.
      </div>

      <h3>Product Details</h3>
      <ul>
        <li><strong>Brand:</strong> Dr. Rashel</li>
        <li><strong>Product Type:</strong> Brightening Face Serum</li>
        <li><strong>Skin Concern:</strong> Dullness, uneven skin tone, dark spots, and fine lines</li>
        <li><strong>Skin Type:</strong> Suitable for all skin types</li>
        <li><strong>Texture:</strong> Lightweight, fast-absorbing liquid serum</li>
        <li><strong>Net Volume:</strong> 50ml</li>
      </ul>
    `,
    reviews: [{ user: "Nusrat Jahan (Uttara)", text: "100% original product! Within 2 weeks my skin looks noticeably brighter." }]
  },
  {
    id: 2,
    isHit: true,
    name: "Care & Repair UV Defense Matte Sunscreen SPF 50+ PA+++",
    category: "sunscreen",
    categoryLabel: "Sunscreen",
    concern: "darkspot",
    volume: "60ml",
    skinType: "Oily, Combination & Normal",
    regularPrice: 890,
    salePrice: 680,
    inStock: true,
    image: "product-2.jpg",
    gallery: ["product-2.jpg", "product-2-2.jpg"],
    description: "Broad-spectrum SPF 50+ PA+++ daily sunscreen with zero white cast and oil-free comfort for humid weather.",
    fullDetails: `
      <p>Protect your skin from harsh UV rays and humidity with <strong>Care &amp; Repair UV Defense Matte Sunscreen SPF 50+ PA+++</strong>. Engineered specifically for hot and humid tropical climates, this breathable formula shields against both UVA (aging) and UVB (burning) rays without clogging pores.</p>
      <p>Infused with soothing Centella Asiatica and Pro-Vitamin B5, it calms sun-stressed skin while leaving an invisible, non-greasy finish with zero white cast.</p>

      <h3>Key Benefits</h3>
      <ul>
        <li>Provides high broad-spectrum SPF 50+ PA+++ protection against UVA &amp; UVB rays.</li>
        <li>Zero white cast—blends seamlessly into all South Asian skin tones.</li>
        <li>Non-greasy, sweat-resistant texture ideal for humid Bangladeshi weather.</li>
        <li>Helps prevent sun tan, premature aging, and UV-induced dark spots.</li>
        <li>Soothes and strengthens the skin barrier with Centella and Panthenol.</li>
      </ul>

      <h3>Key Ingredients</h3>
      <ol>
        <li><strong>Broad-Spectrum UV Filters (Zinc Oxide &amp; Titanium Dioxide):</strong> Reflect and absorb harmful UVA/UVB radiation to prevent sunburn and pigmentation.</li>
        <li><strong>Centella Asiatica Extract:</strong> Calms heat-induced redness and supports skin barrier recovery.</li>
        <li><strong>Panthenol (Pro-Vitamin B5):</strong> Hydrates and keeps skin soft without adding excess oil.</li>
        <li><strong>Tocopheryl Acetate (Vitamin E):</strong> Neutralizes free radicals triggered by sun exposure.</li>
      </ol>

      <h3>How to Use</h3>
      <ol>
        <li>Complete your morning skincare routine (cleanser, serum, and light moisturizer).</li>
        <li>Squeeze two fingers' length of sunscreen onto your index and middle fingers.</li>
        <li>Dot evenly across face, neck, and ears 15 minutes before stepping outdoors.</li>
        <li>Gently blend until completely absorbed.</li>
        <li>Reapply every 2–3 hours when exposed to direct sunlight.</li>
      </ol>

      <div class="unified-note-box">
        <strong>Recommended Usage:</strong> Every morning (365 days, indoors &amp; outdoors).<br>
        <strong>Important:</strong> Perform a patch test before first use. Avoid direct contact with eyes. For external use only.
      </div>

      <h3>Product Details</h3>
      <ul>
        <li><strong>Brand:</strong> Care &amp; Repair</li>
        <li><strong>Product Type:</strong> Broad-Spectrum Daily Sunscreen</li>
        <li><strong>Protection Level:</strong> SPF 50+ PA+++</li>
        <li><strong>Skin Type:</strong> Oily, Combination, and Normal skin</li>
        <li><strong>Finish:</strong> Invisible, natural soft-matte (Zero white cast)</li>
        <li><strong>Net Volume:</strong> 60ml</li>
      </ul>
    `,
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
    regularPrice: 690,
    salePrice: 540,
    inStock: true,
    image: "product-3.jpg",
    gallery: ["product-3.jpg", "product-3-2.jpg"],
    description: "100% soap-free, fragrance-free gentle daily gel face wash enriched with Pro-Vitamin B5 and Vitamin E.",
    fullDetails: `
      <p>Cleanse away dirt, excess oil, and impurities without stripping your skin's natural moisture with <strong>Simple Kind to Skin Refreshing Facial Wash</strong>. Dermatologist-tested and 100% soap-free, this mild gel cleanser leaves even the most sensitive skin feeling clean, soft, and hydrated.</p>
      <p>Formulated without artificial perfumes, harsh dyes, or irritating chemicals, it respects your skin's natural pH balance and prevents post-wash tightness.</p>

      <h3>Key Benefits</h3>
      <ul>
        <li>Gently removes daily dirt, oil, and light makeup without drying out skin.</li>
        <li>100% soap-free, alcohol-free, and free from artificial fragrance or color.</li>
        <li>Maintains the skin's natural moisture barrier for a soft, fresh feel.</li>
        <li>Dermatologically tested and hypoallergenic—safe for sensitive skin.</li>
        <li>Ideal for both morning and night daily cleansing.</li>
      </ul>

      <h3>Key Ingredients</h3>
      <ol>
        <li><strong>Panthenol (Pro-Vitamin B5):</strong> Deeply hydrates, softens, and supports skin barrier repair during cleansing.</li>
        <li><strong>Tocopheryl Acetate (Vitamin E):</strong> Provides gentle antioxidant nourishment and keeps skin supple.</li>
        <li><strong>Triple Purified Water:</strong> Minimizes potential skin irritation for ultra-clean, gentle washing.</li>
        <li><strong>Cocamidopropyl Betaine:</strong> A mild coconut-derived cleansing agent that creates a soft, non-stripping lather.</li>
      </ol>

      <h3>How to Use</h3>
      <ol>
        <li>Wet your face thoroughly with lukewarm water.</li>
        <li>Squeeze a small pea-sized amount into your palms and work into a gentle lather.</li>
        <li>Massage onto your face and neck in circular motions for 30 seconds.</li>
        <li>Rinse thoroughly with clean water and pat dry with a soft towel.</li>
      </ol>

      <div class="unified-note-box">
        <strong>Recommended Usage:</strong> Twice daily (Morning and Night).<br>
        <strong>Important:</strong> Avoid direct contact with eyes; rinse immediately with water if contact occurs. For external use only.
      </div>

      <h3>Product Details</h3>
      <ul>
        <li><strong>Brand:</strong> Simple (UK)</li>
        <li><strong>Product Type:</strong> Gentle Gel Facial Wash</li>
        <li><strong>Skin Concern:</strong> Sensitivity, dryness, daily oil &amp; dirt buildup</li>
        <li><strong>Skin Type:</strong> All skin types, including sensitive skin</li>
        <li><strong>Formula:</strong> 100% Soap-Free, Fragrance-Free &amp; Non-Comedogenic</li>
        <li><strong>Net Volume:</strong> 150ml</li>
      </ul>
    `,
    reviews: [{ user: "Maliha Chowdhury (Mirpur)", text: "Best daily face wash! Leaves skin clean and never feels tight." }]
  },
  {
    id: 4,
    isHit: true,
    name: "The Ordinary Niacinamide 10% + Zinc 1% Oil Control Serum",
    category: "serum",
    categoryLabel: "Face Serum",
    concern: "acne",
    volume: "30ml",
    skinType: "Oily, Combination & Acne-Prone",
    regularPrice: 1380,
    salePrice: 1180,
    inStock: true,
    image: "product-4.jpg",
    gallery: ["product-4.jpg", "product-4-2.jpg"],
    description: "High-strength 10% Niacinamide and 1% Zinc PCA formula to balance excess sebum, minimize pores, and calm blemishes.",
    fullDetails: `
      <p>Target excess oil, enlarged pores, and recurring blemishes with <strong>The Ordinary Niacinamide 10% + Zinc 1% Oil Control Serum</strong>. This water-based, high-strength vitamin and mineral formula visibly regulates sebum production and refines uneven skin texture.</p>
      <p>By pairing 10% pure Niacinamide (Vitamin B3) with 1% Zinc PCA, it strengthens the skin barrier, fades post-acne redness, and promotes a clearer, smoother complexion.</p>

      <h3>Key Benefits</h3>
      <ul>
        <li>Controls excess sebum and reduces midday shine on oily T-zones.</li>
        <li>Visibly minimizes the appearance of enlarged and congested pores.</li>
        <li>Calms active breakouts and fades red post-acne marks.</li>
        <li>Strengthens skin barrier resilience and smooths rough skin texture.</li>
        <li>Lightweight, oil-free water-gel formula that layers easily under sunscreen.</li>
      </ul>

      <h3>Key Ingredients</h3>
      <ol>
        <li><strong>Niacinamide (10% Vitamin B3):</strong> Helps balance oil production, brighten uneven tone, and improve pore appearance.</li>
        <li><strong>Zinc PCA (1%):</strong> Supports sebum regulation and helps calm blemish-prone skin.</li>
        <li><strong>Tamarindus Indica Seed Gum:</strong> Provides lightweight hydration and helps improve skin elasticity.</li>
      </ol>

      <h3>How to Use</h3>
      <ol>
        <li>Cleanse your face thoroughly and pat dry.</li>
        <li>Apply 2–3 drops across your entire face in the morning and evening before heavier creams.</li>
        <li>Gently pat into skin until absorbed.</li>
        <li>Follow with an oil-free moisturizer (and SPF 50+ in the morning).</li>
      </ol>

      <div class="unified-note-box">
        <strong>Recommended Usage:</strong> Morning and evening.<br>
        <strong>Important:</strong> Do not layer in the exact same routine with direct high-concentration Vitamin C (L-Ascorbic Acid). Perform a patch test before first use.
      </div>

      <h3>Product Details</h3>
      <ul>
        <li><strong>Brand:</strong> The Ordinary</li>
        <li><strong>Product Type:</strong> Blemish &amp; Pore Refining Serum</li>
        <li><strong>Skin Concern:</strong> Excess oil, enlarged pores, acne blemishes, and uneven texture</li>
        <li><strong>Skin Type:</strong> Oily, Combination, and Acne-Prone skin</li>
        <li><strong>Key Actives:</strong> 10% Niacinamide + 1% Zinc PCA</li>
        <li><strong>Net Volume:</strong> 30ml</li>
      </ul>
    `,
    reviews: [{ user: "Sadia Islam (Banani)", text: "Controlled my excess oil and minimized pores noticeably." }]
  },
  {
    id: 5,
    isHit: true,
    name: "CeraVe Hydrating Facial Cleanser with Ceramides & Hyaluronic Acid",
    category: "cleanser",
    categoryLabel: "Face Wash & Cleanser",
    concern: "hydration",
    volume: "150ml",
    skinType: "Normal, Dry & Sensitive",
    regularPrice: 1150,
    salePrice: 960,
    inStock: true,
    image: "product-5.jpg",
    gallery: ["product-5.jpg", "product-5-2.jpg"],
    description: "Dermatologist-developed creamy non-foaming cleanser with 3 essential Ceramides and Hyaluronic Acid to restore skin moisture.",
    fullDetails: `
      <p>Cleanse and hydrate simultaneously with <strong>CeraVe Hydrating Facial Cleanser with Ceramides &amp; Hyaluronic Acid</strong>. Developed with dermatologists, this gentle, non-foaming lotion cleanser removes dirt and makeup while preserving your skin's natural protective barrier.</p>
      <p>Powered by 3 essential Ceramides and Hyaluronic Acid, it attracts and locks moisture into the skin, making it ideal for normal-to-dry and sensitive skin types.</p>

      <h3>Key Benefits</h3>
      <ul>
        <li>Gently cleanses impurities without stripping essential natural lipids.</li>
        <li>Restores and maintains the skin's protective barrier with 3 essential Ceramides.</li>
        <li>Hydrates dry, flaky skin immediately upon washing via Hyaluronic Acid.</li>
        <li>Fragrance-free, soap-free, and non-comedogenic (won't clog pores).</li>
        <li>Accepted by the National Eczema Association for ultra-gentle daily care.</li>
      </ul>

      <h3>Key Ingredients</h3>
      <ol>
        <li><strong>Ceramides NP, AP &amp; EOP:</strong> Essential lipids that replenish and fortify the skin's natural barrier.</li>
        <li><strong>Hyaluronic Acid (Sodium Hyaluronate):</strong> Attracts moisture to the skin's surface to keep it plump and hydrated.</li>
        <li><strong>Glycerin:</strong> Softens and conditions dry, rough patches during cleansing.</li>
      </ol>

      <h3>How to Use</h3>
      <ol>
        <li>Wet skin with lukewarm water.</li>
        <li>Massage a generous amount of cleanser onto your face in a gentle, circular motion.</li>
        <li>Rinse thoroughly with water and pat dry gently.</li>
      </ol>

      <div class="unified-note-box">
        <strong>Recommended Usage:</strong> Morning and night.<br>
        <strong>Important:</strong> Non-foaming creamy formula—this is normal and designed to protect dry skin. Avoid direct eye contact.
      </div>

      <h3>Product Details</h3>
      <ul>
        <li><strong>Brand:</strong> CeraVe</li>
        <li><strong>Product Type:</strong> Hydrating Lotion Cleanser</li>
        <li><strong>Skin Concern:</strong> Dryness, tightness, compromised skin barrier</li>
        <li><strong>Skin Type:</strong> Normal, Dry, and Sensitive skin</li>
        <li><strong>Texture:</strong> Creamy, non-foaming emulsion</li>
        <li><strong>Net Volume:</strong> 150ml</li>
      </ul>
    `,
    reviews: []
  },
  {
    id: 6,
    isHit: true,
    name: "Pixi Rose Tonic Nourishing & pH Balancing Facial Toner",
    category: "toner",
    categoryLabel: "Toner & Essence",
    concern: "brightening",
    volume: "150ml",
    skinType: "All Skin Types",
    regularPrice: 1450,
    salePrice: 1190,
    inStock: true,
    image: "product-6.jpg",
    gallery: ["product-6.jpg", "product-6-2.jpg"],
    description: "Alcohol-free Damascus rosewater and Niacinamide toner that calms redness, balances pH, and preps skin for serums.",
    fullDetails: `
      <p>Refresh, soothe, and rebalance your complexion after cleansing with <strong>Pixi Rose Tonic Nourishing &amp; pH Balancing Facial Toner</strong>. Infused with pure Damascus Rosewater, Elderflower, and Niacinamide, this alcohol-free botanical toner replenishes lost hydration and minimizes the look of redness.</p>
      <p>It restores your skin's optimal pH level right after washing so your serums and moisturizers absorb faster and work more effectively.</p>

      <h3>Key Benefits</h3>
      <ul>
        <li>Instantly calms skin redness, irritation, and post-wash tightness.</li>
        <li>Balances skin pH and gently refines pore appearance.</li>
        <li>Boosts hydration and preps skin for better serum absorption.</li>
        <li>100% alcohol-free and paraben-free—gentle enough for daily use.</li>
        <li>Leaves skin looking dewy, calm, and naturally radiant.</li>
      </ul>

      <h3>Key Ingredients</h3>
      <ol>
        <li><strong>Rosa Damascena (Damascus Rose) Flower Water:</strong> Naturally hydrates, soothes sensitivity, and tones skin.</li>
        <li><strong>Niacinamide (Vitamin B3):</strong> Brightens dull tone and strengthens the skin barrier.</li>
        <li><strong>Sodium Hyaluronate &amp; Panthenol:</strong> Deliver lightweight, refreshing moisture.</li>
      </ol>

      <h3>How to Use</h3>
      <ol>
        <li>Use morning and night immediately after cleansing your face.</li>
        <li>Saturate a cotton pad and sweep gently across face and neck, or pour a few drops into palms and pat directly into skin.</li>
        <li>Follow immediately with your serum and moisturizer while skin is still slightly damp.</li>
      </ol>

      <div class="unified-note-box">
        <strong>Recommended Usage:</strong> Twice daily (AM &amp; PM after cleansing).<br>
        <strong>Important:</strong> Perform a patch test before first use. Avoid direct contact with eyes. For external use only.
      </div>

      <h3>Product Details</h3>
      <ul>
        <li><strong>Brand:</strong> Pixi</li>
        <li><strong>Product Type:</strong> Hydrating &amp; Soothing Facial Toner</li>
        <li><strong>Skin Concern:</strong> Dehydration, redness, dullness, and pH imbalance</li>
        <li><strong>Skin Type:</strong> All skin types, including sensitive</li>
        <li><strong>Formula:</strong> Alcohol-Free &amp; Paraben-Free</li>
        <li><strong>Net Volume:</strong> 150ml</li>
      </ul>
    `,
    reviews: []
  },
  {
    id: 7,
    isHit: true,
    name: "Bioaqua 24K Gold & Rosewater Barrier Repair Gel Moisturizer",
    category: "moisturizer",
    categoryLabel: "Moisturizer & Night Gel",
    concern: "hydration",
    volume: "100g",
    skinType: "All Skin Types",
    regularPrice: 680,
    salePrice: 520,
    inStock: true,
    image: "product-7.jpg",
    gallery: ["product-7.jpg", "product-7-2.jpg"],
    description: "Cooling water-gel daily & overnight moisturizer enriched with 24K Gold essence, Rosewater, and Hyaluronic Acid.",
    fullDetails: `
      <p>Lock in 24-hour weightless hydration with <strong>Bioaqua 24K Gold &amp; Rosewater Barrier Repair Gel Moisturizer</strong>. Its refreshing, non-sticky aqua-gel texture bursts into moisture upon contact, quenching dehydrated skin without feeling heavy in humid weather.</p>
      <p>Enriched with micro-gold essence, Damascus Rosewater, and Sodium Hyaluronate, it repairs skin fatigue overnight and leaves a soft, glass-skin bounce.</p>

      <h3>Key Benefits</h3>
      <ul>
        <li>Delivers intense, long-lasting hydration without clogging pores or feeling greasy.</li>
        <li>Helps repair a dull, tired skin barrier overnight for a refreshed morning glow.</li>
        <li>Soothes dryness and smooths rough skin texture.</li>
        <li>Fast-absorbing cooling gel suitable for both oily and dry skin types.</li>
        <li>Doubles as a hydrating sleeping mask when applied in a slightly thicker layer at night.</li>
      </ul>

      <h3>Key Ingredients</h3>
      <ol>
        <li><strong>24K Colloidal Gold Essence:</strong> Helps revitalize dull skin and improve skin radiance and elasticity.</li>
        <li><strong>Rosa Damascena Flower Water:</strong> Calms, softens, and replenishes moisture balance.</li>
        <li><strong>Sodium Hyaluronate &amp; Betaine:</strong> Deeply hydrate and lock water into skin cells.</li>
        <li><strong>Allantoin:</strong> Soothes irritation and promotes smooth skin recovery.</li>
      </ol>

      <h3>How to Use</h3>
      <ol>
        <li>Apply after cleansing, toning, and applying your face serum.</li>
        <li>Take a coin-sized amount and dot evenly across forehead, cheeks, chin, and neck.</li>
        <li>Massage gently in upward circular motions until fully absorbed.</li>
        <li>In the daytime, follow with SPF 50+ sunscreen.</li>
      </ol>

      <div class="unified-note-box">
        <strong>Recommended Usage:</strong> Morning and night (or as an overnight sleeping gel).<br>
        <strong>Important:</strong> Perform a patch test before first use. Store in a cool, dry place away from direct sunlight.
      </div>

      <h3>Product Details</h3>
      <ul>
        <li><strong>Brand:</strong> Bioaqua</li>
        <li><strong>Product Type:</strong> Hydrating Gel Moisturizer / Night Gel</li>
        <li><strong>Skin Concern:</strong> Dehydration, dullness, fatigue, and dry patches</li>
        <li><strong>Skin Type:</strong> All skin types (Oily, Combination, Dry &amp; Normal)</li>
        <li><strong>Texture:</strong> Lightweight, non-sticky cooling water-gel</li>
        <li><strong>Net Weight:</strong> 100g</li>
      </ul>
    `,
    reviews: []
  },
  {
    id: 8,
    isHit: true,
    name: "MISSHA All Around Safe Block Aqua Sun Gel SPF 50+ PA++++",
    category: "sunscreen",
    categoryLabel: "Sunscreen",
    concern: "acne",
    volume: "50ml",
    skinType: "Oily, Combination & Sensitive",
    regularPrice: 1350,
    salePrice: 1120,
    inStock: true,
    image: "product-8.jpg",
    gallery: ["product-8.jpg", "product-8-2.jpg"],
    description: "Korean water-light aqua sun gel with cooling hydration, matte finish, and zero white cast for oily and acne-prone skin.",
    fullDetails: `
      <p>Experience weightless Korean sun protection with <strong>MISSHA All Around Safe Block Aqua Sun Gel SPF 50+ PA++++</strong>. Designed specifically for oily and combination skin, this refreshing water-gel sunscreen absorbs within seconds, leaving skin cool, hydrated, and comfortably matte.</p>
      <p>Infused with Glacial Water, Green Tea Extract, and Madecassoside, it prevents shine and protects against UV damage without clogging pores or causing breakouts.</p>

      <h3>Key Benefits</h3>
      <ul>
        <li>High-level SPF 50+ PA++++ protection against UVA &amp; UVB rays.</li>
        <li>Water-light aqua gel texture absorbs instantly with zero white cast or stickiness.</li>
        <li>Controls excess oil and keeps skin feeling fresh in hot, humid weather.</li>
        <li>Calms acne-prone and sensitive skin with Green Tea and Centella derivatives.</li>
        <li>Works seamlessly under makeup without pilling.</li>
      </ul>

      <h3>Key Ingredients</h3>
      <ol>
        <li><strong>Advanced Photostable UV Filters:</strong> Deliver reliable broad-spectrum protection against sunburn and photoaging.</li>
        <li><strong>Green Tea Leaf Extract (Camellia Sinensis):</strong> Rich in antioxidants to soothe oily skin and reduce excess sebum.</li>
        <li><strong>Niacinamide &amp; Madecassoside:</strong> Brighten skin tone and calm heat-induced inflammation.</li>
      </ol>

      <h3>How to Use</h3>
      <ol>
        <li>Use as the final step of your morning skincare routine.</li>
        <li>Apply two fingers' worth evenly onto face and neck 15 minutes before sun exposure.</li>
        <li>Pat gently until the watery gel melts smoothly into the skin.</li>
        <li>Reapply every 2–3 hours when outdoors.</li>
      </ol>

      <div class="unified-note-box">
        <strong>Recommended Usage:</strong> Every morning.<br>
        <strong>Important:</strong> Perform a patch test before first use. Avoid direct contact with eyes. For external use only.
      </div>

      <h3>Product Details</h3>
      <ul>
        <li><strong>Brand:</strong> MISSHA (Korea)</li>
        <li><strong>Product Type:</strong> Aqua Gel Sunscreen</li>
        <li><strong>Protection Level:</strong> SPF 50+ PA++++</li>
        <li><strong>Skin Type:</strong> Oily, Combination, and Acne-Prone skin</li>
        <li><strong>Finish:</strong> Refreshing soft-matte, zero white cast</li>
        <li><strong>Net Volume:</strong> 50ml</li>
      </ul>
    `,
    reviews: []
  },
  {
    id: 9,
    isHit: true,
    name: "The Ordinary Alpha Arbutin 2% + HA Dark Spot Corrector Serum",
    category: "serum",
    categoryLabel: "Face Serum",
    concern: "darkspot",
    volume: "30ml",
    skinType: "All Skin Types",
    regularPrice: 1580,
    salePrice: 1360,
    inStock: true,
    image: "product-9.jpg",
    gallery: ["product-9.jpg", "product-9-2.jpg"],
    description: "Concentrated 2% purified Alpha Arbutin supported with Hyaluronic Acid to fade stubborn dark spots, acne marks, and sun tan.",
    fullDetails: `
      <p>Fade stubborn dark spots, melasma patches, and post-acne hyperpigmentation with <strong>The Ordinary Alpha Arbutin 2% + HA Dark Spot Corrector Serum</strong>. Formulated with a high 2% concentration of purified Alpha Arbutin—a gold-standard brightening active—this serum targets uneven melanin production safely and effectively.</p>
      <p>Supported by next-generation Hyaluronic Acid for enhanced delivery, it visibly evens out skin tone and restores clarity without irritation.</p>

      <h3>Key Benefits</h3>
      <ul>
        <li>Visibly reduces stubborn dark spots, sun spots, and post-pimple marks.</li>
        <li>Promotes an even, clear, and luminous complexion across all skin tones.</li>
        <li>Hydrates deeply with multi-molecular Hyaluronic Acid to prevent dryness.</li>
        <li>Gentle, non-bleaching brightening formula safe for daily AM &amp; PM use.</li>
        <li>Lightweight water-based texture absorbs cleanly without residue.</li>
      </ul>

      <h3>Key Ingredients</h3>
      <ol>
        <li><strong>Alpha-Arbutin (2%):</strong> A purified biosynthetic brightening ingredient that minimizes the look of dark spots and uneven pigmentation.</li>
        <li><strong>Hydrolyzed Sodium Hyaluronate (Hyaluronic Acid):</strong> Enhances ingredient absorption while plumping skin with moisture.</li>
        <li><strong>Lactic Acid:</strong> Gently supports surface renewal for smoother, clearer skin.</li>
      </ol>

      <h3>How to Use</h3>
      <ol>
        <li>Cleanse and tone your face thoroughly.</li>
        <li>Apply 2–3 drops onto face in the morning and/or evening, focusing on areas with dark spots.</li>
        <li>Gently pat until absorbed, then follow with moisturizer.</li>
        <li>Always wear broad-spectrum SPF 50+ sunscreen during the daytime to prevent spots from returning.</li>
      </ol>

      <div class="unified-note-box">
        <strong>Recommended Usage:</strong> Morning and/or evening (SPF 50+ mandatory during daytime).<br>
        <strong>Important:</strong> Perform a patch test before first use. Avoid direct contact with eyes. For external use only.
      </div>

      <h3>Product Details</h3>
      <ul>
        <li><strong>Brand:</strong> The Ordinary</li>
        <li><strong>Product Type:</strong> Hyperpigmentation &amp; Dark Spot Serum</li>
        <li><strong>Skin Concern:</strong> Dark spots, acne marks, sun tan, and uneven pigmentation</li>
        <li><strong>Skin Type:</strong> All skin types</li>
        <li><strong>Key Actives:</strong> 2% Alpha Arbutin + Hyaluronic Acid</li>
        <li><strong>Net Volume:</strong> 30ml</li>
      </ul>
    `,
    reviews: []
  },
  {
    id: 10,
    isHit: true,
    name: "COSRX Salicylic Acid Daily Gentle Anti-Acne Cleanser",
    category: "cleanser",
    categoryLabel: "Face Wash & Cleanser",
    concern: "acne",
    volume: "120ml",
    skinType: "Oily, Combination & Acne-Prone",
    regularPrice: 1150,
    salePrice: 950,
    inStock: true,
    image: "product-10.jpg",
    gallery: ["product-10.jpg", "product-10-2.jpg"],
    description: "BHA-infused foaming cleanser with Salicylic Acid and Tea Tree Oil to unclog pores, clear blackheads, and prevent breakouts.",
    fullDetails: `
      <p>Keep pores clear and breakouts under control with <strong>COSRX Salicylic Acid Daily Gentle Anti-Acne Cleanser</strong>. Formulated with gentle BHA (Salicylic Acid) and botanical Tea Tree Leaf Oil, this rich micro-foam cleanser dissolves trapped sebum, dead skin cells, and blackheads deep inside pores.</p>
      <p>Unlike harsh acne washes, it balances oil removal with soothing botanicals so your skin feels purified, smooth, and comfortable after every wash.</p>

      <h3>Key Benefits</h3>
      <ul>
        <li>Unclogs congested pores and helps clear stubborn blackheads and whiteheads.</li>
        <li>Reduces excess oil and prevents recurring acne breakouts.</li>
        <li>Gently exfoliates dead skin cells for smoother skin texture.</li>
        <li>Calms active blemish redness with natural Tea Tree and Centella extracts.</li>
        <li>Creates a rich, creamy lather that rinses clean without residue.</li>
      </ul>

      <h3>Key Ingredients</h3>
      <ol>
        <li><strong>Salicylic Acid (BHA):</strong> Oil-soluble exfoliant that penetrates deep into pores to clear sebum and prevent blemishes.</li>
        <li><strong>Tea Tree Leaf Oil (Melaleuca Alternifolia):</strong> Naturally purifies and soothes acne-prone skin.</li>
        <li><strong>Willow Bark Water &amp; Glycerin:</strong> Gently refine skin texture while maintaining essential hydration.</li>
      </ol>

      <h3>How to Use</h3>
      <ol>
        <li>Dispense a moderate amount into wet hands and rub together to create a rich foam.</li>
        <li>Gently massage onto damp face, focusing on oily T-zone and breakout-prone areas, for 30–40 seconds.</li>
        <li>Rinse thoroughly with lukewarm water and follow with toner and moisturizer.</li>
      </ol>

      <div class="unified-note-box">
        <strong>Recommended Usage:</strong> Morning and evening (or once daily at night for dry-combination skin).<br>
        <strong>Important:</strong> Avoid eye and lip areas. Always apply SPF 50+ sunscreen during the day when using BHA products.
      </div>

      <h3>Product Details</h3>
      <ul>
        <li><strong>Brand:</strong> COSRX (Korea)</li>
        <li><strong>Product Type:</strong> BHA Anti-Acne Foaming Face Wash</li>
        <li><strong>Skin Concern:</strong> Acne, pimples, blackheads, whiteheads, and excess oil</li>
        <li><strong>Skin Type:</strong> Oily, Combination, and Acne-Prone skin</li>
        <li><strong>Key Active:</strong> Salicylic Acid (BHA) + Tea Tree Oil</li>
        <li><strong>Net Volume:</strong> 120ml</li>
      </ul>
    `,
    reviews: []
  },
  {
    id: 11,
    isHit: true,
    name: "ZELVIQO Complete Day-Glow Duo (Vitamin C Serum + SPF 50+ Sunscreen)",
    category: "combo",
    categoryLabel: "Combo Set",
    concern: "brightening",
    volume: "50ml + 60ml Full Set",
    skinType: "All Skin Types",
    regularPrice: 1680,
    salePrice: 1190,
    inStock: true,
    image: "product-11.jpg",
    gallery: ["product-11.jpg", "product-1.jpg", "product-11-2.jpg"],
    description: "Our #1 bestselling morning glow & sun shield bundle pairing Dr. Rashel Vitamin C Serum with Care & Repair SPF 50+ Sunscreen.",
    fullDetails: `
      <p>Unlock visible brightness and complete daily UV defense with the <strong>ZELVIQO Complete Day-Glow Duo</strong>. Dermatologists agree that pairing an antioxidant Vitamin C serum underneath a broad-spectrum SPF 50+ sunscreen boosts sun protection while accelerating the fading of dark spots and dullness.</p>
      <p>This curated 2-piece full-size bundle gives you everything needed for a luminous, protected daytime glow at an exclusive bundle savings.</p>

      <h3>What's Inside This Bundle</h3>
      <ul>
        <li><strong>1x Dr. Rashel Vitamin C Brightening &amp; Anti-Aging Face Serum (50ml):</strong> Brightens dullness, fades dark spots, and hydrates.</li>
        <li><strong>1x Care &amp; Repair UV Defense Matte Sunscreen SPF 50+ PA+++ (60ml):</strong> Shields skin with zero white cast and zero stickiness.</li>
      </ul>

      <h3>Key Benefits</h3>
      <ul>
        <li>Double antioxidant + UV shield action to prevent sun tan and pigmentation.</li>
        <li>Visibly brightens uneven skin tone within 14 days of consistent morning use.</li>
        <li>Lightweight, non-greasy textures tailored for humid weather.</li>
        <li>Save ৳490 compared to purchasing both full-size products individually.</li>
      </ul>

      <h3>How to Use</h3>
      <ol>
        <li><strong>Step 1 (Treat):</strong> After washing your face in the morning, apply 3–4 drops of Dr. Rashel Vitamin C Serum and massage until absorbed.</li>
        <li><strong>Step 2 (Protect):</strong> Apply 2 fingers' length of Care &amp; Repair SPF 50+ Sunscreen evenly over face and neck 15 minutes before going outside.</li>
      </ol>

      <div class="unified-note-box">
        <strong>Recommended Usage:</strong> Every morning.<br>
        <strong>Important:</strong> Perform a patch test before first use. For external use only.
      </div>

      <h3>Product Details</h3>
      <ul>
        <li><strong>Curated By:</strong> ZELVIQO Luxury Skin Care</li>
        <li><strong>Product Type:</strong> 2-Step Morning Brightening &amp; Sun Care Combo</li>
        <li><strong>Skin Concern:</strong> Dullness, sun tan, dark spots, and daily UV protection</li>
        <li><strong>Skin Type:</strong> Suitable for all skin types</li>
        <li><strong>Package Size:</strong> 2 Full-Size Products (50ml + 60ml)</li>
      </ul>
    `,
    reviews: []
  },
  {
    id: 12,
    isHit: true,
    name: "ZELVIQO Glass-Skin 3-Step Morning Routine Kit",
    category: "combo",
    categoryLabel: "Combo Set",
    concern: "brightening",
    volume: "3 Full-Size Products",
    skinType: "All Skin Types",
    regularPrice: 2370,
    salePrice: 1690,
    inStock: true,
    image: "product-12.jpg",
    gallery: ["product-12.jpg", "product-3.jpg", "product-12-2.jpg"],
    description: "Complete 3-step daily routine: Simple Refreshing Facial Wash + Dr. Rashel Vitamin C Serum + Care & Repair SPF 50+ Sunscreen.",
    fullDetails: `
      <p>Start your complete daily skincare ritual with the <strong>ZELVIQO Glass-Skin 3-Step Morning Routine Kit</strong>. Built around the three essential pillars of healthy skin—<strong>Cleanse, Treat, and Protect</strong>—this full-size set removes guesswork and delivers visible radiance.</p>
      <p>Gentle enough for daily use on all skin types, each product works in harmony to purify, brighten, and shield your complexion from morning to night.</p>

      <h3>What's Inside This 3-Step Kit</h3>
      <ul>
        <li><strong>Step 1 — Simple Kind to Skin Refreshing Facial Wash (150ml):</strong> Soap-free, gentle daily cleanser.</li>
        <li><strong>Step 2 — Dr. Rashel Vitamin C Brightening Face Serum (50ml):</strong> Potent glow and dark-spot serum.</li>
        <li><strong>Step 3 — Care &amp; Repair UV Defense Sunscreen SPF 50+ PA+++ (60ml):</strong> Lightweight, zero-white-cast sun protection.</li>
      </ul>

      <h3>Key Benefits</h3>
      <ul>
        <li>Complete head-to-toe morning routine in one value-packed box (Save ৳680).</li>
        <li>Cleanses without dryness, brightens dullness, and prevents UV damage.</li>
        <li>100% authentic, factory-sealed full-size products.</li>
        <li>Ideal starter kit for beginners seeking clear, glowing glass skin.</li>
      </ul>

      <h3>How to Use</h3>
      <ol>
        <li><strong>Step 1 (Cleanse):</strong> Wash face morning and night with Simple Refreshing Facial Wash and pat dry.</li>
        <li><strong>Step 2 (Treat):</strong> Apply 3–4 drops of Vitamin C Serum evenly across face and neck.</li>
        <li><strong>Step 3 (Protect):</strong> Every morning, apply Care &amp; Repair SPF 50+ Sunscreen 15 minutes before sun exposure.</li>
      </ol>

      <div class="unified-note-box">
        <strong>Recommended Usage:</strong> Daily Morning &amp; Night (Sunscreen for daytime only).<br>
        <strong>Important:</strong> Perform a patch test before first use. For external use only.
      </div>

      <h3>Product Details</h3>
      <ul>
        <li><strong>Curated By:</strong> ZELVIQO Luxury Skin Care</li>
        <li><strong>Product Type:</strong> Complete 3-Step Skincare Routine Kit</li>
        <li><strong>Skin Concern:</strong> Dullness, uneven tone, dehydration, and sun protection</li>
        <li><strong>Skin Type:</strong> All skin types, including sensitive</li>
        <li><strong>Package Size:</strong> 3 Full-Size Products (150ml + 50ml + 60ml)</li>
      </ul>
    `,
    reviews: []
  },
  // Additional 4 Category-Exclusive Products (Shown inside Categories & Search)
  {
    id: 13,
    isHit: false,
    name: "SKIN1004 Madagascar Centella Toning & Calming Toner",
    category: "toner",
    categoryLabel: "Toner & Essence",
    concern: "acne",
    volume: "120ml",
    skinType: "Sensitive, Oily & Acne-Prone",
    regularPrice: 1490,
    salePrice: 1240,
    inStock: true,
    image: "product-13.jpg",
    gallery: ["product-13.jpg", "product-13-2.jpg"],
    description: "Soothing Korean Centella Asiatica and PHA daily toner that calms acne redness, gently exfoliates, and repairs sensitive skin.",
    fullDetails: `
      <p>Calm irritated, breakout-prone skin with <strong>SKIN1004 Madagascar Centella Toning &amp; Calming Toner</strong>. Formulated with pure Centella Asiatica extract from Madagascar and mild PHA (Gluconolactone), it gently sweeps away dead skin cells while soothing redness and strengthening your skin barrier.</p>
      <p>Its watery, non-irritating texture absorbs immediately, making it safe even for sensitized or acne-inflamed skin.</p>

      <h3>Key Benefits</h3>
      <ul>
        <li>Instantly calms active acne redness, heat irritation, and sensitivity.</li>
        <li>Mild PHA gently exfoliates dead skin buildup without stinging or dryness.</li>
        <li>Restores healthy skin pH balance and boosts barrier resilience.</li>
        <li>Fragrance-free, alcohol-free, and non-comedogenic Korean formula.</li>
      </ul>

      <h3>Key Ingredients</h3>
      <ol>
        <li><strong>Madagascar Centella Asiatica Extract (84%):</strong> Renowned for rapid skin soothing, redness relief, and barrier repair.</li>
        <li><strong>Gluconolactone (PHA):</strong> A gentle, sensitive-skin-friendly exfoliating acid that smooths rough texture.</li>
        <li><strong>Niacinamide &amp; Hyaluronic Acid:</strong> Brighten post-acne marks and lock in weightless hydration.</li>
      </ol>

      <h3>How to Use</h3>
      <ol>
        <li>After cleansing, apply an appropriate amount onto a cotton pad or directly into your hands.</li>
        <li>Gently wipe or pat across face and neck following skin texture.</li>
        <li>Follow with your serum and moisturizer.</li>
      </ol>

      <div class="unified-note-box">
        <strong>Recommended Usage:</strong> Morning and night after cleansing.<br>
        <strong>Important:</strong> Perform a patch test before first use. Avoid direct contact with eyes. For external use only.
      </div>

      <h3>Product Details</h3>
      <ul>
        <li><strong>Brand:</strong> SKIN1004 (Korea)</li>
        <li><strong>Product Type:</strong> Soothing &amp; Gentle Exfoliating Toner</li>
        <li><strong>Skin Concern:</strong> Redness, sensitivity, rough texture, and acne-prone skin</li>
        <li><strong>Skin Type:</strong> Sensitive, Oily, Combination, and Normal skin</li>
        <li><strong>Net Volume:</strong> 120ml</li>
      </ul>
    `,
    reviews: []
  },
  {
    id: 14,
    isHit: false,
    name: "Neutrogena Hydro Boost Hyaluronic Acid Night Cream",
    category: "moisturizer",
    categoryLabel: "Moisturizer & Night Gel",
    concern: "hydration",
    volume: "50g",
    skinType: "Dry, Dehydrated & Normal",
    regularPrice: 1690,
    salePrice: 1420,
    inStock: true,
    image: "product-14.jpg",
    gallery: ["product-14.jpg", "product-14-2.jpg"],
    description: "Deep overnight moisture-locking cream with Purified Hyaluronic Acid, Ceramides, and Squalane for supple morning skin.",
    fullDetails: `
      <p>Wake up to plump, deeply hydrated, and velvety-soft skin with <strong>Neutrogena Hydro Boost Hyaluronic Acid Night Cream</strong>. Designed to replenish moisture lost during the day, this rich yet breathable night cream creates a protective hydration veil while you sleep.</p>
      <p>Powered by Purified Hyaluronic Acid, Ceramide NP, and plant-derived Squalane, it repairs dry, flaky patches without clogging pores.</p>

      <h3>Key Benefits</h3>
      <ul>
        <li>Delivers intense overnight hydration for dry and dehydrated skin.</li>
        <li>Strengthens the moisture barrier with Ceramides and Squalane.</li>
        <li>Smooths dryness lines and restores natural skin bounce by morning.</li>
        <li>Oil-free, non-comedogenic, and dermatologist-tested formula.</li>
      </ul>

      <h3>Key Ingredients</h3>
      <ol>
        <li><strong>Purified Hyaluronic Acid (Sodium Hyaluronate):</strong> Acts like a sponge for dry skin, binding up to 1000x its weight in water.</li>
        <li><strong>Ceramide NP &amp; Squalane:</strong> Seal in moisture and prevent overnight transepidermal water loss.</li>
        <li><strong>Shea Butter (Butyrospermum Parkii):</strong> Nourishes and softens rough, tight skin.</li>
      </ol>

      <h3>How to Use</h3>
      <ol>
        <li>Apply every evening as the final step of your nighttime skincare routine.</li>
        <li>Massage evenly over face and neck after applying your night serum.</li>
        <li>Leave on overnight to lock in hydration.</li>
      </ol>

      <div class="unified-note-box">
        <strong>Recommended Usage:</strong> Every night before sleep.<br>
        <strong>Important:</strong> Perform a patch test before first use. For external use only.
      </div>

      <h3>Product Details</h3>
      <ul>
        <li><strong>Brand:</strong> Neutrogena</li>
        <li><strong>Product Type:</strong> Overnight Barrier Repair Moisturizer</li>
        <li><strong>Skin Concern:</strong> Dryness, dehydration, flakiness, and dull morning skin</li>
        <li><strong>Skin Type:</strong> Dry, Normal, and Combination skin</li>
        <li><strong>Net Weight:</strong> 50g</li>
      </ul>
    `,
    reviews: []
  },
  {
    id: 15,
    isHit: false,
    name: "COSRX Advanced Snail 96 Mucin Power Repair Essence",
    category: "toner",
    categoryLabel: "Toner & Essence",
    concern: "darkspot",
    volume: "100ml",
    skinType: "All Skin Types",
    regularPrice: 1650,
    salePrice: 1390,
    inStock: true,
    image: "product-15.jpg",
    gallery: ["product-15.jpg", "product-15-2.jpg"],
    description: "Cult-favorite Korean essence formulated with 96.3% Snail Secretion Filtrate to repair damaged skin, fade acne scars, and boost glass-skin glow.",
    fullDetails: `
      <p>Repair, hydrate, and transform dull or damaged skin with the viral Korean icon—<strong>COSRX Advanced Snail 96 Mucin Power Repair Essence</strong>. Formulated with 96.3% nutrient-rich Snail Secretion Filtrate, this lightweight, fast-absorbing essence replenishes deep moisture, fades post-acne marks, and improves skin elasticity.</p>
      <p>Free from fragrances, parabens, and drying alcohols, it delivers an unmatched, healthy glass-skin glow for every skin type.</p>

      <h3>Key Benefits</h3>
      <ul>
        <li>Accelerates skin barrier repair and calms redness or sensitized skin.</li>
        <li>Helps fade post-acne scars, dark spots, and uneven texture.</li>
        <li>Provides deep, long-lasting hydration for a plump, dewy glass-skin finish.</li>
        <li>Cruelty-free collection process; 100% fragrance-free and hypoallergenic.</li>
      </ul>

      <h3>Key Ingredients</h3>
      <ol>
        <li><strong>Snail Secretion Filtrate (96.3%):</strong> Rich in natural glycoproteins, glycolic acid, and peptides that repair and hydrate skin.</li>
        <li><strong>Sodium Hyaluronate &amp; Betaine:</strong> Boost moisture retention and keep skin supple all day.</li>
        <li><strong>Panthenol &amp; Allantoin:</strong> Soothe irritation and reinforce the skin barrier.</li>
      </ol>

      <h3>How to Use</h3>
      <ol>
        <li>After cleansing and toning, dispense 1–2 pumps onto your fingertips.</li>
        <li>Apply evenly across your entire face and neck.</li>
        <li>Gently pat into skin using your fingertips until fully absorbed, then follow with moisturizer.</li>
      </ol>

      <div class="unified-note-box">
        <strong>Recommended Usage:</strong> Morning and night (after toner, before moisturizer).<br>
        <strong>Important:</strong> Perform a patch test before first use. For external use only.
      </div>

      <h3>Product Details</h3>
      <ul>
        <li><strong>Brand:</strong> COSRX (Korea)</li>
        <li><strong>Product Type:</strong> Hydrating &amp; Skin-Repairing Essence</li>
        <li><strong>Skin Concern:</strong> Damaged barrier, acne scars, dehydration, and dullness</li>
        <li><strong>Skin Type:</strong> All skin types, including sensitive and acne-prone</li>
        <li><strong>Net Volume:</strong> 100ml</li>
      </ul>
    `,
    reviews: []
  },
  {
    id: 16,
    isHit: false,
    name: "ZELVIQO Acne & Oil Control 3-Step Clear Skin Kit",
    category: "combo",
    categoryLabel: "Combo Set",
    concern: "acne",
    volume: "3 Full-Size Products",
    skinType: "Oily, Combination & Acne-Prone",
    regularPrice: 3880,
    salePrice: 2950,
    inStock: true,
    image: "product-16.jpg",
    gallery: ["product-16.jpg", "product-16-2.jpg", "product-16-3.jpg"],
    description: "Complete anti-acne & pore-refining kit: COSRX Salicylic Acid Cleanser + The Ordinary Niacinamide 10% Serum + MISSHA Aqua Sun Gel SPF 50+.",
    fullDetails: `
      <p>Conquer excess oil, clogged pores, and recurring breakouts with the <strong>ZELVIQO Acne &amp; Oil Control 3-Step Clear Skin Kit</strong>. Specially curated for oily and acne-prone skin in humid weather, this 3-piece clinical bundle targets blemishes at every step without over-drying.</p>
      <p>Each full-size product works together to deep-cleanse pores, regulate sebum production, fade acne marks, and provide matte UV protection.</p>

      <h3>What's Inside This Anti-Acne Kit</h3>
      <ul>
        <li><strong>Step 1 — COSRX Salicylic Acid Daily Gentle Cleanser (120ml):</strong> Unclogs pores &amp; clears blackheads.</li>
        <li><strong>Step 2 — The Ordinary Niacinamide 10% + Zinc 1% Serum (30ml):</strong> Controls oil &amp; minimizes pores.</li>
        <li><strong>Step 3 — MISSHA All Around Safe Block Aqua Sun Gel SPF 50+ PA++++ (50ml):</strong> Weightless, matte zero-white-cast sun shield.</li>
      </ul>

      <h3>Key Benefits</h3>
      <ul>
        <li>Complete targeted solution for oily, shiny, and breakout-prone skin (Save ৳930).</li>
        <li>Clears blackheads, shrinks pore appearance, and calms active blemishes.</li>
        <li>Oil-free, non-comedogenic formulas that never feel heavy or sticky.</li>
        <li>100% authentic, factory-sealed full-size products.</li>
      </ul>

      <h3>How to Use</h3>
      <ol>
        <li><strong>Step 1 (Cleanse):</strong> Wash face morning and night with COSRX Salicylic Acid Cleanser and rinse clean.</li>
        <li><strong>Step 2 (Treat):</strong> Pat 2–3 drops of Niacinamide 10% + Zinc 1% Serum onto dry skin.</li>
        <li><strong>Step 3 (Protect):</strong> Every morning, apply MISSHA Aqua Sun Gel SPF 50+ 15 minutes before sun exposure.</li>
      </ol>

      <div class="unified-note-box">
        <strong>Recommended Usage:</strong> Daily Morning &amp; Night (Sun Gel for daytime only).<br>
        <strong>Important:</strong> Perform a patch test before first use. For external use only.
      </div>

      <h3>Product Details</h3>
      <ul>
        <li><strong>Curated By:</strong> ZELVIQO Luxury Skin Care</li>
        <li><strong>Product Type:</strong> 3-Step Anti-Acne &amp; Oil Control Bundle</li>
        <li><strong>Skin Concern:</strong> Acne, pimples, blackheads, enlarged pores, and excess oil</li>
        <li><strong>Skin Type:</strong> Oily, Combination, and Acne-Prone skin</li>
        <li><strong>Package Size:</strong> 3 Full-Size Products (120ml + 30ml + 50ml)</li>
      </ul>
    `,
    reviews: []
  }
];

function getProducts() {
  return JSON.parse(localStorage.getItem("zelviqo_catalog_v4") || "null") || defaultProducts;
}

function saveProducts(list) {
  localStorage.setItem("zelviqo_catalog_v4", JSON.stringify(list));
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
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
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
    { id: 1, title: "Morning Vitamin C Glass-Skin Routine", img: "product-1.jpg", price: 620 },
    { id: 2, title: "Zero White-Cast Sunscreen Outdoor Test", img: "product-2.jpg", price: 680 },
    { id: 3, title: "Simple Facial Wash Gentle Foaming Demo", img: "product-3.jpg", price: 540 },
    { id: 11, title: "Complete Day-Glow Duo Unboxing", img: "product-11.jpg", price: 1190 }
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

// Full Product Detail Page (Unified Single-Page Layout — No Separate Tabs)
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

  // Unified Single-Page Details Block
  const unifiedHtml =
    product.fullDetails ||
    `
      <p>${product.description || "100% authentic imported skincare product."}</p>
      <h3>Key Ingredients</h3>
      <p>${product.ingredients || "Dermatologist-tested skin-safe ingredients."}</p>
      <h3>How to Use</h3>
      <p>${product.howToUse || "Apply gently on clean skin daily."}</p>
    `;

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

          <p style="font-size:13.5px; color:var(--text-muted); margin-bottom:16px;">${product.description}</p>

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

      <!-- Full Product Description, Key Benefits, Key Ingredients, How to Use & Product Details on Single Page -->
      <div class="unified-product-details">
        <h2 style="font-family:'Cormorant Garamond', serif; font-size:28px; color:var(--emerald-dark); margin-bottom:10px;">${product.name}</h2>
        ${unifiedHtml}
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
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;

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
  const title = document.getElementById("admProdName").value.trim();
  list.unshift({
    id: Date.now(),
    isHit: document.getElementById("admProdHit").checked,
    name: title,
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
    fullDetails: `<p><strong>${title}</strong> — 100% authentic imported skincare product.</p><h3>How to Use</h3><p>Apply daily on clean skin.</p>`,
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
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
}

function sendCustomWa() {
  const input = document.getElementById("waCustomMsg");
  const msg = input.value.trim();
  if (!msg) return;
  input.value = "";
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
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
