
import React, { useState } from 'react';
import { Menu, Sun, Moon, User, Search, ShoppingCart, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/80">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <nav className="navbar navbar-expand-lg py-2 sm:py-3">
          <div className="d-flex justify-content-between align-items-center w-100">
            {/* Logo - Responsive sizing */}
            <div className="navbar-brand d-flex align-items-center">
              <div className="fitness-gradient rounded-circle d-flex align-items-center justify-content-center" style={{width: '32px', height: '32px'}}>
                <span className="text-white fw-bold" style={{fontSize: '14px'}}>F</span>
              </div>
              <span className="ms-2 fw-bold text-foreground" style={{fontSize: '18px'}}>
                <span className="d-none d-sm-inline">FitnessPro</span>
                <span className="d-sm-none">FP</span>
              </span>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="collapse navbar-collapse d-none d-lg-flex justify-content-center">
              <ul className="navbar-nav gap-3 xl:gap-4">
                <li className="nav-item">
                  <a className="nav-link fw-semibold text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 px-3 py-2 rounded" href="#workouts">Workouts</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-semibold text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 px-3 py-2 rounded" href="#nutrition">Nutrition</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-semibold text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 px-3 py-2 rounded" href="#supplements">Supplements</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-semibold text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 px-3 py-2 rounded" href="#community">Community</a>
                </li>
              </ul>
            </div>

            {/* Right Side Icons - Responsive sizing */}
            <div className="d-flex align-items-center gap-1 sm:gap-2">
              {/* Search - Hidden on smallest screens */}
              <button className="btn btn-outline-secondary border-0 p-2 d-none d-sm-block hover:bg-accent/50 transition-colors" aria-label="Search">
                <Search size={18} />
              </button>
              
              {/* Dark mode toggle */}
              <button 
                onClick={toggleDarkMode}
                className="btn btn-outline-secondary border-0 p-2 hover:bg-accent/50 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              {/* Cart - Hidden on xs, shown from sm */}
              <button className="btn btn-outline-secondary border-0 p-2 d-none d-sm-block hover:bg-accent/50 transition-colors" aria-label="Shopping cart">
                <ShoppingCart size={18} />
              </button>
              
              {/* User - Hidden on xs, shown from sm */}
              <button className="btn btn-outline-secondary border-0 p-2 d-none d-sm-block hover:bg-accent/50 transition-colors" aria-label="User account">
                <User size={18} />
              </button>
              
              {/* Mobile menu button */}
              <button 
                className="btn btn-outline-secondary border-0 p-2 d-lg-none hover:bg-accent/50 transition-colors"
                type="button"
                onClick={toggleMobileMenu}
                aria-label="Toggle navigation"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Controlled by React state */}
          <div className={`navbar-collapse mt-3 d-lg-none ${isMobileMenuOpen ? 'show' : 'collapse'}`}>
            <ul className="navbar-nav gap-0">
              <li className="nav-item">
                <a 
                  className="nav-link fw-semibold text-foreground py-3 px-0 border-bottom border-border hover:text-primary hover:bg-accent/30 transition-all duration-200 rounded-sm" 
                  href="#workouts"
                  onClick={closeMobileMenu}
                >
                  Workouts
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link fw-semibold text-foreground py-3 px-0 border-bottom border-border hover:text-primary hover:bg-accent/30 transition-all duration-200 rounded-sm" 
                  href="#nutrition"
                  onClick={closeMobileMenu}
                >
                  Nutrition
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link fw-semibold text-foreground py-3 px-0 border-bottom border-border hover:text-primary hover:bg-accent/30 transition-all duration-200 rounded-sm" 
                  href="#supplements"
                  onClick={closeMobileMenu}
                >
                  Supplements
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link fw-semibold text-foreground py-3 px-0 hover:text-primary hover:bg-accent/30 transition-all duration-200 rounded-sm" 
                  href="#community"
                  onClick={closeMobileMenu}
                >
                  Community
                </a>
              </li>
            </ul>
            
            {/* Mobile-only actions */}
            <div className="d-flex justify-content-around mt-3 pt-3 border-top border-border d-sm-none">
              <button className="btn btn-outline-secondary p-3 hover:bg-accent/50 transition-colors" aria-label="Search">
                <Search size={20} />
              </button>
              <button className="btn btn-outline-secondary p-3 hover:bg-accent/50 transition-colors" aria-label="Shopping cart">
                <ShoppingCart size={20} />
              </button>
              <button className="btn btn-outline-secondary p-3 hover:bg-accent/50 transition-colors" aria-label="User account">
                <User size={20} />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
