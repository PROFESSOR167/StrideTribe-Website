import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real implementation, you would submit to a backend
      setIsSubmitted(true);
    }
  };

  return (
    <section id="signup" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Never Miss a Run</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Newsletter signup */}
            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-4">Weekly Run Alerts</h3>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-500 transition-colors flex items-center justify-center"
                  >
                    <Send size={18} className="mr-2" />
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className="bg-green-900/30 text-green-400 p-4 rounded-lg">
                  <p className="font-medium">Thanks for subscribing!</p>
                  <p className="text-sm mt-2">Check your email for confirmation and upcoming run details.</p>
                </div>
              )}
              
              <p className="text-sm text-gray-400 mt-4">
                We'll only send information about upcoming runs and events. No spam, ever.
              </p>
            </div>
            
            {/* WhatsApp group */}
            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-4">Join Our Community Group</h3>
              
              <p className="text-gray-300 mb-6">
                Stay connected with our running community through WhatsApp. Get instant updates, route maps, and chat with fellow runners.
              </p>
              
              <a
                href="https://chat.whatsapp.com/example"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-500 transition-colors flex items-center justify-center"
              >
                <MessageCircle size={18} className="mr-2" />
                Join WhatsApp Group
              </a>
              
              <p className="text-sm text-gray-400 mt-4">
                Clicking will open WhatsApp to join our group directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;