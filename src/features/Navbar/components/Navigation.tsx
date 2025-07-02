import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavItem {
  label: string;
  href: string;
}

const Navigation: React.FC = () => {
  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About Me', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact Me', href: '/contact' },
  ];

  return (
    <nav className="bg-gray-100 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/" className="text-purple-50 text-lg font-medium">
          Cihad Karimli.
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              {item.label}
            </Link>
          ))}

        <button className="bg-purple-50 hover:bg-purple-50 cursor-pointer text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 flex items-center space-x-2">
          <span>
            <Image src="/Vector (Stroke).svg" alt="Phone Icon" width={20} height={20} />
            </span>
          <span>Book a Call</span>
        </button>
        </div>

        

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 hover:text-gray-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;