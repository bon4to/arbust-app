import React from 'react';
import arbustLogoUrl from '../assets/arbust+typo-hollow.svg';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="bg-neutral-900 min-h-screen text-white">
      
      {/* Header */}
      <header className="bg-neutral-800/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="container-readable py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <img src={arbustLogoUrl} alt="arbust. logo" className="h-6 w-32 text-primary" />
          </a>
          <div className="flex items-center space-x-4">
            <button className="text-neutral-300 hover:text-white transition-colors">
              Login
            </button>
            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-5 rounded-full transition-colors">
              Sign Up
            </button>
          </div>
        </nav>
      </header>

      {/* Content */}
      {children}

      {/* Footer */}
      <footer className="bg-neutral-900 border-t border-neutral-800 mt-16">
        <div className="container mx-auto py-8 px-4 md:px-8 text-center text-neutral-500">
          <p>&copy; {new Date().getFullYear()} arbust. made by <a href="https://github.com/lucas-bonato" target="_blank" className="text-primary hover:text-primary-dark transition-colors duration-300">@bon4to</a>.</p>
        </div>
      </footer>
    </div>
  );
};

export default BaseLayout;