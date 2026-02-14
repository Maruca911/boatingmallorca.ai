import { Link } from 'react-router-dom';
import { ArrowRight, Fuel, ShoppingCart, MapPin, Droplets } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import PageHero from '../../components/PageHero';
import CTABanner from '../../components/CTABanner';

const fuelStations = [
  { marina: 'Club de Mar (Palma)', diesel: true, petrol: true, hours: '08:00-20:00 (summer), 08:00-18:00 (winter)', notes: 'Main fuel dock. Can accommodate large yachts. Card and cash.' },
  { marina: 'Marina Port de Mallorca', diesel: true, petrol: true, hours: '08:00-20:00 daily', notes: 'Central Palma location. Easy access from the bay.' },
  { marina: 'Port Adriano', diesel: true, petrol: true, hours: '08:00-21:00 (summer)', notes: 'High-flow pumps for superyachts. Premium pricing.' },
  { marina: 'Puerto Portals', diesel: true, petrol: true, hours: '09:00-19:00', notes: 'Fuel dock on the outer breakwater. Small queue in peak season.' },
  { marina: 'Port d\'Alcudia', diesel: true, petrol: true, hours: '08:00-19:00', notes: 'Last fuel before the north coast. Fill up here for circumnavigation.' },
  { marina: 'Port de Soller', diesel: true, petrol: false, hours: '09:00-18:00', notes: 'Diesel only. Small fuel dock inside the inner harbor.' },
  { marina: 'Port de Pollenca', diesel: true, petrol: true, hours: '08:30-18:30', notes: 'Key refueling point for Formentor and north coast trips.' },
  { marina: 'Colonia de Sant Jordi', diesel: true, petrol: true, hours: '08:00-18:00', notes: 'Essential stop before Cabrera crossing.' },
  { marina: 'Port de Cala Ratjada', diesel: true, petrol: false, hours: '09:00-17:00', notes: 'Small facility. Diesel only. Cash preferred.' },
  { marina: 'Porto Cristo', diesel: true, petrol: true, hours: '09:00-18:00', notes: 'East coast refueling. Close to the famous caves.' },
];

const markets = [
  { location: 'Palma (Mercat de l\'Olivar)', nearMarina: 'All Palma marinas (10-15 min walk)', days: 'Mon-Sat 07:00-14:30', specialty: 'The main food market. Fresh fish, meat, fruit, bread, olives, cheese. A provisioning one-stop shop.' },
  { location: 'Palma (Mercat de Santa Catalina)', nearMarina: 'All Palma marinas (10-20 min walk)', days: 'Mon-Sat 07:00-17:00', specialty: 'Trendy market with prepared foods, tapas, and specialty ingredients alongside fresh produce.' },
  { location: 'Alcudia (Tuesday market)', nearMarina: 'Port d\'Alcudia (5 min drive)', days: 'Tuesday and Sunday', specialty: 'Large outdoor market with local produce, artisan cheese, sobrassada, and wine.' },
  { location: 'Pollenca (Sunday market)', nearMarina: 'Port de Pollenca (5 min drive)', days: 'Sunday 08:00-13:00', specialty: 'Charming town square market with local produce and crafts.' },
  { location: 'Sineu (Wednesday market)', nearMarina: 'Central Mallorca (30 min drive)', days: 'Wednesday', specialty: 'The island\'s oldest market. Authentic agricultural produce and local specialties.' },
  { location: 'Santanyi (Saturday market)', nearMarina: 'Cala d\'Or / Cala Figuera (10 min drive)', days: 'Saturday and Wednesday', specialty: 'Excellent for southeast coast provisioning. Local honey, wine, and produce.' },
];

const deliveryServices = [
  { service: 'Yacht provisioning companies', description: 'Full-service provisioning delivered to your berth. They handle shopping, packing, and stowing. Ideal for charter preparation or crewed yachts.', cost: 'Groceries at cost + 20-30% service fee' },
  { service: 'Supermarket delivery', description: 'Major supermarkets (Eroski, Mercadona, Carrefour) offer home delivery that can be directed to the marina. Order online 24h in advance.', cost: 'Free delivery over 50 EUR typically' },
  { service: 'Ice delivery', description: 'Block and cube ice delivered to your berth. Essential in summer when marina ice machines cannot keep up with demand.', cost: '3-8 EUR per bag depending on quantity' },
  { service: 'Wine and spirits', description: 'Wine shops and bodegas can deliver cases to the marina. Ask your marina reception for local contacts.', cost: 'Free delivery on cases of 6+' },
];

