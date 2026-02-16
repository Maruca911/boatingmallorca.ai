import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Ship, MapPin, Users, Calendar, ArrowRight, ArrowLeft, CheckCircle, Loader2 } from 'lucide-react';
import { isBackendEnabled, supabase } from '../lib/supabase';

const BACKEND_DISABLED_NOTICE = 'Lead and newsletter submissions are temporarily unavailable while we complete backend setup. Please check back shortly.';

const serviceKeys = [
  { value: 'rental', labelKey: 'lead.serviceRental', icon: Ship },
  { value: 'charter', labelKey: 'lead.serviceCharter', icon: Ship },
  { value: 'tour', labelKey: 'lead.serviceTour', icon: MapPin },
  { value: 'excursion', labelKey: 'lead.serviceExcursion', icon: Calendar },
  { value: 'mooring', labelKey: 'lead.serviceMooring', icon: MapPin },
  { value: 'maintenance', labelKey: 'lead.serviceMaintenance', icon: Ship },
  { value: 'event', labelKey: 'lead.serviceEvents', icon: Users },
];

const boatTypeKeys = [
  'yacht', 'catamaran', 'speedBoat', 'sailboat', 'fishingBoat',
  'pontoonBoat', 'motorboat', 'jetSki', 'supKayak', 'noPreference',
];

const locationKeys = [
  'palma', 'alcudia', 'pollenca', 'calaRatjada',
  'calaDor', 'andratx', 'soller', 'magaluf', 'noPreference',
];

const budgetKeys = [
  'under100', '100to300', '300to500', '500to1000', 'over1000', 'flexible',
];

interface LeadFormProps {
  preselectedService?: string;
}

