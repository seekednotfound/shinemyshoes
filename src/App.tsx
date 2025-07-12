import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Phone, 
  Instagram, 
  MessageCircle, 
  Star, 
  Check, 
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Award,
  Flame,
  Target,
  Hexagon,
  Triangle,
  Circle
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      name: "BASIC FRESH",
      price: "€10",
      description: "Maak je sneakers strak en schoon",
      features: ["Grondige Reiniging", "Veters Verfrissen", "Basis Protection"],
      icon: <Target size={32} />,
      gradient: "from-cyan-500 to-blue-500",
      shadowColor: "cyan"
    },
    {
      name: "PREMIUM HEAT",
      price: "€15", 
      description: "Volledige restauratie, heet en krachtig",
      features: ["Complete diepe reiniging", "Vlekverwijdering", "Kleur Restoratie", "Beschermende Laag"],
      popular: true,
      icon: <Flame size={32} />,
      gradient: "from-orange-500 to-red-500",
      shadowColor: "orange"
    },
    {
      name: "ELITE STATUS",
      price: "€20",
      description: "Binnenkort Beschikbaar",
      features: ["", "", "", ""],
      icon: <Award size={32} />,
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "purple"
    }
  ];

  const beforeAfterGallery = [
    {
      before: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      before: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      before: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Cursor Trail */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'scale(0.8)',
        }}
      />

      {/* Floating Book Now Button with Pulse Effect */}
      <a
        href="https://wa.me/31612345678?text=Yo!%20Ready%20to%20get%20my%20kicks%20cleaned%20🔥"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white px-8 py-4 rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center gap-3 font-black uppercase tracking-wider border border-green-300/50">
            <MessageCircle size={24} className="animate-bounce" />
            <span className="hidden sm:inline">BOEK NU</span>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
          </div>
        </div>
      </a>

      {/* Hero Section with Dynamic Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900"></div>
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'grid-move 20s linear infinite'
            }}
          />
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 animate-spin-slow">
            <Hexagon size={60} className="text-cyan-400/30" />
          </div>
          <div className="absolute top-40 right-20 animate-bounce delay-300">
            <Triangle size={40} className="text-purple-400/40" />
          </div>
          <div className="absolute bottom-32 left-20 animate-pulse delay-500">
            <Circle size={80} className="text-pink-400/20" />
          </div>
          <div className="absolute top-60 right-10 animate-spin-reverse">
            <Hexagon size={30} className="text-yellow-400/50" />
          </div>
          <div className="absolute bottom-60 right-40 animate-bounce delay-700">
            <Triangle size={50} className="text-green-400/30" />
          </div>
        </div>
        
        <div 
          className={`relative z-10 text-center px-4 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="mb-8">
            <div className="relative inline-block mb-8">
              <div className="relative">
                <Sparkles className="mx-auto mb-4 text-cyan-400 animate-pulse" size={80} />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce"></div>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black mb-6 uppercase tracking-tighter leading-none">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                SHINE
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent animate-gradient-x delay-300">
                MY SHOES
              </span>
            </h1>
            
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 blur-lg opacity-50 animate-pulse"></div>
              <p className="relative text-3xl md:text-5xl font-black mb-8 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent uppercase tracking-widest">
                
              </p>
            </div>
            
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-300 font-medium leading-relaxed">
            Jouw sneakers verdienen een tweede leven
                    – glanzender dan ooit.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <a
              href="#services"
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-wider transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-4 border border-blue-400/50">
                <Flame size={28} className="animate-bounce" />
                CHECK PRIJZEN
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </a>
            
            <a
              href="https://wa.me/31612345678"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative border-2 border-green-400 bg-black/50 backdrop-blur-sm text-green-400 hover:bg-green-400 hover:text-black px-12 py-5 rounded-2xl font-black uppercase tracking-wider transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-4">
                <MessageCircle size={28} className="animate-pulse" />
                Stuur ons een bericht
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section with Morphing Cards */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tight leading-none">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">DE</span>{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">CULTUUR</span>
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-32 h-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"></div>
            </div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed">
            Geboren op straat, gevormd door de cultuur. Wij ademen sneakers. Elke paar vertelt een verhaal – wij zorgen ervoor dat het een legendarisch verhaal wordt.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-10 rounded-3xl border border-cyan-500/30 transform hover:scale-105 hover:rotate-1 transition-all duration-500 group-hover:border-cyan-400/60">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                  <Zap className="text-white" size={40} />
                </div>
                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-wide">SNELLE SERVICE</h3>
                <p className="text-gray-300 font-medium text-lg leading-relaxed">
                Schoongemaakt binnen 24 uur, gegarandeerd. Jouw kicks zijn sneller terug op straat dan je denkt.


                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-10 rounded-3xl border border-purple-500/30 transform hover:scale-105 hover:-rotate-1 transition-all duration-500 group-hover:border-purple-400/60">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                  <Shield className="text-white" size={40} />
                </div>
                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-wide">STREET SAFE</h3>
                <p className="text-gray-300 font-medium text-lg leading-relaxed">
                Wij gebruiken alleen premium producten die je sneakers respecteren. Geen schade, alleen pure resurrectie.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-10 rounded-3xl border border-green-500/30 transform hover:scale-105 hover:rotate-1 transition-all duration-500 group-hover:border-green-400/60">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                  <Award className="text-white" size={40} />
                </div>
                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-wide">GEEN ONZIN</h3>
                <p className="text-gray-300 font-medium text-lg leading-relaxed">
                100% tevredenheid of je geld terug. We staan achter elke transformatie.



                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with 3D Cards */}
      <section id="services" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10"></div>
        
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tight leading-none">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">LEVEL UP</span><br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">YOUR GAME</span>
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-40 h-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-gradient-x"></div>
            </div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed">
            Kies je held. Van basic refresh tot complete resurrectie – wij hebben de perfecte behandeling voor elke situatie
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative transform hover:scale-105 transition-all duration-500 ${
                  service.popular ? 'md:-translate-y-8' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-lg opacity-75 animate-pulse"></div>
                      <span className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-2xl text-sm font-black uppercase tracking-wider flex items-center gap-2">
   🔥 BESTE KEUZE🔥
                      </span>
                    </div>
                  </div>
                )}
                
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                <div className={`relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm p-10 rounded-3xl border-2 transition-all duration-500 ${
                  service.popular 
                    ? `border-${service.shadowColor}-400/50 group-hover:border-${service.shadowColor}-400` 
                    : `border-${service.shadowColor}-500/30 group-hover:border-${service.shadowColor}-400/60`
                }`}>
                  
                  <div className="text-center mb-8">
                    <div className="mb-6 flex justify-center">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} group-hover:rotate-12 transition-transform duration-500`}>
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-3xl font-black mb-4 uppercase tracking-wide text-white">{service.name}</h3>
                    <div className={`text-6xl font-black mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.price}
                    </div>
                    <p className="text-gray-300 font-medium uppercase tracking-wide text-lg">{service.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-4">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-1.5">
                          <Check className="text-white" size={16} />
                        </div>
                        <span className="font-medium text-gray-200 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={`https://wa.me/31612345678?text=Yo!%20I%20want%20the%20${service.name}%20treatment%20🔥`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative block w-full overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-75 group-hover/btn:opacity-100 transition-opacity duration-300`}></div>
                    <div className={`relative bg-gradient-to-r ${service.gradient} hover:scale-105 text-white py-5 rounded-2xl font-black uppercase tracking-wider transform transition-all duration-300 text-center text-lg`}>
                      GET THIS LEVEL
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery with Tilt Effects */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tight leading-none">
              <span className="text-white">Bewijs zit in</span><br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Het resultaat</span>
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            </div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed">
            Neem het niet alleen van ons aan. Deze transformaties spreken luider dan woorden. Jouw sneakers kunnen de volgende zijn voor een topmake-over.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {beforeAfterGallery.map((item, index) => (
              <div
                key={index}
                className="group relative transform hover:scale-105 hover:rotate-1 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-purple-500/30 group-hover:border-purple-400/60 transition-colors duration-500">
                  <div className="relative">
                    <div className="grid grid-cols-2">
                      <div className="relative overflow-hidden">
                        <img 
                          src={item.before} 
                          alt="Before" 
                          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-xl text-sm font-black uppercase tracking-wider shadow-lg">
                            BEFORE
                          </div>
                        </div>
                      </div>
                      <div className="relative overflow-hidden">
                        <img 
                          src={item.after} 
                          alt="After" 
                          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4">
                          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-black uppercase tracking-wider shadow-lg">
                            AFTER
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent h-20"></div>
                  </div>
                  <div className="p-8 text-center">
                    <div className="flex justify-center items-center gap-3 text-yellow-400">
                      <Star className="fill-current animate-pulse" size={24} />
                      <span className="font-black uppercase tracking-wide text-lg">TRANSFORMATION COMPLETE</span>
                      <Star className="fill-current animate-pulse delay-300" size={24} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Interactive Elements */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)`,
            }}></div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tight leading-none">
            <span className="text-white">READY TO</span><br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">FLEX?</span>
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-40 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-gradient-x"></div>
          </div>
          <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
          “Stuur ons een berichtje via je favoriete platform. We zijn altijd online en klaar om jouw sneakers weer legendarisch te maken.”
          </p>
          
          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            <a
              href="https://wa.me/31612345678"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 p-10 rounded-3xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 flex flex-col items-center gap-6 border border-green-400/50">
                <MessageCircle size={56} className="animate-bounce" />
                <div>
                  <h3 className="font-black text-2xl uppercase tracking-wide mb-2">WHATSAPP</h3>
                  <p className="text-green-100 font-medium text-lg">Directe Contact</p>
                </div>
              </div>
            </a>
            
            <a
              href="https://instagram.com/shinemyshoes.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 p-10 rounded-3xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 flex flex-col items-center gap-6 border border-purple-400/50">
                <Instagram size={56} className="animate-pulse" />
                <div>
                  <h3 className="font-black text-2xl uppercase tracking-wide mb-2">INSTAGRAM</h3>
                  <p className="text-purple-100 font-medium text-lg">Dagelijkse Flex</p>
                </div>
              </div>
            </a>
            
            <a
              href="https://snapchat.com/add/shinemyshoess"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black p-10 rounded-3xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 flex flex-col items-center gap-6 border border-yellow-300/50">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center animate-spin-slow">
                  <span className="text-yellow-400 font-bold text-3xl">👻</span>
                </div>
                <div>
                  <h3 className="font-black text-2xl uppercase tracking-wide mb-2">SNAPCHAT</h3>
                  <p className="text-yellow-800 font-medium text-lg">Achter De Schermen</p>
                </div>
              </div>
            </a>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/50">
              <div className="flex items-center justify-center gap-4 mb-8">
                <Clock className="text-cyan-400 animate-spin-slow" size={40} />
                <h3 className="text-3xl font-black uppercase tracking-wide">OPENINGSUREN</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-8 text-gray-300">
                <div className="space-y-3">
                  <p className="font-bold text-xl"><span className="text-cyan-400">MAANDAG - VRIJDAG:</span> 10:00 - 20:00</p>
                  <p className="font-bold text-xl"><span className="text-cyan-400">ZATERDAG:</span> 10:00 - 22:00</p>
                </div>
                <div className="space-y-3">
                  <p className="font-bold text-xl"><span className="text-cyan-400">ZONDAG:</span> GESLOTEN </p>
                  <p className="font-bold text-xl"><span className="text-yellow-400">SPOEDAFSPRAAK:</span> OP AFSPRAAK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Animated Elements */}
      <footer className="bg-black border-t border-gray-800 py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <Sparkles className="text-cyan-400 animate-pulse" size={40} />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
            <span className="text-3xl font-black text-white uppercase tracking-wide">SHINE MY SHOES</span>
          </div>
          <p className="mb-6 text-gray-400 font-medium uppercase tracking-wide text-lg">From Beat to Elite - Street Level Sneaker Care</p>
          <p className="text-gray-500 font-medium">© 2025 Shine My Shoes. All rights reserved. Keep it clean, keep it legendary.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;