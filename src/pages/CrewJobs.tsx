import { Link } from 'react-router-dom';
import { Briefcase, Award, Globe, Zap, Users, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

const crewPositions = [
  {
    title: 'Yacht Captain/Skipper',
    salary: '2500 - 5000 EUR/month + benefits',
    requirements: 'RYA Captain 200/1000, navigation expertise, crew management',
    lifestyle: 'Adventure-driven, leadership role, year-round employment',
  },
  {
    title: 'Deckhand/Crew',
    salary: '1500 - 2500 EUR/month + tips',
    requirements: 'RYA Day Skipper or equivalent, physical fitness, teamwork',
    lifestyle: 'Active, learning opportunities, seasonal or permanent',
  },
  {
    title: 'Chef/Cook',
    salary: '2000 - 4000 EUR/month',
    requirements: 'Culinary training, dietary knowledge, galley experience',
    lifestyle: 'Creative, high expectations, VIP guest interaction',
  },
  {
    title: 'Stewardess/Steward',
    salary: '1800 - 3500 EUR/month + tips',
    requirements: 'Service excellence, hospitality background, attention to detail',
    lifestyle: 'Guest-focused, professional service, seasonal peaks',
  },
  {
    title: 'Engineer/Mechanic',
    salary: '2500 - 4500 EUR/month',
    requirements: 'Marine mechanical/electrical certification, problem-solving',
    lifestyle: 'Technical expertise valued, maintenance-focused',
  },
  {
    title: 'Yacht Manager',
    salary: '3000 - 6000 EUR/month',
    requirements: 'Ownership experience, administrative skills, budget management',
    lifestyle: 'Leadership, year-round responsibility, high authority',
  },
];

const certifications = [
  {
    cert: 'ICC (International Certificate of Competence)',
    duration: '2-3 days',
    cost: '150 - 300 EUR',
    requirement: 'Bareboat charter legal requirement in EU waters',
  },
  {
    cert: 'RYA Day Skipper',
    duration: '5 days',
    cost: '300 - 500 EUR',
    requirement: 'Basic skipper certification, coastal navigation',
  },
  {
    cert: 'RYA Coastal Skipper',
    duration: '5 days',
    cost: '400 - 600 EUR',
    requirement: 'Advanced navigation, crew management',
  },
  {
    cert: 'RYA Yacht Master',
    duration: '7-10 days',
    cost: '600 - 1000 EUR',
    requirement: 'Professional yacht command certification',
  },
  {
    cert: 'STCW Basic Safety Training',
    duration: '1 day',
    cost: '50 - 100 EUR',
    requirement: 'Required for professional yacht crew',
  },
  {
    cert: 'Yachtmaster 200/1000',
    duration: '12-14 days',
    cost: '1200 - 1800 EUR',
    requirement: 'Superyacht captain professional standard',
  },
];

const crewBenefits = [
  { benefit: 'Global Travel Opportunities', icon: Globe },
  { benefit: 'Competitive Salaries + Tips', icon: Award },
  { benefit: 'Professional Development', icon: Briefcase },
  { benefit: 'Career Advancement', icon: Zap },
  { benefit: 'Community & Camaraderie', icon: Users },
];

const yachtJobBoards = [
  {
    platform: 'Superyacht.com',
    listings: '5000+ active jobs',
    audience: 'Professional luxury yacht crew',
  },
  {
    platform: 'YachtWorld Jobs',
    listings: '2000+ positions',
    audience: 'Charter and private crew',
  },
  {
    platform: 'Crew Seekers',
    listings: '3000+ Mediterranean jobs',
    audience: 'Seasonal and permanent crew',
  },
  {
    platform: 'Boat & Yacht Jobs',
    listings: '1500+ listings',
    audience: 'All experience levels',
  },
];

const crewTrainingPaths = [
  {
    track: 'Beginner to Deckhand',
    timeline: '6-12 months',
    steps: ['Learn basic sailing skills', 'Get ICC or Day Skipper cert', 'Work as deckhand on charter boats', 'Build Mediterranean experience'],
  },
  {
    track: 'Professional Captain Track',
    timeline: '2-3 years',
    steps: ['Complete RYA Yachtmaster training', 'Gain command experience', 'Pursue superyacht captain certification', 'Lead professional crew'],
  },
  {
    track: 'Hospitality Crew Specialist',
    timeline: '1-2 years',
    steps: ['Work hotel/restaurant experience', 'Get STCW certification', 'Join charter company crew', 'Advance to senior positions'],
  },
  {
    track: 'Technical/Engineering Track',
    timeline: '2-4 years',
    steps: ['Marine mechanics training', 'Engine room certifications', 'Superyacht technical roles', 'Senior engineer positions'],
  },
];

export default function CrewJobs() {
  const { t } = useTranslation('pages');

  return (
    <>
      <SEOHead
        title={t('crewJobs.seoTitle')}
        description={t('crewJobs.seoDesc')}
        canonical="https://boatingmallorca.ai/crew-jobs"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'JobPosting',
          hiringOrganization: { '@type': 'Organization', name: 'Boating Mallorca' },
          jobLocation: { '@type': 'Place', name: 'Mallorca, Spain' },
          description: 'Explore yacht crew and maritime job opportunities in Mallorca.',
        }}
      />

      <PageHero
        title={t('crewJobs.heroTitle')}
        subtitle={t('crewJobs.heroSubtitle')}
        image="https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Professional yacht crew working on a luxury vessel"
        ctaText={t('crewJobs.heroCta')}
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">Why Work in Yacht Crew?</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Yacht crew positions offer more than just employment—they're a lifestyle. Travel the world, develop specialized skills, earn competitive salaries, and join a tight-knit professional community.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {crewBenefits.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.benefit} className="card p-6 text-center">
                  <IconComponent className="w-8 h-8 text-ocean-500 mx-auto mb-3" />
                  <p className="font-heading font-bold text-navy-800">{item.benefit}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">Crew Positions & Compensation</h2>
          <div className="space-y-4">
            {crewPositions.map((position) => (
              <article key={position.title} className="card p-6 border-l-4 border-ocean-500">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-4">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-navy-800">{position.title}</h3>
                    <p className="text-ocean-600 font-semibold text-sm mt-1">{position.salary}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-navy-700 mb-1">Requirements</p>
                    <p className="text-gray-600">{position.requirements}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-700 mb-1">Lifestyle</p>
                    <p className="text-gray-600">{position.lifestyle}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">Essential Certifications</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Most yacht crew positions require specific certifications. Here's a quick guide to the most relevant credentials for Mediterranean boating careers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.cert} className="card p-6">
                <h3 className="font-heading font-bold text-lg text-navy-800 mb-4">{cert.cert}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Duration</p>
                    <p className="text-gray-600">{cert.duration}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Cost</p>
                    <p className="text-gray-600">{cert.cost}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Purpose</p>
                    <p className="text-gray-600">{cert.requirement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ocean-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">Career Development Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {crewTrainingPaths.map((path) => (
              <article key={path.track} className="card p-6 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-lg text-navy-800">{path.track}</h3>
                  <span className="text-sm font-semibold text-ocean-600">{path.timeline}</span>
                </div>
                <ol className="space-y-3">
                  {path.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="w-6 h-6 rounded-full bg-ocean-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-gray-700 pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">Top Job Boards & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {yachtJobBoards.map((board) => (
              <div key={board.platform} className="card p-6 border-t-4 border-ocean-500">
                <h3 className="font-heading font-bold text-lg text-navy-800 mb-3">{board.platform}</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-semibold text-navy-700 mb-1">Active Listings</p>
                    <p className="text-gray-600">{board.listings}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-700 mb-1">Target Audience</p>
                    <p className="text-gray-600">{board.audience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-3">Ready to Launch Your Crew Career?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Join our professional network and access exclusive job opportunities, certification partnerships, and crew matching services. Get connected with yacht operators and charter companies in Mallorca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-matched" className="btn-primary inline-flex items-center gap-2">
                Browse Job Opportunities <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/blog" className="btn-secondary">
                Read Crew Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
