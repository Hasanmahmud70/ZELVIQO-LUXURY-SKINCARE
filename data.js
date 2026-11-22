/* ==========================================================================
   ZELVIQO — EASY WEBSITE CUSTOMIZATION FILE (data.js)
   --------------------------------------------------------------------------
   এই ফাইলটি এডিট করে আপনি ওয়েবসাইটের সব ছবি (Photo), প্রোডাক্টের নাম (Title),
   দাম (Price), বিবরণ (Details), ব্যানার, এবং ফোন/WhatsApp নম্বর পরিবর্তন করতে পারবেন।

   ছবি পরিবর্তনের নিয়ম (How to change photos):
   ১. আপনার ছবিগুলো 'images/' ফোল্ডারে রাখুন (যেমন: images/serum-1.jpg)
      অথবা যেকোনো অনলাইন ছবির লিংক (https://...) দিন।
   ২. নিচের 'image:' এর পাশে থাকা লিংকটি বদলে আপনার ছবির নাম দিন।
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. STORE SETTINGS, CONTACT & DELIVERY CHARGES (দোকানের তথ্য ও ডেলিভারি চার্জ)
   -------------------------------------------------------------------------- */
const SITE_CONFIG = {
  brandName: 'ZELVIQO',
  domain: 'zelviqo.online',
  hotlineDisplay: '+8801860821074',
  hotlineTel: '+8801860821074',
  whatsappNumber: '8801860821074', // Country code সহ, '+' ছাড়া
  email: 'support@zelviqo.online',
  location: 'Mirpur 11, Dhaka, Bangladesh',

  // Top Bar Texts
  announcementLeft: '100% Authentic Skincare',
  announcementCenter: 'Check Parcel Before You Pay (Cash on Delivery Nationwide)',

  // Delivery Fees (BDT)
  freeShippingThreshold: 2500, // কত টাকার উপরে অর্ডার করলে ফ্রি ডেলিভারি হবে
  insideDhakaFee: 60,          // ঢাকার ভিতরে ডেলিভারি চার্জ
  outsideDhakaFee: 120,        // ঢাকার বাইরে ডেলিভারি চার্জ

  // Footer Bio & Social Links
  footerBio: 'ZELVIQO brings clinical-botanical luxury skincare tailored specifically for Bangladeshi skin and weather. Every order comes with authenticity assurance and open-parcel Cash on Delivery nationwide.',
  socialLinks: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com',
    youtube: 'https://youtube.com'
  },

  // Footer Popup Information
  aboutText: 'ZELVIQO (zelviqo.online) is a Bangladeshi clinical-botanical skincare house dedicated to bringing dermatologist-inspired, authentic formulas tailored for South Asian skin and humid weather. Every parcel is shipped with open-box inspection so you pay only after verifying your items.',
  faqText: '1. Are all ZELVIQO products authentic? Yes, 100% batch-verified original products.\n2. How does Check Before You Pay work? You can inspect the outer packaging and product seal in front of the rider before paying Cash on Delivery.\n3. Delivery Timeline: 24–48 hours inside Dhaka, 48–72 hours outside Dhaka.',
  refundPolicy: 'We offer a 7-day hassle-free replacement or refund if you receive a damaged, leaked, or incorrect item. Please inspect your parcel in front of the delivery agent upon arrival or record an unboxing video for instant resolution via +8801860821074.',
  shippingPolicy: 'Inside Dhaka: Tk 60 (24–48 hours). Outside Dhaka: Tk 120 (48–72 hours via Steadfast / Pathao / RedX). Enjoy FREE Nationwide Delivery on all orders of Tk 2,500 or above!',
  privacyPolicy: 'Your name, phone number, and delivery address are used strictly to fulfill and deliver your ZELVIQO order. We never sell or share customer data with third parties.',
  termsPolicy: 'All prices on zelviqo.online are listed in Bangladeshi Taka (BDT). Orders confirmed via Cash on Delivery are dispatched within 24 hours after phone/WhatsApp verification.'
};

/* --------------------------------------------------------------------------
   2. HERO BANNER SLIDES (হোমপেজের উপরের বড় ৩টি স্লাইড ব্যানার)
   -------------------------------------------------------------------------- */
