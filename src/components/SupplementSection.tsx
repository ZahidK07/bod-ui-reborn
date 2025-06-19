
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
    <section id="supplements" className="py-5 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3 text-foreground">Premium Supplements</h2>
          <p className="lead text-muted-foreground">
            High-quality supplements to support your fitness journey
          </p>
        </div>

        {/* Categories */}
        <div className="d-flex justify-content-center gap-2 flex-wrap mb-5">
          <button className="btn btn-primary">All Products</button>
          <button className="btn btn-outline-secondary">Protein</button>
          <button className="btn btn-outline-secondary">Pre-Workout</button>
          <button className="btn btn-outline-secondary">Recovery</button>
          <button className="btn btn-outline-secondary">Vitamins</button>
        </div>

        {/* Products Grid */}
        <div className="row g-4 mb-5">
          {supplements.map((supplement) => (
            <div key={supplement.id} className="col-lg-3 col-md-6">
              <div className="fitness-card h-100 position-relative">
                {/* Badge */}
                <div className="position-absolute top-0 start-0 m-2 z-index-1">
                  <span className={`badge bg-${getBadgeColor(supplement.badge)}`}>
                    {supplement.badge}
                  </span>
                </div>

                {/* Product Image */}
                <div className="text-center mb-3">
                  <img 
                    src={supplement.image} 
                    alt={supplement.name}
                    className="img-fluid rounded"
                    style={{height: '200px', width: '200px', objectFit: 'cover'}}
                  />
                </div>

                {/* Product Info */}
                <div className="flex-grow-1">
                  <div className="small text-muted mb-1">{supplement.brand}</div>
                  <h6 className="fw-bold mb-2 text-foreground">{supplement.name}</h6>
                  
                  {/* Rating */}
                  <div className="d-flex align-items-center gap-1 mb-2">
                    <div className="d-flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={i < Math.floor(supplement.rating) ? 'text-warning' : 'text-muted'} 
                          fill={i < Math.floor(supplement.rating) ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                    <span className="small text-muted">
                      {supplement.rating} ({supplement.reviews})
                    </span>
                  </div>

                  {/* Benefits */}
                  <div className="mb-3">
                    {supplement.benefits.map((benefit, index) => (
                      <span key={index} className="badge bg-secondary bg-opacity-25 text-secondary me-1 mb-1 small">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="mt-auto">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <span className="h5 fw-bold text-foreground">${supplement.price}</span>
                      <span className="small text-muted text-decoration-line-through ms-2">
                        ${supplement.originalPrice}
                      </span>
                    </div>
                    <div className="small text-success fw-semibold">
                      Save ${(supplement.originalPrice - supplement.price).toFixed(2)}
                    </div>
                  </div>
                  
                  <button className="btn btn-primary w-100 fw-semibold">
                    <ShoppingCart size={16} className="me-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="row g-4 mt-5">
          <div className="col-lg-4">
            <div className="text-center">
              <div className="fitness-gradient rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '60px', height: '60px'}}>
                <Award className="text-white" size={28} />
              </div>
              <h5 className="fw-bold mb-2">Quality Guaranteed</h5>
              <p className="text-muted-foreground small">
                All products are third-party tested for purity and potency
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center">
              <div className="fitness-gradient rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '60px', height: '60px'}}>
                <Zap className="text-white" size={28} />
              </div>
              <h5 className="fw-bold mb-2">Fast Shipping</h5>
              <p className="text-muted-foreground small">
                Free shipping on orders over $75. Express delivery available
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center">
              <div className="fitness-gradient rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '60px', height: '60px'}}>
                <Star className="text-white" size={28} />
              </div>
              <h5 className="fw-bold mb-2">Expert Approved</h5>
              <p className="text-muted-foreground small">
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
