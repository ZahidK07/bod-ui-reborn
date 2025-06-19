
import React from 'react';
import { Menu, Sun, Moon, User, Search, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/80">
      <div className="container mx-auto px-4">
        <nav className="navbar navbar-expand-lg py-3">
          <div className="d-flex justify-content-between align-items-center w-100">
            {/* Logo */}
            <div className="navbar-brand d-flex align-items-center">
              <div className="fitness-gradient rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                <span className="text-white fw-bold fs-5">F</span>
              </div>
              <span className="ms-2 fw-bold fs-4 text-foreground">FitnessPro</span>
            </div>

            {/* Desktop Navigation */}
            <div className="collapse navbar-collapse d-none d-lg-flex justify-content-center">
              <ul className="navbar-nav gap-4">
                <li className="nav-item">
                  <a className="nav-link fw-semibold text-foreground hover:text-fitness-blue-600 transition-colors" href="#workouts">Workouts</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-semibold text-foreground hover:text-fitness-blue-600 transition-colors" href="#nutrition">Nutrition</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-semibold text-foreground hover:text-fitness-blue-600 transition-colors" href="#supplements">Supplements</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-semibold text-foreground hover:text-fitness-blue-600 transition-colors" href="#community">Community</a>
                </li>
              </ul>
            </div>

            {/* Right Side Icons */}
            <div className="d-flex align-items-center gap-3">
              <button className="btn btn-outline-secondary border-0 p-2" aria-label="Search">
                <Search size={20} />
              </button>
              <button 
                onClick={toggleDarkMode}
                className="btn btn-outline-secondary border-0 p-2"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="btn btn-outline-secondary border-0 p-2" aria-label="Shopping cart">
                <ShoppingCart size={20} />
              </button>
              <button className="btn btn-outline-secondary border-0 p-2" aria-label="User account">
                <User size={20} />
              </button>
              <button 
                className="btn btn-outline-secondary border-0 p-2 d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mobileNav"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="collapse navbar-collapse mt-3 d-lg-none" id="mobileNav">
            <ul className="navbar-nav gap-2">
              <li className="nav-item">
                <a className="nav-link fw-semibold text-foreground" href="#workouts">Workouts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-foreground" href="#nutrition">Nutrition</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-foreground" href="#supplements">Supplements</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-foreground" href="#community">Community</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