const HERO_SLIDES = [
  {
    badge: 'Clinical-Botanical Luxury • Formulated for Bangladesh',
    title: 'Radiant, Resilient Skin Engineered for Our Climate.',
    subtitle: 'Dermatologist-inspired serums, zero-white-cast SPF 50+, and targeted melasma solutions—delivered nationwide with Open-Parcel Cash on Delivery.',
    primaryCtaText: 'Shop Best Sellers',
    primaryAction: "scrollToSection('best-sellers')",
    secondaryCtaText: 'Explore Value Combos',
    secondaryAction: "scrollToSection('combo-offers')",
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1000&q=85', // <-- এখান থেকে ব্যানার ১ এর ছবি বদলান
    floatingTag: 'SPF 50+ & Melasma Care',
    floatingSub: 'Check parcel before paying'
  },
  {
    badge: 'Save up to ৳1,100 • Curated 3 & 4-Step Rituals',
    title: 'Complete Skin Transformation Combos.',
    subtitle: 'Stop guessing which products layer together. Our clinical combos pair active serums with barrier-repair moisturizers and broad-spectrum UV shields.',
    primaryCtaText: 'Shop Combo Offers',
    primaryAction: "scrollToSection('combo-offers')",
    secondaryCtaText: 'Take Concern Guide',
    secondaryAction: "scrollToSection('skin-concerns')",
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1000&q=85', // <-- ব্যানার ২ এর ছবি
    floatingTag: 'Student & Signature Combos',
    floatingSub: 'Free delivery over Tk 2,500'
  },
  {
    badge: 'Zero White Cast • Sweat & Humidity Resistant',
    title: 'Invisible Sun Protection That Repairs Your Barrier.',
    subtitle: 'Enriched with Centella Asiatica and Ceramides, ZELVIQO Care & Repair Sunscreen protects against harsh tropical UV rays without clogging pores.',
    primaryCtaText: 'Shop Sunscreens',
    primaryAction: "applyCategoryFilter('Sunscreens')",
    secondaryCtaText: 'View New Arrivals',
    secondaryAction: "scrollToSection('new-arrivals')",
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=85', // <-- ব্যানার ৩ এর ছবি
    floatingTag: 'PA++++ Broad Spectrum',
    floatingSub: '100% Authentic Guaranteed'
  }
];

/* --------------------------------------------------------------------------
   3. PRODUCT CATALOG (সব প্রোডাক্টের ছবি, নাম, দাম ও বিস্তারিত তথ্য)
   --------------------------------------------------------------------------
   নতুন প্রোডাক্ট যোগ করতে চাইলে নিচের যেকোনো একটি { ... }, ব্লক কপি করে পেস্ট করুন
   এবং id (যেমন: 'zlv-14') পরিবর্তন করে দিন।
   -------------------------------------------------------------------------- */
