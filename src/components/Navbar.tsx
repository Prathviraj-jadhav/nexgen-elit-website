'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS, NavLink } from '@/config/site';

interface NavbarProps {
  transparent?: boolean;
}

export function Navbar({ transparent = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isTransparent = transparent && !scrolled;

  const productsLink = NAV_LINKS.find((l) => l.label === 'Products');

  return (
    <>
      {/* Desktop / Mobile Navbar Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300 border-b ${
          isTransparent
            ? 'bg-transparent border-transparent'
            : 'bg-white/95 backdrop-blur-xl border-black/[0.08]'
        } ${scrolled && !isTransparent ? 'shadow-[0_1px_8px_rgba(0,0,0,0.06)]' : ''}`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex items-center">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/icons.png"
              alt="Nexgen Elit"
              width={32}
              height={32}
              className="object-contain"
            />
            <span
              className={`text-sm font-semibold tracking-wide ${
                isTransparent ? 'text-white' : 'text-[#000000]'
              }`}
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Nexgen Elit
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 ml-auto mr-8">
            {NAV_LINKS.map((link: NavLink) => {
              if (link.children && link.children.length > 0) {
                // Products with dropdown
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`text-[13px] font-medium tracking-wide transition-colors duration-200 flex items-center gap-1 ${
                        isTransparent
                          ? 'text-white/80 hover:text-white'
                          : 'text-[#6B7280] hover:text-[#000000]'
                      }`}
                    >
                      {link.label}
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-0.5">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {productsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white border border-black/[0.08] shadow-lg py-1"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-[#6B7280] hover:text-[#000000] hover:bg-[#F7F8FA] transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                    isTransparent
                      ? 'text-white/80 hover:text-white'
                      : 'text-[#6B7280] hover:text-[#000000]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden flex flex-col items-center justify-center w-8 h-8 gap-[5px]"
            aria-label="Open menu"
          >
            <span className={`block w-[18px] h-[1.5px] ${isTransparent ? 'bg-white' : 'bg-black'}`} />
            <span className={`block w-[18px] h-[1.5px] ${isTransparent ? 'bg-white' : 'bg-black'}`} />
            <span className={`block w-[18px] h-[1.5px] ${isTransparent ? 'bg-white' : 'bg-black'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            {/* Close Button */}
            <div className="flex items-center justify-between h-16 px-6 md:px-10 border-b border-black/[0.08]">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <Image
                  src="/icons.png"
                  alt="Nexgen Elit"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span
                  className="text-sm font-semibold tracking-wide text-[#000000]"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  Nexgen Elit
                </span>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-8 h-8"
                aria-label="Close menu"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="1.5"
                >
                  <line x1="4" y1="4" x2="14" y2="14" />
                  <line x1="14" y1="4" x2="4" y2="14" />
                </svg>
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                >
                  {'children' in link && link.children ? (
                    <div className="flex flex-col items-center gap-2">
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-base font-medium text-[#000000] tracking-wide"
                      >
                        {link.label}
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="text-sm text-[#6B7280] hover:text-[#2A3AFF] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-base font-medium text-[#000000] hover:text-[#2A3AFF] transition-colors tracking-wide"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
