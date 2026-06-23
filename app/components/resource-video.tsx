"use client";

import { useEffect, useRef, useState } from "react";

interface PexelsVideo {
  id: number;
  url: string;
  thumbnail: string;
  duration: number;
  photographer: string;
  pexels_url: string;
}

function SingleResourceVideo({ video, autoplay = false }: { video: PexelsVideo; autoplay?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(autoplay);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.play().catch(() => {});
        } else {
          ref.current?.pause();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9", background: "#0F0D33" }}>
      <video
        ref={ref}
        src={video.url}
        poster={video.thumbnail}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        onClick={() => {
          if (ref.current?.paused) { ref.current.play(); setPlaying(true); }
          else { ref.current?.pause(); setPlaying(false); }
        }}
      />
      {/* Attribution */}
      <a
        href={video.pexels_url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-3 text-[9px] text-white/30 hover:text-white/60 transition-colors"
      >
        Pexels · {video.photographer}
      </a>
    </div>
  );
}

export function ResourceVideoSection({
  title,
  subtitle,
  query,
  count = 4,
  layout = "grid",
}: {
  title: string;
  subtitle?: string;
  query: string;
  count?: number;
  layout?: "grid" | "hero" | "strip";
}) {
  const [videos, setVideos] = useState<PexelsVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/resource-videos?q=${encodeURIComponent(query)}&per_page=${count}`)
      .then(r => r.json())
      .then(d => {
        if (d.videos?.length) setVideos(d.videos);
        else setError(d.error || "No videos found");
      })
      .catch(() => setError("Could not load videos"))
      .finally(() => setLoading(false));
  }, [query, count]);

  return (
    <div>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h3 className="font-bold text-lg" style={{ fontFamily: "var(--font-fraunces)", color: "#0F0D33" }}>{title}</h3>}
          {subtitle && <p className="text-sm mt-1" style={{ color: "#6B5B45" }}>{subtitle}</p>}
        </div>
      )}

      {loading && (
        <div className={`grid gap-4 ${layout === "strip" ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-1 sm:grid-cols-2"}`}>
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="rounded-2xl bg-[#0F0D33]/10 animate-pulse" style={{ aspectRatio: "16/9" }} />
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="rounded-2xl border border-border bg-warm-ivory px-5 py-8 text-center">
          <p className="text-sm text-muted">{error === "PEXELS_API_KEY not configured"
            ? "Add PEXELS_API_KEY to your environment variables to enable resource videos."
            : error}
          </p>
        </div>
      )}

      {!loading && videos.length > 0 && (
        <>
          {layout === "hero" && (
            <div className="space-y-4">
              <SingleResourceVideo video={videos[0]} autoplay />
              {videos.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {videos.slice(1).map(v => <SingleResourceVideo key={v.id} video={v} />)}
                </div>
              )}
            </div>
          )}
          {layout === "grid" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {videos.map(v => <SingleResourceVideo key={v.id} video={v} />)}
            </div>
          )}
          {layout === "strip" && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {videos.map(v => <SingleResourceVideo key={v.id} video={v} />)}
            </div>
          )}
        </>
      )}
    </div>
  );
}

/** Self-contained section for the homepage hero — full-width looping reel */
export function ResourceReel({ queries }: { queries: string[] }) {
  const [videos, setVideos] = useState<PexelsVideo[]>([]);
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const q = queries.join(" OR ");
    fetch(`/api/resource-videos?q=${encodeURIComponent(queries[0])}&per_page=${queries.length * 2}`)
      .then(r => r.json())
      .then(d => { if (d.videos?.length) setVideos(d.videos); });
  }, []);

  useEffect(() => {
    if (!videos.length) return;
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % videos.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [videos.length]);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, [current]);

  if (!videos.length) return null;

  const v = videos[current];

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        key={v.id}
        src={v.url}
        poster={v.thumbnail}
        autoPlay
        muted
        loop={false}
        playsInline
        onEnded={() => setCurrent(c => (c + 1) % videos.length)}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "rgba(15,13,51,0.55)" }} />
      {/* Reel dots */}
      {videos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-1.5 h-1.5 rounded-full transition-all"
              style={{ background: i === current ? "#00C851" : "rgba(255,255,255,0.3)" }}
            />
          ))}
        </div>
      )}
      <a href={v.pexels_url} target="_blank" rel="noopener noreferrer"
        className="absolute bottom-3 right-4 text-[9px] text-white/25 hover:text-white/50 transition-colors">
        Pexels · {v.photographer}
      </a>
    </div>
  );
}
