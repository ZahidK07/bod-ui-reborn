
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WorkoutSection from '../components/WorkoutSection';
import NutritionSection from '../components/NutritionSection';
import SupplementSection from '../components/SupplementSection';
import Footer from '../components/Footer';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  // Apply dark mode to document and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-vh-100 bg-background">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <HeroSection />
        <WorkoutSection />
        <NutritionSection />
        <SupplementSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
