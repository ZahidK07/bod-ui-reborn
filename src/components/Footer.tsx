
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container mx-auto px-4">
        <div className="row g-4">
          {/* Brand and Description */}
          <div className="col-lg-4">
            <div className="d-flex align-items-center mb-3">
              <div className="fitness-gradient rounded-circle d-flex align-items-center justify-content-center me-2" style={{width: '40px', height: '40px'}}>
                <span className="text-white fw-bold fs-5">F</span>
              </div>
              <span className="fw-bold fs-4">FitnessPro</span>
            </div>
            <p className="text-light opacity-75 mb-4">
              Your ultimate destination for bodybuilding, fitness, nutrition, and supplements. 
              Join our community and transform your life today.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light opacity-75 hover:opacity-100 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-light opacity-75 hover:opacity-100 transition-opacity">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-light opacity-75 hover:opacity-100 transition-opacity">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-light opacity-75 hover:opacity-100 transition-opacity">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#workouts" className="text-light opacity-75 text-decoration-none hover:opacity-100">Workouts</a>
              </li>
              <li className="mb-2">
                <a href="#nutrition" className="text-light opacity-75 text-decoration-none hover:opacity-100">Nutrition</a>
              </li>
              <li className="mb-2">
                <a href="#supplements" className="text-light opacity-75 text-decoration-none hover:opacity-100">Supplements</a>
              </li>
              <li className="mb-2">
                <a href="#community" className="text-light opacity-75 text-decoration-none hover:opacity-100">Community</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none hover:opacity-100">Help Center</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none hover:opacity-100">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none hover:opacity-100">Shipping Info</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none hover:opacity-100">Returns</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4">
            <h6 className="fw-bold mb-3">Contact Info</h6>
            <div className="d-flex align-items-center mb-2">
              <Mail size={16} className="me-2" />
              <span className="text-light opacity-75">support@fitnesspro.com</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <Phone size={16} className="me-2" />
              <span className="text-light opacity-75">1-800-FITNESS</span>
            </div>
            <div className="d-flex align-items-center mb-4">
              <MapPin size={16} className="me-2" />
              <span className="text-light opacity-75">123 Fitness Ave, Health City, HC 12345</span>
            </div>

            {/* Newsletter */}
            <div className="border border-secondary rounded p-3">
              <h6 className="fw-bold mb-2">Stay Updated</h6>
              <p className="small text-light opacity-75 mb-3">
                Get the latest workouts, nutrition tips, and exclusive offers.
              </p>
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control bg-transparent border-secondary text-light" 
                  placeholder="Enter your email"
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-light opacity-75 mb-0">
              © 2024 FitnessPro. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex justify-content-md-end gap-3 mt-2 mt-md-0">
              <a href="#" className="text-light opacity-75 text-decoration-none small hover:opacity-100">Privacy Policy</a>
              <a href="#" className="text-light opacity-75 text-decoration-none small hover:opacity-100">Terms of Service</a>
              <a href="#" className="text-light opacity-75 text-decoration-none small hover:opacity-100">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
