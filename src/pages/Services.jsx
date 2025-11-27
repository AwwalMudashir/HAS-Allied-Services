import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { services } from '../components/ServicesSection'
import ServicesSection from '../components/ServicesSection'

const Services = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])

  return (
    <main className="bg-white">
      {/* Full-width hero with background image */}
      <section id="services" className="relative hero-fade-in">
        {/* Background image + overlay */}
        <div className="absolute inset-0">
          <img
            src="/has-hero-3.jpg"
            alt="Telecom infrastructure overview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Centered hero content */}
        <div className="relative min-h-[100vh] flex items-center justify-center px-4 md:px-8 pt-20 pb-12">
          <div className="max-w-3xl mx-auto text-center space-y-5 md:space-y-6 text-white">
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#00BED1]/90">
              Our services
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
              Telecom solutions tailored
              <br />
              to every part of your network
            </h1>
            <p className="text-sm md:text-[15px] leading-relaxed text-gray-100/90 max-w-xl mx-auto">
              From managed services and field deployments to satellite backup and structured
              cabling, HAS Allied Services helps you design, roll out and support reliable
              connectivity across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="section-fade-up bg-slate-950 text-gray-100 py-10 md:py-14 px-4 -mx-4 md:-mx-8">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-10">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="rounded-3xl bg-slate-900/80 border border-slate-800 px-6 py-7 md:px-8 md:py-8 grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-6 md:gap-8 items-center"
            >
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full border border-[#00BED1]/50 bg-[#00BED1]/10 flex items-center justify-center text-[#00BED1]">
                    <i className={service.icon} />
                  </div>
                  <h2 className="main-heading text-lg md:text-xl font-semibold text-white">
                    {service.title}
                  </h2>
                </div>
                <p className="text-xs md:text-[13px] leading-relaxed text-gray-300 max-w-xl">
                  {service.description}
                </p>
              </div>

              <div className="relative w-full max-w-sm mx-auto">
                <div className="absolute -top-3 -left-3 h-6 w-6 rounded-full bg-[#00BED1]/20" />
                <div className="absolute -bottom-4 right-0 h-10 w-10 rounded-3xl border border-[#00BED1]/30" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-800">
                  <img
                    src="https://placehold.co/600x400/020617/FFFFFF?text=HAS+Service"
                    alt={`${service.title} illustration`}
                    className="w-full h-auto object-cover opacity-90"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section> */}

      <ServicesSection />
    </main>
  )
}

export default Services