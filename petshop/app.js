/**
 * PAWS & CLAWS PET SHOP - INTERACTIVE JAVASCRIPT APP
 */

// ============================================================================
// DATA: PRODUCTS CATALOG
// ============================================================================
const PRODUCTS = [
  {
    id: 1,
    name: "Wild Pacific Salmon & Sweet Potato Kibble",
    category: "dogs",
    price: 48.99,
    originalPrice: 58.99,
    rating: 4.9,
    reviews: 142,
    tag: "Best Seller",
    tagType: "tag-bestseller",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=80",
    desc: "Grain-free, omega-3 rich nutrition crafted for adult dogs with sensitive skin and tummies.",
    details: [
      "100% Real Deboned Wild Salmon",
      "No corn, wheat, artificial preservatives or soy",
      "Rich in DHA & EPA for glossy coat and joints",
      "Made in USA under strict veterinary supervision"
    ]
  },
  {
    id: 2,
    name: "Multi-Tier Luxury Sisal Cat Tree & Condo",
    category: "cats",
    price: 84.50,
    originalPrice: 105.00,
    rating: 4.8,
    reviews: 98,
    tag: "Sale 20% Off",
    tagType: "tag-sale",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=600&q=80",
    desc: "54-inch heavy duty cat tower featuring plush hammock, private sleeping condo, and scratch posts.",
    details: [
      "Natural chemical-free sisal scratching pillars",
      "Ultra-soft faux fleece plush bedding",
      "Sturdy anti-toppling reinforced base",
      "Includes dangling interactive plush bells"
    ]
  },
  {
    id: 3,
    name: "Orthopedic Memory Foam Pet Bed (Large)",
    category: "dogs",
    price: 59.99,
    originalPrice: 72.00,
    rating: 5.0,
    reviews: 210,
    tag: "Top Rated",
    tagType: "tag-organic",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=600&q=80",
    desc: "Therapeutic dual-layer memory foam bed designed to relieve joint ache and promote restful sleep.",
    details: [
      "Water-resistant zippered removable cover",
      "Machine washable, odor-resistant fabric",
      "Non-skid bottom keeps bed firmly in place",
      "Ideal for senior dogs or pets recovering from surgery"
    ]
  },
  {
    id: 4,
    name: "Organic Calming Chamomile Chews (60 ct)",
    category: "dogs",
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.7,
    reviews: 84,
    tag: "Organic",
    tagType: "tag-organic",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
    desc: "Naturally delicious duck-flavored soft chews to reduce thunderstorm anxiety, barking, and travel stress.",
    details: [
      "Active Chamomile, L-Theanine, and Valerian Root",
      "Non-drowsy natural relaxation formula",
      "Vet-formulated for all dog breeds & sizes",
      "Free of artificial dyes and fillers"
    ]
  },
  {
    id: 5,
    name: "Automatic Interactive Laser Cat Chaser",
    category: "cats",
    price: 19.99,
    originalPrice: 24.99,
    rating: 4.6,
    reviews: 77,
    tag: "Popular",
    tagType: "tag-new",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80",
    desc: "360-degree rotating automated laser toy with 3 variable speed modes and auto-timer shutdown.",
    details: [
      "Silent motor doesn't spook nervous felines",
      "Auto shutoff after 15 min to prevent over-fatigue",
      "USB rechargeable long-lasting lithium battery",
      "Keeps indoor cats agile, fit, and entertained"
    ]
  },
  {
    id: 6,
    name: "Deluxe Open-Air Parrot Villa Cage",
    category: "birds",
    price: 68.00,
    originalPrice: 85.00,
    rating: 4.9,
    reviews: 53,
    tag: "New Arrival",
    tagType: "tag-new",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=600&q=80",
    desc: "Spacious wrought-iron habitat with play-top perch, wooden perches, and spill-proof feeder bowls.",
    details: [
      "Lead-free, non-toxic powder-coated finish",
      "Slide-out bottom tray for lightning-fast cleaning",
      "Includes 3 natural wooden standing perches",
      "Suitable for Conures, Cockatiels, and Parakeets"
    ]
  },
  {
    id: 7,
    name: "Smart LED Nano Aquascape Starter Aquarium (10G)",
    category: "fish",
    price: 94.99,
    originalPrice: 119.00,
    rating: 4.8,
    reviews: 64,
    tag: "Sale",
    tagType: "tag-sale",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=600&q=80",
    desc: "Curved rimless ultra-clear glass tank featuring hidden 3-stage filtration and app-controlled sunrise LED.",
    details: [
      "Hidden multi-stage quiet water pump & filter",
      "Customizable daylight, moonlight, and sunset lighting",
      "Complete with filter cartridges and water conditioner",
      "Perfect for Bettas, Tetras, and freshwater plants"
    ]
  },
  {
    id: 8,
    name: "Multi-Level Hamster Castle & Exploration Maze",
    category: "smallpets",
    price: 32.50,
    originalPrice: 38.00,
    rating: 4.7,
    reviews: 41,
    tag: "Organic",
    tagType: "tag-organic",
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=600&q=80",
    desc: "Natural birchwood burrowing playground with chew-safe ramp, tunnels, and cozy hideout nook.",
    details: [
      "100% Raw untreated natural timber",
      "Promotes instinctual burrowing and foraging",
      "No toxic nails, screws, or chemical adhesives",
      "Ideal for Syrian hamsters, gerbils, and mice"
    ]
  },
  {
    id: 9,
    name: "Reflective All-Weather Padded Harness",
    category: "dogs",
    price: 26.99,
    originalPrice: 32.00,
    rating: 4.9,
    reviews: 189,
    tag: "Best Seller",
    tagType: "tag-bestseller",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=600&q=80",
    desc: "No-pull ergonomic harness with front & back leash attachments and high-visibility 3M reflection.",
    details: [
      "Distributes pull pressure evenly across pet chest",
      "Breathable air-mesh lining prevents chafing",
      "Quick-release heavy duty military-grade buckles",
      "Available in adjustable sizes S through XL"
    ]
  },
  {
    id: 10,
    name: "Gourmet Freeze-Dried Raw Chicken Bites (Cat & Dog)",
    category: "cats",
    price: 15.99,
    originalPrice: 19.99,
    rating: 4.9,
    reviews: 130,
    tag: "Organic",
    tagType: "tag-organic",
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=600&q=80",
    desc: "Single-ingredient protein crunchies freeze-dried raw to lock in natural vitamins, enzymes, and flavor.",
    details: [
      "Single ingredient: 100% pasture-raised chicken breast",
      "Grain-free, gluten-free, zero filler or additives",
      "High protein meal topper or high-value training treat",
      "Easy digestion for picky or allergic pets"
    ]
  },
  {
    id: 11,
    name: "Enzymatic Dental Hygiene Toothpaste & Brush Kit",
    category: "dogs",
    price: 13.99,
    originalPrice: 17.50,
    rating: 4.6,
    reviews: 92,
    tag: "Vet Approved",
    tagType: "tag-organic",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80",
    desc: "Poultry-flavored pet toothpaste with silicone finger brush to eliminate plaque and freshen breath.",
    details: [
      "Natural enzyme action breaks down tartar build-up",
      "Safe to swallow — no foaming agents or fluoride",
      "Includes dual-ended toothbrush and finger massager",
      "Noticeably fresher breath in 7 days"
    ]
  },
  {
    id: 12,
    name: "Botanical Timothy Grass & Hay Meadow Cubes (5 lbs)",
    category: "smallpets",
    price: 21.99,
    originalPrice: 26.00,
    rating: 4.8,
    reviews: 48,
    tag: "Organic",
    tagType: "tag-organic",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=600&q=80",
    desc: "High-fiber sun-cured Timothy Hay enriched with aromatic herbs for rabbits, guinea pigs, and chinchillas.",
    details: [
      "Essential dietary roughage for healthy gut flora",
      "Assists natural continuous tooth wear",
      "Hand-selected, double-compressed, dust-extracted",
      "Enriched with marigold and mint leaves"
    ]
  }
];

