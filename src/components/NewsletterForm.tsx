import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function NewsletterForm() {
  const { t, i18n } = useTranslation('forms');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
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
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t('newsletter.placeholder')}
        required
        className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-400"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-3 py-2 bg-accent-500 rounded-lg hover:bg-accent-600 transition-colors disabled:opacity-50"
        aria-label={t('newsletter.subscribe')}
      >
        <Send className="w-4 h-4" />
      </button>
      {status === 'success' && <span className="absolute mt-10 text-xs text-island-300">{t('newsletter.success')}</span>}
    </form>
  );
}
