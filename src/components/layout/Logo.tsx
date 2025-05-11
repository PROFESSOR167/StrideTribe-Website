import React from 'react';
import { Footprints } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <a href="#" className="flex items-center text-white hover:text-orange-500 transition-colors">
      <Footprints size={32} className="text-orange-600 mr-2" />
      <span className="font-bold text-xl tracking-tight">
        Stride<span className="text-orange-600">Tribe</span>
      </span>
    </a>
  );
};

export default Logo;