// ============================================================================
// DATA: PETS READY FOR ADOPTION
// ============================================================================
const ADOPTION_PETS = [
  {
    id: "pet-1",
    name: "Milo",
    breed: "Golden Retriever Mix",
    age: "5 Months",
    gender: "male",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80",
    bio: "Milo is a bundle of joy who loves belly rubs, playing fetch with squeaky balls, and cuddling on lazy afternoons.",
    tags: ["Vaccinated", "Microchipped", "Kid Friendly", "High Energy"]
  },
  {
    id: "pet-2",
    name: "Luna",
    breed: "British Shorthair",
    age: "1 Year",
    gender: "female",
    image: "https://images.unsplash.com/photo-1513360309081-38f0762daed1?auto=format&fit=crop&w=600&q=80",
    bio: "Gentle and poised, Luna enjoys sunny window perches, soft chin scratches, and bird watching. Great companion for calm homes.",
    tags: ["Spayed", "Litter Trained", "Good with Cats", "Calm"]
  },
  {
    id: "pet-3",
    name: "Charlie & Sky",
    breed: "Parakeet Budgie Pair",
    age: "8 Months",
    gender: "female",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=600&q=80",
    bio: "An inseparable cheerful duo! They love harmonizing morning melodies, eating fresh millet, and taking midday bird-baths.",
    tags: ["Bonded Pair", "Vibrant Sing", "Healthy", "Tamed"]
  },
  {
    id: "pet-4",
    name: "Barnaby",
    breed: "Holland Lop Bunny",
    age: "7 Months",
    gender: "male",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=600&q=80",
    bio: "Barnaby is an affectionate, velvet-eared bunny who loves crunchy carrot tops and doing joyful binky hops across the rug.",
    tags: ["Neutered", "Litter Trained", "Quiet", "Gentle"]
  },
  {
    id: "pet-5",
    name: "Rocky",
    breed: "French Bulldog Puppy",
    age: "4 Months",
    gender: "male",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
    bio: "Playful, goofy, and endlessly curious. Rocky loves meeting other friendly dogs and will happily nap right on your feet.",
    tags: ["Vaccinated", "Socialized", "Playful", "Apartment Friendly"]
  },
  {
    id: "pet-6",
    name: "Cleo",
    breed: "Calico Rescue Kitten",
    age: "3 Months",
    gender: "female",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=600&q=80",
    bio: "Full of spirited curiosity! Cleo loves chasing feather wands, curling up inside hoodie pockets, and purring like an engine.",
    tags: ["Spayed", "Microchipped", "Affectionate", "Playful"]
  }
];

