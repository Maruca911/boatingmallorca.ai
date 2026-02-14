export interface Guide {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  category: 'practical' | 'activities';
  icon: string;
}

export const guides: Guide[] = [
  {
    slug: 'boat-only-beaches',
    title: 'Boat-Accessible-Only Beaches and Coves',
    shortTitle: 'Boat-Only Beaches',
    description: 'Discover pristine beaches and secret coves around Mallorca that can only be reached by boat. GPS coordinates, anchoring tips, and seasonal crowd levels.',
    image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Secluded turquoise cove only accessible by boat in Mallorca',
    category: 'activities',
    icon: 'Palmtree',
  },
  {
    slug: 'boating-regulations',
    title: 'Mallorca Boating Regulations and License Guide',
    shortTitle: 'Regulations & Licenses',
    description: 'Complete guide to Spanish maritime law, boating licenses, anchoring restrictions, posidonia protection zones, and safety equipment requirements in Mallorca.',
    image: 'https://images.pexels.com/photos/1007836/pexels-photo-1007836.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Sailboat navigating near Mallorca coastline following maritime regulations',
    category: 'practical',
    icon: 'Scale',
  },
  {
    slug: 'weather-wind-guide',
    title: 'Weather and Wind Patterns for Sailing Mallorca',
    shortTitle: 'Weather & Wind Guide',
    description: 'Month-by-month weather guide covering Tramontana, Embat, Levante, and other key wind patterns. Sea state, temperature, and sailing condition forecasts.',
    image: 'https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Dramatic clouds and wind over Mediterranean sailing waters',
    category: 'practical',
    icon: 'Wind',
  },
  {
    slug: 'boating-costs',
    title: 'Complete Cost Guide: Boating in Mallorca',
    shortTitle: 'Boating Costs',
    description: 'Transparent breakdown of charter rates, rental prices, fuel costs, marina fees, provisioning budgets, and insurance for boating in Mallorca.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Marina with various boats and yachts in Mallorca harbor',
    category: 'practical',
    icon: 'Calculator',
  },
  {
    slug: 'dock-and-dine',
    title: 'Dock-and-Dine: Boat-Friendly Restaurants in Mallorca',
    shortTitle: 'Dock & Dine',
    description: 'Coast-by-coast guide to restaurants with moorings, docking facilities, or tender service. Menus, reservations, and approach info for boaters.',
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Waterfront restaurant terrace overlooking boats in a Mallorca harbor',
    category: 'activities',
    icon: 'UtensilsCrossed',
  },
  {
    slug: 'snorkeling-diving',
    title: 'Snorkeling and Diving Spots Accessible by Boat in Mallorca',
    shortTitle: 'Snorkeling & Diving',
    description: 'Best underwater sites around Mallorca reachable by boat. Marine life, visibility, anchoring depths, and boat type recommendations for each spot.',
    image: 'https://images.pexels.com/photos/3046638/pexels-photo-3046638.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Crystal clear underwater view perfect for snorkeling near Mallorca coast',
    category: 'activities',
    icon: 'Waves',
  },
  {
    slug: 'fishing-guide',
    title: 'Fishing from a Boat in Mallorca: Complete Guide',
    shortTitle: 'Fishing Guide',
    description: 'Fishing regulations, license requirements, best spots by species, seasonal calendar, and equipment guides for boat-based fishing around Mallorca.',
    image: 'https://images.pexels.com/photos/1630344/pexels-photo-1630344.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Fishing boat on calm Mediterranean waters near Mallorca at sunrise',
    category: 'activities',
    icon: 'Fish',
  },
  {
    slug: 'family-boating',
    title: 'Family Boating Guide: Mallorca with Kids',
    shortTitle: 'Family Boating',
    description: 'Calm-water routes, family-friendly boat types, safety tips by age, gentle anchorages, and onboard activities for boating with children in Mallorca.',
    image: 'https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Family enjoying a day out on a boat in calm Mallorca waters',
    category: 'activities',
    icon: 'Users',
  },
  {
    slug: 'winter-storage',
    title: 'Winter Storage and Winterization Guide for Mallorca',
    shortTitle: 'Winter Storage',
    description: 'Independent guide to yacht winter storage options, costs, winterization checklists, boatyard comparisons, and seasonal timelines in Mallorca.',
    image: 'https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Boats in dry dock storage at a Mallorca boatyard',
    category: 'practical',
    icon: 'Warehouse',
  },
  {
    slug: 'provisioning-guide',
    title: 'Provisioning Your Boat in Mallorca',
    shortTitle: 'Provisioning Guide',
    description: 'Where to find fuel, water, groceries, and supplies at every major marina. Delivery services, local markets near ports, and multi-day stocking tips.',
    image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Fresh Mediterranean produce at a market near a Mallorca marina',
    category: 'practical',
    icon: 'ShoppingBasket',
  },
];

export const practicalGuides = guides.filter((g) => g.category === 'practical');
export const activityGuides = guides.filter((g) => g.category === 'activities');
