import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="section-fade-up bg-white py-10 md:py-16 lg:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: Text */}
        <div className="order-2 lg:order-1 space-y-5 md:space-y-6">
          <div className="space-y-2">
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#00BED1]">
              About us
            </p>
            <h2 className="main-heading text-2xl md:text-3xl lg:text-4xl font-serif font-bold leading-snug">
              Redefining enterprise
              <br />
              communications in Nigeria
            </h2>
          </div>

          <p className="text-sm md:text-[15px] leading-relaxed text-gray-500 max-w-xl">
            HAS Allied Services is focused on building reliable telecom infrastructure for ISPs,
            enterprises and public organisations. From radio and fibre backbones to last‑mile
            deployments and equipment maintenance, we keep your business connected.
          </p>

          <p className="text-sm md:text-[15px] leading-relaxed text-gray-500 max-w-xl">
            Our teams handle site surveys, sourcing and staging, on‑site rollout, and ongoing
            preventive maintenance so your network delivers stable performance around the clock.
          </p>

          <button className="inline-flex items-center gap-2 bg-[#00BED1] hover:bg-[#0098A7] text-white px-7 py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
            More about HAS
            <span className="text-[11px]">
              <i className="fas fa-arrow-right" />
            </span>
          </button>
        </div>

        {/* Right: Image composition */}
        <div className="order-1 lg:order-2">
          <div className="relative w-full max-w-md mx-auto">
            {/* Background frame */}
            <div className="absolute -top-6 -right-6 hidden md:block h-40 w-40 border-2 border-[#00BED1]/40 rounded-2xl" />

            {/* Main image with blue frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-3 border-4 border-[#00727D] rounded-2xl pointer-events-none" />
              <img
                src="/about-2.jpg"
                alt="HAS telecom operations team"
                className="w-full h-auto object-cover"
              />
            </div>

        

            {/* Vertical pager dots */}
            <div className="hidden lg:flex flex-col items-center gap-3 absolute top-1/2 -right-10 -translate-y-1/2 text-xs text-gray-500">
              
              <div className="flex flex-col items-center gap-2 mt-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#00BED1]" />
                <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

