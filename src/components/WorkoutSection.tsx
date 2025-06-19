
import React from 'react';
import { Clock, Target, Zap, Users } from 'lucide-react';

const WorkoutSection: React.FC = () => {
  const workouts = [
    {
      id: 1,
      title: "Push Day Beast",
      description: "Intense chest, shoulders, and triceps workout for maximum muscle growth",
      duration: "45 min",
      difficulty: "Advanced",
      exercises: 8,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      category: "Strength"
    },
    {
      id: 2,
      title: "Full Body HIIT",
      description: "High-intensity interval training to burn fat and build endurance",
      duration: "30 min",
      difficulty: "Intermediate",
      exercises: 6,
      image: "https://images.unsplash.com/photo-1549476464-37392f717541?w=400&h=250&fit=crop",
      category: "Cardio"
    },
    {
      id: 3,
      title: "Leg Day Destroyer",
      description: "Complete lower body workout targeting quads, hamstrings, and glutes",
      duration: "60 min",
      difficulty: "Advanced",
      exercises: 10,
      image: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=400&h=250&fit=crop",
      category: "Strength"
    },
    {
      id: 4,
      title: "Core Crusher",
      description: "Targeted abdominal and core strengthening routine",
      duration: "25 min",
      difficulty: "Beginner",
      exercises: 5,
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=250&fit=crop",
      category: "Core"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <section id="workouts" className="py-4 py-sm-5 bg-background">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-4 mb-sm-5">
          <h2 className="fw-bold mb-3 text-foreground" style={{fontSize: 'clamp(1.75rem, 4vw, 2.5rem)'}}>Featured Workouts</h2>
          <p className="text-muted-foreground mb-3 mb-sm-4" style={{fontSize: 'clamp(0.9rem, 2vw, 1.25rem)'}}>
            Professional workout routines designed by certified trainers
          </p>
          
          {/* Filter buttons - Responsive layout */}
          <div className="d-flex justify-content-center gap-1 gap-sm-2 flex-wrap">
            <button className="btn btn-outline-primary btn-sm px-3 py-2">All</button>
            <button className="btn btn-outline-secondary btn-sm px-3 py-2">Strength</button>
            <button className="btn btn-outline-secondary btn-sm px-3 py-2">Cardio</button>
            <button className="btn btn-outline-secondary btn-sm px-3 py-2">Core</button>
          </div>
        </div>

        {/* Workout cards - Responsive grid */}
        <div className="row g-3 g-sm-4">
          {workouts.map((workout) => (
            <div key={workout.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="fitness-card h-100 hover:scale-105 transition-transform">
                <div className="position-relative mb-3">
                  <img 
                    src={workout.image} 
                    alt={workout.title}
                    className="w-100 rounded-lg"
                    style={{height: 'clamp(150px, 20vw, 200px)', objectFit: 'cover'}}
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className={`badge bg-${getDifficultyColor(workout.difficulty)}`} style={{fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)'}}>
                      {workout.difficulty}
                    </span>
                  </div>
                  <div className="position-absolute bottom-0 start-0 m-2">
                    <span className="badge bg-dark bg-opacity-75" style={{fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)'}}>
                      {workout.category}
                    </span>
                  </div>
                </div>
                
                <h5 className="fw-bold mb-2 text-foreground" style={{fontSize: 'clamp(1rem, 2.5vw, 1.25rem)'}}>{workout.title}</h5>
                <p className="text-muted-foreground mb-3" style={{fontSize: 'clamp(0.8rem, 2vw, 0.875rem)', lineHeight: '1.4'}}>{workout.description}</p>
                
                {/* Workout details - Responsive layout */}
                <div className="d-flex justify-content-between align-items-center mb-3 text-muted-foreground" style={{fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)'}}>
                  <div className="d-flex align-items-center gap-1">
                    <Clock size={14} />
                    <span>{workout.duration}</span>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <Target size={14} />
                    <span>{workout.exercises} exercises</span>
                  </div>
                </div>
                
                <button className="btn btn-primary w-100 fw-semibold py-2 py-sm-3" style={{fontSize: 'clamp(0.8rem, 2vw, 0.875rem)'}}>
                  Start Workout
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-4 mt-sm-5">
          <button className="btn btn-outline-primary btn-lg px-4 px-sm-5 py-2 py-sm-3">
            View All Workouts
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSection;
