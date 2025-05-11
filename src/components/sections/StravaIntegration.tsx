import React from 'react';
import { Trophy, Zap, TrendingUp } from 'lucide-react';

const StravaIntegration: React.FC = () => {
  return (
    <section id="join-strava" className="py-24 bg-orange-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Track Your Progress with Us on Strava</h2>
            <p className="text-white text-lg mb-8 opacity-90">
              Join our StrideTribe Strava club to track your runs, compete in monthly challenges, 
              and stay connected with fellow runners. See how you stack up on leaderboards and celebrate 
              your achievements together.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="bg-orange-700 rounded-lg p-4 flex items-start max-w-xs">
                <Trophy size={24} className="text-orange-300 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white mb-1">Monthly Challenges</h3>
                  <p className="text-orange-100 text-sm">
                    Compete in distance, elevation, and consistency challenges with prizes for the winners.
                  </p>
                </div>
              </div>
              
              <div className="bg-orange-700 rounded-lg p-4 flex items-start max-w-xs">
                <Zap size={24} className="text-orange-300 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white mb-1">Community Support</h3>
                  <p className="text-orange-100 text-sm">
                    Give kudos, share tips, and encourage each other on every run.
                  </p>
                </div>
              </div>
              
              <div className="bg-orange-700 rounded-lg p-4 flex items-start max-w-xs">
                <TrendingUp size={24} className="text-orange-300 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white mb-1">Progress Tracking</h3>
                  <p className="text-orange-100 text-sm">
                    Monitor your improvements and celebrate milestones together.
                  </p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://www.strava.com/clubs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-100 transition-colors"
            >
              Join StrideTribe on Strava
            </a>
          </div>
          
          <div className="relative bg-white rounded-lg p-6 shadow-xl">
            <div className="absolute -top-3 -left-3 bg-orange-700 text-white px-4 py-2 text-sm font-bold rounded">
              LEADERBOARD
            </div>
            
            {/* Strava-like leaderboard */}
            <div className="mt-4">
              <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-700">This Week's Top Runners</span>
                <span className="text-sm text-gray-500">Distance (km)</span>
              </div>
              
              {[
                { name: 'Arjun S.', distance: '42.5', avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150' },
                { name: 'Meera P.', distance: '38.7', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150' },
                { name: 'Raj M.', distance: '35.2', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150' },
                { name: 'Priya D.', distance: '33.8', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150' },
                { name: 'Vikram J.', distance: '31.4', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150' },
              ].map((runner, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="relative mr-3">
                      <span className="absolute -top-1 -left-1 w-5 h-5 bg-orange-600 text-white text-xs flex items-center justify-center rounded-full">{index + 1}</span>
                      <img 
                        src={runner.avatar} 
                        alt={runner.name} 
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                    <span className="font-medium">{runner.name}</span>
                  </div>
                  <span className="font-bold text-gray-800">{runner.distance}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <a 
                href="https://www.strava.com/clubs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                View Full Leaderboard →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StravaIntegration;