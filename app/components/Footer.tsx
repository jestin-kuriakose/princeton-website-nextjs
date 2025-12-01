import Link from 'next/link';
import Image from 'next/image';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Oil & Gas', href: '/oil-gas' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
  { name: 'Careers', href: '/careers' },
];

const services = [
  { name: 'Mechanical', href: '/oil-gas/mechanical' },
  { name: 'Electrical', href: '/oil-gas/electrical' },
  { name: 'Instrumentation', href: '/oil-gas/instrumentation' },
  { name: 'Valves', href: '/oil-gas/valves' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white pt-2">
      {/* Main Footer */}
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Image
              src="/logo.png"
              alt="Princeton GTC Logo"
              width={180}
              height={60}
              className="h-24 w-auto brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed">
              Princeton International General Trading Company W.L.L. is one of the leading
              suppliers & stockist for the complete range of Oil & Gas, Petrochemical,
              Power Generation, and Renewable Energy industries.
            </p>
            {/* Certifications */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/certifications/iso.jpg"
                alt="ISO Certified"
                width={60}
                height={60}
                className="h-12 w-auto bg-white rounded p-1"
              />
              <Image
                src="/images/certifications/ASIB-Logo.png"
                alt="ASIB Certified"
                width={60}
                height={60}
                className="h-12 w-auto bg-white rounded p-1"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#C31C2D] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-[#C31C2D] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiLocationMarker className="w-5 h-5 text-[#C31C2D] mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  PO Box: 46779<br />
                  ZIP Code: 64018<br />
                  Fahaheel, Kuwait
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HiMail className="w-5 h-5 text-[#C31C2D] flex-shrink-0" />
                <a
                  href="mailto:sales@princetongtc.com"
                  className="text-gray-400 hover:text-[#C31C2D] transition-colors"
                >
                  sales@princetongtc.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Princeton International General Trading Company W.L.L. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/contact" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
