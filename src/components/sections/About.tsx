import React from 'react';
import { Users, Calendar, MapPin, Award } from 'lucide-react';
import { communityStats } from '../../data';

const AboutSection: React.FC = () => {
  // Map icon names to actual components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users size={36} className="text-orange-600" />;
      case 'Calendar':
        return <Calendar size={36} className="text-orange-600" />;
      case 'MapPin':
        return <MapPin size={36} className="text-orange-600" />;
      case 'Award':
        return <Award size={36} className="text-orange-600" />;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Is StrideTribe?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            StrideTribe is more than just a running club—it's a community of passionate runners who support and inspire each other. 
            Whether you're a beginner or an experienced marathoner, our inclusive group welcomes everyone 
            who wants to experience the joy of running together. We organize weekend runs across Pune, 
            with routes designed for all fitness levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {communityStats.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {getIcon(stat.icon)}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;