export default function LeadForm({ preselectedService }: LeadFormProps) {
  const { t, i18n } = useTranslation('forms');
  const [step, setStep] = useState(preselectedService ? 2 : 1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'disabled'>('idle');
  const [form, setForm] = useState({
    service_type: preselectedService || '',
    boat_type: '',
    location_preference: '',
    group_size: 2,
    budget_range: '',
    date_from: '',
    date_to: '',
    special_requests: '',
    name: '',
    email: '',
    phone: '',
    preferred_contact: 'email',
  });

  const update = (field: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isBackendEnabled || !supabase) {
      setStatus('disabled');
      return;
    }
    setStatus('loading');

    const nameParts = form.name.split(' ');
    const { error } = await supabase.from('lead_captures').insert({
      email: form.email,
      first_name: nameParts[0] || '',
      last_name: nameParts.slice(1).join(' ') || '',
      phone: form.phone || null,
      service_interest: form.service_type,
      source_page: typeof window !== 'undefined' ? window.location.pathname : '',
      lead_type: 'get_matched',
      language: i18n.language?.substring(0, 2) || 'en',
    });

    setStatus(error ? 'error' : 'success');
  };

  if (status === 'success') {
    const method = form.preferred_contact === 'whatsapp' ? 'WhatsApp' : t('lead.contactEmail');
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-island-500 mx-auto mb-4" />
        <h3 className="font-heading font-bold text-2xl text-navy-700 mb-2">{t('lead.successTitle')}</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          {t('lead.successMessage', { method })}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <fieldset disabled={!isBackendEnabled} className={!isBackendEnabled ? 'opacity-70' : ''}>
      <div className="flex items-center justify-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
              step >= s ? 'bg-ocean-500 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              {s}
            </div>
            {s < 3 && <div className={`w-8 sm:w-12 h-0.5 ${step > s ? 'bg-ocean-500' : 'bg-gray-200'}`} />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="animate-fade-in">
          <h3 className="font-heading font-bold text-lg mb-4 text-center">{t('lead.step1Title')}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {serviceKeys.map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() => { update('service_type', type.value); setStep(2); }}
                className={`p-4 rounded-xl border-2 text-center transition-all hover:border-ocean-400 hover:shadow-md ${
                  form.service_type === type.value ? 'border-ocean-500 bg-ocean-50' : 'border-gray-200'
                }`}
              >
                <type.icon className="w-6 h-6 mx-auto mb-2 text-ocean-500" />
                <span className="text-sm font-medium text-navy-700">{t(type.labelKey)}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="animate-fade-in space-y-5">
          <h3 className="font-heading font-bold text-lg mb-4 text-center">{t('lead.step2Title')}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-navy-600 mb-1">{t('lead.location')}</label>
              <select
                value={form.location_preference}
                onChange={(e) => update('location_preference', e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400"
              >
                <option value="">{t('lead.locationPlaceholder')}</option>
                {locationKeys.map((key) => <option key={key} value={t(`locations.${key}`)}>{t(`locations.${key}`)}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-600 mb-1">{t('lead.boatType')}</label>
              <select
                value={form.boat_type}
                onChange={(e) => update('boat_type', e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400"
              >
                <option value="">{t('lead.boatTypePlaceholder')}</option>
                {boatTypeKeys.map((key) => <option key={key} value={t(`boatTypes.${key}`)}>{t(`boatTypes.${key}`)}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-600 mb-1">{t('lead.groupSize')}</label>
              <input
                type="number"
                min={1}
                max={100}
                value={form.group_size}
                onChange={(e) => update('group_size', parseInt(e.target.value) || 1)}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-600 mb-1">{t('lead.budget')}</label>
              <select
                value={form.budget_range}
                onChange={(e) => update('budget_range', e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400"
              >
                <option value="">{t('lead.budgetPlaceholder')}</option>
                {budgetKeys.map((key) => <option key={key} value={t(`budgets.${key}`)}>{t(`budgets.${key}`)}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-600 mb-1">{t('lead.startDate')}</label>
              <input
                type="date"
                value={form.date_from}
                onChange={(e) => update('date_from', e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-600 mb-1">{t('lead.endDate')}</label>
              <input
                type="date"
                value={form.date_to}
                onChange={(e) => update('date_to', e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-navy-600 mb-1">{t('lead.specialRequests')}</label>
            <textarea
              value={form.special_requests}
              onChange={(e) => update('special_requests', e.target.value)}
              rows={3}
              placeholder={t('lead.specialRequestsPlaceholder')}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400 resize-none"
            />
          </div>

          <div className="flex justify-between pt-2">
            {!preselectedService && (
              <button type="button" onClick={() => setStep(1)} className="btn-secondary text-sm gap-1">
                <ArrowLeft className="w-4 h-4" /> {t('lead.back', { defaultValue: 'Back' })}
              </button>
            )}
            <button type="button" onClick={() => setStep(3)} className="btn-primary text-sm gap-1 ml-auto">
              {t('lead.continue', { defaultValue: 'Continue' })} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="animate-fade-in space-y-5">
          <h3 className="font-heading font-bold text-lg mb-4 text-center">{t('lead.step3Title')}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-navy-600 mb-1">{t('lead.fullName')} {t('lead.required')}</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                required
                placeholder={t('lead.namePlaceholder')}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-600 mb-1">{t('lead.email')} {t('lead.required')}</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                required
                placeholder={t('lead.emailPlaceholder')}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-600 mb-1">{t('lead.phone')}</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                placeholder={t('lead.phonePlaceholder')}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-600 mb-1">{t('lead.contactMethod')}</label>
              <div className="flex gap-3 mt-1">
                {(['email', 'whatsapp'] as const).map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => update('preferred_contact', method)}
                    className={`flex-1 py-2.5 rounded-lg border-2 text-sm font-medium capitalize transition-all ${
                      form.preferred_contact === method
                        ? 'border-ocean-500 bg-ocean-50 text-ocean-700'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {method === 'whatsapp' ? t('lead.contactWhatsapp') : t('lead.contactEmail')}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-2">
            <button type="button" onClick={() => setStep(2)} className="btn-secondary text-sm gap-1">
              <ArrowLeft className="w-4 h-4" /> {t('lead.back', { defaultValue: 'Back' })}
            </button>
            <button
              type="submit"
              disabled={status === 'loading' || !form.name || !form.email}
              className="btn-primary text-sm gap-1"
            >
              {status === 'loading' ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> {t('lead.submitting')}</>
              ) : (
                <>{t('lead.submitRequest')} <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </div>

          {status === 'error' && (
            <p className="text-center text-red-500 text-sm mt-2">{t('lead.errorMessage')}</p>
          )}
        </div>
      )}
      </fieldset>
      {(!isBackendEnabled || status === 'disabled') && (
        <p className="text-amber-700 text-sm mt-3">{BACKEND_DISABLED_NOTICE}</p>
      )}
    </form>
  );
}
