import { useMemo, useState, type FormEvent } from 'react';
import { HeartPulse, Leaf, Stethoscope, Check, ArrowUpRight } from 'lucide-react';
import { content, type Lang } from './content';
import { Reveal } from './Reveal';

/**
 * Where the contact form posts.
 *
 * Leave empty to fall back to opening the visitor's mail client with the
 * request pre-filled — that way no lead is ever silently dropped on a site
 * with no backend. To wire up real delivery (email + WhatsApp/Telegram
 * notification, per the brief), set this to a Formspree / Make / Zapier
 * endpoint that accepts a JSON POST.
 */
const FORM_ENDPOINT = '';
const CONTACT_EMAIL = 'hello@medtravelexperts.com';

const SERVICE_ICONS = {
  medical: Stethoscope,
  wellness: Leaf,
  rehab: HeartPulse,
} as const;

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="text-brand-300 text-xs font-medium tracking-[0.18em] uppercase">
      {children}
    </span>
  );
}

function Shell({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-20 px-5 py-20 sm:px-8 md:px-16 md:py-28 lg:px-20 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function Sections({ lang }: { lang: Lang }) {
  const t = content[lang];

  return (
    <main className="bg-ink-900 relative overflow-hidden">
      {/* Ambient brand glow behind the whole lower page */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(60rem 40rem at 15% 0%, rgba(28,173,228,0.16), transparent 60%), radial-gradient(50rem 35rem at 90% 55%, rgba(211,30,30,0.09), transparent 60%)',
        }}
      />

      <div className="relative">
        <About lang={lang} />
        <Services lang={lang} />
        <Process lang={lang} />
        <Destinations lang={lang} />
        <Contact lang={lang} />
        <Footer lang={lang} />
      </div>

      <span className="sr-only">{t.footer.tagline}</span>
    </main>
  );
}

/* ------------------------------------------------------------------ About */

function About({ lang }: { lang: Lang }) {
  const t = content[lang].about;

  return (
    <Shell id="about">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2
            className="mt-4 text-3xl leading-[1.1] font-normal text-white sm:text-4xl md:text-5xl"
            style={{ letterSpacing: '-0.04em' }}
          >
            {t.heading}
          </h2>
          <p className="mt-6 text-base font-light text-white/70 md:text-lg">{t.positioning}</p>
          <p className="mt-4 text-sm font-light text-white/50 md:text-base">{t.body}</p>
        </Reveal>

        <div className="flex flex-col gap-4">
          {t.team.map((member, i) => (
            <Reveal key={member.name} delay={i * 90}>
              <article className="liquid-glass liquid-glass-solid rounded-2xl p-5 sm:p-6">
                <h3 className="text-base font-medium text-white">{member.name}</h3>
                <p className="text-brand-300 mt-1 text-xs font-medium tracking-wide">
                  {member.role}
                </p>
                <p className="mt-3 text-sm font-light text-white/60">{member.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Shell>
  );
}

/* --------------------------------------------------------------- Services */

function Services({ lang }: { lang: Lang }) {
  const t = content[lang].services;

  return (
    <Shell id="services">
      <Reveal className="max-w-2xl">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2
          className="mt-4 text-3xl leading-[1.1] font-normal text-white sm:text-4xl md:text-5xl"
          style={{ letterSpacing: '-0.04em' }}
        >
          {t.heading}
        </h2>
        <p className="mt-5 text-sm font-light text-white/60 md:text-base">{t.intro}</p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {t.items.map((item, i) => {
          const Icon = SERVICE_ICONS[item.key as keyof typeof SERVICE_ICONS];
          return (
            <Reveal key={item.key} delay={i * 110}>
              <article className="liquid-glass liquid-glass-solid group h-full rounded-3xl p-6 transition duration-300 hover:bg-white/[0.07] sm:p-8">
                <div className="liquid-glass mb-6 flex h-12 w-12 items-center justify-center rounded-2xl">
                  <Icon className="text-brand-300 h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-white md:text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm font-light text-white/60">{item.body}</p>
                <ul className="mt-6 space-y-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <Check
                        className="text-brand-500 mt-0.5 h-4 w-4 shrink-0"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      <span className="text-sm font-light text-white/75">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Shell>
  );
}

/* ---------------------------------------------------------------- Process */

function Process({ lang }: { lang: Lang }) {
  const t = content[lang].process;

  return (
    <Shell id="process">
      <Reveal className="max-w-2xl">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2
          className="mt-4 text-3xl leading-[1.1] font-normal text-white sm:text-4xl md:text-5xl"
          style={{ letterSpacing: '-0.04em' }}
        >
          {t.heading}
        </h2>
      </Reveal>

      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 90}>
            <div className="liquid-glass liquid-glass-solid h-full rounded-2xl p-6">
              <span className="text-brand-500/70 text-3xl font-light tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-base font-medium text-white">{step.title}</h3>
              <p className="mt-2 text-sm font-light text-white/60">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={120}>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="text-xs font-light tracking-wide text-white/40 uppercase">
            {t.accreditationsLabel}
          </span>
          {t.accreditations.map((a) => (
            <span key={a} className="text-sm font-medium text-white/55">
              {a}
            </span>
          ))}
        </div>
      </Reveal>
    </Shell>
  );
}

/* ----------------------------------------------------------- Destinations */

function Destinations({ lang }: { lang: Lang }) {
  const t = content[lang].destinations;
  const [filter, setFilter] = useState<'all' | 'medical' | 'wellness' | 'rehab'>('all');

  const filters = useMemo(
    () =>
      [
        { key: 'all' as const, label: t.filters.all },
        { key: 'medical' as const, label: t.filters.medical },
        { key: 'wellness' as const, label: t.filters.wellness },
        { key: 'rehab' as const, label: t.filters.rehab },
      ],
    [t],
  );

  const visible = t.items.filter((item) => filter === 'all' || item.tags.includes(filter));

  return (
    <Shell id="destinations">
      <Reveal className="max-w-2xl">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2
          className="mt-4 text-3xl leading-[1.1] font-normal text-white sm:text-4xl md:text-5xl"
          style={{ letterSpacing: '-0.04em' }}
        >
          {t.heading}
        </h2>
        <p className="mt-5 text-sm font-light text-white/60 md:text-base">{t.intro}</p>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={`liquid-glass rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                filter === f.key ? 'bg-white/15 text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, i) => (
          <Reveal key={item.country} delay={Math.min(i, 6) * 70}>
            <article className="liquid-glass liquid-glass-solid h-full rounded-2xl p-5 transition duration-300 hover:bg-white/[0.07] sm:p-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl leading-none" aria-hidden="true">
                  {item.flag}
                </span>
                <h3 className="text-lg font-medium text-white">{item.country}</h3>
              </div>
              <p className="mt-3 text-sm font-light text-white/60">{item.focus}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <p className="mt-8 max-w-3xl text-sm font-light text-white/45">{t.more}</p>
      </Reveal>
    </Shell>
  );
}

/* ---------------------------------------------------------------- Contact */

type Status = 'idle' | 'sending' | 'sent' | 'error';

function Contact({ lang }: { lang: Lang }) {
  const t = content[lang].contact;
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    contact: '',
    interest: '',
    message: '',
  });

  const update = (field: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    const payload = {
      ...form,
      interest: form.interest || t.interestOptions[3],
      language: lang,
    };

    if (!FORM_ENDPOINT) {
      // No backend configured yet — hand the request to the visitor's mail
      // client so the lead still reaches the team.
      const body = [
        `${t.name}: ${payload.name}`,
        `${t.contactField}: ${payload.contact}`,
        `${t.interest}: ${payload.interest}`,
        '',
        payload.message,
      ].join('\n');
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        `Website request — ${payload.name}`,
      )}&body=${encodeURIComponent(body)}`;
      setStatus('sent');
      return;
    }

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus('sent');
      setForm({ name: '', contact: '', interest: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  const fieldClass =
    'w-full rounded-xl bg-white/[0.04] px-4 py-3 text-sm font-light text-white placeholder-white/30 outline-none ring-1 ring-white/10 transition duration-300 focus:ring-brand-500/60';

  return (
    <Shell id="contact">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <Reveal>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2
            className="mt-4 text-3xl leading-[1.1] font-normal text-white sm:text-4xl md:text-5xl"
            style={{ letterSpacing: '-0.04em' }}
          >
            {t.heading}
          </h2>
          <p className="mt-5 text-sm font-light text-white/60 md:text-base">{t.intro}</p>
          <p className="mt-8 max-w-md text-sm font-light text-white/40">{t.privacy}</p>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="liquid-glass liquid-glass-solid rounded-3xl p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-xs font-medium tracking-wide text-white/50">
                  {t.name}
                </span>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name')(e.target.value)}
                  className={fieldClass}
                  autoComplete="name"
                />
              </label>

              <label className="block sm:col-span-1">
                <span className="mb-2 block text-xs font-medium tracking-wide text-white/50">
                  {t.contactField}
                </span>
                <input
                  required
                  type="text"
                  value={form.contact}
                  onChange={(e) => update('contact')(e.target.value)}
                  placeholder={t.contactPlaceholder}
                  className={fieldClass}
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-xs font-medium tracking-wide text-white/50">
                  {t.interest}
                </span>
                <select
                  required
                  value={form.interest}
                  onChange={(e) => update('interest')(e.target.value)}
                  className={fieldClass}
                >
                  <option value="" disabled>
                    —
                  </option>
                  {t.interestOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-xs font-medium tracking-wide text-white/50">
                  {t.message}
                </span>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => update('message')(e.target.value)}
                  className={`${fieldClass} resize-none`}
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="liquid-glass mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:bg-white/10 disabled:opacity-60"
            >
              {status === 'sending' ? t.sending : t.submit}
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            </button>

            <p aria-live="polite" className="mt-4 min-h-5 text-sm font-light">
              {status === 'sent' && <span className="text-brand-300">{t.success}</span>}
              {status === 'error' && <span className="text-accent-500">{t.error}</span>}
            </p>
          </form>
        </Reveal>
      </div>
    </Shell>
  );
}

/* ----------------------------------------------------------------- Footer */

function Footer({ lang }: { lang: Lang }) {
  const t = content[lang];

  return (
    <footer className="relative border-t border-white/10 px-5 py-12 sm:px-8 md:px-16 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <img src="/logo.png" alt="MedTravel Experts" className="h-9 w-auto" />
          <p className="text-sm font-light text-white/50">{t.footer.tagline}</p>
        </div>

        <div className="mt-10 space-y-3 border-t border-white/10 pt-8">
          {t.footer.disclaimers.map((line) => (
            <p key={line} className="max-w-4xl text-xs leading-relaxed font-light text-white/35">
              {line}
            </p>
          ))}
        </div>

        <p className="mt-8 text-xs font-light text-white/30">
          © {new Date().getFullYear()} MedTravel Experts. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