const essentialsList = [
  { category: 'Water', items: ['Most marinas have dock-side water. Carry a 25m+ hose with universal fittings.', 'Water quality varies. Consider a water filter for the tank.', 'Fill tanks at every opportunity on multi-day trips.', 'Budget 20-30 liters per person per day for drinking, cooking, and washing.'] },
  { category: 'Food Staples', items: ['Long-life milk, olive oil, salt, sugar, coffee, tea', 'Pasta, rice, couscous -- base carbohydrates that store well', 'Canned tomatoes, beans, tuna -- for quick onboard meals', 'Fresh bread from port bakeries daily (most open by 07:00)'] },
  { category: 'Safety and Cleaning', items: ['Reef-safe sunscreen and after-sun', 'Seasickness remedies (tablets and patches)', 'Biodegradable cleaning products for dishes and surfaces', 'Trash bags -- pack out everything from remote anchorages'] },
  { category: 'Local Specialties', items: ['Sobrassada -- Mallorcan cured sausage, great on bread', 'Pa amb oli -- local bread with tomato, olive oil, and ham', 'Ensaimada -- spiral pastry, perfect for breakfast', 'Mallorcan wine from Binissalem or Pla i Llevant DOs'] },
];

export default function ProvisioningGuide() {
  return (
    <>
      <SEOHead
        title="Provisioning Your Boat in Mallorca - Fuel, Water, Food, Supplies | Boating Mallorca"
        description="Complete guide to provisioning a boat in Mallorca. Fuel stations, water points, local markets, grocery delivery, and what to stock for multi-day trips."
        canonical="https://boatingmallorca.ai/explore/guides/provisioning-guide"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Provisioning Your Boat in Mallorca',
          description: 'Where to find fuel, water, food, and supplies at every major marina in Mallorca.',
          publisher: { '@type': 'Organization', name: 'Boating Mallorca' },
        }}
      />

      <PageHero
        title="Provisioning Your Boat in Mallorca"
        subtitle="Where to find fuel, water, groceries, and supplies at every major port. Delivery services, local markets, and what to stock for multi-day voyages."
        image="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Fresh Mediterranean produce at a market near a Mallorca marina"
        ctaText="Plan Your Charter"
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">Fuel Stations at Marinas</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Fuel is available at most major marinas around the island. Diesel is universal; petrol
            (gasoline) is less common. Plan your refueling stops, especially for longer coastal passages
            where fuel docks may be spaced 30-50nm apart.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ocean-50">
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800">Marina</th>
                  <th className="text-center px-3 py-3 font-heading font-semibold text-navy-800">
                    <span className="flex items-center justify-center gap-1"><Fuel className="w-3.5 h-3.5" />Diesel</span>
                  </th>
                  <th className="text-center px-3 py-3 font-heading font-semibold text-navy-800">Petrol</th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800 hidden md:table-cell">Hours</th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800 hidden lg:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {fuelStations.map((f, i) => (
                  <tr key={f.marina} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 py-3 font-medium text-navy-700">{f.marina}</td>
                    <td className="px-3 py-3 text-center">{f.diesel ? <span className="text-island-500 font-bold">Yes</span> : <span className="text-gray-400">No</span>}</td>
                    <td className="px-3 py-3 text-center">{f.petrol ? <span className="text-island-500 font-bold">Yes</span> : <span className="text-gray-400">No</span>}</td>
                    <td className="px-3 py-3 text-gray-600 hidden md:table-cell">{f.hours}</td>
                    <td className="px-3 py-3 text-gray-600 hidden lg:table-cell">{f.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Markets Near Marinas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {markets.map((m) => (
              <article key={m.location} className="card p-5">
                <div className="flex items-start gap-2 mb-2">
                  <ShoppingCart className="w-4 h-4 text-ocean-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-navy-800">{m.location}</h3>
                    <span className="text-xs text-gray-500">{m.days}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{m.specialty}</p>
                <div className="flex items-center gap-1 text-xs text-ocean-600">
                  <MapPin className="w-3 h-3" />
                  <span>{m.nearMarina}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Delivery Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {deliveryServices.map((d) => (
              <div key={d.service} className="card p-5">
                <h3 className="font-heading font-semibold text-navy-800 mb-1">{d.service}</h3>
                <p className="text-sm text-gray-600 mb-2">{d.description}</p>
                <span className="text-xs font-medium text-ocean-600">{d.cost}</span>
              </div>
            ))}
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">What to Stock</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {essentialsList.map((cat) => (
              <div key={cat.category} className="card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Droplets className="w-5 h-5 text-ocean-500" />
                  <h3 className="font-heading font-bold text-lg text-navy-800">{cat.category}</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-ocean-300 before:rounded-full">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/explore/guides/boating-costs" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Boating Costs</h3>
              <p className="text-sm text-gray-600">Full budget breakdown including provisioning costs.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/explore/guides/dock-and-dine" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Dock & Dine</h3>
              <p className="text-sm text-gray-600">When you want to eat ashore instead of cooking aboard.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/explore/marinas" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Marinas & Ports</h3>
              <p className="text-sm text-gray-600">Detailed info on every marina around the island.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">View marinas <ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Planning a Multi-Day Charter?"
        subtitle="Our charter partners can arrange full provisioning before you step aboard. Tell us your group size and preferences."
        buttonText="Get Matched Free"
      />
    </>
  );
}
