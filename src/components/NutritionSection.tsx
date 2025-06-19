
import React from 'react';
import { Apple, BookOpen, Calculator, TrendingUp } from 'lucide-react';

const NutritionSection: React.FC = () => {
  const nutritionCards = [
    {
      icon: <Apple size={32} />,
      title: "Meal Plans",
      description: "Custom meal plans designed for your fitness goals",
      color: "success"
    },
    {
      icon: <Calculator size={32} />,
      title: "Macro Calculator",
      description: "Calculate your daily macronutrient requirements",
      color: "info"
    },
    {
      icon: <BookOpen size={32} />,
      title: "Nutrition Guides",
      description: "Expert articles on nutrition and healthy eating",
      color: "warning"
    },
    {
      icon: <TrendingUp size={32} />,
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
    <section id="nutrition" className="py-5 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3 text-foreground">Nutrition Hub</h2>
          <p className="lead text-muted-foreground">
            Fuel your body with science-based nutrition strategies
          </p>
        </div>

        {/* Nutrition Tools */}
        <div className="row g-4 mb-5">
          {nutritionCards.map((card, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="fitness-card text-center h-100">
                <div className={`text-${card.color} mb-3`}>
                  {card.icon}
                </div>
                <h5 className="fw-bold mb-2 text-foreground">{card.title}</h5>
                <p className="text-muted-foreground small mb-3">{card.description}</p>
                <button className={`btn btn-${card.color} btn-sm fw-semibold`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Meal Plans */}
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3 className="fw-bold mb-3 text-foreground">Featured Meal Plans</h3>
            <p className="text-muted-foreground mb-4">
              Choose from our professionally designed meal plans tailored to your specific fitness goals. 
              Each plan includes detailed recipes, shopping lists, and macro breakdowns.
            </p>
            
            <div className="row g-3">
              {mealPlans.map((plan, index) => (
                <div key={index} className="col-12">
                  <div className="card border-0 shadow-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-md-3">
                          <img 
                            src={plan.image} 
                            alt={plan.title}
                            className="w-100 rounded"
                            style={{height: '80px', objectFit: 'cover'}}
                          />
                        </div>
                        <div className="col-md-6">
                          <h6 className="fw-bold mb-1">{plan.title}</h6>
                          <small className="text-muted">{plan.meals} meals per day</small>
                        </div>
                        <div className="col-md-3 text-end">
                          <div className="small">
                            <div>{plan.calories}</div>
                            <div className="text-muted">
                              P: {plan.protein} | C: {plan.carbs} | F: {plan.fat}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="btn btn-primary btn-lg mt-4 fw-semibold">
              View All Meal Plans
            </button>
          </div>
          
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="bg-primary bg-opacity-10 rounded-4 p-4">
              <h4 className="fw-bold mb-3 text-primary">Daily Nutrition Tracker</h4>
              
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span className="small fw-semibold">Calories</span>
                  <span className="small">1,850 / 2,200</span>
                </div>
                <div className="progress" style={{height: '8px'}}>
                  <div className="progress-bar bg-primary" style={{width: '84%'}}></div>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span className="small fw-semibold">Protein</span>
                  <span className="small">140g / 160g</span>
                </div>
                <div className="progress" style={{height: '8px'}}>
                  <div className="progress-bar bg-success" style={{width: '87%'}}></div>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span className="small fw-semibold">Carbs</span>
                  <span className="small">180g / 220g</span>
                </div>
                <div className="progress" style={{height: '8px'}}>
                  <div className="progress-bar bg-warning" style={{width: '82%'}}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span className="small fw-semibold">Fats</span>
                  <span className="small">65g / 75g</span>
                </div>
                <div className="progress" style={{height: '8px'}}>
                  <div className="progress-bar bg-info" style={{width: '87%'}}></div>
                </div>
              </div>
              
              <button className="btn btn-primary w-100 fw-semibold">
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
