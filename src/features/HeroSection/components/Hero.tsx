import React from 'react';
import data from '../Data/HeroData'; // Adjust the import path as necessary
import Image from 'next/image';
import Bookcallbtn from '@/features/Navbar/components/Bookcallbtn';

const Hero = () => {
  

  return (
    <div className="bg-peach-92 min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Section - Content */}
        <div className="flex flex-col items-start justify-center space-y-6">
          {/* Greeting */}
          <div className="bg-peach-96   text-lg text-gray-600 mb-4 flex items-center gap-2">
            {data.hero.greeting}
          </div>
          
          {/* Title */}
          <h1 className="text-[clamp(2rem,3rem,3.5rem)] font-bold text-gray-900 mb-6 leading-tight">
            {data.hero.title}
          </h1>
          
          {/* Description */}
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {data.hero.description}
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Bookcallbtn />
            <button 
              className="px-8 py-4  text-grey-20 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {data.hero.buttons.secondary.text}
            </button>
          </div>
          
          {/* Statistics */}
          <div className="bg-peach-96 grid grid-cols-3 gap-6 m-5 p-6 rounded-lg shadow-lg">
            {data.statistics.map((stat, index) => (
              <div key={index} className=" text-center">
                <div 
                  className="text-grey-10 text-3xl lg:text-4xl font-bold mb-2"
                  
                >
                  {stat.number}<span className='text-purple-50'>{stat.figure}</span>
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Section - Profile & Design */}
        <div className="relative h-96 lg:h-full min-h-[500px]">
          
          
          
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Profile Image */}
              <div >
                <Image
                    src={data.profileImage.src}
                    alt="ProfileImg"
                    width={515}
                    height={577}
                />
              </div>
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;