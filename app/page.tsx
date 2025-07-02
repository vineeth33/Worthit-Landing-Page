"use client"
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle,
  Chrome,
  Clock,
  Download,
  Heart,
  Play,
  Shield,
  ShoppingBag,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const [currency, setCurrency] = useState("INR") // Default to INR

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3)
    }, 3000)
    // Load currency preference from localStorage
    const savedCurrency = localStorage.getItem("currency") || "INR"
    setCurrency(savedCurrency)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Save currency preference to localStorage
    localStorage.setItem("currency", currency)
  }, [currency])

  const formatMetrics = () => {
    const basePrice = 45 // INR
    const baseRisk = 42 // Risk score in INR
    const baseTime = 5 // Days in INR
    const conversionRate = 0.012 // 1 INR = 0.012 USD

    if (currency === "USD") {
      return {
        price: `$${(basePrice * conversionRate).toFixed(2)}`,
        risk: Math.round(baseRisk * conversionRate * 10), // Scale risk for USD (illustrative)
        time: "1 day", // Adjusted to ~1 day as specified
      }
    }
    return {
      price: `₹${basePrice.toFixed(2)}`,
      risk: baseRisk,
      time: `${baseTime} days`,
    }
  }

  const { price, risk, time } = formatMetrics()

  const features = useMemo(
    () => [
      {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Smart Cost Analysis",
        description: "AI-powered cost-per-use calculations help you understand the real value of every purchase.",
      },
      {
        icon: <Clock className="w-8 h-8" />,
        title: "Time-to-Afford Metrics",
        description: "See exactly how many work hours or days it takes to afford any item based on your income.",
      },
      {
        icon: <Shield className="w-8 h-8" />,
        title: "Impulse Control",
        description: "Built-in purchase delays and smart recommendations help you avoid regrettable buying decisions.",
      },
    ],
    []
  )

  const benefits = useMemo(
    () => [
      {
        icon: <Target className="w-6 h-6" />,
        title: "Make Informed Decisions",
        description: "Never wonder if a purchase is worth it again with clear, data-driven insights.",
      },
      {
        icon: <Brain className="w-6 h-6" />,
        title: "Reduce Buyer's Remorse",
        description: "Smart analysis helps you avoid purchases you'll regret later.",
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Save Money Effortlessly",
        description: "Automatic calculations help you identify truly valuable purchases.",
      },
    ],
    []
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-slate-200/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <Image src="/worthit-logo.png" alt="WorthIt Logo" width={40} height={40} className="object-contain" />
              </div>
              <span className="text-xl font-bold text-slate-900">WorthIt</span>
            </div>
            <div className="flex items-center space-x-4 md:space-x-8">
              <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-slate-600 hover:text-blue-600 transition-colors">
                How it Works
              </a>
              <a href="#benefits" className="text-slate-600 hover:text-blue-600 transition-colors">
                Benefits
              </a>
              <div className="relative">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="appearance-none bg-white text-slate-900 text-sm font-medium rounded-full px-4 py-2 border border-slate-200 hover:border-blue-600 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer pr-8"
                  aria-label="Select currency"
                >
                  <option value="INR">INR</option>
                  <option value="USD">USD</option>
                </select>
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-slate-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <a
                href="https://chromewebstore.google.com/detail/pjejfmpjhkdfbbbmdanfkdbdmighijof?utm_source=item-share-cb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Chrome className="w-4 h-4" />
                <span>Add to Chrome</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  <span>Version 1.1 Now Live</span>
                </div>
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                    Shop Smarter with
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                      Smart Analysis
                    </span>
                  </h1>
                </div>
                <div>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    Version 1.1 is here — featuring a sleek new UI, essential bug fixes from user feedback, and USD currency support for global shoppers. Experience smarter shopping with real-time cost-per-use insights, time-to-afford analysis, and intelligent impulse control tools — now more powerful and personalized than ever.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://chromewebstore.google.com/detail/pjejfmpjhkdfbbbmdanfkdbdmighijof?utm_source=item-share-cb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 text-lg font-semibold"
                >
                  <Chrome className="w-6 h-6" />
                  <span>Add to Chrome - Free</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="https://youtu.be/Jfvj7QE3aDo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-3 text-lg font-semibold"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </a>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-600 text-sm">Free Forever</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-600 text-sm">Privacy First</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-600 text-sm">No Tracking</span>
                </div>
              </div>
            </div>

            <div className={`relative ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-3xl opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-8 border border-green-400 shadow-[0_0_8px_rgba(34,197,94,0.25)]">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 relative">
                          <Image
                            src="/worthit-logo.png"
                            alt="WorthIt"
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                        <span className="font-semibold text-slate-900">WorthIt Analysis</span>
                      </div>
                      <button className="text-slate-400 hover:text-slate-600">−</button>
                    </div>

                    <div className="flex items-center space-x-6">
                      <div className="relative">
                        <svg className="w-20 h-20 transform -rotate-90">
                          <circle cx="40" cy="40" r="30" stroke="#e5e7eb" strokeWidth="6" fill="none" />
                          <circle
                            cx="40"
                            cy="40"
                            r="30"
                            stroke="url(#gradient)"
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray="188"
                            strokeDashoffset={188 - (risk / 100) * 188}
                            className="transition-all duration-1000"
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#10b981" />
                              <stop offset="50%" stopColor="#f59e0b" />
                              <stop offset="100%" stopColor="#ef4444" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-lg font-bold text-slate-900">{risk}</div>
                            <div className="text-xs text-slate-500">Risk</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 flex-1">
                        <div className="flex justify-between items-center bg-slate-50 rounded-lg p-3">
                          <span className="text-sm text-slate-600">Cost/use</span>
                          <span className="font-semibold text-slate-900">{price}</span>
                        </div>
                        <div className="flex justify-between items-center bg-slate-50 rounded-lg p-3">
                          <span className="text-sm text-slate-600">Time</span>
                          <span className="font-semibold text-slate-900">{time}</span>
                        </div>
                        <div className="flex justify-between items-center bg-slate-50 rounded-lg p-3">
                          <span className="text-sm text-slate-600">Uses</span>
                          <span className="font-semibold text-slate-900">200</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <div className="flex-1 bg-green-100 text-green-700 px-3 py-2 rounded-lg text-center text-sm font-medium">
                        ✓ Smart Buy
                      </div>
                      <div className="flex-1 bg-slate-100 text-slate-400 px-3 py-2 rounded-lg text-center text-sm">
                        ⚠ Consider
                      </div>
                      <div className="flex-1 bg-slate-100 text-slate-400 px-3 py-2 rounded-lg text-center text-sm">
                        ⚡ High Risk
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              See WorthIt in Action
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Watch our interactive demo to explore how WorthIt’s version 1.1 helps you shop smarter with real-time cost-per-use insights and impulse control tools.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <div
              style={{
                position: "relative",
                paddingBottom: "calc(54.285714285714285% + 41px)",
                height: 0,
                width: "100%",
              }}
            >
              <iframe
                src="https://demo.arcade.software/Len6Yz5DCD6pcBk35pqk?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
                title="WorthIt Demo"
                frameBorder="0"
                loading="lazy"
                webkitAllowFullScreen
                mozAllowFullScreen
                allowFullScreen
                allow="clipboard-write"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  colorScheme: "light",
                  borderRadius: "1rem",
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Why WorthIt?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Stop wondering if your purchases are worth it. Get instant, data-driven insights for every shopping decision. Version 1.1 includes USD support and improved reliability.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Powerful Features for
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                Smart Shopping
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to make informed purchasing decisions and avoid buyer's remorse. Now enhanced in version 1.1.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 ${activeFeature === index ? "ring-2 ring-blue-500 ring-opacity-50" : ""}`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">How WorthIt Works</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get started in minutes and start making smarter purchases immediately with version 1.1’s improved performance.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Install & Setup",
                description: "Add WorthIt to Chrome and configure your income settings in under 2 minutes.",
                icon: <Download className="w-8 h-8" />,
              },
              {
                step: "02",
                title: "Shop Normally",
                description: "Browse Amazon India or Myntra as usual. WorthIt automatically detects products.",
                icon: <ShoppingBag className="w-8 h-8" />,
              },
              {
                step: "03",
                title: "Make Smart Decisions",
                description: "See instant analysis with cost-per-use, time-to-afford, and risk scoring in INR or USD.",
                icon: <TrendingUp className="w-8 h-8" />,
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 h-full">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Sites Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Works Where You Shop</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Currently supports India's most popular shopping platforms, with more coming soon. Version 1.1 enhances compatibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Amazon India", status: "✅ Supported", description: "Full integration with all price types" },
              { name: "Myntra", status: "✅ Supported", description: "Fashion-focused analysis" },
              { name: "Flipkart", status: "🔄 Coming Soon", description: "Major e-commerce platform" },
              { name: "Nykaa", status: "🔄 Coming Soon", description: "Beauty and wellness" },
            ].map((site, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 text-center">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{site.name}</h3>
                <div className="text-sm font-medium mb-3 text-blue-600">{site.status}</div>
                <p className="text-slate-600 text-sm">{site.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Start Shopping Smarter Today</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Join the smart shopping revolution with version 1.1, featuring USD support, enhanced UI, and bug fixes for a seamless experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chromewebstore.google.com/detail/pjejfmpjhkdfbbbmdanfkdbdmighijof?utm_source=item-share-cb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 text-lg font-semibold"
              >
                <Chrome className="w-6 h-6" />
                <span>Add to Chrome - Free</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-3 text-lg font-semibold">
                <Heart className="w-5 h-5" />
                <span><Link href="/privacy" className="hover:text-white transition-colors">Learn More</Link></span>
              </button>
            </div>
            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="flex items-center space-x-2 text-blue-100">
                <CheckCircle className="w-5 h-5" />
                <span>Free Forever</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <CheckCircle className="w-5 h-5" />
                <span>Privacy First</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <CheckCircle className="w-5 h-5" />
                <span>No Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/worthit-logo.png"
                    alt="WorthIt Logo"
                    width={40}
                    height={40}
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <span className="text-xl font-bold">WorthIt</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Making online shopping smarter with AI-powered purchase analysis. Version 1.1 includes USD support, enhanced UI, and bug fixes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-slate-400">
                <a href="#features">
                  <div>Features</div>
                </a>
                <a href="#how-it-works">
                  <div>How it Works</div>
                </a>
                <div>Supported Sites</div>
                <div>Roadmap</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-slate-400">
                <div>
                  <Link href="/help-center" className="hover:text-white transition-colors">Help Center</Link>
                </div>
                <div>
                  <a
                    href="https://vineethportfolio-omega.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="hover:text-slate-600 cursor-pointer">Contact Us</div>
                  </a>
                </div>
                <div>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdTlykK8bWHFSKUI7Jk-_y5xLW5S7gYI69SgsQNczVrIVLoTw/viewform?usp=sharing&ouid=113991419266563621469"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="hover:text-slate-600 cursor-pointer">Bug Reports</div>
                  </a>
                </div>
                <div>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdTlykK8bWHFSKUI7Jk-_y5xLW5S7gYI69SgsQNczVrIVLoTw/viewform?usp=sharing&ouid=113991419266563621469"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="hover:text-slate-600 cursor-pointer">Feature Requests</div>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-slate-400">
                <div>About</div>
                <div>
                  <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                </div>
                <div>Terms of Service</div>
                <div>Open Source</div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-slate-400">© 2025 WorthIt. All rights reserved.</div>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <div className="text-slate-400 hover:text-white cursor-pointer">Twitter</div>
              <div className="text-slate-400 hover:text-white cursor-pointer">GitHub</div>
              <div className="text-slate-400 hover:text-white cursor-pointer">Discord</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}