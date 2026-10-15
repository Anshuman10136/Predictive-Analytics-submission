// Kya Pehnu - AI Smart Wardrobe & Stylist Engine

// Sample Closet & Outfit Dataset
const CLOSET_ITEMS = [
  {
    id: "ITEM-101",
    title: "Chanderi Silk Embroidered Kurta",
    category: "ethnic",
    color: "Terracotta Rose",
    season: "All-Season",
    wears: 14,
    costPerWear: "₹450",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
    status: "Owned"
  },
  {
    id: "ITEM-102",
    title: "High-Waisted Tailored Trousers",
    category: "bottoms",
    color: "Royal Indigo",
    season: "Spring/Autumn",
    wears: 28,
    costPerWear: "₹190",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80",
    status: "Owned"
  },
  {
    id: "ITEM-103",
    title: "Handcrafted Kolhapuri Mules",
    category: "footwear",
    color: "Warm Gold & Tan",
    season: "Summer/Monsoon",
    wears: 22,
    costPerWear: "₹140",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
    status: "Owned"
  },
  {
    id: "ITEM-104",
    title: "Structure Linen Oversized Blazer",
    category: "outerwear",
    color: "Ivory Cream",
    season: "Summer Layering",
    wears: 5,
    costPerWear: "₹960",
    image: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=600&q=80",
    status: "Underworn (30+ Days)"
  },
  {
    id: "ITEM-105",
    title: "Pure Mulberry Silk Saree",
    category: "ethnic",
    color: "Deep Emerald & Gold",
    season: "Festive/Wedding",
    wears: 3,
    costPerWear: "₹2,100",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80",
    status: "Underworn (30+ Days)"
  }
];

// Pre-curated AI Ensembles (Outfit Recommendations)
const AI_OUTFITS = {
  wedding: {
    title: "Indo-Western Sunset Muse",
    matchScore: "98%",
    weatherSync: "27°C Sunny • Breathable Silk & Georgette",
    mood: "Royal Heritage Ethnic",
    items: [
      { name: "Chanderi Silk Embroidered Kurta", type: "Owned in Closet", price: "Ref #ITEM-101" },
      { name: "Flared Ivory Sharara Pants", type: "Shoppable • Torani", price: "₹8,500" },
      { name: "Handcrafted Kolhapuri Mules", type: "Owned in Closet", price: "Ref #ITEM-103" },
      { name: "Tribe Amrapali Antique Gold Jhumkas", type: "Shoppable • Tribe", price: "₹3,200" }
    ],
    rationale: "Selected for warm afternoon lighting and indoor-outdoor wedding reception flow. Breathable natural weave keeps thermal comfort high."
  },
  work: {
    title: "Power Chic Linen Monochrome",
    matchScore: "96%",
    weatherSync: "24°C AC Office • Light Layering",
    mood: "Quiet Luxury",
    items: [
      { name: "Structure Linen Oversized Blazer", type: "Owned in Closet", price: "Ref #ITEM-104" },
      { name: "High-Waisted Tailored Trousers", type: "Owned in Closet", price: "Ref #ITEM-102" },
      { name: "Nude Pointed Toe Block Heels", type: "Shoppable • FableStreet", price: "₹4,200" }
    ],
    rationale: "Structure meets comfort. The breathable linen blazer insulates against office AC while maintaining sharp executive lines."
  },
  party: {
    title: "Midnight Velvet & Metallic Statement",
    matchScore: "94%",
    weatherSync: "20°C Evening Breeze",
    mood: "Glamour Night Out",
    items: [
      { name: "Royal Indigo Slip Dress", type: "Shoppable • Uptownie", price: "₹3,800" },
      { name: "Cropped Leather Biker Jacket", type: "Shoppable • ONLY", price: "₹5,500" },
      { name: "Gold Stiletto Ankle Boots", type: "Shoppable • Nykaa Luxe", price: "₹6,800" }
    ],
    rationale: "Sleek contrast between high-gloss indigo slip and textured leather outerwear. High-impact silhouette for cocktail events."
  },
  casual: {
    title: "Artisanal Cotton Sunset Breeze",
    matchScore: "99%",
    weatherSync: "28°C Warm Humidity",
    mood: "Boho Chic",
    items: [
      { name: "Hand-Block Printed Mulmul Shirt", type: "Shoppable • FabIndia", price: "₹2,400" },
      { name: "Relaxed Fit Denim Culottes", type: "Owned in Closet", price: "Ref #ITEM-102" },
      { name: "Tan Leather Woven Flats", type: "Owned in Closet", price: "Ref #ITEM-103" }
    ],
    rationale: "Maximum breathability for outdoor day events. 100% organic cotton weave allows effortless airflow."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  renderCloset(CLOSET_ITEMS);
  initStylistControls();
});

