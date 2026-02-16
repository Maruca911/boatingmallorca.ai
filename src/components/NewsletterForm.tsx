import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send } from 'lucide-react';
import { isBackendEnabled, supabase } from '../lib/supabase';

const BACKEND_DISABLED_NOTICE = 'Lead and newsletter submissions are temporarily unavailable while we complete backend setup. Please check back shortly.';

export default function NewsletterForm() {
  const { t, i18n } = useTranslation('forms');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'disabled'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    if (!isBackendEnabled || !supabase) {
      setStatus('disabled');
      return;
    }
    setStatus('loading');

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email, language: i18n.language?.substring(0, 2) || 'en' });

    if (error) {
      if (error.code === '23505') {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } else {
      setStatus('success');
      setEmail('');
    }

    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('newsletter.placeholder')}
          required
          disabled={!isBackendEnabled}
          className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-400"
        />
        <button
          type="submit"
          disabled={!isBackendEnabled || status === 'loading'}
          className="px-3 py-2 bg-accent-500 rounded-lg hover:bg-accent-600 transition-colors disabled:opacity-50"
          aria-label={t('newsletter.subscribe')}
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
      {status === 'success' && <span className="text-xs text-island-300 mt-2 block">{t('newsletter.success')}</span>}
      {(!isBackendEnabled || status === 'disabled') && (
        <span className="text-xs text-amber-300 mt-2 block">{BACKEND_DISABLED_NOTICE}</span>
      )}
    </div>
  );
}
