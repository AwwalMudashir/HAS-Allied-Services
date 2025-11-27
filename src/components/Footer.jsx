import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-12 md:mt-16 border-t  bottom-0  bg-[#00BED1]/10 text-gray-700 dark:text-gray-300">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          {/* Brand & intro */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/HAS-logo-1.png"
                alt="HAS Allied Services logo"
                className="h-9 w-9 object-contain"
              />
              <div>
                <h2 className="main-heading text-base font-semibold">
                  HAS Allied Services
                </h2>
                <p className="text-xs uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                  Telecom Supply • Deployment • Maintenance
                </p>
              </div>
            </div>
            <p className="text-sm md:text-[15px] leading-relaxed text-gray-500 max-w-md">
              End‑to‑end telecom partner for businesses in and around Abuja — from network
              design and equipment sourcing to on‑site maintenance and 24/7 support.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="main-heading text-sm font-semibold">
              Contact
            </h3>
            <div className="space-y-1 text-sm">
              <p className="font-medium text-gray-500 ">Phone</p>
              <a href="tel:+2349085689199" className="block hover:text-[#00BED1] transition-colors">
                +234 908 568 9199
              </a>
              <a href="tel:+2348023038831" className="block hover:text-[#00BED1] transition-colors">
                +234 802 303 8831
              </a>
            </div>
            <div className="space-y-1 text-sm">
              <p className="font-medium text-gray-500">Email</p>
              <a
                href="mailto:hasallied@gmail.com"
                className="block break-all hover:text-[#00BED1] transition-colors"
              >
                hasallied@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-3">
            <h3 className="main-heading text-sm font-semibold">
              Location
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              #A12 Red Roof Iron Market
              <br />
              Sharp Corner, Mararaba
              <br />
              Lagos, Nigeria
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Available for projects across Nigeria and regional deployments.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 mb-4 h-px bg-gray-200 dark:bg-gray-800" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-gray-500 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} HAS Allied Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>24/7 network support</span>
            </span>
            <span className="hidden md:inline-block h-3 w-px bg-gray-300 dark:bg-gray-700" />
            <span className="hidden md:inline text-xs">
              Built with care for telecom infrastructure and businesses.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

