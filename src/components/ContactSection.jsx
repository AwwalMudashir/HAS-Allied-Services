import React from 'react'

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="section-fade-up bg-white py-12 md:py-16 lg:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 lg:gap-10 items-center">
        {/* Left: Contact intro panel */}
        <div className="relative h-full">
          <div className="overflow-hidden rounded-3xl bg-[#00BED1]/90 text-white shadow-xl h-full flex items-center">
            <div className="relative w-full h-full">
              {/* Background overlay image (placeholder) */}
              <div className="absolute inset-0 opacity-20">
                <img
                  src="/contact-1.jpg"
                  alt="HAS support team"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative p-8 md:p-10 lg:p-12 space-y-4 md:space-y-5 max-w-md">
                <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-white/80">
                  Contact us
                </p>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white">
                  Let&apos;s talk about your network
                </h2>
                <p className="text-sm md:text-[15px] text-white/90 leading-relaxed">
                  Share what you need help with — new deployments, upgrades or ongoing maintenance.
                  Our engineers will respond with the best options for your sites.
                </p>
                <div className="pt-2 space-y-2 text-sm text-white/90">
                  <p className="flex items-center gap-2">
                    <i className="fas fa-phone-alt text-xs" />
                    <span>+234 908 568 9199 &nbsp; &nbsp; &nbsp; +234 802 303 8831</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="fas fa-envelope text-xs" />
                    <span>hasallied@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact form card */}
        <div className="relative">
          <div className="rounded-3xl bg-white dark:bg-slate-950 shadow-[0_24px_60px_rgba(15,23,42,0.25)] px-6 py-7 md:px-10 md:py-9">
            <div className="mb-6 md:mb-8 space-y-1">
              <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-gray-400">
                Get in <span className="text-[#00BED1]">touch</span>
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 ">
                Send us a quick message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 text-sm md:text-[15px]">
              {/* Name row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="Jonathan"
                    className="w-full bg-transparent border-b border-gray-200 dark:border-gray-700 pb-2 focus:border-[#00BED1] focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full bg-transparent border-b border-gray-200 dark:border-gray-700 pb-2 focus:border-[#00BED1] focus:outline-none"
                  />
                </div>
              </div>

              {/* Email / Phone row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-transparent border-b border-gray-200 dark:border-gray-700 pb-2 focus:border-[#00BED1] focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 ..."
                    className="w-full bg-transparent border-b border-gray-200 dark:border-gray-700 pb-2 focus:border-[#00BED1] focus:outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Hi, we would like to discuss a new deployment / maintenance for our sites..."
                  className="w-full bg-transparent border-b border-gray-200 dark:border-gray-700 pb-2 resize-none focus:border-[#00BED1] focus:outline-none"
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="hidden md:block text-xs text-gray-400">
                  We usually respond within one business day.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#00BED1] hover:bg-[#0098A7] text-white px-6 py-3 rounded-full text-xs md:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
                >
                  Send message
                  <span className="h-7 w-7 rounded-full bg-white/15 flex items-center justify-center">
                    <i className="fas fa-paper-plane text-[11px]" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

