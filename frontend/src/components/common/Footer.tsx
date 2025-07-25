import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 mt-16">
        <div className="container mx-auto py-8 px-4 md:px-8 text-center text-neutral-500">
            <p>&copy; {new Date().getFullYear()} Arbust.
            <br />Made by <a href="https://github.com/bon4to" target="_blank" className="text-primary hover:text-primary-dark transition-colors duration-300">@bon4to</a>.</p>
        </div>
    </footer>
  );
};

export default Footer;