// Navigation Toggle
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-nav-btn');
  const navDrawer = document.getElementById('mobile-nav');
  if (toggleBtn && navDrawer) {
    toggleBtn.addEventListener('click', () => {
      navDrawer.classList.toggle('hidden');
    });
  }
}

// Render Digital Closet Items
function renderCloset(items) {
  const grid = document.getElementById('closet-grid');
  if (!grid) return;

  grid.innerHTML = items.map(item => `
    <div class="fashion-card overflow-hidden group">
      <div class="relative overflow-hidden bg-stone-100 aspect-fashion">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <span class="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-full text-[11px] font-mono font-bold text-stone-800 shadow">
          ${item.status}
        </span>
      </div>
      <div class="p-4">
        <span class="text-[10px] font-mono text-terracotta uppercase tracking-wider block mb-1" style="color: #c86d51;">${item.category} • ${item.season}</span>
        <h4 class="font-headline font-bold text-base text-stone-900 mb-2 leading-snug">${item.title}</h4>
        
        <div class="flex justify-between items-center text-xs font-mono pt-2 border-t border-stone-100 text-stone-500">
          <span>Worn: <strong class="text-stone-800">${item.wears}x</strong></span>
          <span>CPW: <strong class="text-stone-800">${item.costPerWear}</strong></span>
        </div>
      </div>
    </div>
  `).join('');
}

// Filter Closet Items
function filterClosetCategory(category) {
  const buttons = document.querySelectorAll('.closet-tab-btn');
  buttons.forEach(btn => {
    btn.classList.remove('bg-indigo', 'text-white');
    btn.classList.add('bg-stone-100', 'text-stone-700');
  });

  event.target.classList.remove('bg-stone-100', 'text-stone-700');
  event.target.classList.add('bg-indigo', 'text-white');

  if (category === 'all') {
    renderCloset(CLOSET_ITEMS);
  } else {
    const filtered = CLOSET_ITEMS.filter(i => i.category === category);
    renderCloset(filtered);
  }
}

// AI Stylist Outfit Recommendation Generator
function initStylistControls() {
  const occasionSelect = document.getElementById('occasion-select');
  if (occasionSelect) {
    occasionSelect.addEventListener('change', (e) => {
      generateAIOutfit(e.target.value);
    });
  }
}

function generateAIOutfit(occasionKey) {
  const outfit = AI_OUTFITS[occasionKey] || AI_OUTFITS.wedding;
  
  const displayTitle = document.getElementById('ai-outfit-title');
  const displayScore = document.getElementById('ai-match-score');
  const displayWeather = document.getElementById('ai-weather-sync');
  const displayRationale = document.getElementById('ai-rationale');
  const displayList = document.getElementById('ai-items-list');

  if (displayTitle) displayTitle.innerText = outfit.title;
  if (displayScore) displayScore.innerText = outfit.matchScore;
  if (displayWeather) displayWeather.innerText = outfit.weatherSync;
  if (displayRationale) displayRationale.innerText = outfit.rationale;

  if (displayList) {
    displayList.innerHTML = outfit.items.map(item => `
      <div class="p-3.5 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between">
        <div>
          <span class="font-headline font-bold text-sm text-stone-900 block">${item.name}</span>
          <span class="text-xs font-mono ${item.type.includes('Owned') ? 'text-emerald-700 font-semibold' : 'text-amber-700'}">${item.type}</span>
        </div>
        <span class="font-mono text-xs font-bold text-stone-800">${item.price}</span>
      </div>
    `).join('');
  }
}

// Quick "Kya Pehnu Aaj?" Simulation Action
function triggerQuickStylist() {
  const occasions = ['wedding', 'work', 'party', 'casual'];
  const randomOccasion = occasions[Math.floor(Math.random() * occasions.length)];
  
  const select = document.getElementById('occasion-select');
  if (select) {
    select.value = randomOccasion;
    generateAIOutfit(randomOccasion);
    
    // Smooth scroll to AI result
    document.getElementById('ai-result-card').scrollIntoView({ behavior: 'smooth' });
  }
}
