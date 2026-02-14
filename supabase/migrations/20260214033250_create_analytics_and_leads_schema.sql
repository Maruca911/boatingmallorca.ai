/*
  # Analytics, Leads, and Applications Schema

  1. New Tables
    - `cta_clicks` - Track all call-to-action interactions
    - `lead_captures` - Newsletter signups and form submissions
    - `rib_club_applications` - RIB Club membership applications
    - `service_inquiries` - Inquiries from service-specific pages
    - `page_analytics` - Page visit and engagement tracking

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated service role access
    - Logs are write-only from frontend (unauthenticated)

  3. Features
    - Timestamps for all events
    - UTM parameter tracking
    - Service-specific categorization
    - User journey tracking
*/

-- CTA clicks tracking
CREATE TABLE IF NOT EXISTS cta_clicks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_url text NOT NULL,
  cta_type text NOT NULL, -- 'get_matched', 'service_link', 'secondary', 'float_button', etc
  service_category text, -- 'rentals', 'buy', 'sell', 'crew', 'rib_club', etc
  utm_source text,
  utm_medium text,
  utm_campaign text,
  user_agent text,
  ip_address text,
  timestamp timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Lead captures (newsletter, forms)
CREATE TABLE IF NOT EXISTS lead_captures (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  first_name text,
  last_name text,
  phone text,
  service_interest text, -- comma-separated: 'rentals,buy,crew'
  source_page text,
  lead_type text NOT NULL, -- 'newsletter', 'get_matched', 'inquiry'
  utm_source text,
  utm_medium text,
  utm_campaign text,
  user_agent text,
  timestamp timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- RIB Club applications
CREATE TABLE IF NOT EXISTS rib_club_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  country text,
  experience_level text NOT NULL, -- 'beginner', 'intermediate', 'experienced'
  owns_rib boolean DEFAULT false,
  rib_model text,
  rib_year integer,
  membership_interest text NOT NULL, -- 'simulated_ownership', 'enhanced_ownership', 'both'
  monthly_budget integer,
  additional_info text,
  status text DEFAULT 'pending', -- 'pending', 'reviewed', 'approved', 'rejected'
  utm_source text,
  timestamp timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Service-specific inquiries
CREATE TABLE IF NOT EXISTS service_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_type text NOT NULL, -- 'rentals', 'tours', 'mooring', 'events', 'buy', 'sell', 'crew'
  email text NOT NULL,
  name text,
  boat_size_interest text, -- for buy/rent
  charter_type_interest text, -- for charters
  dates_interested text,
  group_size integer,
  budget_range text,
  additional_requirements text,
  utm_source text,
  timestamp timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Page analytics
CREATE TABLE IF NOT EXISTS page_analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_url text NOT NULL,
  page_name text, -- 'home', 'buy_yacht', 'sell_yacht', etc
  visitor_count integer DEFAULT 1,
  unique_visitors integer DEFAULT 1,
  session_duration_seconds integer,
  bounce_rate real,
  conversion_count integer DEFAULT 0,
  cta_clicks_count integer DEFAULT 0,
  utm_source text,
  timestamp date DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE cta_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_captures ENABLE ROW LEVEL SECURITY;
ALTER TABLE rib_club_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_analytics ENABLE ROW LEVEL SECURITY;

-- Policies for cta_clicks (anyone can insert, only service role can read)
CREATE POLICY "Anyone can log CTA clicks"
  ON cta_clicks
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Service role can read all clicks"
  ON cta_clicks
  FOR SELECT
  TO service_role
  USING (true);

-- Policies for lead_captures (anyone can insert, only service role can read)
CREATE POLICY "Anyone can submit leads"
  ON lead_captures
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Service role can read all leads"
  ON lead_captures
  FOR SELECT
  TO service_role
  USING (true);

-- Policies for rib_club_applications (anyone can insert, only service role can read/update)
CREATE POLICY "Anyone can submit RIB Club application"
  ON rib_club_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Service role can read all applications"
  ON rib_club_applications
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can update applications"
  ON rib_club_applications
  FOR UPDATE
  TO service_role
  USING (true);

-- Policies for service_inquiries (anyone can insert, only service role can read)
CREATE POLICY "Anyone can submit service inquiry"
  ON service_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Service role can read all inquiries"
  ON service_inquiries
  FOR SELECT
  TO service_role
  USING (true);

-- Policies for page_analytics (anyone can insert/update, service role can read)
CREATE POLICY "Anyone can log page analytics"
  ON page_analytics
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Service role can read analytics"
  ON page_analytics
  FOR SELECT
  TO service_role
  USING (true);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_cta_clicks_timestamp ON cta_clicks(timestamp);
CREATE INDEX IF NOT EXISTS idx_cta_clicks_service ON cta_clicks(service_category);
CREATE INDEX IF NOT EXISTS idx_lead_captures_timestamp ON lead_captures(timestamp);
CREATE INDEX IF NOT EXISTS idx_lead_captures_email ON lead_captures(email);
CREATE INDEX IF NOT EXISTS idx_rib_applications_timestamp ON rib_club_applications(timestamp);
CREATE INDEX IF NOT EXISTS idx_rib_applications_status ON rib_club_applications(status);
CREATE INDEX IF NOT EXISTS idx_service_inquiries_timestamp ON service_inquiries(timestamp);
CREATE INDEX IF NOT EXISTS idx_service_inquiries_type ON service_inquiries(service_type);
CREATE INDEX IF NOT EXISTS idx_page_analytics_url ON page_analytics(page_url);
CREATE INDEX IF NOT EXISTS idx_page_analytics_date ON page_analytics(timestamp);
