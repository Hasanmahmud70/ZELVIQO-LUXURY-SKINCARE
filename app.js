/* ==========================================================================
   ZELVIQO — CORE APPLICATION LOGIC (app.js)
   Reads all products, images, prices & settings from data.js automatically.
   ========================================================================== */

const STORAGE_KEY = 'zelviqo_cart_v1';
const FREE_SHIPPING_THRESHOLD = SITE_CONFIG.freeShippingThreshold || 2500;
const INSIDE_DHAKA_FEE = SITE_CONFIG.insideDhakaFee ?? 60;
const OUTSIDE_DHAKA_FEE = SITE_CONFIG.outsideDhakaFee ?? 120;

let cart = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let currentHeroIndex = 0;
let heroInterval = null;

function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  updateCartUI();
}

function formatBDT(amount) {
  return 'Tk ' + Number(amount).toLocaleString('en-BD');
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const msgEl = document.getElementById('toast-message');
  msgEl.textContent = message;
  toast.classList.remove('opacity-0', 'translate-y-3');
  toast.classList.add('opacity-100', 'translate-y-0');

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-3');
    toast.classList.remove('opacity-100', 'translate-y-0');
  }, 2600);
}

/* ---------------------------------------------------------
   1. APPLY SITE_CONFIG TO HEADER, FOOTER & DRAWERS
---------------------------------------------------------- */
function applySiteConfig() {
  // Announcement Bar
  const annBar = document.getElementById('announcement-bar-content');
  if (annBar) {
    annBar.innerHTML = `
      <span class="inline-flex items-center gap-1.5 font-medium">
        <span class="w-1.5 h-1.5 rounded-full bg-champagne inline-block"></span>
        ${SITE_CONFIG.announcementLeft}
      </span>
      <span class="hidden sm:inline text-white/40">|</span>
      <span class="font-medium text-champagne-light">${SITE_CONFIG.announcementCenter}</span>
      <span class="hidden md:inline text-white/40">|</span>
      <a href="tel:${SITE_CONFIG.hotlineTel}" class="font-semibold hover:text-champagne transition-colors">Hotline: ${SITE_CONFIG.hotlineDisplay}</a>
    `;
  }

  // Footer Bio & Contact
  const footerBio = document.getElementById('footer-bio-text');
  if (footerBio) footerBio.textContent = SITE_CONFIG.footerBio;

  const footerContact = document.getElementById('footer-contact-details');
  if (footerContact) {
    footerContact.innerHTML = `
      <p class="flex items-center gap-2.5 text-white/85">
        <span class="text-[#D4AF63] font-semibold">Hotline:</span>
        <a href="tel:${SITE_CONFIG.hotlineTel}" class="hover:text-[#D4AF63] transition-colors">${SITE_CONFIG.hotlineDisplay}</a>
      </p>
      <p class="flex items-center gap-2.5 text-white/85">
        <span class="text-[#D4AF63] font-semibold">Email:</span>
        <a href="mailto:${SITE_CONFIG.email}" class="hover:text-[#D4AF63] transition-colors">${SITE_CONFIG.email}</a>
      </p>
      <p class="flex items-start gap-2.5 text-white/85">
        <span class="text-[#D4AF63] font-semibold">Location:</span>
        <span>${SITE_CONFIG.location}</span>
      </p>
    `;
  }

  // Social Links
  const socialContainer = document.getElementById('footer-social-links');
  if (socialContainer && SITE_CONFIG.socialLinks) {
    socialContainer.innerHTML = `
      <a href="${SITE_CONFIG.socialLinks.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-9 h-9 rounded-full bg-white/10 hover:bg-champagne hover:text-charcoal flex items-center justify-center transition-colors">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
      </a>
      <a href="${SITE_CONFIG.socialLinks.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-9 h-9 rounded-full bg-white/10 hover:bg-champagne hover:text-charcoal flex items-center justify-center transition-colors">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
      </a>
      <a href="${SITE_CONFIG.socialLinks.tiktok}" target="_blank" rel="noopener noreferrer" aria-label="TikTok" class="w-9 h-9 rounded-full bg-white/10 hover:bg-champagne hover:text-charcoal flex items-center justify-center transition-colors">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/></svg>
      </a>
      <a href="${SITE_CONFIG.socialLinks.youtube}" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="w-9 h-9 rounded-full bg-white/10 hover:bg-champagne hover:text-charcoal flex items-center justify-center transition-colors">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
      </a>
    `;
  }

  // Mobile WhatsApp & Drawer Contact
  const mobileWa = document.getElementById('mobile-whatsapp-link');
  if (mobileWa) {
    mobileWa.href = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello ' + SITE_CONFIG.brandName + '! I need help choosing skincare.')}`;
  }

  const mobileDrawerFooter = document.getElementById('mobile-drawer-footer');
  if (mobileDrawerFooter) {
    mobileDrawerFooter.innerHTML = `
      <p class="font-semibold text-charcoal">Need Skincare Advice?</p>
      <a href="tel:${SITE_CONFIG.hotlineTel}" class="block text-emerald-brand font-semibold">${SITE_CONFIG.hotlineDisplay}</a>
      <p>${SITE_CONFIG.location}</p>
    `;
  }

  const copyrightEl = document.getElementById('footer-copyright');
  if (copyrightEl) {
    copyrightEl.innerHTML = `&copy; 2026 ${SITE_CONFIG.brandName} (${SITE_CONFIG.domain}). All rights reserved.`;
  }
}

