
import React from 'react';
import { Star, ShoppingCart, Award, Zap } from 'lucide-react';

const SupplementSection: React.FC = () => {
  const supplements = [
    {
      id: 1,
      name: "Whey Protein Isolate",
      brand: "FitnessPro",
      price: 49.99,
      originalPrice: 59.99,
      rating: 4.8,
      reviews: 1250,
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=300&h=300&fit=crop",
      badge: "Best Seller",
      benefits: ["25g Protein", "Fast Absorption", "Low Carb"]
    },
    {
      id: 2,
      name: "Pre-Workout Extreme",
      brand: "FitnessPro",
      price: 39.99,
      originalPrice: 44.99,
      rating: 4.6,
      reviews: 890,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      badge: "New",
      benefits: ["Energy Boost", "Focus Enhancement", "Pump"]
    },
    {
      id: 3,
      name: "Creatine Monohydrate",
      brand: "FitnessPro",
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.9,
      reviews: 2100,
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop",
      badge: "Top Rated",
      benefits: ["Strength Gains", "Pure Formula", "Tested"]
    },
    {
      id: 4,
      name: "BCAA Recovery",
      brand: "FitnessPro",
      price: 34.99,
      originalPrice: 39.99,
      rating: 4.7,
      reviews: 670,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",
      badge: "Sale",
      benefits: ["Muscle Recovery", "Reduce Fatigue", "Great Taste"]
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Best Seller': return 'primary';
      case 'New': return 'success';
      case 'Top Rated': return 'warning';
      case 'Sale': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <section id="supplements" className="py-4 py-sm-5 bg-background">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-4 mb-sm-5">
          <h2 className="fw-bold mb-3 text-foreground" style={{fontSize: 'clamp(1.75rem, 4vw, 2.5rem)'}}>Premium Supplements</h2>
          <p className="text-muted-foreground" style={{fontSize: 'clamp(0.9rem, 2vw, 1.25rem)'}}>
            High-quality supplements to support your fitness journey
          </p>
        </div>

        {/* Categories - Responsive buttons */}
        <div className="d-flex justify-content-center gap-1 gap-sm-2 flex-wrap mb-4 mb-sm-5">
          <button className="btn btn-primary btn-sm px-3 py-2" style={{fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)'}}>All Products</button>
          <button className="btn btn-outline-secondary btn-sm px-3 py-2" style={{fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)'}}>Protein</button>
          <button className="btn btn-outline-secondary btn-sm px-3 py-2" style={{fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)'}}>Pre-Workout</button>
          <button className="btn btn-outline-secondary btn-sm px-3 py-2" style={{fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)'}}>Recovery</button>
          <button className="btn btn-outline-secondary btn-sm px-3 py-2" style={{fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)'}}>Vitamins</button>
        </div>

        {/* Products Grid - Responsive layout */}
        <div className="row g-3 g-sm-4 mb-4 mb-sm-5">
          {supplements.map((supplement) => (
            <div key={supplement.id} className="col-6 col-lg-4 col-xl-3">
              <div className="fitness-card h-100 position-relative p-3">
                {/* Badge */}
                <div className="position-absolute top-0 start-0 m-2 z-index-1">
                  <span className={`badge bg-${getBadgeColor(supplement.badge)}`} style={{fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)'}}>
                    {supplement.badge}
                  </span>
                </div>

                {/* Product Image */}
                <div className="text-center mb-2 mb-sm-3">
                  <img 
                    src={supplement.image} 
                    alt={supplement.name}
                    className="img-fluid rounded"
                    style={{height: 'clamp(120px, 25vw, 200px)', width: 'clamp(120px, 25vw, 200px)', objectFit: 'cover'}}
                  />
                </div>

                {/* Product Info */}
                <div className="flex-grow-1">
                  <div className="text-muted mb-1" style={{fontSize: 'clamp(0.7rem, 1.8vw, 0.875rem)'}}>{supplement.brand}</div>
                  <h6 className="fw-bold mb-2 text-foreground" style={{fontSize: 'clamp(0.85rem, 2.2vw, 1.1rem)', lineHeight: '1.3'}}>{supplement.name}</h6>
                  
                  {/* Rating - Mobile optimized */}
                  <div className="d-flex align-items-center gap-1 mb-2">
                    <div className="d-flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={12} 
                          className={i < Math.floor(supplement.rating) ? 'text-warning' : 'text-muted'} 
                          fill={i < Math.floor(supplement.rating) ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                    <span className="text-muted" style={{fontSize: 'clamp(0.7rem, 1.6vw, 0.875rem)'}}>
                      {supplement.rating} <span className="d-none d-sm-inline">({supplement.reviews})</span>
                    </span>
                  </div>

                  {/* Benefits - Responsive badges */}
                  <div className="mb-2 mb-sm-3">
                    {supplement.benefits.map((benefit, index) => (
                      <span key={index} className="badge bg-secondary bg-opacity-25 text-secondary me-1 mb-1" style={{fontSize: 'clamp(0.6rem, 1.4vw, 0.75rem)'}}>
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="mt-auto">
                  <div className="d-flex align-items-center justify-content-between mb-2 mb-sm-3">
                    <div>
                      <span className="fw-bold text-foreground" style={{fontSize: 'clamp(1rem, 2.5vw, 1.25rem)'}}>${supplement.price}</span>
                      <span className="text-muted text-decoration-line-through ms-1" style={{fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)'}}>
                        ${supplement.originalPrice}
                      </span>
                    </div>
                    <div className="text-success fw-semibold d-none d-sm-block" style={{fontSize: 'clamp(0.7rem, 1.6vw, 0.875rem)'}}>
                      Save ${(supplement.originalPrice - supplement.price).toFixed(2)}
                    </div>
                  </div>
                  
                  <button className="btn btn-primary w-100 fw-semibold py-2" style={{fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)'}}>
                    <ShoppingCart size={14} className="me-1 d-none d-sm-inline" />
                    <span className="d-none d-sm-inline">Add to Cart</span>
                    <span className="d-sm-none">Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features - Responsive layout */}
        <div className="row g-3 g-sm-4 mt-4 mt-sm-5">
          <div className="col-12 col-sm-4">
            <div className="text-center">
              <div className="fitness-gradient rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2 mb-sm-3" style={{width: 'clamp(50px, 12vw, 60px)', height: 'clamp(50px, 12vw, 60px)'}}>
                <Award className="text-white" size={window.innerWidth < 576 ? 20 : 28} />
              </div>
              <h5 className="fw-bold mb-2" style={{fontSize: 'clamp(1rem, 2.5vw, 1.25rem)'}}>Quality Guaranteed</h5>
              <p className="text-muted-foreground" style={{fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)', lineHeight: '1.4'}}>
                All products are third-party tested for purity and potency
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="text-center">
              <div className="fitness-gradient rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2 mb-sm-3" style={{width: 'clamp(50px, 12vw, 60px)', height: 'clamp(50px, 12vw, 60px)'}}>
                <Zap className="text-white" size={window.innerWidth < 576 ? 20 : 28} />
              </div>
              <h5 className="fw-bold mb-2" style={{fontSize: 'clamp(1rem, 2.5vw, 1.25rem)'}}>Fast Shipping</h5>
              <p className="text-muted-foreground" style={{fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)', lineHeight: '1.4'}}>
                Free shipping on orders over $75. Express delivery available
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="text-center">
              <div className="fitness-gradient rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2 mb-sm-3" style={{width: 'clamp(50px, 12vw, 60px)', height: 'clamp(50px, 12vw, 60px)'}}>
                <Star className="text-white" size={window.innerWidth < 576 ? 20 : 28} />
              </div>
              <h5 className="fw-bold mb-2" style={{fontSize: 'clamp(1rem, 2.5vw, 1.25rem)'}}>Expert Approved</h5>
              <p className="text-muted-foreground" style={{fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)', lineHeight: '1.4'}}>
                Recommended by certified nutritionists and trainers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplementSection;
