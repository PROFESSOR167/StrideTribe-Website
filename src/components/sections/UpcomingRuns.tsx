import React, { useState } from 'react';
import { upcomingRuns } from '../../data';
import { MapPin, Calendar as CalendarIcon, Clock, MapPinned } from 'lucide-react';
import { Run } from '../../types';

const UpcomingRuns: React.FC = () => {
  const [selectedRun, setSelectedRun] = useState<Run | null>(null);

  return (
    <section id="upcoming-runs" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Join a Run Near You</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Google Maps (left column) */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-[500px] relative">
            <div className="absolute inset-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.92836674814!2d73.7929273757825!3d18.52461569348114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1651749892246!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pune Running Routes"
              ></iframe>
            </div>
            
            {/* Map overlays (pins) would be here if using a more interactive map solution */}
          </div>
          
          {/* Calendar/List (right column) */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Upcoming Events</h3>
              <div className="flex space-x-2">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm transition-colors">
                  Week
                </button>
                <button className="bg-orange-600 text-white px-3 py-1 rounded-md text-sm transition-colors">
                  Month
                </button>
              </div>
            </div>
            
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {upcomingRuns.map((run) => (
                <div 
                  key={run.id}
                  className={`border rounded-lg p-4 hover:border-orange-600 transition-colors cursor-pointer ${
                    selectedRun?.id === run.id ? 'border-orange-600 bg-orange-50' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedRun(run)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg">{run.title}</h4>
                      <div className="flex items-center text-gray-600 mt-1">
                        <CalendarIcon size={16} className="mr-1" />
                        <span className="text-sm">
                          {new Date(run.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600 mt-1">
                        <Clock size={16} className="mr-1" />
                        <span className="text-sm">{run.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mt-1">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{run.location}</span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      run.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      run.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {run.distance} • {run.difficulty}
                    </span>
                  </div>
                  
                  {selectedRun?.id === run.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-700 mb-4">{run.description}</p>
                      <a 
                        href="#signup"
                        className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-500 transition-colors"
                      >
                        Sign Up
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <a 
                href="#full-schedule"
                className="inline-block bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-black transition-colors"
              >
                See Full Run Schedule
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingRuns;