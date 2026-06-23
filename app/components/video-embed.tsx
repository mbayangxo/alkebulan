"use client";

import { useState } from "react";
import Image from "next/image";

function extractYoutubeId(input: string): string | null {
  // Already just an ID (11 chars, no slashes)
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;
  const m = input.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return m ? m[1] : null;
}

interface VideoEmbedProps {
  /** YouTube video ID or full YouTube URL */
  src: string;
  title?: string;
  /** Optional caption shown below the player */
  caption?: string;
  className?: string;
}

export function VideoEmbed({ src, title, caption, className = "" }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const id = extractYoutubeId(src);
  const thumbUrl = id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : null;
  const embedUrl = id
    ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&color=white`
    : null;

  if (!id) {
    return (
      <div className={`relative w-full rounded-2xl overflow-hidden bg-[#1A1008] ${className}`} style={{ aspectRatio: "16/9" }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-14 h-14 rounded-full border border-white/15 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.3">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
          <p className="text-white/25 text-xs">Invalid video URL</p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="relative w-full rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: "16/9" }}>
        {playing ? (
          <iframe
            src={embedUrl!}
            title={title || "Video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full group focus:outline-none"
            aria-label={`Play ${title || "video"}`}
          >
            {/* Thumbnail */}
            <Image
              src={thumbUrl!}
              alt={title || "Video thumbnail"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority={false}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-200" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-200"
                style={{ background: "#E05A18" }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="white" className="translate-x-0.5">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>

            {/* Title overlay at bottom */}
            {title && (
              <div className="absolute bottom-0 left-0 right-0 px-5 py-4" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)" }}>
                <p className="text-white text-sm font-semibold leading-snug">{title}</p>
              </div>
            )}
          </button>
        )}
      </div>

      {caption && (
        <p className="mt-2.5 text-xs text-center" style={{ color: "#9B8B75" }}>{caption}</p>
      )}
    </div>
  );
}

/** A grid of video cards with labels */
export function VideoGrid({
  videos,
  className = "",
}: {
  videos: { src: string; title: string; caption?: string }[];
  className?: string;
}) {
  return (
    <div className={`grid gap-5 ${videos.length === 1 ? "" : videos.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"} ${className}`}>
      {videos.map((v) => (
        <VideoEmbed key={v.src} src={v.src} title={v.title} caption={v.caption} />
      ))}
    </div>
  );
}
