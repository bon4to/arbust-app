import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="bg-neutral-900 min-h-screen text-white">
      
      {/* Header */}
      <Header />

      {/* Content */}
      {children}

      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default BaseLayout;