'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';

const oilGasSubpages = [
  { name: 'Mechanical', href: '/oil-gas/mechanical' },
  { name: 'Electrical', href: '/oil-gas/electrical' },
  { name: 'Instrumentation', href: '/oil-gas/instrumentation' },
  { name: 'Valves', href: '/oil-gas/valves' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Oil & Gas', href: '/oil-gas', hasDropdown: true },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
  { name: 'Careers', href: '/careers' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOilGasOpen, setIsOilGasOpen] = useState(false);
  const [isMobileOilGasOpen, setIsMobileOilGasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-1'
          : 'bg-white/95 backdrop-blur-sm py-2'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center bg-white rounded-lg px-3 py-2 shadow-sm mt-12">
            <Image
              src="/logo.png"
              alt="Princeton GTC Logo"
              width={220}
              height={80}
              className="h-20 md:h-[6rem] w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsOilGasOpen(true)}
                    onMouseLeave={() => setIsOilGasOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center text-gray-700 hover:text-[#C31C2D] font-medium transition-colors"
                    >
                      {link.name}
                      <HiChevronDown
                        className={`ml-1 transition-transform ${
                          isOilGasOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </Link>
                    <AnimatePresence>
                      {isOilGasOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                        >
                          {oilGasSubpages.map((subpage) => (
                            <Link
                              key={subpage.name}
                              href={subpage.href}
                              className="block px-4 py-3 text-gray-700 hover:bg-[#312F94] hover:text-white transition-colors"
                            >
                              {subpage.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-[#C31C2D] font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="btn-primary"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setIsMobileOilGasOpen(!isMobileOilGasOpen)}
                          className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                        >
                          {link.name}
                          <HiChevronDown
                            className={`transition-transform ${
                              isMobileOilGasOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isMobileOilGasOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 overflow-hidden"
                            >
                              {oilGasSubpages.map((subpage) => (
                                <Link
                                  key={subpage.name}
                                  href={subpage.href}
                                  className="block px-4 py-2 text-gray-600 hover:text-[#C31C2D]"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subpage.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-2">
                  <Link
                    href="/contact"
                    className="btn-primary block text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
