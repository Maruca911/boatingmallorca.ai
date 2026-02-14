/*
  # Create Boating Mallorca Schema

  1. New Tables
    - `leads` - Core lead capture for matching service
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text, optional)
      - `preferred_contact` (text - email/whatsapp)
      - `language` (text - en/de/es)
      - `service_type` (text - rental/charter/tour/mooring/event)
      - `location_preference` (text)
      - `boat_type` (text)
      - `group_size` (integer)
      - `budget_range` (text)
      - `date_from` (date)
      - `date_to` (date)
      - `special_requests` (text)
      - `status` (text - new/matched/contacted/converted)
      - `utm_source` (text)
      - `created_at` / `updated_at` (timestamptz)

    - `newsletter_subscribers` - Newsletter signups
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `language` (text)
      - `active` (boolean)
      - `subscribed_at` / `unsubscribed_at` (timestamptz)

    - `contact_messages` - General contact inquiries
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `subject` (text)
      - `message` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public insert policies for leads, newsletter, and contacts (anonymous users can submit)
    - No public read/update/delete policies (admin only via service role)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  email text NOT NULL,
  phone text DEFAULT '',
  preferred_contact text NOT NULL DEFAULT 'email',
  language text NOT NULL DEFAULT 'en',
  service_type text NOT NULL DEFAULT 'rental',
  location_preference text DEFAULT '',
  boat_type text DEFAULT '',
  group_size integer DEFAULT 2,
  budget_range text DEFAULT '',
  date_from date,
  date_to date,
  special_requests text DEFAULT '',
  status text NOT NULL DEFAULT 'new',
  utm_source text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  language text NOT NULL DEFAULT 'en',
  active boolean NOT NULL DEFAULT true,
  subscribed_at timestamptz DEFAULT now(),
  unsubscribed_at timestamptz
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  email text NOT NULL,
  subject text DEFAULT '',
  message text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact message"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_service_type ON leads(service_type);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