// ============================================================================
// STATE MANAGEMENT
// ============================================================================
const state = {
  cart: [],
  wishlist: new Set(),
  activeCategory: "all",
  searchQuery: "",
  activeSort: "popular",
  appliedCoupon: null
};

// ============================================================================
// DOM ELEMENTS
// ============================================================================
const elements = {
  productsGrid: document.getElementById("productsGrid"),
  adoptGrid: document.getElementById("adoptGrid"),
  categoryFilters: document.getElementById("categoryFilters"),
  searchInput: document.getElementById("searchInput"),
  clearSearchBtn: document.getElementById("clearSearchBtn"),
  sortSelect: document.getElementById("sortSelect"),
  noProductsFound: document.getElementById("noProductsFound"),
  resetFiltersBtn: document.getElementById("resetFiltersBtn"),
  
  // Cart
  cartDrawer: document.getElementById("cartDrawer"),
  cartBackdrop: document.getElementById("cartBackdrop"),
  openCartBtn: document.getElementById("openCartBtn"),
  closeCartBtn: document.getElementById("closeCartBtn"),
  cartBadgeCount: document.getElementById("cartBadgeCount"),
  headerCartTotal: document.getElementById("headerCartTotal"),
  cartDrawerCount: document.getElementById("cartDrawerCount"),
  cartItemsList: document.getElementById("cartItemsList"),
  cartSubtotalDisplay: document.getElementById("cartSubtotalDisplay"),
  cartDiscountRow: document.getElementById("cartDiscountRow"),
  cartDiscountDisplay: document.getElementById("cartDiscountDisplay"),
  cartShippingDisplay: document.getElementById("cartShippingDisplay"),
  cartTaxDisplay: document.getElementById("cartTaxDisplay"),
  cartTotalDisplay: document.getElementById("cartTotalDisplay"),
  shippingProgressBar: document.getElementById("shippingProgressBar"),
  shippingProgressText: document.getElementById("shippingProgressText"),
  promoInput: document.getElementById("promoInput"),
  applyPromoBtn: document.getElementById("applyPromoBtn"),
  promoMessage: document.getElementById("promoMessage"),
  clearCartBtn: document.getElementById("clearCartBtn"),
  proceedToCheckoutBtn: document.getElementById("proceedToCheckoutBtn"),

  // Checkout Modal
  checkoutModalBackdrop: document.getElementById("checkoutModalBackdrop"),
  closeCheckoutModal: document.getElementById("closeCheckoutModal"),
  checkoutForm: document.getElementById("checkoutForm"),
  checkoutItemsCount: document.getElementById("checkoutItemsCount"),
  checkoutAmountToPay: document.getElementById("checkoutAmountToPay"),
  orderSuccessScreen: document.getElementById("orderSuccessScreen"),
  confirmedOrderId: document.getElementById("confirmedOrderId"),
  continueShoppingAfterOrder: document.getElementById("continueShoppingAfterOrder"),

  // Quick View Modal
  quickViewBackdrop: document.getElementById("quickViewBackdrop"),
  quickViewContent: document.getElementById("quickViewContent"),
  closeQuickView: document.getElementById("closeQuickView"),

  // Adoption Modal
  adoptModalBackdrop: document.getElementById("adoptModalBackdrop"),
  closeAdoptModal: document.getElementById("closeAdoptModal"),
  adoptTargetCard: document.getElementById("adoptTargetCard"),
  adoptInquiryForm: document.getElementById("adoptInquiryForm"),

  // Service Modal
  serviceModalBackdrop: document.getElementById("serviceModalBackdrop"),
  closeServiceModal: document.getElementById("closeServiceModal"),
  selectedServiceInput: document.getElementById("selectedService"),
  serviceBookingForm: document.getElementById("serviceBookingForm"),

  // Wishlist & Mobile
  wishlistCount: document.getElementById("wishlistCount"),
  wishlistHeaderBtn: document.getElementById("wishlistHeaderBtn"),
  mobileMenuBtn: document.getElementById("mobileMenuBtn"),
  mobileDrawer: document.getElementById("mobileDrawer"),
  closeMobileDrawer: document.getElementById("closeMobileDrawer"),

  // Newsletter
  newsletterForm: document.getElementById("newsletterForm"),
  newsletterEmail: document.getElementById("newsletterEmail"),

  // Toast Container
  toastContainer: document.getElementById("toastContainer")
};

