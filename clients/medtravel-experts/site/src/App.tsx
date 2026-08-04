import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { content, type Lang } from './content';
import { Sections } from './Sections';

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260715_082433_69699cf8-444b-4484-93cc-053e57896dfd.mp4';

/** Placeholder client portraits in the social-proof badge. Swap for real photos. */
const AVATARS = [
  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
  'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
  'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
  'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100',
];

/** Nine dots stacked into a triangle, drawn with absolutely-positioned squares. */
const TRIANGLE_DOTS = [
  { x: 8.75, y: 2 },
  { x: 4.5, y: 8 },
  { x: 8.75, y: 8 },
  { x: 13, y: 8 },
  { x: 0.25, y: 14 },
  { x: 4.5, y: 14 },
  { x: 8.75, y: 14 },
  { x: 13, y: 14 },
  { x: 17.25, y: 14 },
];

function TriangleIcon() {
  return (
    <div className="relative mb-3 h-5 w-5" aria-hidden="true">
      {TRIANGLE_DOTS.map((dot, i) => (
        <span
          key={i}
          className="absolute bg-white/60"
          style={{ left: dot.x, top: dot.y, width: 2.5, height: 2.5 }}
        />
      ))}
    </div>
  );
}

function GridIcon() {
  return (
    <div className="mb-3 grid w-fit grid-cols-3 gap-[2px]" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, i) => (
        <span
          key={i}
          className={`h-[4px] w-[4px] rounded-[1px] ${i % 2 === 0 ? 'bg-white/60' : 'bg-white/0'}`}
        />
      ))}
    </div>
  );
}

