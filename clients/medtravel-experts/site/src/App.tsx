import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { content, type Lang } from './content';
import { HeroCanvas } from './HeroCanvas';
import { Sections } from './Sections';


/** Placeholder client portraits in the social-proof badge. Swap for real photos. */
const AVATARS = [
  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
  'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
  'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
  'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100',
];

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
          className="bg-brand-600 absolute"
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
          className={`h-[4px] w-[4px] rounded-[1px] ${i % 2 === 0 ? 'bg-brand-600' : 'bg-brand-600/0'}`}
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
          className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase transition duration-300 ${
            lang === code
              ? 'bg-brand-700 text-white shadow-sm'
              : 'text-navy-600 hover:text-navy-900'
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
  const [progress, setProgress] = useState(0);
  const trackRef = useRef<HTMLElement | null>(null);
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Drive the frame sequence from how far we are through the hero's track.
  useEffect(() => {
    let raf: number | null = null;
    const update = () => {
      raf = null;
      const track = trackRef.current;
      if (!track) return;
      const scrollable = track.offsetHeight - window.innerHeight;
      const travelled = Math.min(Math.max(-track.getBoundingClientRect().top, 0), scrollable);
      const p = scrollable > 0 ? travelled / scrollable : 0;
      setProgress(p);
      // The hero stays pinned for the whole track, so the compact nav must not
      // arrive until the hero's own nav has faded — otherwise both are on
      // screen at once.
      setScrolled(p > 0.9);
    };
    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  // Foreground holds, then releases the frame for the last stretch of the
  // scrub, handing off to the compact nav.
  const heroOpacity = progress < 0.62 ? 1 : Math.max(0, 1 - (progress - 0.62) / 0.26);

  const navLinks = [
    { href: '#services', label: t.nav.services },
    { href: '#process', label: t.nav.process },
    { href: '#destinations', label: t.nav.destinations },
  ];

  return (
    <>
      {/* Compact sticky nav, fades in as the hero's own nav fades out. Present
          at every breakpoint — on mobile it carries the only menu trigger once
          the hero foreground is gone. */}
      <div
        className={`fixed inset-x-0 top-0 z-30 transition-all duration-500 ${
          scrolled ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        <div className="border-navy-900/8 border-b bg-white/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 md:px-16 lg:px-20">
            <a href="#home" aria-label="MedTravel Experts">
              <img src="/logo.png" alt="MedTravel Experts" className="h-8 w-auto" />
            </a>

            <div className="hidden items-center gap-7 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-navy-600 hover:text-navy-900 text-sm font-medium transition duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-brand-700 hover:bg-navy-900 rounded-full px-5 py-2 text-sm font-semibold text-white transition duration-300"
              >
                {t.nav.contact}
              </a>
              <LangToggle lang={lang} setLang={setLang} />
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              className="border-navy-900/10 relative flex h-10 w-10 items-center justify-center rounded-full border bg-white md:hidden"
            >
              <Menu
                className={`text-navy-800 absolute h-5 w-5 transition-all duration-300 ${
                  menuOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                }`}
                strokeWidth={1.75}
              />
              <X
                className={`text-navy-800 absolute h-5 w-5 transition-all duration-300 ${
                  menuOpen ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
                }`}
                strokeWidth={1.75}
              />
            </button>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------
          Hero — pinned inside a tall track so scrolling scrubs the sequence
          --------------------------------------------------------------- */}
      <section id="home" ref={trackRef} className="relative h-[190vh] md:h-[240vh]">
        <div className="sticky top-0 flex h-screen min-h-[620px] flex-col overflow-hidden bg-white">
          <HeroCanvas progress={progress} />
          <div className="hero-scrim absolute inset-0" aria-hidden="true" />

          {/* Foreground — nav and copy fade out together near the end of the
              track so the compact nav can take over without overlapping. */}
          <div
            className="relative z-20 flex flex-1 flex-col transition-opacity duration-200"
            style={{
              opacity: heroOpacity,
              pointerEvents: heroOpacity < 0.05 ? 'none' : undefined,
            }}
          >
          {/* Navigation */}
          <nav className="flex items-center justify-between px-5 pt-6 sm:px-8 sm:pt-8 md:px-16 lg:px-20">
            <a href="#home" aria-label="MedTravel Experts" className="relative z-50">
              <img
                src="/logo.png"
                alt="MedTravel Experts"
                className="h-10 w-auto sm:h-11 md:h-12"
              />
            </a>

            <div className="liquid-glass hidden items-center gap-8 rounded-full px-8 py-3 md:flex">
              <a
                href="#home"
                className="text-navy-900 text-sm font-semibold transition duration-300"
              >
                {t.nav.home}
              </a>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-navy-600 hover:text-navy-900 text-sm font-medium transition duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <LangToggle lang={lang} setLang={setLang} />
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              className="liquid-glass relative z-50 flex h-10 w-10 items-center justify-center rounded-full md:hidden"
            >
              <Menu
                className={`text-navy-800 absolute h-5 w-5 transition-all duration-300 ${
                  menuOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                }`}
                strokeWidth={1.75}
              />
              <X
                className={`text-navy-800 absolute h-5 w-5 transition-all duration-300 ${
                  menuOpen ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
                }`}
                strokeWidth={1.75}
              />
            </button>
          </nav>

          {/* Hero content */}
          <div
            className={`flex flex-1 flex-col justify-between px-5 pb-8 transition-opacity duration-300 sm:px-8 sm:pb-10 md:px-16 md:pb-14 lg:px-20 ${
              menuOpen ? 'pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100' : ''
            }`}
          >
            <div className="mt-12 max-w-2xl sm:mt-16 md:mt-24">
              <div className="liquid-glass liquid-glass-strong mb-5 inline-flex items-center gap-2.5 rounded-full px-3 py-1.5 sm:mb-6 sm:gap-3 sm:px-4 sm:py-2">
                <div className="flex -space-x-2">
                  {AVATARS.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      loading="lazy"
                      className="h-5 w-5 rounded-full border-2 border-white object-cover sm:h-6 sm:w-6"
                    />
                  ))}
                </div>
                <span className="text-navy-800 text-xs font-medium sm:text-sm">{t.hero.badge}</span>
              </div>

              <h1
                className="text-navy-900 text-4xl leading-[1.05] font-semibold sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ letterSpacing: '-0.045em' }}
              >
                {t.hero.headingLine1}
                <br />
                <span className="text-brand-700">{t.hero.headingLine2}</span>
              </h1>

              <p className="text-navy-800 mt-4 text-sm font-medium sm:mt-5 sm:text-base md:text-lg">
                {t.hero.subtitle}
              </p>

              <a
                href="#contact"
                className="bg-brand-700 hover:bg-navy-900 shadow-brand-700/25 mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 sm:mt-8 sm:px-7 sm:py-3.5"
              >
                {t.hero.cta}
              </a>
            </div>

            {/* Bottom stats */}
            <div className="flex items-end gap-6 sm:gap-10 md:gap-16">
              {t.hero.stats.map((stat, i) => (
                <div key={stat.label}>
                  {i === 0 ? <TriangleIcon /> : <GridIcon />}
                  <div className="text-navy-900 text-xl font-semibold sm:text-2xl md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-navy-600 text-xs font-medium sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          </div>

          {/* Mobile menu overlay — outside the fading foreground, so it stays
              usable however far through the scrub we are. */}
          <div
            className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-opacity duration-500 ease-out md:hidden ${
              menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            <div
              className={`flex h-full flex-col items-center justify-center gap-8 transition-transform duration-500 ease-out ${
                menuOpen ? 'translate-y-0' : '-translate-y-8'
              }`}
            >
              {[{ href: '#home', label: t.nav.home }, ...navLinks, { href: '#contact', label: t.nav.contact }].map(
                (link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-navy-900 text-2xl font-medium"
                  >
                    {link.label}
                  </a>
                ),
              )}
              <div className="mt-2 flex flex-col items-center gap-3">
                <LangToggle lang={lang} setLang={setLang} />
                <span className="text-navy-400 text-sm font-light">
                  {lang === 'en' ? 'Language' : 'Язык'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Sections lang={lang} />
    </>
  );
}
