import React from "react";

import benefitsData from "../data/data"; // Adjust the import path as necessary

const Benefit = () => {
  return (
    <section className="bg-peach-92 py-20 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {benefitsData.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {benefitsData.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefitsData.benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="group bg-peach-96 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-grey-10 mb-4 group-hover:text-purple-50 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-50 to-purple-70 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefit;
