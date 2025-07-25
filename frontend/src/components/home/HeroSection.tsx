import React from 'react';
import { Plus } from "lucide-react";
import arbustBackground from '../../assets/top-view-green-fresh-leaves.jpg';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative w-full h-[40vh] md:h-[48vh] bg-cover bg-center flex items-center justify-center text-white -mt-20"
      style={{ backgroundImage: `url(${arbustBackground})` }}
      aria-label="A background of fresh green leaves"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark opacity-40"></div>
      <div className="container-readable relative z-10 text-center p-4">
        <h1 className="mt-20 text-4xl md:text-5xl font-serif italic mb-4">
          “Music is like a dream. One that I cannot hear.”
        </h1>
        <p className="text-neutral-300 mb-8 italic">Ludwig van Beethoven</p>
        <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out hover:shadow-primary/20 flex items-center justify-center mx-auto">
          Get Started
          <Plus className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;