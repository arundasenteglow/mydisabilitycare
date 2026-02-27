"use client";

import { useState } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      subLinks: [
        { name: 'Daily Living Support', href: '/services/daily-living-support' },
        { name: 'Community Access', href: '/services/community-access' },
        { name: 'Respite Care', href: '/services/respite-care' },
        { name: 'Transport Assistance', href: '/services/transport-assistance' },
        { name: 'Social & Recreation', href: '/services/social-recreation' },
        { name: 'NDIS Plan advisory services', href: '/services/ndis-plan-advisory' },
      ]
    },
    { name: 'Our Process', href: '/process' },
    // { name: 'Team', href: '/#team' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#6a2875] text-white py-0.5 px-4">
        {/* <div className="container mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <Link href="tel:0431687423" className="flex items-center gap-2 text-sm hover:text-blue-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span>0431 687 423</span>
            </Link>
            <Link href="mailto:info@mydisabilitycare.org" className="flex items-center gap-2 text-sm hover:text-blue-200 transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@mydisabilitycare.org</span>
            </Link>
          </div>
          <div className="text-sm">
            Mon - Fri: 9:00 AM - 5:00 PM
          </div>
        </div> */}
      </div>

      {/* Main Navigation */}
      <div className="px-6 lg:px-12 w-full">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src={logo} alt="My Disability Care" width={200} height={64} className="h-16 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.subLinks ? (
                  <div className="flex items-center gap-1 cursor-pointer">
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-[#6a2875] transition-colors font-medium py-2"
                    >
                      {link.name}
                    </Link>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-[#6a2875] transition-colors font-medium py-2"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {link.subLinks && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-gray-100 py-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="block px-6 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#6a2875] transition-colors font-medium"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            {/* <Button className="bg-[#6a2875] hover:bg-[#1e3a8a] text-white">
              Get Started
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name} className="space-y-1">
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className="w-full flex items-center justify-between py-2 text-gray-700 hover:text-[#6a2875] transition-colors font-medium"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-4 space-y-1 border-l-2 border-[#6a2875]/10 ml-1">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            className="block py-2 text-sm text-gray-600 hover:text-[#6a2875] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-2 text-gray-700 hover:text-[#6a2875] transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            {/* <Button className="w-full bg-[#6a2875] hover:bg-[#1e3a8a] text-white mt-4">
              Get Started
            </Button> */}
          </nav>
        )}
      </div>
    </header>
  );
}