/* ---------------------------------------------------------
   2. HERO SLIDER RENDERING & CONTROLS
---------------------------------------------------------- */
function renderHeroDots() {
  const dotsEl = document.getElementById('hero-dots');
  if (!dotsEl) return;
  dotsEl.innerHTML = HERO_SLIDES.map((_, idx) => `
    <button
      type="button"
      onclick="setHeroSlide(${idx})"
      aria-label="Slide ${idx + 1}"
      class="hero-dot h-2.5 ${idx === 0 ? 'w-8 bg-emerald-brand' : 'w-2.5 bg-charcoal/20 hover:bg-charcoal/40'} rounded-full transition-all"
    ></button>
  `).join('');
}

function renderHeroSlide(index) {
  const slide = HERO_SLIDES[index];
  if (!slide) return;
  const container = document.getElementById('hero-slide-container');
  container.innerHTML = `
    <div class="lg:col-span-6 space-y-5 sm:space-y-6 animate-fade-up">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-hairline shadow-xs">
        <span class="w-2 h-2 rounded-full bg-champagne"></span>
        <span class="text-xs font-semibold text-emerald-brand tracking-wide">${slide.badge}</span>
      </div>

      <h1 class="font-serif text-3xl sm:text-5xl lg:text-[52px] font-semibold text-charcoal leading-[1.15]">
        ${slide.title}
      </h1>

      <p class="text-sm sm:text-base text-slate leading-relaxed max-w-xl">
        ${slide.subtitle}
      </p>

      <div class="flex flex-wrap items-center gap-3.5 pt-1">
        <button type="button" onclick="${slide.primaryAction}" class="px-6 sm:px-7 py-3.5 rounded-full bg-emerald-brand hover:bg-emerald-dark text-white text-sm font-semibold shadow-luxury transition-all">
          ${slide.primaryCtaText}
        </button>
        <button type="button" onclick="${slide.secondaryAction}" class="px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-sand text-charcoal border border-hairline text-sm font-semibold transition-all">
          ${slide.secondaryCtaText}
        </button>
      </div>

      <div class="grid grid-cols-3 gap-4 pt-4 border-t border-hairline/80 max-w-md text-xs">
        <div>
          <p class="font-bold text-charcoal text-sm">100%</p>
          <p class="text-slate">Authentic Batch</p>
        </div>
        <div>
          <p class="font-bold text-charcoal text-sm">Open-Box</p>
          <p class="text-slate">Check &amp; Pay COD</p>
        </div>
        <div>
          <p class="font-bold text-charcoal text-sm">24–72h</p>
          <p class="text-slate">All Bangladesh</p>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 animate-fade-up">
      <div class="relative rounded-[2rem] overflow-hidden bg-sand border border-hairline shadow-luxury aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4]">
        <img
          src="${slide.image}"
          alt="${slide.title}"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-tr from-charcoal/25 via-transparent to-transparent"></div>

        <div class="absolute bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-hairline shadow-lg flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-emerald-soft text-emerald-brand flex items-center justify-center shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div>
            <p class="text-xs font-bold text-charcoal">${slide.floatingTag}</p>
            <p class="text-[11px] text-slate">${slide.floatingSub}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  document.querySelectorAll('.hero-dot').forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.remove('w-2.5', 'bg-charcoal/20');
      dot.classList.add('w-8', 'bg-emerald-brand');
    } else {
      dot.classList.remove('w-8', 'bg-emerald-brand');
      dot.classList.add('w-2.5', 'bg-charcoal/20');
    }
  });
}

function setHeroSlide(idx) {
  currentHeroIndex = idx;
  renderHeroSlide(currentHeroIndex);
  restartHeroAutoplay();
}

function nextHeroSlide() {
  currentHeroIndex = (currentHeroIndex + 1) % HERO_SLIDES.length;
  renderHeroSlide(currentHeroIndex);
  restartHeroAutoplay();
}

function prevHeroSlide() {
  currentHeroIndex = (currentHeroIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
  renderHeroSlide(currentHeroIndex);
  restartHeroAutoplay();
}

function restartHeroAutoplay() {
  clearInterval(heroInterval);
  heroInterval = setInterval(() => {
    currentHeroIndex = (currentHeroIndex + 1) % HERO_SLIDES.length;
    renderHeroSlide(currentHeroIndex);
  }, 6500);
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ---------------------------------------------------------
   3. REUSABLE HIGH-CONVERSION PRODUCT CARD BUILDER
---------------------------------------------------------- */
function createProductCardHTML(product) {
  const savings = product.regularPrice - product.salePrice;
  return `
    <article class="group bg-white rounded-3xl border border-hairline overflow-hidden shadow-luxury hover:shadow-card-hover transition-all duration-300 flex flex-col">
      <div class="relative aspect-[4/4] bg-sand/60 overflow-hidden">
        <img
          src="${product.image}"
          alt="${product.title}"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80'"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
          onclick="openQuickView('${product.id}')"
        />

        ${savings > 0 ? `
          <span class="absolute top-3 left-3 bg-champagne text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
            Save ৳${savings}
          </span>
        ` : ''}

        <button
          type="button"
          onclick="openQuickView('${product.id}')"
          aria-label="Quick view ${product.title}"
          class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-emerald-brand text-charcoal hover:text-white flex items-center justify-center shadow-sm transition-colors"
          title="Quick View"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>

      <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 text-xs mb-1.5">
            <span class="text-emerald-brand font-semibold">${product.category}</span>
            <div class="flex items-center gap-1 text-champagne-dark font-semibold">
              <svg class="w-3.5 h-3.5 fill-champagne text-champagne" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <span>${product.rating}</span>
              <span class="text-slate font-normal">(${product.reviews})</span>
            </div>
          </div>

          <h3 onclick="openQuickView('${product.id}')" class="font-semibold text-charcoal text-sm sm:text-base leading-snug hover:text-emerald-brand cursor-pointer line-clamp-2">
            ${product.title}
          </h3>

          <p class="text-xs text-slate mt-1 line-clamp-1">${product.tagline}</p>
        </div>

        <div class="pt-4 mt-3 border-t border-hairline/70">
          <div class="flex items-baseline gap-2 mb-3">
            <span class="text-base sm:text-lg font-bold text-charcoal">${formatBDT(product.salePrice)}</span>
            ${product.regularPrice > product.salePrice ? `
              <span class="text-xs text-slate line-through">${formatBDT(product.regularPrice)}</span>
            ` : ''}
          </div>

          <div class="flex items-center gap-2">
            <button
              type="button"
              onclick="addToCart('${product.id}', 1, true)"
              class="flex-1 py-2.5 px-3 rounded-xl bg-emerald-brand hover:bg-emerald-dark text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-1.5"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
              <span>Add to Cart</span>
            </button>
            <button
              type="button"
              onclick="openQuickView('${product.id}')"
              class="py-2.5 px-3 rounded-xl bg-ivory hover:bg-sand text-charcoal border border-hairline text-xs font-semibold transition-colors"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

/* ---------------------------------------------------------
   4. RENDER PAGE SECTIONS FROM data.js
---------------------------------------------------------- */
function renderAllSections() {
  // Categories
  const catGrid = document.getElementById('category-grid');
  catGrid.innerHTML = CATEGORIES.map(cat => `
    <button
      type="button"
      onclick="${cat.filterType === 'tag' ? `applyTagFilter('${cat.filterValue}')` : `applyCategoryFilter('${cat.filterValue}')`}"
      class="group flex flex-col items-center text-center focus:outline-none"
    >
      <div class="w-full aspect-square rounded-t-full rounded-b-3xl overflow-hidden bg-sand border border-hairline shadow-xs group-hover:border-emerald-brand transition-all">
        <img
          src="${cat.image}"
          alt="${cat.name}"
          loading="lazy"
          class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
        />
      </div>
      <span class="mt-2.5 text-xs sm:text-sm font-semibold text-charcoal group-hover:text-emerald-brand transition-colors">
        ${cat.name}
      </span>
    </button>
  `).join('');

  // New Arrivals (up to 4 items)
  const newArrivals = PRODUCTS.filter(p => p.tags.includes('New Arrival')).slice(0, 4);
  document.getElementById('new-arrivals-grid').innerHTML = newArrivals.map(createProductCardHTML).join('');

  // Value Combo Offers (up to 4 items)
  const combos = PRODUCTS.filter(p => p.category === 'Combo Offers').slice(0, 4);
  document.getElementById('combo-offers-grid').innerHTML = combos.map(createProductCardHTML).join('');

  // Best Selling Essentials (up to 4 items)
  const bestSellers = PRODUCTS.filter(p => p.tags.includes('Best Seller') && p.category !== 'Combo Offers').slice(0, 4);
  document.getElementById('best-sellers-grid').innerHTML = bestSellers.map(createProductCardHTML).join('');

  // Featured Collections Spotlight
  const featGrid = document.getElementById('featured-collections-grid');
  if (featGrid && typeof FEATURED_COLLECTIONS !== 'undefined') {
    featGrid.innerHTML = FEATURED_COLLECTIONS.map(col => `
      <div class="group relative rounded-3xl overflow-hidden bg-white border border-hairline shadow-luxury flex flex-col">
        <div class="relative h-72 overflow-hidden bg-sand">
          <img
            src="${col.image}"
            alt="${col.title}"
            loading="lazy"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent"></div>
          <div class="absolute bottom-5 left-5 right-5 text-white">
            <span class="text-[11px] uppercase tracking-[0.2em] text-champagne-light font-semibold">${col.eyebrow}</span>
            <h3 class="font-serif text-2xl font-semibold mt-0.5">${col.title}</h3>
          </div>
        </div>
        <div class="p-5 flex items-center justify-between bg-white">
          <p class="text-xs sm:text-sm text-slate">${col.description}</p>
          <button type="button" onclick="applyCategoryFilter('${col.filterCategory}')" class="shrink-0 ml-3 px-4 py-2 rounded-full bg-emerald-brand hover:bg-emerald-dark text-white text-xs font-semibold transition-colors">
            Shop Collection
          </button>
        </div>
      </div>
    `).join('');
  }

  // Skin Concern Pills
  const concernContainer = document.getElementById('concern-pills-container');
  concernContainer.innerHTML = SKIN_CONCERNS.map(concern => `
    <button
      type="button"
      onclick="applyConcernFilter('${concern}')"
      class="concern-pill px-4 sm:px-5 py-2.5 rounded-full bg-white hover:bg-emerald-brand text-charcoal hover:text-white border border-hairline text-xs sm:text-sm font-medium shadow-2xs transition-all"
    >
      ${concern}
    </button>
  `).join('');

  // Featured Video Reels
  const videoGrid = document.getElementById('video-reels-grid');
  videoGrid.innerHTML = VIDEO_REELS.map(reel => {
    const prod = PRODUCTS.find(p => p.id === reel.productId);
    return `
      <div class="group relative rounded-3xl overflow-hidden bg-emerald-dark border border-white/15 aspect-[9/15] flex flex-col justify-between shadow-xl">
        <img
          src="${reel.thumbnail}"
          alt="${reel.title}"
          loading="lazy"
          class="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/25 to-charcoal/40"></div>

        <div class="relative z-10 p-4 flex items-center justify-between text-xs">
          <span class="px-2.5 py-1 rounded-full bg-charcoal/60 backdrop-blur-xs text-white font-medium">${reel.views} views</span>
          <span class="px-2 py-0.5 rounded bg-charcoal/60 text-white/90">${reel.duration}</span>
        </div>

        <button
          type="button"
          onclick="openVideoModal('${reel.id}')"
          aria-label="Play ${reel.title}"
          class="relative z-10 mx-auto w-14 h-14 rounded-full bg-white/95 text-emerald-brand flex items-center justify-center shadow-lg animate-pulse-soft hover:scale-110 transition-transform"
        >
          <svg class="w-6 h-6 ml-0.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </button>

        <div class="relative z-10 p-3.5 space-y-2.5">
          <p class="text-xs font-medium text-white/95 line-clamp-2 leading-snug">${reel.title}</p>
          ${prod ? `
            <div class="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 flex items-center justify-between gap-2 text-charcoal">
              <div class="min-w-0">
                <p class="text-[11px] font-bold truncate">${prod.title}</p>
                <p class="text-xs font-semibold text-emerald-brand">${formatBDT(prod.salePrice)}</p>
              </div>
              <button
                type="button"
                onclick="addToCart('${prod.id}', 1, true)"
                class="shrink-0 px-3 py-1.5 rounded-xl bg-emerald-brand hover:bg-emerald-dark text-white text-[11px] font-semibold transition-colors"
              >
                + Add
              </button>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  // Customer Reviews
  const reviewsGrid = document.getElementById('reviews-grid');
  reviewsGrid.innerHTML = CUSTOMER_REVIEWS.map(rev => `
    <div class="bg-white rounded-3xl p-5 sm:p-6 border border-hairline shadow-luxury flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-0.5 text-champagne">
            ${Array(rev.rating).fill('<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>').join('')}
          </div>
          <span class="text-[11px] font-semibold text-emerald-brand bg-emerald-soft px-2 py-0.5 rounded-full">Verified Buyer</span>
        </div>
        <p class="text-xs sm:text-sm text-charcoal/90 leading-relaxed">"${rev.text}"</p>
      </div>
      <div class="pt-4 mt-4 border-t border-hairline">
        <p class="text-xs font-bold text-charcoal">${rev.name}</p>
        <p class="text-[11px] text-slate">${rev.location} • Bought ${rev.product}</p>
      </div>
    </div>
  `).join('');

  // Educational Concern Accordion
  const accordion = document.getElementById('concern-accordion');
  accordion.innerHTML = CONCERN_GUIDES.map((item, idx) => {
    const recProd = PRODUCTS.find(p => p.id === item.recommendedProductId);
    return `
      <div class="bg-white rounded-2xl border border-hairline overflow-hidden shadow-2xs">
        <button
          type="button"
          onclick="toggleAccordion(${idx})"
          class="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-ivory/70 transition-colors"
        >
          <span class="font-serif text-base sm:text-lg font-semibold text-charcoal">${item.concern}</span>
          <span id="acc-icon-${idx}" class="w-7 h-7 rounded-full bg-sand text-charcoal flex items-center justify-center text-sm font-bold shrink-0 transition-transform">
            ${idx === 0 ? '−' : '+'}
          </span>
        </button>
        <div id="acc-body-${idx}" class="${idx === 0 ? '' : 'hidden'} px-5 pb-5 pt-1 border-t border-hairline/70 space-y-3">
          <p class="text-xs sm:text-sm text-slate leading-relaxed">${item.summary}</p>
          <div class="p-3 rounded-xl bg-ivory text-xs text-charcoal font-medium">
            <span class="text-emerald-brand font-bold">Recommended Routine:</span> ${item.steps}
          </div>
          ${recProd ? `
            <div class="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div class="flex items-center gap-3">
                <img src="${recProd.image}" alt="${recProd.title}" class="w-11 h-11 rounded-xl object-cover border border-hairline" />
                <div>
                  <p class="text-xs font-bold text-charcoal">${recProd.title}</p>
                  <p class="text-xs font-semibold text-emerald-brand">${formatBDT(recProd.salePrice)}</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <button type="button" onclick="openQuickView('${recProd.id}')" class="px-3 py-1.5 rounded-lg border border-hairline text-xs font-semibold hover:bg-sand">View</button>
                <button type="button" onclick="addToCart('${recProd.id}', 1, true)" class="px-3.5 py-1.5 rounded-lg bg-emerald-brand text-white text-xs font-semibold hover:bg-emerald-dark">Add to Bag</button>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function toggleAccordion(index) {
  const body = document.getElementById(`acc-body-${index}`);
  const icon = document.getElementById(`acc-icon-${index}`);
  const isHidden = body.classList.contains('hidden');
  body.classList.toggle('hidden');
  icon.textContent = isHidden ? '−' : '+';
}

/* ---------------------------------------------------------
   5. DYNAMIC FILTERING & LIVE SEARCH
---------------------------------------------------------- */
function displayFilteredProducts(list, title, subtitle) {
  const section = document.getElementById('active-filter-section');
  const titleEl = document.getElementById('active-filter-title');
  const subEl = document.getElementById('active-filter-subtitle');
  const grid = document.getElementById('filtered-products-grid');

  titleEl.textContent = title;
  subEl.textContent = subtitle || `Showing ${list.length} authentic skincare formula${list.length === 1 ? '' : 's'}`;

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full bg-white rounded-3xl p-10 text-center border border-hairline">
        <p class="font-serif text-xl text-charcoal font-semibold">No matching formulas found</p>
        <p class="text-sm text-slate mt-1">Try browsing all products or contact our skincare advisor on WhatsApp.</p>
        <button type="button" onclick="showAllCatalog()" class="mt-4 px-5 py-2.5 rounded-full bg-emerald-brand text-white text-xs font-semibold">Show All Products</button>
      </div>
    `;
  } else {
    grid.innerHTML = list.map(createProductCardHTML).join('');
  }

  section.classList.remove('hidden');
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function applyCategoryFilter(categoryName) {
  if (categoryName === 'All') {
    showAllCatalog();
    return;
  }
  const matched = PRODUCTS.filter(p =>
    p.category.toLowerCase() === categoryName.toLowerCase() ||
    (p.subCategories && p.subCategories.some(sc => sc.toLowerCase() === categoryName.toLowerCase()))
  );
  displayFilteredProducts(matched, `${categoryName} Collection`, `Curated ${categoryName.toLowerCase()} essentials formulated for visible results.`);
}

function applyConcernFilter(concernName) {
  const matched = PRODUCTS.filter(p =>
    p.concerns.some(c => c.toLowerCase() === concernName.toLowerCase())
  );
  displayFilteredProducts(matched, `Concern: ${concernName}`, `Dermatologist-recommended formulas targeting ${concernName.toLowerCase()}.`);
}

function applyTagFilter(tagName) {
  const matched = PRODUCTS.filter(p => p.tags.includes(tagName));
  displayFilteredProducts(matched, `${tagName}s`, `Explore ZELVIQO's top-rated ${tagName.toLowerCase()} formulas.`);
}

function showAllCatalog() {
  displayFilteredProducts(PRODUCTS, 'All ZELVIQO Products', `Browse all ${PRODUCTS.length} authentic skincare products & value combos.`);
}

function resetAllFilters() {
  document.getElementById('active-filter-section').classList.add('hidden');
}

function setupLiveSearch(inputId, dropdownId) {
  const input = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);
  if (!input || !dropdown) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
      dropdown.classList.add('hidden');
      return;
    }

    const matches = PRODUCTS.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.tagline.toLowerCase().includes(query) ||
      p.concerns.some(c => c.toLowerCase().includes(query))
    );

    if (matches.length === 0) {
      dropdown.innerHTML = `<div class="p-4 text-xs text-slate text-center">No products found for "${e.target.value}"</div>`;
    } else {
      dropdown.innerHTML = matches.slice(0, 5).map(item => `
        <div onclick="openQuickView('${item.id}'); document.getElementById('${dropdownId}').classList.add('hidden');" class="p-3 hover:bg-ivory cursor-pointer flex items-center gap-3 transition-colors">
          <img src="${item.image}" alt="${item.title}" class="w-11 h-11 rounded-xl object-cover border border-hairline shrink-0" />
          <div class="min-w-0 flex-1">
            <p class="text-xs font-semibold text-charcoal truncate">${item.title}</p>
            <p class="text-[11px] text-slate truncate">${item.category}</p>
            <p class="text-xs font-bold text-emerald-brand mt-0.5">${formatBDT(item.salePrice)}</p>
          </div>
        </div>
      `).join('');
    }
    dropdown.classList.remove('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.add('hidden');
    }
  });
}

function openMobileSearch() {
  const bar = document.getElementById('mobile-search-bar');
  bar.classList.remove('hidden');
  document.getElementById('mobile-search-input').focus();
}

/* ---------------------------------------------------------
   6. SHOPPING CART & SLIDE-OUT COD DRAWER LOGIC
---------------------------------------------------------- */
function addToCart(productId, qty = 1, openDrawerAfter = false) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }

  saveCart();
  showToast(`Added "${product.title.slice(0, 28)}..." to bag`);

  if (openDrawerAfter) {
    openCartDrawer();
  }
}

