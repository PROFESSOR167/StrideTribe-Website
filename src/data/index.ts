import { Run, Testimonial, GalleryItem, CommunityStats } from '../types';
import { Users, Calendar, MapPin, Award } from 'lucide-react';

export const upcomingRuns: Run[] = [
  {
    id: '1',
    title: 'Saturday Morning Social Run',
    date: '2025-06-14',
    time: '6:00 AM',
    location: 'Koregaon Park',
    description: 'An easy-paced social run through the beautiful streets of Koregaon Park. All levels welcome!',
    distance: '5K',
    difficulty: 'Beginner',
    coordinates: {
      lat: 18.5362,
      lng: 73.8902
    }
  },
  {
    id: '2',
    title: 'Hill Training Challenge',
    date: '2025-06-16',
    time: '5:30 AM',
    location: 'Vetal Hill',
    description: 'Build strength and endurance with this intermediate hill workout. Come prepared for a challenge!',
    distance: '7K',
    difficulty: 'Intermediate',
    coordinates: {
      lat: 18.5236,
      lng: 73.8019
    }
  },
  {
    id: '3',
    title: 'Midweek Run & Coffee',
    date: '2025-06-18',
    time: '6:00 AM',
    location: 'Kalyani Nagar',
    description: 'Midweek motivation with a community run followed by coffee at Blue Tokai.',
    distance: '6K',
    difficulty: 'Beginner',
    coordinates: {
      lat: 18.5541,
      lng: 73.9073
    }
  },
  {
    id: '4',
    title: 'Long Distance Sunday',
    date: '2025-06-21',
    time: '5:00 AM',
    location: 'University Circle',
    description: 'Building endurance with this longer weekend run. Water stations available.',
    distance: '15K',
    difficulty: 'Advanced',
    coordinates: {
      lat: 18.5285,
      lng: 73.8743
    }
  },
  {
    id: '5',
    title: 'Beginner Training Program',
    date: '2025-06-23',
    time: '6:30 AM',
    location: 'Aundh',
    description: 'Special session for new runners with coaching on form and breathing techniques.',
    distance: '3K',
    difficulty: 'Beginner',
    coordinates: {
      lat: 18.5642,
      lng: 73.8087
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ramesh K.',
    location: 'Kalyani Nagar',
    quote: 'StrideTribe made running joyful again. It\'s not just fitness—it\'s family.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: '2',
    name: 'Priya S.',
    location: 'Koregaon Park',
    quote: 'From barely running 1K to completing a half marathon in 6 months - all thanks to the amazing support from StrideTribe!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: '3',
    name: 'Ankit M.',
    location: 'Aundh',
    quote: 'The weekly runs have become the highlight of my week. Great routes, better people!',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: '4',
    name: 'Divya P.',
    location: 'Viman Nagar',
    quote: 'As someone new to Pune, StrideTribe helped me make friends and discover the city one run at a time.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    type: 'image',
    src: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Group of runners at sunrise',
  },
  {
    id: '2',
    type: 'image',
    src: 'https://images.pexels.com/photos/6456151/pexels-photo-6456151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Runner on city street',
  },
  {
    id: '3',
    type: 'image',
    src: 'https://images.pexels.com/photos/5038497/pexels-photo-5038497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Marathon finishers celebrating',
  },
  {
    id: '4',
    type: 'image',
    src: 'https://images.pexels.com/photos/3762873/pexels-photo-3762873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Trail running in nature',
  },
  {
    id: '5',
    type: 'image',
    src: 'https://images.pexels.com/photos/6456166/pexels-photo-6456166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Women runners group',
  },
  {
    id: '6',
    type: 'image',
    src: 'https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Urban running landscape',
  },
];

export const communityStats: CommunityStats[] = [
  {
    id: '1',
    label: 'Runners Joined',
    value: '100+',
    icon: 'Users',
  },
  {
    id: '2',
    label: 'Weekly Runs',
    value: '1-2',
    icon: 'Calendar',
  },
  {
    id: '3',
    label: 'Pune Locations',
    value: '8+',
    icon: 'MapPin',
  },
  {
    id: '4',
    label: 'Experience Level',
    value: 'All Welcome',
    icon: 'Award',
  },
];