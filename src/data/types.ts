export interface Destination {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  intro: string;
  highlights: string[];
  boating: {
    bestFor: string[];
    season: string;
    anchorages: string[];
  };
  nearbyMarinas: string[];
  tips: string[];
}

export interface Marina {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  location: string;
  intro: string;
  berths: string;
  maxLength: string;
  depth: string;
  facilities: string[];
  priceRange: string;
  highlights: string[];
  nearbyAttractions: string[];
}

export interface SailingRoute {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  intro: string;
  duration: string;
  distance: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  bestSeason: string;
  recommendedBoat: string;
  itinerary: { day: string; title: string; description: string }[];
  highlights: string[];
  tips: string[];
}

export interface DirectoryEntry {
  slug: string;
  category: 'brokers' | 'charter-companies' | 'brands' | 'marine-services' | 'yacht-clubs';
  categoryLabel: string;
  name: string;
  title: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: { heading: string; content: string }[];
  keyFacts: { label: string; value: string }[];
  relatedLinks: { label: string; path: string }[];
}
