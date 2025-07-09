import React from 'react';

interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
  return (
      <main className="container-readable">
        {children}
      </main>
  );
};

export default ContentLayout;