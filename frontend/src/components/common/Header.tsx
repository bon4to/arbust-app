import React from "react";
import arbustLogoUrl from "../../assets/arbust-typo-hollow.svg";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../mock/auth";
import { Search } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-neutral-800/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container-readable py-4 flex justify-between items-center">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={arbustLogoUrl} alt="arbust. logo" className="h-6 w-32" />
        </Link>
        <div className="flex items-center space-x-4">
          { isAuthenticated() ? (
            <>
              <button
                className="text-neutral-400 tracking-widest uppercase text-sm font-bold hover:text-primary transition"
              >
                Activity
              </button>
              <button
                className="text-neutral-400 tracking-widest uppercase text-sm font-bold hover:text-primary transition"
              >
                Songs
              </button>
              <button
                className="text-neutral-400 tracking-widest uppercase text-sm font-bold hover:text-primary transition"
              >
                <Search className="inline-block stroke-current-600 h-5 mr-1" />
              </button>
              <span className="text-white tracking-widest uppercase text-sm font-bold">
                Welcome, {'User'}!
              </span>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link
                to="/login"
                className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-5 rounded-full transition-colors"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;