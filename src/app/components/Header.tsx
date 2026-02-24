"use client";

import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Process', href: '#process' },
    // { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
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
            <Link href="#home" className="flex items-center gap-2">
              <Image src={logo} alt="My Disability Care" width={200} height={64} className="h-16 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#6a2875] transition-colors font-medium"
              >
                {link.name}
              </Link>
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
          <nav className="lg:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-[#6a2875] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
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
