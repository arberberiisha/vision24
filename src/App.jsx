import React, { useState, useEffect } from 'react';
import { Monitor, Wifi, Star, MapPin, ChevronRight, Menu, X, CheckCircle, Send, Globe, MessageCircle, Music, Cloud, Calendar } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [lang, setLang] = useState('en');

  // Form State - To capture user input
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Prishtina'
  });

  // Update form values when user types
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // SEND TO WHATSAPP FUNCTION
  const handleOrderSubmit = (e) => {
    e.preventDefault(); // Stop page refresh
    
    // 1. Create the message
    const message = `Pershendetje Vision24! 👋%0A%0ADua te bej nje porosi:%0A---------------------------%0A🖼️ Modeli: ${selectedProduct}%0A👤 Emri: ${formData.name}%0A📍 Qyteti: ${formData.city}%0A📱 Tel: ${formData.phone}%0A---------------------------%0A%0AJu lutem me konfirmoni. Faleminderit!`;

    // 2. Open WhatsApp
    const whatsappUrl = `https://wa.me/38344123456?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    setIsOrderModalOpen(false);
  };

  // FIX: Only lock scroll when Order Modal is open OR Menu is open
  useEffect(() => {
    if (isOrderModalOpen || isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOrderModalOpen, isMenuOpen]);

  const content = {
    en: {
      nav: { features: "Features", models: "Models", quality: "Quality", getStarted: "Get Started" },
      hero: {
        badge: "#1 Smart Mirror Brand in Kosova",
        title1: "See More Than Just",
        title2: "Your Reflection.",
        subtitle: "Vision24 brings the future to your home. High-definition information displays hidden behind premium, European-standard mirror glass.",
        cta1: "Find Your Mirror",
      },
      featuresSection: {
        title: "Technology That Disappears.",
        subtitle: "Smart when you need it. A perfect mirror when you don't.",
        f1Title: "Vanishing Display",
        f1Desc: "Unlike cheap mirrors, our screen is completely invisible when turned off. No grey borders, just pure reflection.",
        f2Title: "Bathroom Ready (IP65)",
        f2Desc: "Engineered to withstand humidity and steam. Perfect for your shower or vanity area without risk.",
        f3Title: "Made for Kosova",
        f3Desc: "Designed in Prishtina. We offer local installation, 2-year warranty, and 24/7 Albanian/English support."
      },
      interfaceSection: {
        title: "Your Life. At a Glance.",
        subtitle: "Customize your dashboard with widgets that matter to you.",
        w1: "Weather",
        w2: "Calendar",
        w3: "Spotify",
        w4: "News"
      },
      productsSection: {
        title: "The Collection",
        subtitle: "Choose the style that fits your space.",
        btn: "Customize & Order",
        tag1: "Best Seller",
        tag2: "Perfect for Makeup",
        tag3: "Personalized"
      },
      qualitySection: {
        title: "Why Vision24 is Different.",
        p1: "Cheap imports use standard glass which makes the display look 'washed out' or gray. Vision24 uses premium dielectric mirror glass.",
        p2: "When the display is off, it looks exactly like a luxury mirror. When it's on, the information floats magically on the surface.",
        warranty: "Local Warranty",
        satisfaction: "Satisfaction"
      },
      form: {
        title: "Order",
        desc: "Fill out the form below. It will open WhatsApp to send your details directly to our sales team.",
        name: "Full Name",
        phone: "Phone Number (+383)",
        city: "City",
        btn: "Order on WhatsApp"
      },
      productsList: [
        {
          id: 1,
          name: "Vision24 Grand",
          price: "€650",
          features: ["32-inch Invisible Display", "True-Light™ LED System", "Watch YouTube/Netflix"],
          image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 2,
          name: "Vision24 Vanity",
          price: "€450",
          features: ["Smart Weather & News", "Anti-Fog Technology", "Dimmable Front Light"],
          image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 3,
          name: "Vision24 Signature",
          price: "€390",
          features: ["Emër i Ndriçuar Personal", "Ekran Smart 24-inç", "Ideale për Fëmijë/Dhurata"],
          image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    sq: {
      nav: { features: "Veçoritë", models: "Modelet", quality: "Cilësia", getStarted: "Fillo Tani" },
      hero: {
        badge: "#1 Pasqyra Inteligjente në Kosovë",
        title1: "Shihni Më Shumë Se",
        title2: "Thjesht Reflektimin.",
        subtitle: "Vision24 sjell të ardhmen në shtëpinë tuaj. Ekran me definicion të lartë i fshehur pas xhamit premium, me standarde evropiane.",
        cta1: "Zbuloni Modelet",
      },
      featuresSection: {
        title: "Teknologji e Padukshme.",
        subtitle: "E mençur kur ju duhet. Pasqyrë perfekte kur nuk ju duhet.",
        f1Title: "Ekran 'Vanishing'",
        f1Desc: "Ndryshe nga pasqyrat e lira, ekrani ynë është plotësisht i padukshëm kur fiket. Pa korniza gri, vetëm reflektim i pastër.",
        f2Title: "Rezistente ndaj Ujit (IP65)",
        f2Desc: "E inxhinieruar për t'i rezistuar lagështisë dhe avullit. E përkryer për tualetin tuaj pa asnjë rrezik.",
        f3Title: "Prodhuar për Kosovën",
        f3Desc: "Dizajnuar në Prishtinë. Ne ofrojmë instalim lokal, garanci 2-vjeçare dhe mbështetje 24/7 në Shqip/Anglisht."
      },
      interfaceSection: {
        title: "Jeta Juaj. Në Një Shikim.",
        subtitle: "Personalizoni ekranin me informacionet që ju duhen.",
        w1: "Moti",
        w2: "Kalendari",
        w3: "Spotify",
        w4: "Lajmet"
      },
      productsSection: {
        title: "Koleksioni",
        subtitle: "Zgjidhni stilin që i përshtatet hapësirës suaj.",
        btn: "Porosit & Personalizo",
        tag1: "Më e shitura",
        tag2: "Perfekte për Makeup",
        tag3: "E Personalizuar"
      },
      qualitySection: {
        title: "Pse Vision24 është ndryshe?",
        p1: "Importet e lira përdorin xham standard që e bën ekranin të duket 'i zbehtë' ose gri. Vision24 përdor xham pasqyre dielektrik premium.",
        p2: "Kur ekrani është i fikur, duket saktësisht si një pasqyrë luksoze. Kur ndizet, informacioni shfaqet në mënyrë magjike në sipërfaqe.",
        warranty: "Garanci Lokale",
        satisfaction: "Kënaqshmëri"
      },
      form: {
        title: "Porosit",
        desc: "Plotësoni formën më poshtë. Do të hapet WhatsApp për të dërguar detajet direkt tek ekipi ynë.",
        name: "Emri dhe Mbiemri",
        phone: "Numri i Telefonit (+383)",
        city: "Qyteti",
        btn: "Porosit në WhatsApp"
      },
      productsList: [
        {
          id: 1,
          name: "Vision24 Grand",
          price: "€650",
          features: ["32-inch Ekran i Padukshëm", "Sistem LED True-Light™", "Shiko YouTube/Netflix"],
          image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 2,
          name: "Vision24 Vanity",
          price: "€450",
          features: ["Moti & Lajmet Inteligjente", "Teknologji Anti-Mjegull", "Dritë e Përparme e Rregullueshme"],
          image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 3,
          name: "Vision24 Signature",
          price: "€390",
          features: ["Emër i Ndriçuar Personal", "Ekran Smart 24-inç", "Ideale për Fëmijë/Dhurata"],
          image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800"
        }
      ]
    }
  };

  const t = content[lang];
  const products = t.productsList;

  const openOrderForm = (productName) => {
    setSelectedProduct(productName);
    setIsOrderModalOpen(true);
    setIsMenuOpen(false); // Close menu if opening from mobile nav
  };

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'sq' : 'en');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-cyan-500 selection:text-white pb-20 overflow-x-hidden">
      
      {/* --- Navigation --- */}
      <nav className="fixed w-full z-40 bg-neutral-950/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <img src="/vision24Logo.png" alt="Vision24 Logo" className="h-8 w-auto object-contain" />
              <span className="text-xl md:text-2xl font-bold tracking-wide">Vision24</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#features" className="text-gray-300 hover:text-white transition text-sm font-medium">{t.nav.features}</a>
              <a href="#products" className="text-gray-300 hover:text-white transition text-sm font-medium">{t.nav.models}</a>
              <a href="#quality" className="text-gray-300 hover:text-white transition text-sm font-medium">{t.nav.quality}</a>
              
              <button 
                onClick={toggleLang}
                className="flex items-center gap-2 text-sm font-medium border border-white/20 px-3 py-1 rounded-full hover:bg-white/10 transition"
              >
                <Globe size={16} /> {lang === 'en' ? 'SQ' : 'EN'}
              </button>

              <button 
                onClick={() => openOrderForm('General Inquiry')}
                className="bg-cyan-500 text-black px-5 py-2 rounded-full font-bold hover:bg-cyan-400 transition"
              >
                {t.nav.getStarted}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center gap-4">
               <button 
                onClick={toggleLang}
                className="flex items-center gap-1 text-xs font-bold border border-white/20 px-2 py-1 rounded-full"
              >
                {lang.toUpperCase()}
              </button>

              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-white p-2 relative z-50 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Toggle Menu"
              >
                <div className={`transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                  {isMenuOpen ? (
                    <X size={28} strokeWidth={2.5} /> 
                  ) : (
                    <Menu size={28} strokeWidth={2.5} />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full Screen Menu - FIXED: SOLID BACKGROUND */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-30 bg-neutral-950 flex flex-col items-center justify-start pt-32 space-y-8 animate-in fade-in duration-200">
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-gray-300 hover:text-cyan-400 transition">{t.nav.features}</a>
            <a href="#products" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-gray-300 hover:text-cyan-400 transition">{t.nav.models}</a>
            <a href="#quality" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-gray-300 hover:text-cyan-400 transition">{t.nav.quality}</a>
            <button 
               onClick={() => openOrderForm('General Inquiry')}
               className="text-xl bg-cyan-500 text-black px-8 py-3 rounded-full font-bold shadow-lg shadow-cyan-500/20"
            >
              {t.nav.getStarted}
            </button>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/20 rounded-full blur-[80px] md:blur-[120px] -z-10 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/20 rounded-full blur-[80px] md:blur-[120px] -z-10 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs md:text-sm mb-6 font-medium">
            <Star size={14} className="mr-2" /> {t.hero.badge}
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            {t.hero.title1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">{t.hero.title2}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed px-4">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <a href="#products" className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition flex items-center justify-center">
              {t.hero.cta1} <ChevronRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* --- Features Grid --- */}
      <section id="features" className="py-16 md:py-24 bg-neutral-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.featuresSection.title}</h2>
            <p className="text-gray-400 px-4">{t.featuresSection.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <FeatureCard 
              icon={<Monitor className="text-cyan-400" size={32} />}
              title={t.featuresSection.f1Title}
              desc={t.featuresSection.f1Desc}
            />
            <FeatureCard 
              icon={<Wifi className="text-cyan-400" size={32} />}
              title={t.featuresSection.f2Title}
              desc={t.featuresSection.f2Desc}
            />
            <FeatureCard 
              icon={<MapPin className="text-cyan-400" size={32} />}
              title={t.featuresSection.f3Title}
              desc={t.featuresSection.f3Desc}
            />
          </div>
        </div>
      </section>

      {/* --- Interface / OS Preview --- */}
      <section className="py-16 md:py-24 bg-neutral-950 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.interfaceSection.title}</h2>
          <p className="text-gray-400">{t.interfaceSection.subtitle}</p>
        </div>

        {/* The Mirror UI Mockup */}
        <div className="relative max-w-sm md:max-w-4xl mx-auto bg-neutral-900 rounded-[2rem] border-8 border-neutral-800 p-1 md:p-2 shadow-2xl">
          {/* Reflection Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-10 pointer-events-none rounded-[1.5rem]"></div>
          
          <div className="bg-black/80 rounded-[1.5rem] p-6 md:p-12 h-[450px] md:h-[600px] relative flex flex-col justify-between overflow-hidden">
            {/* Background Image (The Reflection) */}
            <img 
               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" 
               className="absolute inset-0 w-full h-full object-cover opacity-30 blur-[2px]" 
               alt="Reflection"
            />

            {/* UI Widgets Top */}
            <div className="relative z-20 flex justify-between items-start text-white">
              <div className="text-left">
                <h3 className="text-5xl md:text-6xl font-thin tracking-tighter mb-1">08:24</h3>
                <p className="text-lg md:text-xl font-medium text-cyan-300">Monday, Jan 24</p>
                <div className="mt-4 md:mt-6 flex items-center gap-3 bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10 w-fit">
                   <div className="text-yellow-400"><Cloud size={20} fill="currentColor" /></div>
                   <div>
                     <p className="text-xs md:text-sm font-bold">{t.interfaceSection.w1}</p>
                     <p className="text-[10px] md:text-xs text-gray-300">Prishtina, -2°C</p>
                   </div>
                </div>
              </div>

              {/* Hide Calendar on very small screens, show on md+ */}
              <div className="text-right hidden md:block">
                 <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10 w-64">
                    <div className="flex items-center gap-2 mb-2 text-cyan-400">
                        <Calendar size={16} />
                        <p className="text-sm font-bold">{t.interfaceSection.w2}</p>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between"><span>09:00</span> <span className="text-gray-400">Meeting</span></div>
                      <div className="flex justify-between"><span>13:30</span> <span className="text-gray-400">Gym</span></div>
                    </div>
                 </div>
              </div>
            </div>

            {/* UI Widgets Bottom */}
            <div className="relative z-20 flex justify-center pb-4 md:pb-0">
               <div className="bg-black/40 backdrop-blur-md px-6 py-3 md:py-4 rounded-full border border-white/10 flex items-center gap-6">
                 <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-cyan-400 transition">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500 flex items-center justify-center text-black font-bold">
                        <Music size={18} />
                    </div>
                    <span className="text-[10px] md:text-xs">{t.interfaceSection.w3}</span>
                 </div>
                 <div className="w-px h-6 md:h-8 bg-white/20"></div>
                 <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-cyan-400 transition">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        <Globe size={18} />
                    </div>
                    <span className="text-[10px] md:text-xs">{t.interfaceSection.w4}</span>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Product Showcase --- */}
      <section id="products" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.productsSection.title}</h2>
            <p className="text-gray-400">{t.productsSection.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div key={product.id} className="group bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-900/20 transition duration-300">
                <div className="h-64 md:h-72 overflow-hidden relative bg-gray-800">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transform group-hover:scale-105 transition duration-700"
                  />
                  {/* Dynamic Tags */}
                  <div className="absolute top-4 left-4 bg-cyan-500 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                     {idx === 0 ? t.productsSection.tag1 : idx === 1 ? t.productsSection.tag2 : t.productsSection.tag3}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold border border-white/10">
                    {product.price}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-center text-gray-400 text-sm">
                        <CheckCircle size={16} className="mr-3 text-cyan-500 flex-shrink-0" /> {feat}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => openOrderForm(product.name)}
                    className="w-full py-4 rounded-xl bg-white text-black font-bold tracking-wide hover:bg-cyan-400 transition shadow-lg mt-4 active:scale-95"
                  >
                    {t.productsSection.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Quality Assurance --- */}
      <section id="quality" className="py-16 md:py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.qualitySection.title}</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t.qualitySection.p1}
            </p>
            <p className="text-lg text-gray-700 mb-8">
              {t.qualitySection.p2}
            </p>
            <div className="flex gap-8">
               <div>
                 <h4 className="text-2xl md:text-3xl font-bold text-cyan-600">2 Year</h4>
                 <p className="text-gray-600 font-medium">{t.qualitySection.warranty}</p>
               </div>
               <div>
                 <h4 className="text-2xl md:text-3xl font-bold text-cyan-600">100%</h4>
                 <p className="text-gray-600 font-medium">{t.qualitySection.satisfaction}</p>
               </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
             <div className="absolute -inset-4 bg-cyan-200 rounded-full blur-xl opacity-50"></div>
             <img 
               src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" 
               alt="Quality Detail" 
               className="relative rounded-2xl shadow-2xl"
             />
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 bg-neutral-950 border-t border-white/10 text-center md:text-left mb-16 md:mb-0">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
             {/* Logo */}
             <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                 <img src="/vision24Logo.png" alt="Vision24 Logo" className="h-8 w-auto object-contain" />
                 <span className="text-2xl font-bold text-white tracking-wide">Vision24</span>
             </div>
            <p className="text-gray-500 text-sm mt-2">Prishtina, Kosovo</p>
            <p className="text-gray-500 text-sm">+383 44 123 456</p>
          </div>
          <div className="flex space-x-8 justify-center">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition">WhatsApp</a>
          </div>
        </div>
      </footer>

      {/* --- Floating WhatsApp Button --- */}
      <a 
        href="https://wa.me/38344123456" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center border-4 border-neutral-900 active:scale-90"
      >
        <MessageCircle size={28} />
      </a>

      {/* --- ORDER MODAL (UPDATED FOR WHATSAPP) --- */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOrderModalOpen(false)}
          ></div>
          <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 md:p-8 w-full max-w-md relative z-10 shadow-2xl animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsOrderModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-xl md:text-2xl font-bold mb-2 pr-8">{t.form.title}: <span className="text-cyan-400">{selectedProduct}</span></h3>
            <p className="text-gray-400 mb-6 text-xs md:text-sm leading-relaxed">
              {t.form.desc}
            </p>
            
            <form className="space-y-4" onSubmit={handleOrderSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">{t.form.name}</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-neutral-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition" 
                  placeholder="Agim Gashi" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">{t.form.phone}</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-neutral-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition" 
                  placeholder="044 123 123" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">{t.form.city}</label>
                <select 
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition"
                >
                  <option>Prishtina</option>
                  <option>Prizren</option>
                  <option>Peja</option>
                  <option>Gjakova</option>
                  <option>Ferizaj</option>
                  <option>Gjilan</option>
                  <option>Mitrovica</option>
                  <option>Other</option>
                </select>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl mt-4 flex items-center justify-center gap-2 transition active:scale-95 shadow-lg shadow-green-500/20">
                <MessageCircle size={20} /> {t.form.btn}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-6 md:p-8 rounded-2xl bg-neutral-900 border border-white/5 hover:border-cyan-500/30 transition duration-300">
    <div className="mb-4 md:mb-6 bg-neutral-950 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center border border-white/10 shadow-lg">
      {icon}
    </div>
    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{title}</h3>
    <p className="text-sm md:text-base text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

export default App;