import React from 'react'
import { services } from '../components/ServicesSection'

const About = () => {
  return (
    <main className="bg-white dark:bg-black py-10 md:py-16 mb-[-100px] lg:py-20 px-4 md:px-8">
      {/* Hero-style about header with image collage */}
      <section className="max-w-6xl mx-auto mb-12 md:mb-16 section-fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: collage */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="grid grid-cols-2 gap-4 md:gap-5 max-w-md w-full">
              {/* Large image card */}
              <div className="col-span-2 md:col-span-1 rounded-3xl overflow-hidden shadow-xl bg-[#00BED1]/10">
                <img
                  src="/about-01.jpg"
                  alt="HAS Allied engineers on site"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats / badges card */}
              <div className="flex flex-col gap-4 md:gap-5">
                <div className="rounded-3xl bg-[#00BED1] dark:bg-slate-900 shadow-xl px-5 py-4 space-y-2">
                  <p className="text-xs font-semibold text-slate-700 dark:text-gray-100">
                    30+
                    <span className="ml-1 text-[11px] font-normal text-gray-500 dark:text-gray-300">
                      turnkey sites per month
                    </span>
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">
                    Delivered across Nigeria with full design, deployment and maintenance support.
                  </p>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl bg-[#00BED1]/15">
                  <img
                    src="/about-2.jpg"
                    alt="Telecom operations floor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="order-1 lg:order-2 space-y-4 md:space-y-5 text-left lg:text-left">
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#00BED1]">
              HAS Allied Services Limited
            </p>
            <h1 className="main-heading text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              About us
            </h1>
            <p className="text-md md:text-[18px] leading-relaxed text-gray-500 max-w-xl">
              HAS Allied Services designs, builds and maintains the infrastructure that keeps
              people and businesses connected — from towers and fibre to power and structured
              cabling. We blend engineering expertise with disciplined project delivery so your
              network is dependable from day one.
            </p>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('who-we-are')
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="inline-flex items-center gap-2 bg-[#00BED1] hover:bg-[#0098A7] text-white px-7 py-3 rounded-full text-xs md:text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Explore more
              <span className="text-[11px]">
                <i className="fas fa-arrow-right" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Company story text */}
      <section
        id="who-we-are"
        className="section-fade-up bg-white dark:bg-slate-950 mt-2 md:mt-4 px-4 md:px-8 py-10 md:py-14"
      >
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="main-heading text-2xl md:text-3xl lg:text-4xl">
            Who we are
          </h2>
          <p className="text-md md:text-[16px] leading-relaxed text-gray-500">
            HAS ALLIED SERVICES is established to provide infrastructural development services in telecommunication, oil and gas and the electrical /
            power sectors of the Nigerian economy. Over the years, we have gained expertise in
            project feasibility studies, engineering conception and design, site acquisition,
            material management, construction, installation, testing and commissioning phases of a
            turnkey project life cycle. We define and interpret the scope of project, outline and
            justify the budget cost and set goals to ensure timely implementation of significant
            milestones throughout the project life cycle. We combine the optimal utilization of
            highly skilled human resources and cutting edge technologies to ensure the timely
            delivery of projects to our clients. We also have a value-driven partnership with other
            global major players in our sector.
          </p>
          <p className="text-md md:text-[16px] leading-relaxed text-gray-500">
            We operate a world-class support system that offers timely response
            to clients, guarantees constant and vigorous review of project deliverables and provides
            optimal quality maintenance strategies. We have consistently applied this culture in
            delivering ultra-modern structures to individuals and corporate bodies. Over the years,
            we have attained an enviable position as a reputable telecoms infrastructure development
            provider to the major telecom operators – MTN, Zain, Globacom, Etisalat, Starcomms,
            MainOne and Visafone – as well as equipment vendors Ericsson, Alcatel and Huawei in
            Nigeria.
          </p>
        </div>
      </section>

      {/* How we help section */}
      <section className="section-fade-up bg-white dark:bg-slate-950 py-12 md:py-16 lg:py-18 px-4 md:px-8 mt-4">
        <div className="max-w-6xl mx-auto relative">
          {/* Simple decorative marks */}
          <span className="hidden md:block absolute left-4 top-6 text-[#00BED1] text-xs">
            <i className="fas fa-star-of-life" />
          </span>
          <span className="hidden md:block absolute right-6 top-10 text-[#00BED1]/70 text-xs">
            <i className="fas fa-asterisk" />
          </span>

          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12 space-y-3">
            <h2 className="main-heading text-2xl md:text-3xl lg:text-4xl font-semibold">
              We help networks grow
              <br />
              faster and stay online longer
            </h2>
            <p className="text-sm md:text-[15px] leading-relaxed text-gray-500">
              Our teams combine field experience, planning expertise and responsive support to help
              operators and enterprises expand coverage, improve quality of service and control
              operational costs across every site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="h-14 w-14 rounded-full  bg-[#00BED1] flex items-center justify-center text-white shadow-md">
                <i className="fas fa-users-cog text-lg" />
              </div>
              <h3 className="text-sm md:text-base font-bold text-[#00BED1]">
                Professional team
              </h3>
              <p className="text-xs md:text-[13px] text-gray-500 leading-relaxed max-w-xs">
                Multi‑disciplinary engineers and project managers experienced in large‑scale telecom
                rollouts across Nigeria.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="h-14 w-14 rounded-full  bg-[#00BED1] flex items-center justify-center text-white shadow-md">
                <i className="fas fa-bullseye text-lg" />
              </div>
              <h3 className="text-sm md:text-base font-bold text-[#00BED1]">
                Target oriented
              </h3>
              <p className="text-xs md:text-[13px] text-gray-500 leading-relaxed max-w-xs">
                Clear milestones, tight change control and constant communication to keep every
                deployment on scope, on time and on budget.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="h-14 w-14 rounded-full  bg-[#00BED1] flex items-center justify-center text-white shadow-md">
                <i className="fas fa-signal text-lg" />
              </div>
              <h3 className="text-sm md:text-base font-bold text-[#00BED1]">
                Uptime focused
              </h3>
              <p className="text-xs md:text-[13px] text-gray-500 leading-relaxed max-w-xs">
                Strong maintenance culture, 24/7 support and well‑defined SLAs that help keep your
                sites stable and customers connected.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About