const PRODUCTS = [
  // --- PRODUCT 1 ---
  {
    id: 'zlv-01',
    title: 'Dr Rashel Vitamin C Brightening & Anti-Aging Serum',
    tagline: 'Fades dark spots & boosts natural collagen radiance',
    category: 'Serums',
    subCategories: ['Face Care', 'Serums'],
    concerns: ['Dark Spots', 'Dull & Uneven Skin'],
    tags: ['New Arrival', 'Best Seller'], // 'New Arrival' দিলে New Arrivals সেকশনে দেখাবে
    regularPrice: 1450,
    salePrice: 1090,
    rating: 4.9,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80', // <-- প্রোডাক্টের ছবি (যেমন: 'images/vit-c.jpg')
    ingredients: '20% Stabilized Vitamin C, Hyaluronic Acid, Ferulic Acid, Botanical Amino Complex',
    skinType: 'All Skin Types (Especially Dull & Uneven Tone)',
    usage: 'Apply 3–4 drops on cleansed face every morning before sunscreen and at night before moisturizer.'
  },

  // --- PRODUCT 2 ---
  {
    id: 'zlv-02',
    title: 'ZELVIQO Care & Repair Sunscreen SPF 50+ PA++++',
    tagline: 'Zero-white-cast broad-spectrum UV & barrier shield',
    category: 'Sunscreens',
    subCategories: ['Face Care', 'Sunscreens'],
    concerns: ['Sunburn & Tan', 'Melasma & Pigmentation'],
    tags: ['New Arrival', 'Best Seller'],
    regularPrice: 1690,
    salePrice: 1290,
    rating: 5.0,
    reviews: 418,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    ingredients: 'Centella Asiatica (Cica), Niacinamide 3%, Ceramide NP, Tinosorb S & Uvinul A Plus',
    skinType: 'Oily, Combination & Sensitive Skin (Humid Climate Tested)',
    usage: 'Apply two finger-lengths evenly on face and neck 15 minutes before sun exposure. Reapply every 3 hours outdoors.'
  },

  // --- PRODUCT 3 ---
  {
    id: 'zlv-03',
    title: 'ZELVIQO Melasma & Stubborn Spot Brightening Serum',
    tagline: 'Targeted alpha arbutin & tranexamic acid complex',
    category: 'Serums',
    subCategories: ['Face Care', 'Serums'],
    concerns: ['Melasma & Pigmentation', 'Dark Spots'],
    tags: ['New Arrival', 'Best Seller'],
    regularPrice: 2150,
    salePrice: 1690,
    rating: 4.9,
    reviews: 289,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
    ingredients: 'Alpha Arbutin 2%, Tranexamic Acid 3%, Kojic Dipalmitate, Licorice Root Extract',
    skinType: 'Pigmented, Sun-Damaged & Uneven Skin',
    usage: 'Use nightly on affected areas or full face. Always pair with SPF 50+ sunscreen during daytime.'
  },

  // --- PRODUCT 4 ---
  {
    id: 'zlv-04',
    title: 'Hydra Boost Ceramide Barrier Repair Night Cream',
    tagline: '72-hour deep hydration & overnight skin barrier recovery',
    category: 'Night Creams',
    subCategories: ['Face Care', 'Night Creams'],
    concerns: ['Dull & Uneven Skin', 'Sunburn & Tan'],
    tags: ['New Arrival'],
    regularPrice: 1890,
    salePrice: 1490,
    rating: 4.8,
    reviews: 196,
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=80',
    ingredients: '5-Ceramide Complex, Panthenol (Vitamin B5), Squalane, Madecassoside',
    skinType: 'Dry, Compromised, Dehydrated & Sensitive Skin',
    usage: 'Massage a pearl-sized amount onto face and neck as the final step of your evening skincare routine.'
  },

  // --- PRODUCT 5 ---
  {
    id: 'zlv-05',
    title: 'Pore Minimizing Niacinamide 10% + Zinc PCA Serum',
    tagline: 'Controls excess sebum, tightens pores & calms breakouts',
    category: 'Serums',
    subCategories: ['Face Care', 'Serums'],
    concerns: ['Oily Skin & Open Pores', 'Acne & Pimples'],
    tags: ['New Arrival', 'Best Seller'],
    regularPrice: 1590,
    salePrice: 1190,
    rating: 4.9,
    reviews: 375,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=800&q=80',
    ingredients: 'Niacinamide 10%, Zinc PCA 1%, Salicylic Betaine, Green Tea Polyphenols',
    skinType: 'Oily, Acne-Prone & Enlarged Pore Skin',
    usage: 'Apply 2–3 drops morning and night after cleansing and toning.'
  },

  // --- PRODUCT 6 (COMBO) ---
  {
    id: 'zlv-06',
    title: 'Student Glow & Basic Daily Care Combo (3-in-1)',
    tagline: 'Gentle Cleanser + Vitamin C Serum + SPF 50+ Sunscreen',
    category: 'Combo Offers',
    subCategories: ['Combo Offers', 'Face Care'],
    concerns: ['Dull & Uneven Skin', 'Sunburn & Tan'],
    tags: ['Combo', 'Best Seller'],
    regularPrice: 3250,
    salePrice: 2490,
    rating: 5.0,
    reviews: 512,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
    ingredients: 'Amino Gentle Face Wash (100ml) + Vitamin C Serum (30ml) + Care & Repair SPF 50+ (50ml)',
    skinType: 'All Skin Types — Ideal Starter Routine',
    usage: 'Morning: Cleanse -> Vitamin C Serum -> SPF 50+. Night: Cleanse -> Vitamin C Serum.'
  },

  // --- PRODUCT 7 (COMBO) ---
  {
    id: 'zlv-07',
    title: 'Essential Melasma & Dark Spot Eradication Combo',
    tagline: 'Melasma Serum + Barrier Night Cream + SPF 50+ Shield',
    category: 'Combo Offers',
    subCategories: ['Combo Offers', 'Face Care'],
    concerns: ['Melasma & Pigmentation', 'Dark Spots'],
    tags: ['Combo'],
    regularPrice: 4490,
    salePrice: 3590,
    rating: 4.9,
    reviews: 264,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    ingredients: 'Melasma Brightening Serum + Hydra Boost Night Cream + Care & Repair SPF 50+ PA++++',
    skinType: 'Melasma, Freckles & Stubborn Hyperpigmentation',
    usage: 'AM: Sunscreen SPF 50+. PM: Melasma Serum followed by Hydra Boost Repair Cream.'
  },

  // --- PRODUCT 8 (COMBO) ---
  {
    id: 'zlv-08',
    title: 'Ultimate Acne & Open Pore Control Combo',
    tagline: 'Salicylic Cleanser + Niacinamide 10% + Oil-Free SPF',
    category: 'Combo Offers',
    subCategories: ['Combo Offers', 'Face Care'],
    concerns: ['Acne & Pimples', 'Oily Skin & Open Pores'],
    tags: ['Combo'],
    regularPrice: 3890,
    salePrice: 2990,
    rating: 4.8,
    reviews: 310,
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80',
    ingredients: 'BHA Purifying Gel Cleanser + Niacinamide 10% Zinc Serum + Matte Defense SPF 50+',
    skinType: 'Oily, Combination & Acne-Prone Skin',
    usage: 'Cleanse twice daily, apply Niacinamide Serum AM & PM, and protect with Matte SPF every morning.'
  },

  // --- PRODUCT 9 (COMBO) ---
  {
    id: 'zlv-09',
    title: 'Signature Glass-Skin Brightening & Body Glow Combo',
    tagline: '4-Piece Complete Face & Body Radiance Ritual',
    category: 'Combo Offers',
    subCategories: ['Combo Offers', 'Body Care'],
    concerns: ['Dull & Uneven Skin', 'Body Brightening', 'Dark Spots'],
    tags: ['Combo'],
    regularPrice: 5450,
    salePrice: 4350,
    rating: 5.0,
    reviews: 185,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80',
    ingredients: 'Vitamin C Serum + Gluta-Berry Body Serum + Night Radiance Cream + SPF 50+ Sunscreen',
    skinType: 'All Skin Types Seeking Full-Body Luminosity',
    usage: 'Complete morning-to-night face and body brightening protocol.'
  },

  // --- PRODUCT 10 ---
  {
    id: 'zlv-10',
    title: 'ZELVIQO Gluta-Berry Body Brightening Serum Lotion',
    tagline: 'Evens body tan, dark elbows & neck discoloration',
    category: 'Body Care',
    subCategories: ['Body Care'],
    concerns: ['Body Brightening', 'Sunburn & Tan'],
    tags: ['Best Seller'],
    regularPrice: 2190,
    salePrice: 1750,
    rating: 4.9,
    reviews: 230,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80',
    ingredients: 'Glutathione, Mulberry Extract, Niacinamide 5%, Shea & Vitamin E',
    skinType: 'All Body Skin Types',
    usage: 'Apply generously after shower on damp skin, focusing on neck, arms, knees, and elbows.'
  },

  // --- PRODUCT 11 ---
  {
    id: 'zlv-11',
    title: 'Peptide & Caffeine Dark Circle Revival Eye Serum',
    tagline: 'Depuffs tired under-eyes & brightens stubborn dark circles',
    category: 'Eye Care',
    subCategories: ['Eye Care', 'Lip & Eye Care'],
    concerns: ['Dark Circles'],
    tags: ['Best Seller'],
    regularPrice: 1490,
    salePrice: 1150,
    rating: 4.8,
    reviews: 164,
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=800&q=80',
    ingredients: 'Caffeine 5%, Acetyl Tetrapeptide-5, Haloxyl, Hyaluronic Acid',
    skinType: 'Delicate Under-Eye Area',
    usage: 'Gently tap half a drop around the orbital bone using your ring finger morning and night.'
  },

  // --- PRODUCT 12 ---
  {
    id: 'zlv-12',
    title: 'Rosehip & Ceramide Lip Sleeping & Pink Tint Balm',
    tagline: 'Repairs chapped lips & lightens dark lip pigmentation',
    category: 'Lip Care',
    subCategories: ['Lip Care', 'Lip & Eye Care'],
    concerns: ['Dull & Uneven Skin'],
    tags: ['Best Seller'],
    regularPrice: 990,
    salePrice: 790,
    rating: 4.9,
    reviews: 295,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    ingredients: 'Cold-Pressed Rosehip Oil, Shea Butter, Vitamin E, Beetroot Peptide Complex',
    skinType: 'Dry, Pigmented or Chapped Lips',
    usage: 'Apply a thick layer overnight as a lip mask or a thin coat during the day.'
  },

  // --- PRODUCT 13 ---
  {
    id: 'zlv-13',
    title: 'Botanical Amino Acid & Salicylic Gentle Face Cleanser',
    tagline: 'Deep-cleanses pores without stripping natural moisture',
    category: 'Cleansers & Soaps',
    subCategories: ['Cleansers & Soaps', 'Face Care'],
    concerns: ['Acne & Pimples', 'Oily Skin & Open Pores'],
    tags: ['Best Seller'],
    regularPrice: 1150,
    salePrice: 890,
    rating: 4.9,
    reviews: 211,
    image: 'https://images.unsplash.com/photo-1556228852-80b6e5eeff06?auto=format&fit=crop&w=800&q=80',
    ingredients: 'Amino Surfactants, BHA 0.5%, Chamomile Hydrosol, Glycerin',
    skinType: 'All Skin Types including Sensitive & Acne-Prone',
    usage: 'Lather onto damp skin for 30 seconds and rinse with lukewarm water morning and evening.'
  }
];

