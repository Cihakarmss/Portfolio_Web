import React from 'react';
import footerData from '../data/data'; // Adjust the import path as necessary
import Image from 'next/image';




const Footer = () => {
  

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Brand Section */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">
                {footerData.brand.name}
              </h3>
              <p className="text-gray-600">
                {footerData.brand.tagline}
              </p>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <nav className="flex flex-wrap justify-center gap-6 lg:gap-8">
                {footerData.navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-end gap-3">
              {footerData.social.map((social) => (
                
                
                    
                    
                <a

                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 bg-purple-70`}
                  aria-label={social.name}
                >
                    <Image
                        src={social.icon}
                        alt={social.name}
                        width={24}
                        height={24}
                        className="text-white"
                    />
                  
                </a>

              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="py-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            
            {/* Email */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <a 
                  href={`mailto:${footerData.contact.email}`}
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
                >
                  {footerData.contact.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Phone</p>
                <a 
                  href={`tel:${footerData.contact.phone}`}
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
                >
                  {footerData.contact.phone}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Location</p>
                <p className="text-gray-700">{footerData.contact.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-gray-200">
          <div className="text-center">
            <p className="text-grey-50 ">
              Copyright © {footerData.copyright.year} {footerData.copyright.text}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;