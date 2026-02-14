import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const RentalsCharters = lazy(() => import('./pages/RentalsCharters'));
const ToursExcursions = lazy(() => import('./pages/ToursExcursions'));
const MooringMaintenance = lazy(() => import('./pages/MooringMaintenance'));
const EventsClubs = lazy(() => import('./pages/EventsClubs'));
const BuyYacht = lazy(() => import('./pages/BuyYacht'));
const SellYacht = lazy(() => import('./pages/SellYacht'));
const CrewJobs = lazy(() => import('./pages/CrewJobs'));
const RIBClub = lazy(() => import('./pages/RIBClub'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const GetMatched = lazy(() => import('./pages/GetMatched'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Imprint = lazy(() => import('./pages/Imprint'));
const NotFound = lazy(() => import('./pages/NotFound'));

const Destinations = lazy(() => import('./pages/explore/Destinations'));
const DestinationDetail = lazy(() => import('./pages/explore/DestinationDetail'));
const Marinas = lazy(() => import('./pages/explore/Marinas'));
const MarinaDetail = lazy(() => import('./pages/explore/MarinaDetail'));
const SailingRoutes = lazy(() => import('./pages/explore/SailingRoutes'));
const RouteDetail = lazy(() => import('./pages/explore/RouteDetail'));

const Guides = lazy(() => import('./pages/guides/Guides'));
const BoatOnlyBeaches = lazy(() => import('./pages/guides/BoatOnlyBeaches'));
const BoatingRegulations = lazy(() => import('./pages/guides/BoatingRegulations'));
const WeatherWindGuide = lazy(() => import('./pages/guides/WeatherWindGuide'));
const BoatingCosts = lazy(() => import('./pages/guides/BoatingCosts'));
const DockAndDine = lazy(() => import('./pages/guides/DockAndDine'));
const SnorkelingDiving = lazy(() => import('./pages/guides/SnorkelingDiving'));
const FishingGuide = lazy(() => import('./pages/guides/FishingGuide'));
const FamilyBoating = lazy(() => import('./pages/guides/FamilyBoating'));
const WinterStorage = lazy(() => import('./pages/guides/WinterStorage'));
const ProvisioningGuide = lazy(() => import('./pages/guides/ProvisioningGuide'));

const Directory = lazy(() => import('./pages/directory/Directory'));
const CategoryListing = lazy(() => import('./pages/directory/CategoryListing'));
const DirectoryDetail = lazy(() => import('./pages/directory/DirectoryDetail'));

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-ocean-200 border-t-ocean-500 rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rentals-charters" element={<RentalsCharters />} />
            <Route path="/tours-excursions" element={<ToursExcursions />} />
            <Route path="/mooring-maintenance" element={<MooringMaintenance />} />
            <Route path="/events-clubs" element={<EventsClubs />} />
            <Route path="/buy-yacht" element={<BuyYacht />} />
            <Route path="/sell-yacht" element={<SellYacht />} />
            <Route path="/crew-jobs" element={<CrewJobs />} />
            <Route path="/rib-club" element={<RIBClub />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/get-matched" element={<GetMatched />} />

            <Route path="/explore/destinations" element={<Destinations />} />
            <Route path="/explore/destinations/:slug" element={<DestinationDetail />} />
            <Route path="/explore/marinas" element={<Marinas />} />
            <Route path="/explore/marinas/:slug" element={<MarinaDetail />} />
            <Route path="/explore/routes" element={<SailingRoutes />} />
            <Route path="/explore/routes/:slug" element={<RouteDetail />} />

            <Route path="/explore/guides" element={<Guides />} />
            <Route path="/explore/guides/boat-only-beaches" element={<BoatOnlyBeaches />} />
            <Route path="/explore/guides/boating-regulations" element={<BoatingRegulations />} />
            <Route path="/explore/guides/weather-wind-guide" element={<WeatherWindGuide />} />
            <Route path="/explore/guides/boating-costs" element={<BoatingCosts />} />
            <Route path="/explore/guides/dock-and-dine" element={<DockAndDine />} />
            <Route path="/explore/guides/snorkeling-diving" element={<SnorkelingDiving />} />
            <Route path="/explore/guides/fishing-guide" element={<FishingGuide />} />
            <Route path="/explore/guides/family-boating" element={<FamilyBoating />} />
            <Route path="/explore/guides/winter-storage" element={<WinterStorage />} />
            <Route path="/explore/guides/provisioning-guide" element={<ProvisioningGuide />} />

            <Route path="/directory" element={<Directory />} />
            <Route path="/directory/:category" element={<CategoryListing />} />
            <Route path="/directory/:category/:slug" element={<DirectoryDetail />} />

            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