/* --------------------------------------------------------------------------
   4. SHOP BY CATEGORIES (৮টি ক্যাটাগরি কার্ড ও ছবি)
   -------------------------------------------------------------------------- */
const CATEGORIES = [
  { name: 'New Arrivals', filterType: 'tag', filterValue: 'New Arrival', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80' },
  { name: 'Best Selling', filterType: 'tag', filterValue: 'Best Seller', image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=400&q=80' },
  { name: 'Serums', filterType: 'category', filterValue: 'Serums', image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=400&q=80' },
  { name: 'Sunscreens', filterType: 'category', filterValue: 'Sunscreens', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80' },
  { name: 'Night Creams', filterType: 'category', filterValue: 'Night Creams', image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&q=80' },
  { name: 'Combo Offers', filterType: 'category', filterValue: 'Combo Offers', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=400&q=80' },
  { name: 'Body Care', filterType: 'category', filterValue: 'Body Care', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=400&q=80' },
  { name: 'Lip & Eye Care', filterType: 'category', filterValue: 'Lip & Eye Care', image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=400&q=80' }
];

/* --------------------------------------------------------------------------
   5. FEATURED COLLECTIONS SPOTLIGHT (৩টি বড় কালেকশন কার্ড)
   -------------------------------------------------------------------------- */
const FEATURED_COLLECTIONS = [
  {
    eyebrow: 'Daily Radiance',
    title: 'Face Care Essentials',
    description: 'Targeted serums & barrier creams for glass skin.',
    filterCategory: 'Face Care',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80'
  },
  {
    eyebrow: 'SPF 50+ PA+++',
    title: 'Sun Protection & Repair',
    description: 'Zero-white-cast UV shields built for tropical heat.',
    filterCategory: 'Sunscreens',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80'
  },
  {
    eyebrow: 'Full Body Glow',
    title: 'Body & Sensitive Care',
    description: 'Nourishing body serums, scrubs & delicate care.',
    filterCategory: 'Body Care',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=80'
  }
];

/* --------------------------------------------------------------------------
   6. SKIN CONCERNS, VIDEO REELS, REVIEWS & GUIDES
   -------------------------------------------------------------------------- */
const SKIN_CONCERNS = [
  'Melasma & Pigmentation',
  'Acne & Pimples',
  'Dark Spots',
  'Sunburn & Tan',
  'Oily Skin & Open Pores',
  'Dull & Uneven Skin',
  'Dark Circles',
  'Body Brightening'
];

const VIDEO_REELS = [
  {
    id: 'vid-1',
    title: 'Water-Gel Texture Test: Care & Repair SPF 50+',
    duration: '0:28',
    views: '18.4K',
    thumbnail: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    productId: 'zlv-02',
    caption: 'Watch how fast our Centella SPF 50+ melts into oily skin with zero white cast or greasiness!'
  },
  {
    id: 'vid-2',
    title: 'How to Layer Melasma Serum at Night',
    duration: '0:35',
    views: '24.1K',
    thumbnail: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80',
    productId: 'zlv-03',
    caption: '2% Alpha Arbutin + Tranexamic Acid absorbs within 10 seconds to target stubborn pigmentation.'
  },
  {
    id: 'vid-3',
    title: 'Morning Glass-Skin Vitamin C Routine',
    duration: '0:22',
    views: '31.9K',
    thumbnail: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
    productId: 'zlv-01',
    caption: '3 drops of stabilized Vitamin C before sunscreen gives instant antioxidant glow.'
  },
  {
    id: 'vid-4',
    title: 'Unboxing: Student Glow & Basic 3-in-1 Combo',
    duration: '0:41',
    views: '15.2K',
    thumbnail: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80',
    productId: 'zlv-06',
    caption: 'Everything you need for a complete morning & night routine at an unbeatable bundle price.'
  }
];

const CUSTOMER_REVIEWS = [
  {
    name: 'Tasnim Rahman',
    location: 'Dhanmondi, Dhaka',
    product: 'ZELVIQO Melasma Brightening Serum',
    rating: 5,
    text: 'গালে মেছতার দাগ নিয়ে অনেকদিন ধরে চিন্তিত ছিলাম। ৩ সপ্তাহ নিয়মিত রাতে ব্যবহার করার পর দাগগুলো অনেকটাই হালকা হয়ে এসেছে। প্যাকেজিং ও ডেলিভারি সার্ভিস দারুণ!'
  },
  {
    name: 'Farhana Yasmin',
    location: 'Halishahar, Chattogram',
    product: 'Care & Repair Sunscreen SPF 50+',
    rating: 5,
    text: 'Finally a sunscreen in Bangladesh that does not make my oily T-zone sweat or leave a grey cast! Loved that I could check the sealed box before paying the rider.'
  },
  {
    name: 'Sadia Afrin',
    location: 'Zindabazar, Sylhet',
    product: 'Student Glow & Basic Combo',
    rating: 5,
    text: 'ভার্সিটির রোদে স্কিন একদম ডাল হয়ে গিয়েছিল। স্টুডেন্ট কম্বোটা নেওয়ার পর ফেসওয়াশ, সিরাম আর সানস্ক্রিন একসাথে পেয়ে বাজেটের মধ্যে সেরা রেজাল্ট পেয়েছি।'
  },
  {
    name: 'Nusrat Jahan',
    location: 'Sadar Road, Barishal',
    product: 'Pore Minimizing Niacinamide 10%',
    rating: 5,
    text: 'Open pores and forehead bumps reduced noticeably within 2 weeks. Very lightweight watery texture and 100% authentic product from ZELVIQO.'
  }
];

const CONCERN_GUIDES = [
  {
    concern: 'Melasma & Stubborn Pigmentation',
    summary: 'Melasma is triggered by UV exposure, heat, and hormonal shifts. Consistency with tyrosinase inhibitors and strict daily SPF is key.',
    steps: 'Step 1: Gentle Amino Cleanser → Step 2: Melasma Brightening Serum (PM) → Step 3: Ceramide Repair Cream → Step 4: Care & Repair SPF 50+ every morning.',
    recommendedProductId: 'zlv-07'
  },
  {
    concern: 'Acne Marks & Post-Blemish Dark Spots',
    summary: 'After pimples heal, inflammation leaves behind dark marks. Pairing Niacinamide with Vitamin C accelerates cell turnover safely.',
    steps: 'Step 1: Salicylic Gentle Cleanser → Step 2: Vitamin C Serum (AM) / Niacinamide 10% (PM) → Step 3: Non-comedogenic Sunscreen.',
    recommendedProductId: 'zlv-08'
  },
  {
    concern: 'Blackheads, Excess Oil & Open Pores',
    summary: 'Humid weather increases sebum production, stretching pores. Sebum-regulating Zinc PCA and Niacinamide refine pore appearance without over-drying.',
    steps: 'Step 1: Amino & BHA Cleanser → Step 2: Niacinamide 10% + Zinc PCA Serum → Step 3: Lightweight Gel Barrier Moisturizer.',
    recommendedProductId: 'zlv-05'
  },
  {
    concern: 'Sun Damage, Tanning & Barrier Sensitivity',
    summary: 'Unprotected sun exposure weakens the skin barrier and causes redness. Soothing Centella and 5-Ceramide complexes restore resilience.',
    steps: 'Step 1: Hydrating Cleanser → Step 2: Care & Repair SPF 50+ PA++++ (reapply every 3 hours) → Step 3: Hydra Boost Night Cream.',
    recommendedProductId: 'zlv-02'
  },
  {
    concern: 'Body Tan, Dark Neck & Underarm Brightening',
    summary: 'Body skin is thicker and requires targeted glutathione and botanical fruit-acid nourishment to fade uneven tan safely.',
    steps: 'Step 1: Daily Shower → Step 2: Apply Gluta-Berry Body Brightening Serum Lotion on damp skin morning and night.',
    recommendedProductId: 'zlv-10'
  }
];