function updateItemQty(productId, delta) {
  const idx = cart.findIndex(item => item.id === productId);
  if (idx === -1) return;

  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }
  saveCart();
}

function removeCartItem(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
}

function getCartSubtotal() {
  return cart.reduce((sum, item) => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    return prod ? sum + (prod.salePrice * item.qty) : sum;
  }, 0);
}

function getDeliveryFee(subtotal) {
  if (subtotal === 0) return 0;
  if (subtotal >= FREE_SHIPPING_THRESHOLD) return 0;
  const zoneInput = document.querySelector('input[name="delivery-zone"]:checked');
  const zone = zoneInput ? zoneInput.value : 'inside';
  return zone === 'outside' ? OUTSIDE_DHAKA_FEE : INSIDE_DHAKA_FEE;
}

function updateCartTotals() {
  const subtotal = getCartSubtotal();
  const shipping = getDeliveryFee(subtotal);
  const total = subtotal + shipping;

  document.getElementById('summary-subtotal').textContent = formatBDT(subtotal);
  document.getElementById('summary-shipping').textContent = shipping === 0 && subtotal > 0 ? 'FREE (৳0)' : formatBDT(shipping);
  document.getElementById('summary-total').textContent = formatBDT(total);

  const insideLabel = document.getElementById('inside-dhaka-fee-label');
  const outsideLabel = document.getElementById('outside-dhaka-fee-label');
  if (subtotal >= FREE_SHIPPING_THRESHOLD) {
    insideLabel.textContent = 'FREE Delivery';
    outsideLabel.textContent = 'FREE Delivery';
  } else {
    insideLabel.textContent = `Delivery: Tk ${INSIDE_DHAKA_FEE}`;
    outsideLabel.textContent = `Delivery: Tk ${OUTSIDE_DHAKA_FEE}`;
  }
}

