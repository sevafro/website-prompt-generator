import { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 72;
const frameUrl = (i: number) => `/frames/f_${String(i + 1).padStart(3, '0')}.webp`;

/**
 * Scroll-scrubbed frame sequence.
 *
 * The source clip is a slow rotation, so it scrubs far better as a decoded
 * image sequence than as a seeking <video>: 72 WebP frames total ~1.4MB —
 * lighter than the 8.3MB mp4 — and seeking is instant, with no dependency on
 * the browser's H.264 support.
 *
 * `progress` (0..1) is owned by the parent, which derives it from the scroll
 * position of the tall track the hero is pinned inside.
 */
export function HeroCanvas({ progress }: { progress: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const lastDrawn = useRef(-1);
  const [loadedCount, setLoadedCount] = useState(0);
  const [resizeTick, setResizeTick] = useState(0);

  const firstFrameReady = loadedCount > 0;

  // Decode every frame up front. The first one paints as soon as it lands so
  // the hero is never empty; the rest fill in behind it.
  useEffect(() => {
    let cancelled = false;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = 'async';
      img.src = frameUrl(i);
      img.onload = () => {
        if (!cancelled) setLoadedCount((n) => n + 1);
      };
      images.push(img);
    }
    framesRef.current = images;

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      lastDrawn.current = -1;
      setResizeTick((t) => t + 1);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Draw the frame for the current progress, cover-style, at device pixel ratio.
  useEffect(() => {
    let raf: number | null = requestAnimationFrame(() => {
      raf = null;
      const canvas = canvasRef.current;
      const frames = framesRef.current;
      if (!canvas || !frames.length) return;

      const index = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.round(progress * (FRAME_COUNT - 1))),
      );
      // Fall back to the nearest decoded frame while the sequence is still
      // downloading, rather than dropping the draw and showing a stale one.
      let img = frames[index];
      if (!img?.complete || !img.naturalWidth) {
        img = frames.slice(0, index).reverse().find((f) => f.complete && f.naturalWidth) ?? frames[0];
      }
      if (!img?.complete || !img.naturalWidth) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cssW = canvas.clientWidth;
      const cssH = canvas.clientHeight;
      const needsResize = canvas.width !== Math.round(cssW * dpr) || canvas.height !== Math.round(cssH * dpr);

      if (needsResize) {
        canvas.width = Math.round(cssW * dpr);
        canvas.height = Math.round(cssH * dpr);
      } else if (index === lastDrawn.current) {
        return;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
      lastDrawn.current = index;
    });

    return () => {
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [progress, loadedCount, resizeTick]);

  return (
    <>
      {/* Paints instantly while the sequence decodes. */}
      <img
        src="/hero-poster.webp"
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          firstFrameReady ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
    </>
  );
}
