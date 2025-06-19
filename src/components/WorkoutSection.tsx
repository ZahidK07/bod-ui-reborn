
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
    <section id="workouts" className="py-5 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3 text-foreground">Featured Workouts</h2>
          <p className="lead text-muted-foreground mb-4">
            Professional workout routines designed by certified trainers
          </p>
          <div className="d-flex justify-content-center gap-2 flex-wrap">
            <button className="btn btn-outline-primary">All</button>
            <button className="btn btn-outline-secondary">Strength</button>
            <button className="btn btn-outline-secondary">Cardio</button>
            <button className="btn btn-outline-secondary">Core</button>
          </div>
        </div>

        <div className="row g-4">
          {workouts.map((workout) => (
            <div key={workout.id} className="col-lg-6 col-xl-3">
              <div className="fitness-card h-100 hover:scale-105 transition-transform">
                <div className="position-relative mb-3">
                  <img 
                    src={workout.image} 
                    alt={workout.title}
                    className="w-100 rounded-lg"
                    style={{height: '200px', objectFit: 'cover'}}
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className={`badge bg-${getDifficultyColor(workout.difficulty)}`}>
                      {workout.difficulty}
                    </span>
                  </div>
                  <div className="position-absolute bottom-0 start-0 m-2">
                    <span className="badge bg-dark bg-opacity-75">
                      {workout.category}
                    </span>
                  </div>
                </div>
                
                <h5 className="fw-bold mb-2 text-foreground">{workout.title}</h5>
                <p className="text-muted-foreground mb-3 small">{workout.description}</p>
                
                <div className="d-flex justify-content-between align-items-center mb-3 small text-muted-foreground">
                  <div className="d-flex align-items-center gap-1">
                    <Clock size={16} />
                    <span>{workout.duration}</span>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <Target size={16} />
                    <span>{workout.exercises} exercises</span>
                  </div>
                </div>
                
                <button className="btn btn-primary w-100 fw-semibold">
                  Start Workout
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-outline-primary btn-lg px-5">
            View All Workouts
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSection;