function updateCartUI() {
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = getCartSubtotal();

  document.getElementById('header-cart-count').textContent = totalItems;
  document.getElementById('mobile-nav-cart-count').textContent = totalItems;
  document.getElementById('drawer-item-badge').textContent = `${totalItems} item${totalItems === 1 ? '' : 's'}`;

  const progressPct = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
  document.getElementById('free-shipping-bar').style.width = `${progressPct}%`;
  const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
  const shippingText = document.getElementById('free-shipping-text');
  if (subtotal >= FREE_SHIPPING_THRESHOLD) {
    shippingText.innerHTML = `Congratulations! You've unlocked <span class="font-bold">FREE Nationwide Delivery!</span>`;
  } else {
    shippingText.innerHTML = `Add <span class="font-bold">${formatBDT(remaining)}</span> more for <span class="font-bold">FREE Nationwide Delivery!</span>`;
  }

  const itemsContainer = document.getElementById('cart-items-container');
  const codSection = document.getElementById('cod-checkout-section');

  if (cart.length === 0) {
    codSection.classList.add('hidden');
    itemsContainer.innerHTML = `
      <div class="bg-white rounded-3xl border border-hairline p-8 text-center space-y-3">
        <div class="w-14 h-14 rounded-full bg-sand text-slate flex items-center justify-center mx-auto">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" /></svg>
        </div>
        <h3 class="font-serif text-xl font-semibold text-charcoal">Your Skincare Bag is Empty</h3>
        <p class="text-xs text-slate max-w-xs mx-auto">Explore our dermatologist-inspired serums, sunscreens, and value combos to start your ritual.</p>
        <button type="button" onclick="closeCartDrawer(); scrollToSection('best-sellers');" class="px-5 py-2.5 rounded-full bg-emerald-brand text-white text-xs font-semibold hover:bg-emerald-dark transition-colors">
          Explore Best Sellers
        </button>
      </div>
    `;
  } else {
    codSection.classList.remove('hidden');
    itemsContainer.innerHTML = cart.map(item => {
      const prod = PRODUCTS.find(p => p.id === item.id);
      if (!prod) return '';
      return `
        <div class="bg-white rounded-2xl p-3 border border-hairline flex items-center gap-3 shadow-2xs">
          <img src="${prod.image}" alt="${prod.title}" class="w-16 h-16 rounded-xl object-cover border border-hairline shrink-0" />
          <div class="flex-1 min-w-0">
            <div class="flex items-start justify-between gap-2">
              <h4 class="text-xs font-semibold text-charcoal line-clamp-2 leading-snug">${prod.title}</h4>
              <button type="button" onclick="removeCartItem('${prod.id}')" aria-label="Remove item" class="text-slate hover:text-red-600 p-0.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <p class="text-xs font-bold text-emerald-brand mt-1">${formatBDT(prod.salePrice * item.qty)}</p>
            <div class="flex items-center gap-2 mt-2">
              <div class="inline-flex items-center border border-hairline rounded-lg bg-ivory">
                <button type="button" onclick="updateItemQty('${prod.id}', -1)" class="w-6 h-6 flex items-center justify-center text-charcoal hover:bg-sand rounded-l-lg font-bold">−</button>
                <span class="px-2.5 text-xs font-semibold">${item.qty}</span>
                <button type="button" onclick="updateItemQty('${prod.id}', 1)" class="w-6 h-6 flex items-center justify-center text-charcoal hover:bg-sand rounded-r-lg font-bold">+</button>
              </div>
              <span class="text-[11px] text-slate">(${formatBDT(prod.salePrice)} each)</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  updateCartTotals();
}

function openCartDrawer() {
  document.getElementById('cart-drawer-overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cart-drawer-overlay').classList.add('hidden');
  document.body.style.overflow = '';
}

/* ---------------------------------------------------------
   7. CASH ON DELIVERY ORDER SUBMISSION & WHATSAPP CHECKOUT
---------------------------------------------------------- */
document.getElementById('cod-order-form').addEventListener('submit', function(e) {
  e.preventDefault();
  if (cart.length === 0) return;

  const name = document.getElementById('cust-name').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();
  const address = document.getElementById('cust-address').value.trim();
  const note = document.getElementById('cust-note').value.trim();
  const zone = document.querySelector('input[name="delivery-zone"]:checked').value;
  const phoneError = document.getElementById('phone-error');

  const bdPhoneRegex = /^01[3-9]\d{8}$/;
  if (!bdPhoneRegex.test(phone)) {
    phoneError.classList.remove('hidden');
    document.getElementById('cust-phone').focus();
    return;
  } else {
    phoneError.classList.add('hidden');
  }

  if (!name || !address) {
    showToast('Please fill in your name and delivery address.');
    return;
  }

  const subtotal = getCartSubtotal();
  const shipping = getDeliveryFee(subtotal);
  const total = subtotal + shipping;
  const orderId = `ZLV-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  const orderPayload = {
    order_id: orderId,
    brand: SITE_CONFIG.brandName,
    customer_name: name,
    customer_phone: phone,
    delivery_zone: zone === 'inside' ? 'Inside Dhaka' : 'Outside Dhaka',
    delivery_address: address,
    order_note: note,
    items: cart.map(item => {
      const p = PRODUCTS.find(prod => prod.id === item.id);
      return {
        product_id: item.id,
        title: p ? p.title : item.id,
        qty: item.qty,
        unit_price: p ? p.salePrice : 0
      };
    }),
    subtotal,
    shipping_fee: shipping,
    total_payable: total,
    payment_method: 'Cash on Delivery (Open-Box)',
    created_at: new Date().toISOString()
  };

  localStorage.setItem('zelviqo_last_order', JSON.stringify(orderPayload));

  const receiptBox = document.getElementById('order-receipt-box');
  receiptBox.innerHTML = `
    <div class="flex justify-between"><span class="text-slate">Order ID:</span><span class="font-bold text-emerald-brand">#${orderId}</span></div>
    <div class="flex justify-between"><span class="text-slate">Customer:</span><span class="font-semibold text-charcoal">${name} (${phone})</span></div>
    <div class="flex justify-between"><span class="text-slate">Zone:</span><span class="font-medium text-charcoal">${orderPayload.delivery_zone}</span></div>
    <div class="flex justify-between"><span class="text-slate">Address:</span><span class="font-medium text-charcoal text-right max-w-[60%]">${address}</span></div>
    <div class="pt-2 border-t border-hairline flex justify-between text-sm font-bold text-charcoal">
      <span>Payable on Delivery:</span>
      <span class="text-emerald-brand">${formatBDT(total)}</span>
    </div>
  `;

  cart = [];
  saveCart();
  e.target.reset();
  closeCartDrawer();
  document.getElementById('order-confirmation-modal').classList.remove('hidden');
});

function orderViaWhatsApp() {
  if (cart.length === 0) return;

  const name = document.getElementById('cust-name').value.trim() || 'Customer';
  const phone = document.getElementById('cust-phone').value.trim() || 'Not provided';
  const address = document.getElementById('cust-address').value.trim() || 'Not provided';
  const zoneInput = document.querySelector('input[name="delivery-zone"]:checked');
  const zoneLabel = zoneInput && zoneInput.value === 'outside' ? 'Outside Dhaka' : 'Inside Dhaka';

  const subtotal = getCartSubtotal();
  const shipping = getDeliveryFee(subtotal);
  const total = subtotal + shipping;

  const itemsLines = cart.map((item, i) => {
    const p = PRODUCTS.find(prod => prod.id === item.id);
    return `${i + 1}. ${p.title} x${item.qty} = ${formatBDT(p.salePrice * item.qty)}`;
  }).join('\n');

  const message = `Hello ${SITE_CONFIG.brandName}! I want to place a Cash on Delivery order:\n\n*Ordered Items:*\n${itemsLines}\n\n*Subtotal:* ${formatBDT(subtotal)}\n*Delivery (${zoneLabel}):* ${shipping === 0 ? 'FREE' : formatBDT(shipping)}\n*Total Payable:* ${formatBDT(total)}\n\n*Customer Details:*\nName: ${name}\nPhone: ${phone}\nAddress: ${address}`;

  const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank', 'noopener,noreferrer');
}

function closeOrderConfirmation() {
  document.getElementById('order-confirmation-modal').classList.add('hidden');
}

/* ---------------------------------------------------------
   8. QUICK VIEW, VIDEO & INFO MODALS
---------------------------------------------------------- */
function openQuickView(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;
  const savings = p.regularPrice - p.salePrice;

  const content = document.getElementById('quick-view-content');
  content.innerHTML = `
    <div class="bg-sand/50 relative aspect-square md:aspect-auto">
      <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover" />
      ${savings > 0 ? `<span class="absolute top-4 left-4 bg-champagne text-white text-xs font-bold px-3 py-1 rounded-full">Save ৳${savings}</span>` : ''}
    </div>
    <div class="p-6 sm:p-8 flex flex-col justify-between space-y-5">
      <div class="space-y-3">
        <div class="flex items-center gap-2 text-xs">
          <span class="px-2.5 py-0.5 rounded-full bg-emerald-soft text-emerald-brand font-semibold">${p.category}</span>
          <span class="text-champagne-dark font-semibold">★ ${p.rating} (${p.reviews} reviews)</span>
        </div>
        <h3 class="font-serif text-2xl font-semibold text-charcoal leading-snug">${p.title}</h3>
        <p class="text-xs sm:text-sm text-slate">${p.tagline}</p>

        <div class="flex items-baseline gap-2.5 pt-1">
          <span class="text-2xl font-bold text-emerald-brand">${formatBDT(p.salePrice)}</span>
          ${savings > 0 ? `<span class="text-sm text-slate line-through">${formatBDT(p.regularPrice)}</span>` : ''}
        </div>

        <div class="space-y-2.5 pt-3 border-t border-hairline text-xs">
          <div>
            <p class="font-bold text-charcoal uppercase tracking-wider text-[11px]">Key Clinical Actives</p>
            <p class="text-slate mt-0.5 leading-relaxed">${p.ingredients}</p>
          </div>
          <div>
            <p class="font-bold text-charcoal uppercase tracking-wider text-[11px]">Suitable Skin Type</p>
            <p class="text-slate mt-0.5">${p.skinType}</p>
          </div>
          <div>
            <p class="font-bold text-charcoal uppercase tracking-wider text-[11px]">How to Use</p>
            <p class="text-slate mt-0.5 leading-relaxed">${p.usage}</p>
          </div>
        </div>
      </div>

      <div class="pt-3 border-t border-hairline space-y-2">
        <button type="button" onclick="addToCart('${p.id}', 1, true); closeQuickView();" class="w-full py-3.5 rounded-xl bg-emerald-brand hover:bg-emerald-dark text-white font-semibold text-sm transition-colors">
          Add to Bag &amp; Checkout COD
        </button>
        <p class="text-[11px] text-center text-slate">Open-Parcel Cash on Delivery • 100% Authentic</p>
      </div>
    </div>
  `;

  document.getElementById('quick-view-modal').classList.remove('hidden');
}

function closeQuickView() {
  document.getElementById('quick-view-modal').classList.add('hidden');
}

function openVideoModal(reelId) {
  const reel = VIDEO_REELS.find(r => r.id === reelId);
  if (!reel) return;
  const prod = PRODUCTS.find(p => p.id === reel.productId);

  document.getElementById('video-modal-body').innerHTML = `
    <div class="relative aspect-[9/13] bg-charcoal">
      <img src="${reel.thumbnail}" alt="${reel.title}" class="w-full h-full object-cover opacity-90" />
      <div class="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30"></div>
      <div class="absolute bottom-4 left-4 right-4 text-white space-y-1">
        <span class="px-2 py-0.5 rounded bg-champagne text-[10px] font-bold uppercase">ZELVIQO Texture Demo</span>
        <h4 class="font-serif text-lg font-semibold leading-snug">${reel.title}</h4>
        <p class="text-xs text-white/85 leading-relaxed">${reel.caption}</p>
      </div>
    </div>
    ${prod ? `
      <div class="p-4 bg-white flex items-center justify-between gap-3">
        <div class="min-w-0">
          <p class="text-xs font-bold text-charcoal truncate">${prod.title}</p>
          <p class="text-sm font-bold text-emerald-brand">${formatBDT(prod.salePrice)}</p>
        </div>
        <button type="button" onclick="addToCart('${prod.id}', 1, true); closeVideoModal();" class="shrink-0 px-4 py-2.5 rounded-xl bg-emerald-brand text-white text-xs font-semibold hover:bg-emerald-dark">
          Buy Now
        </button>
      </div>
    ` : ''}
  `;
  document.getElementById('video-modal').classList.remove('hidden');
}

function closeVideoModal() {
  document.getElementById('video-modal').classList.add('hidden');
}

function openInfoModal(title, bodyText) {
  document.getElementById('info-modal-title').textContent = title;
  document.getElementById('info-modal-body').textContent = bodyText;
  document.getElementById('info-modal').classList.remove('hidden');
}

function openTrackOrderModal() {
  const saved = JSON.parse(localStorage.getItem('zelviqo_last_order'));
  if (saved) {
    openInfoModal(
      'Track Your Recent Order',
      `Latest Order ID: #${saved.order_id}\nCustomer: ${saved.customer_name} (${saved.customer_phone})\nDelivery Zone: ${saved.delivery_zone}\nPayable Amount: ${formatBDT(saved.total_payable)}\nStatus: Confirmed & Preparing for Dispatch\n\nFor live courier updates, message our WhatsApp support at ${SITE_CONFIG.hotlineDisplay}.`
    );
  } else {
    openInfoModal(
      'Track Your Order',
      `To check the live courier status of your ${SITE_CONFIG.brandName} order, please share your Order ID or registered phone number with our 24/7 support team on WhatsApp (${SITE_CONFIG.hotlineDisplay}).`
    );
  }
}

function closeInfoModal() {
  document.getElementById('info-modal').classList.add('hidden');
}

/* ---------------------------------------------------------
   9. EVENT LISTENERS & INITIALIZATION
---------------------------------------------------------- */
function closeMobileNav() {
  document.getElementById('mobile-nav-overlay').classList.add('hidden');
}

document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-nav-overlay').classList.remove('hidden');
});
document.getElementById('close-mobile-menu').addEventListener('click', closeMobileNav);
document.getElementById('mobile-nav-overlay').addEventListener('click', (e) => {
  if (e.target.id === 'mobile-nav-overlay') closeMobileNav();
});

document.getElementById('open-cart-btn').addEventListener('click', openCartDrawer);
document.getElementById('close-cart-btn').addEventListener('click', closeCartDrawer);
document.getElementById('cart-drawer-overlay').addEventListener('click', (e) => {
  if (e.target.id === 'cart-drawer-overlay') closeCartDrawer();
});

document.getElementById('mobile-search-toggle').addEventListener('click', openMobileSearch);

['quick-view-modal', 'order-confirmation-modal', 'video-modal', 'info-modal'].forEach(modalId => {
  document.getElementById(modalId).addEventListener('click', (e) => {
    if (e.target.id === modalId) {
      document.getElementById(modalId).classList.add('hidden');
    }
  });
});

// Boot Application
window.addEventListener('DOMContentLoaded', () => {
  applySiteConfig();
  renderHeroDots();
  renderHeroSlide(0);
  restartHeroAutoplay();
  renderAllSections();
  setupLiveSearch('desktop-search-input', 'desktop-search-dropdown');
  setupLiveSearch('mobile-search-input', 'mobile-search-results');
  updateCartUI();
});