function LangToggle({
  lang,
  setLang,
  className = '',
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  className?: string;
}) {
  return (
    <div
      className={`liquid-glass flex h-10 items-center rounded-full p-1 ${className}`}
      role="group"
      aria-label="Language"
    >
      {(['en', 'ru'] as Lang[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase transition duration-300 ${
            lang === code ? 'bg-white/15 text-white' : 'text-white/60 hover:text-white'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en';
    const saved = window.localStorage.getItem('mte-lang');
    if (saved === 'en' || saved === 'ru') return saved;
    return navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en';
  });

  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem('mte-lang', lang);
  }, [lang]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#services', label: t.nav.services },
    { href: '#destinations', label: t.nav.destinations },
  ];

  return (
    <>
      {/* ---------------------------------------------------------------
          Compact sticky nav, fades in once the hero has scrolled away
          --------------------------------------------------------------- */}
      <div
        className={`fixed inset-x-0 top-0 z-30 hidden transition-all duration-500 md:block ${
          scrolled ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        <div className="bg-ink-900/92 border-b border-white/10 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3 md:px-16 lg:px-20">
            <a href="#home" aria-label="MedTravel Experts">
              <img src="/logo.png" alt="MedTravel Experts" className="h-7 w-auto" />
            </a>
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/70 transition duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="liquid-glass rounded-full px-5 py-2 text-sm font-medium text-white transition duration-300 hover:bg-white/10"
              >
                {t.nav.contact}
              </a>
              <LangToggle lang={lang} setLang={setLang} />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------
          Hero
          --------------------------------------------------------------- */}
      <section id="home" className="relative flex h-screen min-h-[640px] flex-col overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO_SRC}
          poster="/hero-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        {/*
          Legibility scrim. The source clip is a pastel medical animation with a
          mean luma around 169/255 — white copy and the near-transparent glass
          would both disappear on it untreated. Two layers: a flat tint that
          brings the whole frame down to a workable base, and a gradient that
          adds extra weight behind the nav and the stats, and lands on the same
          ink as the sections below so the hero hands off without a seam.
        */}
        <div className="absolute inset-0 bg-[rgba(4,18,28,0.58)]" aria-hidden="true" />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(to bottom, rgba(4,18,28,0.55) 0%, rgba(4,18,28,0.10) 35%, rgba(4,18,28,0.25) 65%, rgba(4,18,28,0.92) 100%)',
          }}
        />

        {/* Navigation */}
        <nav className="relative z-20 flex items-center justify-between px-5 pt-6 sm:px-8 sm:pt-8 md:px-16 lg:px-20">
          <a href="#home" aria-label="MedTravel Experts" className="relative z-50">
            <img
              src="/logo.png"
              alt="MedTravel Experts"
              className="h-10 w-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:h-11 md:h-12"
            />
          </a>

          <div className="liquid-glass hidden items-center gap-8 rounded-full px-8 py-3 md:flex">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition duration-300 ${
                  i === 0 ? 'text-white' : 'text-white/70 hover:opacity-100 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <LangToggle lang={lang} setLang={setLang} />
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className="liquid-glass relative z-50 flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          >
            <Menu
              className={`absolute h-5 w-5 text-white/80 transition-all duration-300 ${
                menuOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
              }`}
              strokeWidth={1.5}
            />
            <X
              className={`absolute h-5 w-5 text-white/80 transition-all duration-300 ${
                menuOpen ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
              }`}
              strokeWidth={1.5}
            />
          </button>
        </nav>

        {/* Mobile menu overlay */}
        <div
          className={`fixed inset-0 z-10 bg-black/80 backdrop-blur-xl transition-opacity duration-500 ease-out md:hidden ${
            menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <div
            className={`flex h-full flex-col items-center justify-center gap-8 transition-transform duration-500 ease-out ${
              menuOpen ? 'translate-y-0' : '-translate-y-8'
            }`}
          >
            {[...navLinks, { href: '#contact', label: t.nav.contact }].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-medium text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col items-center gap-3">
              <LangToggle lang={lang} setLang={setLang} />
              <span className="text-sm font-light text-white/60">
                {lang === 'en' ? 'Language' : 'Язык'}
              </span>
            </div>
          </div>
        </div>

        {/* Hero content */}
        <div
          className={`relative z-10 flex flex-1 flex-col justify-between px-5 pb-8 sm:px-8 sm:pb-10 md:px-16 md:pb-14 lg:px-20 ${
            menuOpen ? 'pointer-events-none opacity-0 md:opacity-100' : 'opacity-100'
          } transition-opacity duration-300`}
        >
          <div className="mt-14 max-w-2xl sm:mt-20 md:mt-28">
            <div className="liquid-glass mb-5 inline-flex items-center gap-2.5 rounded-full px-3 py-1.5 sm:mb-6 sm:gap-3 sm:px-4 sm:py-2">
              <div className="flex -space-x-2">
                {AVATARS.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    loading="lazy"
                    className="h-5 w-5 rounded-full border-2 border-white/20 object-cover sm:h-6 sm:w-6"
                  />
                ))}
              </div>
              <span className="text-xs font-light text-white/80 sm:text-sm">{t.hero.badge}</span>
            </div>

            <h1
              className="text-4xl leading-[1.05] font-normal text-white sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ letterSpacing: '-0.05em' }}
            >
              {t.hero.headingLine1}
              <br />
              {t.hero.headingLine2}
            </h1>

            <p className="mt-4 text-sm font-light text-white/70 sm:mt-5 sm:text-base md:text-lg">
              {t.hero.subtitle}
            </p>

            <a
              href="#contact"
              className="liquid-glass mt-6 inline-block rounded-full px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10 sm:mt-8 sm:px-7 sm:py-3.5"
            >
              {t.hero.cta}
            </a>
          </div>

          {/* Bottom stats */}
          <div className="flex items-end gap-6 sm:gap-10 md:gap-16">
            {t.hero.stats.map((stat, i) => (
              <div key={stat.label}>
                {i === 0 ? <TriangleIcon /> : <GridIcon />}
                <div className="text-xl font-normal text-white sm:text-2xl md:text-3xl">
                  {stat.value}
                </div>
                <div className="text-xs font-light text-white/60 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Sections lang={lang} />
    </>
  );
}
