export type Run = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  distance: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  coordinates: {
    lat: number;
    lng: number;
  };
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  quote: string;
  image: string;
};

export type GalleryItem = {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt: string;
  thumbnail?: string;
};

export type CommunityStats = {
  id: string;
  label: string;
  value: string;
  icon: string;
};