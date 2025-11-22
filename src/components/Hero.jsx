import React, { useState, useEffect } from 'react'

const Hero = () => {
  const heroImages = [
    { src: '/has-hero.png', alt: 'HAS field engineers at work' },
    { src: '/has-hero-2.jpg', alt: 'Telecom tower maintenance' },
    { src: '/has-hero-3.jpg', alt: 'Network operations center' },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])
  return (
    <section id="home" className="hero-fade-in bg-white py-6 md:py-10 lg:py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center rounded-full uppercase bg-[#00BED1]/10 text-[#00727D] px-3 py-1 text-xs font-semibold tracking-[0.18em]">
                HAS Allied Services
              </span>
              <h1 className="main-heading text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                Smarter telecom
                <br />
                supply &amp; maintenance
              </h1>
            </div>

            <p className="text-base md:text-lg text-gray-500  leading-relaxed max-w-xl">
              HAS delivers end‑to‑end telecom solutions — from network design and equipment supply to rapid on‑site maintenance and long‑term support for businesses of any size.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-2">
              <button className="bg-[#00BED1] hover:bg-[#0098A7] text-white font-medium px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg text-sm md:text-base">
                Request a quote
              </button>
              <button className="bg-white border-2 border-[#00BED1] text-[#00BED1] font-medium px-8 py-3.5 rounded-full transition-all duration-300 text-sm md:text-base">
                View services
              </button>
            </div>

            {/* Statistics row */}
            <div className="pt-8 md:pt-10 mt-2 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 text-gray-700 dark:text-gray-200">
                <div className="flex items-center gap-3">
                  
                  <div>
                    <div className="text-lg flex gap-3 md:text-2xl font-semibold text-[#00BED1]">
                    <div className="h-8 w-8 rounded-full bg-[#00BED1]/10 flex items-center justify-center text-[#00BED1]">
                    <i className="fas fa-signal text-xs" />
                  </div>
                      15.2K
                    </div>
                    <div className="text-xs mt-2 md:text-sm text-gray-500 dark:text-gray-400">
                      Network assets deployed
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block h-10 w-px bg-gray-200 dark:bg-gray-700" />

                <div className="flex items-center gap-3">
                  
                  <div>
                    <div className="text-lg flex gap-3 md:text-2xl font-semibold text-[#00BED1]">
                    <div className="h-8 w-8 rounded-full bg-[#00BED1]/10 flex items-center justify-center text-[#00BED1]">
                    <i className="fas fa-tower-cell text-xs" />
                  </div>
                      4.5K
                    </div>
                    <div className="text-xs mt-2 md:text-sm text-gray-500 dark:text-gray-400">
                      Sites maintained
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block h-10 w-px bg-gray-200 dark:bg-gray-700" />

                <div className="flex items-center gap-3">
                  <div>
                    <div className="text-lg flex gap-3 md:text-2xl font-semibold text-[#00BED1]">
                        <div className="h-8 w-8 rounded-full bg-[#00BED1]/10 flex items-center justify-center text-[#00BED1]">
                            <span className="text-md">&infin;</span>
                        </div>
                      24/7
                    </div>
                    <div className="text-xs md:text-sm mt-2 text-gray-500 dark:text-gray-400">
                      Monitored Support maintenance coverage
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image carousel */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full max-w-md mx-auto lg:ml-auto">
              {/* Decorative dots / shapes */}
              <div className="pointer-events-none">
                {/* Corner circles */}
                <div className="absolute -top-4 right-4 h-8 w-8 rounded-full bg-[#00BED1]/15" />
                <div className="absolute top-10 -left-6 h-6 w-6 rounded-full bg-[#00BED1]/20" />
                <div className="absolute bottom-16 -left-4 h-6 w-6 rounded-full bg-[#00BED1]/15" />

                {/* Rings */}
                <div className="absolute -bottom-8 right-10 h-16 w-16 rounded-full border border-[#00BED1]/25" />
                <div className="absolute -bottom-4 right-6 h-10 w-10 rounded-full border border-[#00BED1]/30" />

                {/* Soft gradient blob */}
                <div className="absolute -top-10 left-10 h-24 w-24 rounded-full bg-[#00BED1]/10 blur-2xl" />
              </div>

              {/* Image carousel */}
              <div className="relative w-full rounded-3xl overflow-hidden shadow-xl bg-[#C7E8FF]">
                {/* Small floating badge */}
                <div className="absolute top-4 left-4 z-20 hidden sm:flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md px-3 py-1 shadow-md text-xs font-medium text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live network view
                </div>

                {heroImages.map((img, index) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className={`w-full h-auto object-cover transition-opacity duration-700 ease-in-out ${
                      index === activeIndex
                        ? 'opacity-100 relative z-10'
                        : 'opacity-0 absolute inset-0'
                    }`}
                  />
                ))}
              </div>

              {/* Carousel dots */}
              <div className="flex justify-center gap-2 mt-4">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-6 bg-[#00BED1]'
                        : 'w-2 bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Show slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero