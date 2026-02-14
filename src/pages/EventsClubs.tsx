import { Calendar, Users, Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

const events = [
  { title: 'Trofeo Princesa Sofia', date: 'March - April 2026', location: 'Bay of Palma', type: 'Regatta', description: 'One of the world\'s most important Olympic-class sailing regattas. Top international sailors compete in Palma Bay. Free to watch from the waterfront.' },
  { title: 'Palma International Boat Show', date: 'April - May 2026', location: 'Moll Vell, Palma', type: 'Boat Show', description: 'The largest boat show in the Balearic Islands featuring hundreds of vessels, from dinghies to superyachts. Exhibitions, product launches, and networking.' },
  { title: 'PalmaVela', date: 'May 2026', location: 'Bay of Palma', type: 'Regatta', description: 'One of the Mediterranean\'s premier regattas with over 100 boats across multiple classes. Spectacular racing with the Palma cathedral as backdrop.' },
  { title: 'Superyacht Cup Palma', date: 'June 2026', location: 'Club de Mar, Palma', type: 'Regatta', description: 'Exclusive regatta bringing together the world\'s most impressive sailing superyachts. Three days of racing combined with a glamorous social program.' },
  { title: 'Copa del Rey Mapfre', date: 'August 2026', location: 'Real Club Nautico, Palma', type: 'Regatta', description: 'The crown jewel of Mallorca\'s racing calendar since 1982. Over 100 boats, week-long racing, live entertainment, and a festival atmosphere along the Paseo Maritimo.' },
  { title: 'Boat Party Season', date: 'May - September', location: 'Palma & Magaluf', type: 'Party', description: 'Weekly catamaran and yacht parties with DJs, drinks, swimming stops, and sunset views. The quintessential Mallorca summer experience on the water.' },
];

const waterSports = [
  { title: 'Jet Ski', description: 'Rental and guided tours at major beach areas. No license required for under 15HP. 30 min from 60 EUR, 1 hour from 100 EUR.', locations: 'Magaluf, Playa de Palma, Alcudia, Cala Millor' },
  { title: 'Parasailing', description: 'Aerial adventures with flights lasting 10-15 minutes at 50-100m height. Tandem and triple flights available. 40-70 EUR per flight.', locations: 'Magaluf, Playa de Palma, Alcudia, Can Picafort' },
  { title: 'Wakeboarding', description: 'Tow sports with lessons for beginners and equipment rental. 15-minute sessions from 30-50 EUR. Cable parks also available.', locations: 'Alcudia Bay, Palma Bay, Magaluf' },
  { title: 'Waterskiing', description: 'Equipment and boat hire with certified instructors. Sessions from 35-50 EUR for 15 minutes. Packages with tubing and wakeboarding.', locations: 'Alcudia Bay, Palma Bay, Magaluf' },
  { title: 'Flyboarding', description: 'Water-propelled jet boarding for an exhilarating experience. Beginner sessions include instruction. From 80 EUR for 20 minutes.', locations: 'Magaluf, Playa de Palma' },
  { title: 'Kayaking & SUP', description: 'Hourly rentals from 10-25 EUR. Guided tours through sea caves and along coastlines from 35-60 EUR. No experience needed for most tours.', locations: 'Island-wide at most beaches' },
];

const clubs = [
  { name: 'Real Club Nautico de Palma', established: 'Founded 1948', members: '3,000+', highlights: 'Mallorca\'s most prestigious yacht club. Hosts Copa del Rey and major international regattas. Excellent marina facilities, sailing school, restaurant, and active racing calendar.' },
  { name: 'Club de Mar Mallorca', established: 'Founded 1974', members: '2,000+', highlights: 'Premier marina and social club with 600+ berths. Full-service boatyard, chandlery, restaurants, swimming pool. Hosts cruising rallies and social events.' },
  { name: 'Club Nautico de Porto Cristo', established: 'Founded 1958', members: '800+', highlights: 'Charming east coast club with a strong community focus. Regular dinghy and keel boat racing, fishing competitions, and family events.' },
  { name: 'Club Nautico Cala Ratjada', established: 'Founded 1961', members: '500+', highlights: 'Active northeast coast club. Popular for fishing competitions, day sailing, and social events. Close to excellent fishing grounds.' },
];

export default function EventsClubs() {
  const { t } = useTranslation('pages');

  return (
    <>
      <SEOHead
        title={t('events.seoTitle')}
        description={t('events.seoDesc')}
        canonical="https://boatingmallorca.ai/events-clubs"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Boating Events Mallorca',
          description: 'Comprehensive guide to boating events, yacht clubs, water sports, and parties in Mallorca.',
        }}
      />

      <PageHero
        title={t('events.heroTitle')}
        subtitle={t('events.heroSubtitle')}
        image="https://images.pexels.com/photos/1295036/pexels-photo-1295036.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Sailing yachts racing in a regatta in Mallorca waters"
        ctaText={t('events.heroCta')}
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">2026 Events Calendar</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Mallorca hosts some of the Mediterranean's most prestigious sailing events alongside a lively party scene and regular club activities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
              <article key={event.title} className="card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                    event.type === 'Regatta' ? 'bg-ocean-100 text-ocean-700' :
                    event.type === 'Boat Show' ? 'bg-island-100 text-island-700' :
                    'bg-sand-200 text-sand-800'
                  }`}>{event.type}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-navy-800 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{event.description}</p>
                <div className="flex flex-wrap gap-4 text-xs text-gray-500 border-t border-gray-100 pt-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {event.date}</span>
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {event.location}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">Water Sports in Mallorca</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waterSports.map((sport) => (
              <article key={sport.title} className="card p-6">
                <h3 className="font-heading font-bold text-lg text-navy-800 mb-2">{sport.title}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{sport.description}</p>
                <p className="text-xs text-ocean-600 font-medium">{sport.locations}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">Yacht Clubs and Memberships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubs.map((club) => (
              <article key={club.name} className="card p-6">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="w-5 h-5 text-sand-600" />
                  <h3 className="font-heading font-bold text-lg text-navy-800">{club.name}</h3>
                </div>
                <div className="flex gap-4 text-xs text-gray-500 mb-3">
                  <span>{club.established}</span>
                  <span>{club.members} members</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{club.highlights}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

    </>
  );
}