// ============================================================================
// INITIALIZATION
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderAdoptionCards();
  setupEventListeners();
  updateCartUI();
});

// ============================================================================
// RENDER FUNCTIONS
// ============================================================================

/**
 * Filter, sort, and render catalog products
 */
function renderProducts() {
  let list = [...PRODUCTS];

  // Category filter
  if (state.activeCategory !== "all") {
    list = list.filter(item => item.category === state.activeCategory);
  }

  // Search filter
  if (state.searchQuery.trim() !== "") {
    const q = state.searchQuery.toLowerCase();
    list = list.filter(item => 
      item.name.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  }

  // Sort
  if (state.activeSort === "price-low") {
    list.sort((a, b) => a.price - b.price);
  } else if (state.activeSort === "price-high") {
    list.sort((a, b) => b.price - a.price);
  } else if (state.activeSort === "rating") {
    list.sort((a, b) => b.rating - a.rating);
  } else {
    // Default popular
    list.sort((a, b) => b.reviews - a.reviews);
  }

  // Empty state check
  if (list.length === 0) {
    elements.productsGrid.innerHTML = "";
    elements.noProductsFound.classList.remove("hidden");
    return;
  }

  elements.noProductsFound.classList.add("hidden");

  // Build HTML
  elements.productsGrid.innerHTML = list.map(item => {
    const isWishlisted = state.wishlist.has(item.id);
    return `
      <div class="product-card" data-id="${item.id}">
        <div class="product-thumb-wrap">
          <img src="${item.image}" alt="${item.name}" class="product-img" loading="lazy">
          <span class="product-tag ${item.tagType}">${item.tag}</span>
          <button class="fav-btn ${isWishlisted ? 'active' : ''}" data-fav-id="${item.id}" title="Save to wishlist">
            <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
          <button class="quick-view-overlay-btn" data-quick-id="${item.id}">
            <i class="fa-regular fa-eye"></i> Quick View
          </button>
        </div>
        <div class="product-body">
          <span class="product-category-name">${item.category}</span>
          <h3 class="product-title">${item.name}</h3>
          <div class="product-rating">
            <div class="stars-gold">
              ${generateStarRating(item.rating)}
            </div>
            <span class="rating-count">(${item.reviews})</span>
          </div>
          <p class="product-desc">${item.desc}</p>
          <div class="product-footer">
            <div class="product-price-box">
              <span class="price-current">$${item.price.toFixed(2)}</span>
              ${item.originalPrice ? `<span class="price-original">$${item.originalPrice.toFixed(2)}</span>` : ''}
            </div>
            <button class="add-cart-btn" data-add-id="${item.id}" title="Add to cart">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * Generate 5-star rating SVG/HTML
 */
function generateStarRating(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars += '<i class="fa-solid fa-star"></i>';
    } else if (rating >= i - 0.5) {
      stars += '<i class="fa-solid fa-star-half-stroke"></i>';
    } else {
      stars += '<i class="fa-regular fa-star"></i>';
    }
  }
  return stars;
}

/**
 * Render Adoption Cards
 */
function renderAdoptionCards() {
  elements.adoptGrid.innerHTML = ADOPTION_PETS.map(pet => {
    return `
      <div class="pet-card">
        <div class="pet-img-wrap">
          <img src="${pet.image}" alt="${pet.name}" class="pet-img" loading="lazy">
          <span class="pet-badge-gender ${pet.gender === 'male' ? 'gender-male' : 'gender-female'}">
            <i class="fa-solid ${pet.gender === 'male' ? 'fa-mars' : 'fa-venus'}"></i>
          </span>
        </div>
        <div class="pet-body">
          <div class="pet-header-row">
            <h3 class="pet-name">${pet.name}</h3>
            <span class="pet-age-pill">${pet.age}</span>
          </div>
          <span class="pet-breed">${pet.breed}</span>
          <p class="pet-bio">${pet.bio}</p>
          <div class="pet-tags">
            ${pet.tags.map(t => `<span class="pet-feature-tag"><i class="fa-solid fa-check"></i> ${t}</span>`).join('')}
          </div>
          <button class="adopt-btn" data-adopt-id="${pet.id}">
            <i class="fa-solid fa-heart"></i> Inquire to Adopt ${pet.name}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// ============================================================================
// CART MANAGEMENT & UI
// ============================================================================

/**
 * Add product to cart
 */
function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }

  updateCartUI();
  showToast(`Added "${product.name}" to your cart!`, "toast-success", "fa-solid fa-cart-plus");
}

/**
 * Modify quantity in cart
 */
function updateItemQuantity(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  updateCartUI();
}

/**
 * Remove product from cart
 */
function removeFromCart(productId) {
  const item = state.cart.find(i => i.id === productId);
  state.cart = state.cart.filter(i => i.id !== productId);
  updateCartUI();
  if (item) {
    showToast(`Removed "${item.name}" from cart`, "toast-info", "fa-regular fa-trash-can");
  }
}

/**
 * Clear entire cart
 */
function clearCart() {
  if (state.cart.length === 0) return;
  state.cart = [];
  state.appliedCoupon = null;
  elements.promoInput.value = "";
  elements.promoMessage.classList.add("hidden");
  updateCartUI();
  showToast("Cart has been cleared", "toast-info", "fa-solid fa-circle-check");
}

/**
 * Update Cart Drawer, badges, totals and free shipping progress
 */
function updateCartUI() {
  const totalItemCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Discount calculation
  let discountAmount = 0;
  if (state.appliedCoupon === "PAWSOME10") {
    discountAmount = subtotal * 0.10;
  }

  // Shipping logic (Free if subtotal >= 50, otherwise $5.99)
  const isFreeShipping = subtotal >= 50 || subtotal === 0;
  const shippingFee = (subtotal === 0 || isFreeShipping) ? 0 : 5.99;
  
  // Tax (8%)
  const taxableBase = Math.max(0, subtotal - discountAmount);
  const tax = taxableBase * 0.08;
  const finalTotal = taxableBase + shippingFee + tax;

  // Header badges & labels
  elements.cartBadgeCount.textContent = totalItemCount;
  elements.cartDrawerCount.textContent = `(${totalItemCount} item${totalItemCount === 1 ? '' : 's'})`;
  elements.headerCartTotal.textContent = `$${finalTotal.toFixed(2)}`;

  // Cart Drawer summary numbers
  elements.cartSubtotalDisplay.textContent = `$${subtotal.toFixed(2)}`;
  elements.cartTaxDisplay.textContent = `$${tax.toFixed(2)}`;
  elements.cartTotalDisplay.textContent = `$${finalTotal.toFixed(2)}`;

  if (isFreeShipping && subtotal > 0) {
    elements.cartShippingDisplay.innerHTML = `<span style="color: var(--accent-green); font-weight: 700;">FREE</span>`;
  } else if (subtotal === 0) {
    elements.cartShippingDisplay.textContent = "$0.00";
  } else {
    elements.cartShippingDisplay.textContent = `$${shippingFee.toFixed(2)}`;
  }

  // Discount row
  if (discountAmount > 0) {
    elements.cartDiscountRow.classList.remove("hidden");
    elements.cartDiscountDisplay.textContent = `-$${discountAmount.toFixed(2)}`;
  } else {
    elements.cartDiscountRow.classList.add("hidden");
  }

  // Free shipping progress bar
  const shippingThreshold = 50.00;
  if (subtotal >= shippingThreshold) {
    elements.shippingProgressBar.style.width = "100%";
    elements.shippingProgressText.innerHTML = `🎉 You've unlocked <strong>Free Express Shipping!</strong>`;
  } else {
    const diff = shippingThreshold - subtotal;
    const pct = Math.min(100, (subtotal / shippingThreshold) * 100);
    elements.shippingProgressBar.style.width = `${pct}%`;
    elements.shippingProgressText.innerHTML = `Add <strong>$${diff.toFixed(2)}</strong> more to qualify for <strong>Free Shipping!</strong>`;
  }

  // Render items in drawer
  if (state.cart.length === 0) {
    elements.cartItemsList.innerHTML = `
      <div class="cart-empty-view">
        <i class="fa-solid fa-basket-shopping"></i>
        <h4>Your Cart is Empty</h4>
        <p>Treat your beloved pet to wholesome snacks, plush beds, or interactive toys!</p>
        <button class="btn btn-primary" style="margin-top: 18px;" onclick="closeCart(); location.href='#products';">
          Start Shopping
        </button>
      </div>
    `;
    elements.proceedToCheckoutBtn.disabled = true;
    elements.proceedToCheckoutBtn.style.opacity = "0.5";
  } else {
    elements.proceedToCheckoutBtn.disabled = false;
    elements.proceedToCheckoutBtn.style.opacity = "1";
    elements.cartItemsList.innerHTML = state.cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)} <span style="font-size:0.75rem; color:var(--gray-500); font-weight:400;">($${item.price.toFixed(2)} ea)</span></div>
          <div class="cart-qty-controls">
            <button class="qty-btn" onclick="updateItemQuantity(${item.id}, -1)">
              <i class="fa-solid fa-minus"></i>
            </button>
            <span class="qty-num">${item.quantity}</span>
            <button class="qty-btn" onclick="updateItemQuantity(${item.id}, 1)">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove item">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    `).join("");
  }
}

