import React from "react";
import data from "../data/data"; // Adjust the import path as necessary
import Image from "next/image";

const CreativeSkills = () => {
  return (
    <section className="bg-peach-92 py-20 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {data.section.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {data.section.subtitle}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {data.skills.map((skill) => {
            return (
              <div
                key={skill.id}
                className="bg-peach-96 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group flex flex-col items-center text-center"
              >
                {skill.icon && (
                  <Image
                    src={skill.icon}
                    alt={skill.title}
                    width={54}
                    height={54}
                    className="mb-10 group-hover:scale-110 transition-transform duration-300"
                  />
                )}

                

                {/* Title */}
                <h3 className="text-xl font-bold text-grey-10 mb-4 group-hover:text-purple-50 transition-colors duration-300">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-grey-20 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CreativeSkills;
