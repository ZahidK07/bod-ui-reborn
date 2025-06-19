
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-4 py-sm-5">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="row g-3 g-sm-4">
          {/* Brand and Description */}
          <div className="col-12 col-lg-4 mb-3 mb-lg-0">
            <div className="d-flex align-items-center mb-3">
              <div className="fitness-gradient rounded-circle d-flex align-items-center justify-content-center me-2" style={{width: '32px', height: '32px'}}>
                <span className="text-white fw-bold" style={{fontSize: '14px'}}>F</span>
              </div>
              <span className="fw-bold" style={{fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)'}}>FitnessPro</span>
            </div>
            <p className="text-light opacity-75 mb-3 mb-sm-4" style={{fontSize: 'clamp(0.8rem, 2vw, 0.875rem)', lineHeight: '1.5'}}>
              Your ultimate destination for bodybuilding, fitness, nutrition, and supplements. 
              Join our community and transform your life today.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light opacity-75 hover:opacity-100 transition-opacity">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-light opacity-75 hover:opacity-100 transition-opacity">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-light opacity-75 hover:opacity-100 transition-opacity">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-light opacity-75 hover:opacity-100 transition-opacity">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-sm-4 col-lg-2">
            <h6 className="fw-bold mb-3" style={{fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)'}}>Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#workouts" className="text-light opacity-75 text-decoration-none hover:opacity-100" style={{fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)'}}>Workouts</a>
              </li>
              <li className="mb-2">
                <a href="#nutrition" className="text-light opacity-75 text-decoration-none hover:opacity-100" style={{fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)'}}>Nutrition</a>
              </li>
              <li className="mb-2">
                <a href="#supplements" className="text-light opacity-75 text-decoration-none hover:opacity-100" style={{fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)'}}>Supplements</a>
              </li>
              <li className="mb-2">
                <a href="#community" className="text-light opacity-75 text-decoration-none hover:opacity-100" style={{fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)'}}>Community</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-6 col-sm-4 col-lg-2">
            <h6 className="fw-bold mb-3" style={{fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)'}}>Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none hover:opacity-100" style={{fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)'}}>Help Center</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none hover:opacity-100" style={{fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)'}}>Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none hover:opacity-100" style={{fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)'}}>Shipping Info</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none hover:opacity-100" style={{fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)'}}>Returns</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-sm-4 col-lg-4">
            <h6 className="fw-bold mb-3" style={{fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)'}}>Contact Info</h6>
            <div className="d-flex align-items-center mb-2">
              <Mail size={14} className="me-2" />
              <span className="text-light opacity-75" style={{fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)'}}>support@fitnesspro.com</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <Phone size={14} className="me-2" />
              <span className="text-light opacity-75" style={{fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)'}}>1-800-FITNESS</span>
            </div>
            <div className="d-flex align-items-center mb-3 mb-sm-4">
              <MapPin size={14} className="me-2 flex-shrink-0" />
              <span className="text-light opacity-75" style={{fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)'}}>123 Fitness Ave, Health City, HC 12345</span>
            </div>

            {/* Newsletter */}
            <div className="border border-secondary rounded p-3">
              <h6 className="fw-bold mb-2" style={{fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)'}}>Stay Updated</h6>
              <p className="text-light opacity-75 mb-3" style={{fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)', lineHeight: '1.4'}}>
                Get the latest workouts, nutrition tips, and exclusive offers.
              </p>
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control bg-transparent border-secondary text-light" 
                  placeholder="Enter your email"
                  style={{fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)'}}
                />
                <button className="btn btn-primary" style={{fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)'}}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-3 my-sm-4 border-secondary" />

        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start">
            <p className="text-light opacity-75 mb-2 mb-md-0" style={{fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)'}}>
              © 2024 FitnessPro. All rights reserved.
            </p>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-2 gap-sm-3">
              <a href="#" className="text-light opacity-75 text-decoration-none hover:opacity-100" style={{fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)'}}>Privacy Policy</a>
              <a href="#" className="text-light opacity-75 text-decoration-none hover:opacity-100" style={{fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)'}}>Terms of Service</a>
              <a href="#" className="text-light opacity-75 text-decoration-none hover:opacity-100" style={{fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)'}}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
