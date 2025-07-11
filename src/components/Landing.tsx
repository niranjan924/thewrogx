import React from "react";

const Landing = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-24">
      {/* Section 1: Left Content, Right Image */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Unleash Your Power <br />
            with <span className="text-orange-500">WROGX</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
            Premium fitness wear and gear for athletes who never quit.
            Look bold. Train hard. Live strong.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md transition duration-300">
              Shop Now
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 text-lg font-semibold px-8 py-3 rounded-full shadow-md transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="WROGX Fitness Hero"
            className="w-full h-auto rounded-3xl shadow-xl object-cover"
          />
        </div>
      </section>

      {/* Section 2: Left Image, Right Content */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Built for <span className="text-orange-500">Performance</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
            Whether you're hitting the gym or the streets, WROGX gear gives you the edge. Stylish, durable, and made to move.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md transition duration-300">
              Browse Gear
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 text-lg font-semibold px-8 py-3 rounded-full shadow-md transition duration-300">
              Watch Video
            </button>
          </div>
        </div>

        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Performance Gear"
            className="w-full h-auto rounded-3xl shadow-xl object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Landing;
