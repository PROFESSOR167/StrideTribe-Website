import React, { useState } from 'react';
import { galleryItems } from '../../data';
import { X } from 'lucide-react';
import { GalleryItem } from '../../types';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  
  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === filter);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Moments from Our Runs</h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            {['All', 'Photos', 'Videos'].map((option) => {
              const value = option.toLowerCase() === 'all' 
                ? 'all' 
                : option.toLowerCase() === 'photos' 
                  ? 'image' 
                  : 'video';
              
              return (
                <button
                  key={option}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === value 
                      ? 'bg-orange-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setFilter(value as 'all' | 'image' | 'video')}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
              onClick={() => setLightboxItem(item)}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="#full-gallery"
            className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition-colors"
          >
            View Full Gallery
          </a>
        </div>
      </div>
      
      {/* Lightbox */}
      {lightboxItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-6 right-6 text-white bg-black/50 p-2 rounded-full"
            onClick={() => setLightboxItem(null)}
          >
            <X size={24} />
          </button>
          
          <div className="max-w-4xl max-h-[80vh]">
            <img 
              src={lightboxItem.src} 
              alt={lightboxItem.alt} 
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;