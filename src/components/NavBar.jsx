import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const NavBar = () => {
  const { isDark, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Close menu when clicking outside or on route change
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-btn')) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleNavClick = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setActiveSection(sectionId)
    setIsMenuOpen(false)
  }

  // Update active section on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'contact']

    const handleScroll = () => {
      const offset = 120
      let current = 'home'

      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top
          if (top - offset <= 0) {
            current = id
          }
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-lg px-4 md:px-8 py-2 md:py-3"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 md:gap-8">
          {/* Left: Logo */}
          <div className="items-center">
            <img
              src="/HAS-logo-1.png"
              alt="HAS Logo"
              className="h-9 w-9 md:h-11 md:w-11 object-contain drop-shadow-sm"
            />
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="flex items-center">
            <ul className="flex list-none gap-8 lg:gap-10 mt-3 p-0">
              <li className="">
                <a 
                  onClick={() => handleNavClick('home')}
                  className={`relative inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-[15px] lg:text-base font-medium tracking-wide rounded-full transition-all duration-300 cursor-pointer group
                    ${
                      activeSection === 'home'
                        ? 'text-slate-900 bg-white/90 shadow-sm dark:text-white dark:bg-slate-900/70'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-white/80 dark:text-gray-200 dark:hover:text-white dark:hover:bg-slate-800/80'
                    }`}
                >
                  Home
                  <span className="pointer-events-none absolute -bottom-[3px] left-1/2 h-[3px] w-0 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 transition-all duration-300 group-hover:w-10 group-hover:-translate-x-1/2" />
                </a>
              </li>
              <li className="">
                <a 
                  onClick={() => handleNavClick('about')}
                  className={`relative inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-[15px] lg:text-base font-medium tracking-wide rounded-full transition-all duration-300 cursor-pointer group
                    ${
                      activeSection === 'about'
                        ? 'text-slate-900 bg-white/90 shadow-sm dark:text-white dark:bg-slate-900/70'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-white/80 dark:text-gray-200 dark:hover:text-white dark:hover:bg-slate-800/80'
                    }`}
                >
                  About
                  <span className="pointer-events-none absolute -bottom-[3px] left-1/2 h-[3px] w-0 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 transition-all duration-300 group-hover:w-10 group-hover:-translate-x-1/2" />
                </a>
              </li>
              <li className="">
                <a 
                  onClick={() => handleNavClick('services')}
                  className={`relative inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-[15px] lg:text-base font-medium tracking-wide rounded-full transition-all duration-300 cursor-pointer group
                    ${
                      activeSection === 'services'
                        ? 'text-slate-900 bg-white/90 shadow-sm dark:text-white dark:bg-slate-900/70'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-white/80 dark:text-gray-200 dark:hover:text-white dark:hover:bg-slate-800/80'
                    }`}
                >
                  Services
                  <span className="pointer-events-none absolute -bottom-[3px] left-1/2 h-[3px] w-0 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 transition-all duration-300 group-hover:w-10 group-hover:-translate-x-1/2" />
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Desktop Actions + Mobile Hamburger */}
          <div className=" flex items-center justify-end gap-2 md:gap-3">
            {/* Desktop Right Side: Contact Button and Theme Toggle */}
            <div className="hidden md:flex items-center gap-2 md:gap-3">
              <button
                onClick={() => handleNavClick('contact')}
                className="inline-flex items-center gap-2 text-slate-900 dark:text-gray-100 font-semibold text-xs md:text-sm px-4 py-2 md:px-5 md:py-2 rounded-full border border-slate-300/70 dark:border-slate-500/70 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm transition-all duration-300 hover:bg-sky-500 hover:text-white hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/30 active:scale-95"
              >
             
                Contact
              </button>

              <button
                onClick={toggleTheme}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="text-slate-900 dark:text-gray-100 text-base md:text-lg p-2 rounded-full border border-slate-300/70 dark:border-slate-500/70 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm transition-all duration-300 hover:bg-slate-900 hover:text-amber-300 hover:border-slate-700 hover:shadow-lg hover:shadow-amber-300/25 active:scale-95 flex items-center justify-center w-9 h-9 md:w-10 md:h-10 focus:outline-none focus:ring-2 focus:ring-sky-400/60 focus:ring-offset-2 focus:ring-offset-transparent"
              >
                <i className={`fas ${isDark ? 'fa-moon' : 'fa-sun'} transition-all duration-500 ${isDark ? 'rotate-0' : 'rotate-0'}`}></i>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden hamburger-btn z-50 flex flex-col justify-center items-center w-9 h-9 gap-1.5 p-3 rounded-full border border-slate-300/80 dark:border-slate-500/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md transition-all duration-300 hover:bg-slate-900 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/30 focus:outline-none focus:ring-2 focus:ring-sky-400/70 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <span 
                className={`block w-5 h-0.5 rounded-full bg-slate-900 dark:bg-gray-100 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span 
                className={`block w-5 h-0.5 rounded-full bg-slate-900 dark:bg-gray-100 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span 
                className={`block w-5 h-0.5 rounded-full bg-slate-900 dark:bg-gray-100 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-slate-900/70 dark:bg-black/80 backdrop-blur-sm"></div>
        
        {/* Mobile Menu Panel */}
        <div 
          className={`mobile-menu absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-white/98 via-slate-50/95 to-sky-50/95 dark:from-[#020617]/95 dark:via-slate-900/95 dark:to-sky-900/40 backdrop-blur-2xl shadow-[0_20px_60px_rgba(15,23,42,0.8)] border-l border-white/30 dark:border-slate-800/80 transition-all duration-500 ease-in-out ${
            isMenuOpen 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-full opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full p-6 pt-20">
            {/* Mobile Navigation Links */}
            <ul className="flex flex-col list-none gap-2.5 m-0 p-0">
              <li className="m-0">
                <a 
                  onClick={() => handleNavClick('home')}
                  className={`mobile-nav-item flex items-center justify-between text-slate-900 dark:text-gray-100 font-semibold text-lg px-5 py-3.5 rounded-xl transition-all duration-300 hover:bg-[#00BED1]/10 dark:hover:bg-slate-800/80 hover:backdrop-blur-sm block relative cursor-pointer transform hover:translate-x-2
                    ${
                      activeSection === 'home'
                        ? 'bg-[#00BED1]/15 dark:bg-slate-900 border border-[#00BED1]/40 shadow-lg shadow-[#00BED1]/25'
                        : 'border border-transparent'
                    }`}
                  style={{ animationDelay: '0.1s' }}
                >
                  <span className="flex items-center gap-3">
                    <i className="fas fa-home text-[#00BED1] w-6" />
                    Home
                  </span>
                  {activeSection === 'home' && (
                    <i className="fas fa-circle text-[8px] text-[#00BED1]" />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#00BED1] transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              </li>
              <li className="m-0">
                <a 
                  onClick={() => handleNavClick('about')}
                  className={`mobile-nav-item flex items-center justify-between text-slate-900 dark:text-gray-100 font-semibold text-lg px-5 py-3.5 rounded-xl transition-all duration-300 hover:bg-[#00BED1]/10 dark:hover:bg-slate-800/80 hover:backdrop-blur-sm block relative cursor-pointer transform hover:translate-x-2
                    ${
                      activeSection === 'about'
                        ? 'bg-[#00BED1]/15 dark:bg-slate-900 border border-[#00BED1]/40 shadow-lg shadow-[#00BED1]/25'
                        : 'border border-transparent'
                    }`}
                  style={{ animationDelay: '0.2s' }}
                >
                  <span className="flex items-center gap-3">
                    <i className="fas fa-info-circle text-[#00BED1] w-6" />
                    About
                  </span>
                  {activeSection === 'about' && (
                    <i className="fas fa-circle text-[8px] text-[#00BED1]" />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#00BED1] transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              </li>
              <li className="m-0">
                <a 
                  onClick={() => handleNavClick('services')}
                  className="mobile-nav-item flex items-center justify-between text-slate-900 dark:text-gray-100 font-semibold text-lg px-5 py-3.5 rounded-xl transition-all duration-300 hover:bg-[#00BED1]/10 dark:hover:bg-slate-800/80 hover:backdrop-blur-sm block relative cursor-pointer transform hover:translate-x-2"
                  style={{ animationDelay: '0.3s' }}
                >
                  <span className="flex items-center gap-3">
                    <i className="fas fa-briefcase text-[#00BED1] w-6" />
                    Services
                  </span>
                  {activeSection === 'services' && (
                    <i className="fas fa-circle text-[8px] text-[#00BED1]" />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#00BED1] transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              </li>
            </ul>

            {/* Mobile Action Buttons */}
            <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-600 space-y-4">
              <button
                onClick={() => handleNavClick('contact')}
                className="mobile-nav-item w-full text-white dark:text-gray-100 font-semibold text-lg px-6 py-4 rounded-2xl border-2 border-[#00BED1] bg-[#00BED1] hover:bg-[#0098A7] hover:border-[#0098A7] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]"
                style={{ animationDelay: '0.4s' }}
              >
                <span className="flex items-center justify-center gap-3">
                  <i className="fas fa-envelope"></i>
                  Contact Us
                </span>
              </button>

              <button
                onClick={toggleTheme}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="mobile-nav-item w-full text-black dark:text-gray-100 font-semibold text-lg px-6 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ animationDelay: '0.5s' }}
              >
                <span className="flex items-center justify-center gap-3">
                  <i className={`fas ${isDark ? 'fa-moon' : 'fa-sun'} text-[#00BED1]`}></i>
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </span>
              </button>
            </div>

            {/* Decorative Element */}
            <div className="mt-auto pt-8 flex justify-center">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#00BED1] to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar