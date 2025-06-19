
import React from 'react';
import { Play, TrendingUp, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="fitness-gradient py-5 text-white">
      <div className="container mx-auto px-4 py-5">
        <div className="row align-items-center min-vh-50">
          <div className="col-lg-6">
            <div className="animate-fade-in">
              <h1 className="display-4 fw-bold mb-4">
                Transform Your Body.<br />
                <span className="text-warning">Achieve Your Goals.</span>
              </h1>
              <p className="lead mb-4 opacity-90">
                Join millions of fitness enthusiasts worldwide. Access professional workout routines, 
                expert nutrition advice, and premium supplements to reach your peak performance.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <button className="btn btn-light btn-lg fw-semibold px-4">
                  <Play size={20} className="me-2" />
                  Start Training
                </button>
                <button className="btn btn-outline-light btn-lg fw-semibold px-4">
                  View Programs
                </button>
              </div>
              
              {/* Stats */}
              <div className="row mt-5">
                <div className="col-4">
                  <div className="text-center">
                    <div className="h3 fw-bold mb-1">2M+</div>
                    <small className="opacity-80">Active Users</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="h3 fw-bold mb-1">500+</div>
                    <small className="opacity-80">Workout Plans</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="h3 fw-bold mb-1">1000+</div>
                    <small className="opacity-80">Success Stories</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="position-relative">
              <div className="bg-white bg-opacity-10 rounded-4 p-4 backdrop-blur-sm">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="bg-white bg-opacity-20 rounded-3 p-3 text-center">
                      <TrendingUp size={32} className="mb-2" />
                      <div className="fw-semibold">Progress Tracking</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-white bg-opacity-20 rounded-3 p-3 text-center">
                      <Users size={32} className="mb-2" />
                      <div className="fw-semibold">Community Support</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="bg-white bg-opacity-20 rounded-3 p-3">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="fw-semibold">Today's Workout</span>
                        <span className="badge bg-success">Active</span>
                      </div>
                      <div className="progress mb-2" style={{height: '8px'}}>
                        <div className="progress-bar bg-warning" style={{width: '75%'}}></div>
                      </div>
                      <small className="opacity-80">3 of 4 exercises completed</small>
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
