
import React from 'react';
import { Apple, BookOpen, Calculator, TrendingUp } from 'lucide-react';

const NutritionSection: React.FC = () => {
  const nutritionCards = [
    {
      icon: <Apple size={28} />,
      title: "Meal Plans",
      description: "Custom meal plans designed for your fitness goals",
      color: "success"
    },
    {
      icon: <Calculator size={28} />,
      title: "Macro Calculator",
      description: "Calculate your daily macronutrient requirements",
      color: "info"
    },
    {
      icon: <BookOpen size={28} />,
      title: "Nutrition Guides",
      description: "Expert articles on nutrition and healthy eating",
      color: "warning"
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Progress Tracking",
      description: "Track your nutrition goals and achievements",
      color: "primary"
    }
  ];

  const mealPlans = [
    {
      title: "Muscle Building",
      calories: "2800 cal",
      protein: "180g",
      carbs: "300g",
      fat: "90g",
      meals: 5,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop"
    },
    {
      title: "Fat Loss",
      calories: "1800 cal",
      protein: "140g",
      carbs: "150g",
      fat: "60g",
      meals: 4,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop"
    },
    {
      title: "Maintenance",
      calories: "2200 cal",
      protein: "160g",
      carbs: "220g",
      fat: "75g",
      meals: 4,
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop"
    }
  ];

  return (
    <section id="nutrition" className="py-4 py-sm-5 bg-muted/30">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-4 mb-sm-5">
          <h2 className="fw-bold mb-3 text-foreground" style={{fontSize: 'clamp(1.75rem, 4vw, 2.5rem)'}}>Nutrition Hub</h2>
          <p className="text-muted-foreground" style={{fontSize: 'clamp(0.9rem, 2vw, 1.25rem)'}}>
            Fuel your body with science-based nutrition strategies
          </p>
        </div>

        {/* Nutrition Tools - Responsive grid */}
        <div className="row g-3 g-sm-4 mb-4 mb-sm-5">
          {nutritionCards.map((card, index) => (
            <div key={index} className="col-6 col-lg-3">
              <div className="fitness-card text-center h-100 p-3 p-sm-4">
                <div className={`text-${card.color} mb-2 mb-sm-3`}>
                  {React.cloneElement(card.icon, { size: window.innerWidth < 576 ? 24 : 28 })}
                </div>
                <h5 className="fw-bold mb-2 text-foreground" style={{fontSize: 'clamp(0.9rem, 2.5vw, 1.25rem)'}}>{card.title}</h5>
                <p className="text-muted-foreground mb-2 mb-sm-3" style={{fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', lineHeight: '1.4'}}>{card.description}</p>
                <button className={`btn btn-${card.color} btn-sm fw-semibold px-3 py-2`} style={{fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)'}}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Meal Plans - Responsive layout */}
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <h3 className="fw-bold mb-3 text-foreground" style={{fontSize: 'clamp(1.5rem, 3.5vw, 2rem)'}}>Featured Meal Plans</h3>
            <p className="text-muted-foreground mb-3 mb-sm-4" style={{fontSize: 'clamp(0.85rem, 2vw, 1rem)', lineHeight: '1.5'}}>
              Choose from our professionally designed meal plans tailored to your specific fitness goals. 
              Each plan includes detailed recipes, shopping lists, and macro breakdowns.
            </p>
            
            {/* Meal plan cards - Mobile optimized */}
            <div className="row g-2 g-sm-3">
              {mealPlans.map((plan, index) => (
                <div key={index} className="col-12">
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-3">
                      <div className="row align-items-center g-2">
                        <div className="col-3 col-sm-2">
                          <img 
                            src={plan.image} 
                            alt={plan.title}
                            className="w-100 rounded"
                            style={{height: 'clamp(50px, 10vw, 80px)', objectFit: 'cover'}}
                          />
                        </div>
                        <div className="col-6 col-sm-7">
                          <h6 className="fw-bold mb-1" style={{fontSize: 'clamp(0.85rem, 2.2vw, 1.1rem)'}}>{plan.title}</h6>
                          <small className="text-muted" style={{fontSize: 'clamp(0.7rem, 1.8vw, 0.875rem)'}}>{plan.meals} meals per day</small>
                        </div>
                        <div className="col-3 col-sm-3 text-end">
                          <div style={{fontSize: 'clamp(0.7rem, 1.8vw, 0.875rem)'}}>
                            <div className="fw-semibold">{plan.calories}</div>
                            <div className="text-muted d-none d-sm-block">
                              P: {plan.protein}
                            </div>
                            <div className="text-muted d-none d-sm-block">
                              C: {plan.carbs} | F: {plan.fat}
                            </div>
                            <div className="text-muted d-sm-none" style={{fontSize: '0.65rem'}}>
                              {plan.protein} | {plan.carbs} | {plan.fat}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="btn btn-primary btn-lg mt-3 mt-sm-4 fw-semibold w-100 w-sm-auto px-4 py-3">
              View All Meal Plans
            </button>
          </div>
          
          {/* Nutrition Tracker - Mobile responsive */}
          <div className="col-12 col-lg-6">
            <div className="bg-primary bg-opacity-10 rounded-4 p-3 p-sm-4">
              <h4 className="fw-bold mb-3 text-primary" style={{fontSize: 'clamp(1.25rem, 3vw, 1.5rem)'}}>Daily Nutrition Tracker</h4>
              
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-semibold" style={{fontSize: 'clamp(0.8rem, 2vw, 0.875rem)'}}>Calories</span>
                  <span style={{fontSize: 'clamp(0.8rem, 2vw, 0.875rem)'}}>1,850 / 2,200</span>
                </div>
                <div className="progress" style={{height: 'clamp(6px, 1.5vw, 8px)'}}>
                  <div className="progress-bar bg-primary" style={{width: '84%'}}></div>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-semibold" style={{fontSize: 'clamp(0.8rem, 2vw, 0.875rem)'}}>Protein</span>
                  <span style={{fontSize: 'clamp(0.8rem, 2vw, 0.875rem)'}}>140g / 160g</span>
                </div>
                <div className="progress" style={{height: 'clamp(6px, 1.5vw, 8px)'}}>
                  <div className="progress-bar bg-success" style={{width: '87%'}}></div>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-semibold" style={{fontSize: 'clamp(0.8rem, 2vw, 0.875rem)'}}>Carbs</span>
                  <span style={{fontSize: 'clamp(0.8rem, 2vw, 0.875rem)'}}>180g / 220g</span>
                </div>
                <div className="progress" style={{height: 'clamp(6px, 1.5vw, 8px)'}}>
                  <div className="progress-bar bg-warning" style={{width: '82%'}}></div>
                </div>
              </div>
              
              <div className="mb-3 mb-sm-4">
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-semibold" style={{fontSize: 'clamp(0.8rem, 2vw, 0.875rem)'}}>Fats</span>
                  <span style={{fontSize: 'clamp(0.8rem, 2vw, 0.875rem)'}}>65g / 75g</span>
                </div>
                <div className="progress" style={{height: 'clamp(6px, 1.5vw, 8px)'}}>
                  <div className="progress-bar bg-info" style={{width: '87%'}}></div>
                </div>
              </div>
              
              <button className="btn btn-primary w-100 fw-semibold py-2 py-sm-3" style={{fontSize: 'clamp(0.8rem, 2vw, 0.875rem)'}}>
                Log Food
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
