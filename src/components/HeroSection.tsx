
import React from 'react';
import { Play, TrendingUp, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="fitness-gradient py-4 sm:py-5 text-white">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-5">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div className="animate-fade-in text-center text-lg-start">
              <h1 className="fw-bold mb-3 mb-sm-4" style={{fontSize: 'clamp(1.75rem, 4vw, 3.5rem)', lineHeight: '1.2'}}>
                Transform Your Body.<br />
                <span className="text-warning">Achieve Your Goals.</span>
              </h1>
              <p className="mb-3 mb-sm-4 opacity-90" style={{fontSize: 'clamp(0.9rem, 2vw, 1.25rem)', lineHeight: '1.5'}}>
                Join millions of fitness enthusiasts worldwide. Access professional workout routines, 
                expert nutrition advice, and premium supplements to reach your peak performance.
              </p>
              
              {/* Buttons - Responsive layout */}
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mb-4">
                <button className="btn btn-light btn-lg fw-semibold px-4 py-3 d-flex align-items-center justify-content-center">
                  <Play size={18} className="me-2" />
                  Start Training
                </button>
                <button className="btn btn-outline-light btn-lg fw-semibold px-4 py-3">
                  View Programs
                </button>
              </div>
              
              {/* Stats - Responsive grid */}
              <div className="row g-3 mt-4 mt-sm-5">
                <div className="col-4">
                  <div className="text-center">
                    <div className="fw-bold mb-1" style={{fontSize: 'clamp(1.25rem, 3vw, 2rem)'}}>2M+</div>
                    <small className="opacity-80" style={{fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)'}}>Active Users</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="fw-bold mb-1" style={{fontSize: 'clamp(1.25rem, 3vw, 2rem)'}}>500+</div>
                    <small className="opacity-80" style={{fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)'}}>Workout Plans</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="fw-bold mb-1" style={{fontSize: 'clamp(1.25rem, 3vw, 2rem)'}}>1000+</div>
                    <small className="opacity-80" style={{fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)'}}>Success Stories</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side content - Better mobile spacing */}
          <div className="col-12 col-lg-6 mt-4 mt-lg-0">
            <div className="position-relative px-2 px-sm-0">
              <div className="bg-white bg-opacity-10 rounded-4 p-3 p-sm-4 backdrop-blur-sm">
                <div className="row g-2 g-sm-3">
                  <div className="col-6">
                    <div className="bg-white bg-opacity-20 rounded-3 p-2 p-sm-3 text-center">
                      <TrendingUp size={24} className="mb-2 d-none d-sm-block" />
                      <TrendingUp size={20} className="mb-1 d-sm-none" />
                      <div className="fw-semibold" style={{fontSize: 'clamp(0.8rem, 2vw, 1rem)'}}>Progress Tracking</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-white bg-opacity-20 rounded-3 p-2 p-sm-3 text-center">
                      <Users size={24} className="mb-2 d-none d-sm-block" />
                      <Users size={20} className="mb-1 d-sm-none" />
                      <div className="fw-semibold" style={{fontSize: 'clamp(0.8rem, 2vw, 1rem)'}}>Community Support</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="bg-white bg-opacity-20 rounded-3 p-2 p-sm-3">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="fw-semibold" style={{fontSize: 'clamp(0.8rem, 2vw, 1rem)'}}>Today's Workout</span>
                        <span className="badge bg-success" style={{fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)'}}>Active</span>
                      </div>
                      <div className="progress mb-2" style={{height: '6px'}}>
                        <div className="progress-bar bg-warning" style={{width: '75%'}}></div>
                      </div>
                      <small className="opacity-80" style={{fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)'}}>3 of 4 exercises completed</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
