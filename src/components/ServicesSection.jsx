import React from 'react'

const services = [
  {
    title: 'Managed Services',
    description:
      'Proactive monitoring, incident response and lifecycle management for your telecom sites and links.',
    icon: 'fas fa-cogs',
  },
  {
    title: 'Voice & Data',
    description:
      'Enterprise‑grade voice and data solutions that keep teams and branches connected across locations.',
    icon: 'fas fa-phone-alt',
    featured: true,
  },
  {
    title: 'Colocated Hosting',
    description:
      'Secure rack space, power and connectivity for your core network and critical IT equipment.',
    icon: 'fas fa-server',
  },
  {
    title: 'Cloud Connectivity',
    description:
      'Optimised connectivity into public and private cloud platforms with predictable latency.',
    icon: 'fas fa-cloud',
  },
  {
    title: 'Cable & Wiring',
    description:
      'Structured cabling, fibre runs and clean patching that keep your infrastructure organised.',
    icon: 'fas fa-network-wired',
  },
  {
    title: 'Satellite Links',
    description:
      'Backup and remote‑site connectivity using satellite where terrestrial access is limited.',
    icon: 'fas fa-satellite-dish',
  },
]

const ServicesSection = () => {
  return (
    <section id="services" className="section-fade-up bg-slate-950 text-gray-100 py-12 md:py-16 lg:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-gray-400">
            What <span className="text-[#00BED1]">we provide</span>
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-white">
            Reliable telecom services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-[15px] text-gray-400 leading-relaxed">
            Our focus is to give your business a dependable network foundation while controlling
            costs and improving performance across every site you operate.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card-animate relative overflow-hidden rounded-2xl border transition-all duration-300
                ${
                  service.featured
                    ? 'bg-[#00BED1] border-[#00BED1] text-white shadow-[0_18px_45px_rgba(8,145,178,0.55)]'
                    : 'bg-slate-900/70 border-slate-800 hover:border-[#00BED1]/70 hover:bg-slate-900 shadow-[0_14px_40px_rgba(15,23,42,0.85)]'
                }`}
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              {/* Glow line */}
              

              <div className="px-7 py-8 md:px-8 md:py-9 flex flex-col items-center text-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border text-lg
                    ${
                      service.featured
                        ? 'border-white/60 bg-white/10 text-white'
                        : 'border-[#00BED1]/60 bg-[#00BED1]/5 text-[#00BED1]'
                    }`}
                >
                  <i className={service.icon} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm md:text-base text-white font-semibold tracking-[0.10em] uppercase">
                    {service.title}
                  </h3>
                  <p
                    className={`text-xs md:text-[13px] leading-relaxed ${
                      service.featured ? 'text-white/70' : 'text-gray-400'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

           
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