/**
 * Open / Close Cart Drawer
 */
function openCart() {
  elements.cartDrawer.classList.add("open");
  elements.cartBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  elements.cartDrawer.classList.remove("open");
  elements.cartBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

// ============================================================================
// MODAL HANDLERS
// ============================================================================

/**
 * Open Quick View Modal
 */
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  elements.quickViewContent.innerHTML = `
    <div class="quick-view-img-wrap">
      <img src="${product.image}" alt="${product.name}" class="quick-view-img">
    </div>
    <div class="quick-view-details">
      <span class="product-category-name">${product.category}</span>
      <h2>${product.name}</h2>
      <div class="product-rating">
        <div class="stars-gold">${generateStarRating(product.rating)}</div>
        <span class="rating-count">(${product.reviews} reviews) • <span style="color:var(--accent-green); font-weight:700;"><i class="fa-solid fa-check"></i> In Stock</span></span>
      </div>
      <div class="quick-view-price">$${product.price.toFixed(2)}</div>
      <p class="quick-view-desc">${product.desc}</p>
      <ul class="quick-view-features">
        ${product.details.map(d => `<li><i class="fa-solid fa-circle-check"></i> ${d}</li>`).join('')}
      </ul>
      <div style="display: flex; gap: 12px; margin-top: 20px;">
        <button class="btn btn-primary" onclick="addToCart(${product.id}, 1); closeQuickViewModal();">
          <i class="fa-solid fa-cart-plus"></i> Add to Cart Now
        </button>
        <button class="btn btn-secondary" onclick="toggleWishlist(${product.id});">
          <i class="${state.wishlist.has(product.id) ? 'fa-solid' : 'fa-regular'} fa-heart"></i> Save
        </button>
      </div>
    </div>
  `;

  elements.quickViewBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeQuickViewModal() {
  elements.quickViewBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

/**
 * Open Checkout Modal
 */
function openCheckout() {
  if (state.cart.length === 0) {
    showToast("Your cart is empty! Add items first.", "toast-danger", "fa-solid fa-circle-exclamation");
    return;
  }

  closeCart();

  // Populate checkout modal items & total
  const totalItemCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  elements.checkoutItemsCount.textContent = `${totalItemCount} item${totalItemCount === 1 ? '' : 's'}`;
  elements.checkoutAmountToPay.textContent = elements.cartTotalDisplay.textContent;

  elements.checkoutForm.classList.remove("hidden");
  elements.orderSuccessScreen.classList.add("hidden");

  elements.checkoutModalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCheckout() {
  elements.checkoutModalBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

/**
 * Open Adoption Inquiry Modal
 */
function openAdoptModal(petId) {
  const pet = ADOPTION_PETS.find(p => p.id === petId);
  if (!pet) return;

  elements.adoptTargetCard.innerHTML = `
    <img src="${pet.image}" alt="${pet.name}">
    <div>
      <strong>Meet & Inquire about ${pet.name}</strong>
      <span>${pet.breed} • ${pet.age} (${pet.gender})</span>
    </div>
  `;

  elements.adoptModalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeAdopt() {
  elements.adoptModalBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

/**
 * Open Service Booking Modal
 */
function openServiceModal(serviceName) {
  elements.selectedServiceInput.value = serviceName;
  // Set default date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateStr = tomorrow.toISOString().split("T")[0];
  document.getElementById("bookingDate").value = dateStr;

  elements.serviceModalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeService() {
  elements.serviceModalBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

/**
 * Toggle Product in Wishlist
 */
function toggleWishlist(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (state.wishlist.has(productId)) {
    state.wishlist.delete(productId);
    showToast(`Removed from wishlist`, "toast-info", "fa-regular fa-heart");
  } else {
    state.wishlist.add(productId);
    showToast(`Saved "${product.name}" to wishlist!`, "toast-success", "fa-solid fa-heart");
  }

  elements.wishlistCount.textContent = state.wishlist.size;
  renderProducts();
}

// ============================================================================
// TOAST NOTIFICATIONS
// ============================================================================
function showToast(message, type = "toast-success", icon = "fa-solid fa-bell") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="${icon}"></i> <span>${message}</span>`;
  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(15px) scale(0.9)";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ============================================================================
// EVENT LISTENERS
// ============================================================================
function setupEventListeners() {
  // Category tabs filter
  elements.categoryFilters.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-chip")) {
      elements.categoryFilters.querySelectorAll(".filter-chip").forEach(btn => btn.classList.remove("active"));
      e.target.classList.add("active");
      state.activeCategory = e.target.dataset.category;
      renderProducts();
    }
  });

  // Live search input
  elements.searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    if (state.searchQuery.trim() !== "") {
      elements.clearSearchBtn.classList.remove("hidden");
    } else {
      elements.clearSearchBtn.classList.add("hidden");
    }
    renderProducts();
  });

  // Clear search
  elements.clearSearchBtn.addEventListener("click", () => {
    elements.searchInput.value = "";
    state.searchQuery = "";
    elements.clearSearchBtn.classList.add("hidden");
    renderProducts();
  });

  // Sort dropdown
  elements.sortSelect.addEventListener("change", (e) => {
    state.activeSort = e.target.value;
    renderProducts();
  });

  // Reset filters
  elements.resetFiltersBtn.addEventListener("click", () => {
    state.activeCategory = "all";
    state.searchQuery = "";
    elements.searchInput.value = "";
    elements.clearSearchBtn.classList.add("hidden");
    elements.categoryFilters.querySelectorAll(".filter-chip").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.category === "all");
    });
    renderProducts();
  });

  // Product Grid interactions (Add to Cart, Quick View, Wishlist)
  elements.productsGrid.addEventListener("click", (e) => {
    const addBtn = e.target.closest(".add-cart-btn");
    if (addBtn) {
      const id = parseInt(addBtn.dataset.addId);
      addToCart(id, 1);
      return;
    }

    const quickBtn = e.target.closest(".quick-view-overlay-btn");
    if (quickBtn) {
      const id = parseInt(quickBtn.dataset.quickId);
      openQuickView(id);
      return;
    }

    const favBtn = e.target.closest(".fav-btn");
    if (favBtn) {
      const id = parseInt(favBtn.dataset.favId);
      toggleWishlist(id);
      return;
    }
  });

  // Adoption Grid interactions
  elements.adoptGrid.addEventListener("click", (e) => {
    const adoptBtn = e.target.closest(".adopt-btn");
    if (adoptBtn) {
      const id = adoptBtn.dataset.adoptId;
      openAdoptModal(id);
    }
  });

  // Service Booking buttons
  document.querySelectorAll(".book-service-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      openServiceModal(btn.dataset.service);
    });
  });

  // Cart Drawer open / close
  elements.openCartBtn.addEventListener("click", openCart);
  elements.closeCartBtn.addEventListener("click", closeCart);
  elements.cartBackdrop.addEventListener("click", closeCart);
  elements.clearCartBtn.addEventListener("click", clearCart);

  // Promo code
  elements.applyPromoBtn.addEventListener("click", () => {
    const code = elements.promoInput.value.trim().toUpperCase();
    if (code === "PAWSOME10") {
      state.appliedCoupon = code;
      elements.promoMessage.textContent = "Coupon PAWSOME10 applied! 10% discount!";
      elements.promoMessage.className = "promo-message success";
      elements.promoMessage.classList.remove("hidden");
      updateCartUI();
      showToast("Coupon PAWSOME10 applied! Saved 10% on your items.", "toast-success", "fa-solid fa-tag");
    } else if (code === "") {
      elements.promoMessage.textContent = "Please enter a valid promo code.";
      elements.promoMessage.className = "promo-message error";
      elements.promoMessage.classList.remove("hidden");
    } else {
      elements.promoMessage.textContent = "Invalid code. Try code: PAWSOME10";
      elements.promoMessage.className = "promo-message error";
      elements.promoMessage.classList.remove("hidden");
    }
  });

  // Proceed to Checkout
  elements.proceedToCheckoutBtn.addEventListener("click", openCheckout);
  elements.closeCheckoutModal.addEventListener("click", closeCheckout);
  elements.checkoutModalBackdrop.addEventListener("click", (e) => {
    if (e.target === elements.checkoutModalBackdrop) closeCheckout();
  });

  // Place Order form submission
  elements.checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = document.getElementById("placeOrderBtn");
    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing Order...`;

    setTimeout(() => {
      const randomOrderId = `#PC-${Math.floor(10000 + Math.random() * 90000)}`;
      elements.confirmedOrderId.textContent = randomOrderId;

      elements.checkoutForm.classList.add("hidden");
      elements.orderSuccessScreen.classList.remove("hidden");
      btn.disabled = false;
      btn.innerHTML = `<i class="fa-solid fa-lock"></i> Place Order Now`;

      // Clear cart
      state.cart = [];
      state.appliedCoupon = null;
      updateCartUI();
      showToast(`Order ${randomOrderId} successfully placed!`, "toast-success", "fa-solid fa-circle-check");
    }, 1200);
  });

  elements.continueShoppingAfterOrder.addEventListener("click", () => {
    closeCheckout();
  });

  // Quick View close
  elements.closeQuickView.addEventListener("click", closeQuickViewModal);
  elements.quickViewBackdrop.addEventListener("click", (e) => {
    if (e.target === elements.quickViewBackdrop) closeQuickViewModal();
  });

  // Adoption modal close & submit
  elements.closeAdoptModal.addEventListener("click", closeAdopt);
  elements.adoptModalBackdrop.addEventListener("click", (e) => {
    if (e.target === elements.adoptModalBackdrop) closeAdopt();
  });
  elements.adoptInquiryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    closeAdopt();
    showToast("Adoption application submitted! Our adoption counselor will contact you within 24 hours.", "toast-success", "fa-solid fa-heart");
    elements.adoptInquiryForm.reset();
  });

  // Service modal close & submit
  elements.closeServiceModal.addEventListener("click", closeService);
  elements.serviceModalBackdrop.addEventListener("click", (e) => {
    if (e.target === elements.serviceModalBackdrop) closeService();
  });
  elements.serviceBookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    closeService();
    showToast("Service appointment booked! We've sent the calendar invite to your phone.", "toast-success", "fa-solid fa-calendar-check");
    elements.serviceBookingForm.reset();
  });

  // Newsletter form
  elements.newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = elements.newsletterEmail.value.trim();
    if (email) {
      showToast("Welcome to the Paws Club! Your 15% discount code is sent.", "toast-success", "fa-solid fa-envelope-circle-check");
      elements.newsletterForm.reset();
    }
  });

  // Mobile menu toggle
  elements.mobileMenuBtn.addEventListener("click", () => {
    elements.mobileDrawer.classList.add("open");
  });
  elements.closeMobileDrawer.addEventListener("click", () => {
    elements.mobileDrawer.classList.remove("open");
  });
  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      elements.mobileDrawer.classList.remove("open");
    });
  });

  // Wishlist icon header click
  elements.wishlistHeaderBtn.addEventListener("click", () => {
    if (state.wishlist.size === 0) {
      showToast("Your wishlist is empty. Click the heart icon on any product to save it!", "toast-info", "fa-regular fa-heart");
    } else {
      showToast(`You have ${state.wishlist.size} saved favorite(s)!`, "toast-success", "fa-solid fa-heart");
    }
  });
}
