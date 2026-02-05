import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/logo.png';
import ndisLogo from '../../assets/1-love-ndis.webp';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Process', href: '#process' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Daily Living Support',
    'Community Access',
    'Employment Support',
    'Respite Care',
    'Therapy & Allied Health',
    'Transport Assistance',
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src={logo} alt="My Disability Care" className="h-16 w-auto" />
              <Image src={ndisLogo} alt="NDIS Logo" className="h-16 w-auto" />
            </div>

            <p className="text-sm leading-relaxed">
              Committed to providing quality disability support services that empower individuals
              to live independently and achieve their goals.
            </p>

            {/* Social Media */}
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#6a2875] transition-colors group"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#6a2875] transition-colors group"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#6a2875] transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#6a2875] transition-colors group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-[#ff9500] transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-sm hover:text-[#ff9500] transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ff9500] flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p>Portal West, Unit 202/2994 Logan Rd</p>
                  <p>Underwood QLD 4119</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#ff9500] flex-shrink-0" />
                <a href="tel:0431687423" className="text-sm hover:text-[#ff9500] transition-colors">
                  0431 687 423
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#ff9500] flex-shrink-0 mt-0.5" />
                <a href="mailto:info@mydisabilitycare.org" className="text-sm hover:text-[#ff9500] transition-colors break-all">
                  info@mydisabilitycare.org
                </a>
              </div>

              {/* Newsletter */}
              <div className="pt-4">
                <h4 className="text-white font-semibold mb-3 text-sm">Newsletter</h4>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 text-sm"
                  />
                  <Button className="bg-[#6a2875] hover:bg-[#1e3a8a] text-white flex-shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-center md:text-left">
              © {new Date().getFullYear()} My Disability Care. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="hover:text-[#ff9500] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#ff9500] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#ff9500] transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-[#ff9500] transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
