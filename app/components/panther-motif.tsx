"use client";

interface PantherMotifProps {
  className?: string;
  size?: number;
  variant?: "eyes" | "silhouette" | "crest" | "emblem";
}

export function PantherEyes({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.4}
      viewBox="0 0 120 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left eye */}
      <ellipse cx="28" cy="24" rx="22" ry="18" fill="#C9A035" opacity="0.15" />
      <ellipse cx="28" cy="24" rx="16" ry="13" fill="#C9A035" opacity="0.3" />
      <ellipse cx="28" cy="24" rx="8" ry="12" fill="#C9A035" />
      <ellipse cx="25" cy="20" rx="3" ry="4" fill="#FAF6F0" opacity="0.6" />

      {/* Right eye */}
      <ellipse cx="92" cy="24" rx="22" ry="18" fill="#C9A035" opacity="0.15" />
      <ellipse cx="92" cy="24" rx="16" ry="13" fill="#C9A035" opacity="0.3" />
      <ellipse cx="92" cy="24" rx="8" ry="12" fill="#C9A035" />
      <ellipse cx="89" cy="20" rx="3" ry="4" fill="#FAF6F0" opacity="0.6" />
    </svg>
  );
}

export function PantherSilhouette({ className = "", size = 200 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Body */}
      <path
        d="M60 90 C40 85 20 80 15 70 C10 60 15 45 25 40 C30 37 38 38 42 35 C46 32 44 22 50 18 C56 14 65 16 70 20 C75 24 78 30 82 32 C90 36 102 34 112 38 C125 43 135 52 138 62 C141 72 138 82 132 88 C126 94 118 96 108 96 C98 96 88 94 80 92 C72 90 66 90 60 90Z"
        fill="#C9A035"
        opacity="0.9"
      />
      {/* Head */}
      <ellipse cx="50" cy="38" rx="22" ry="18" fill="#C9A035" />
      {/* Ears */}
      <path d="M34 24 L30 14 L40 22 Z" fill="#C9A035" />
      <path d="M62 24 L68 14 L60 22 Z" fill="#C9A035" />
      <path d="M35 23 L31 16 L39 22 Z" fill="#9B7A22" />
      <path d="M61 23 L66 16 L61 22 Z" fill="#9B7A22" />
      {/* Eyes */}
      <ellipse cx="44" cy="36" rx="5" ry="6" fill="#0D3B2E" />
      <ellipse cx="58" cy="36" rx="5" ry="6" fill="#0D3B2E" />
      <ellipse cx="43" cy="34" rx="2" ry="2.5" fill="#FAF6F0" opacity="0.7" />
      <ellipse cx="57" cy="34" rx="2" ry="2.5" fill="#FAF6F0" opacity="0.7" />
      {/* Nose */}
      <path d="M50 44 L47 47 L53 47 Z" fill="#9B7A22" />
      {/* Tail */}
      <path
        d="M132 88 C145 85 158 78 165 68 C170 60 168 50 164 45 C162 42 160 44 160 48 C160 54 162 60 158 66 C154 72 145 76 138 78"
        stroke="#C9A035"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      {/* Legs */}
      <rect x="65" y="90" width="12" height="35" rx="6" fill="#C9A035" opacity="0.9" />
      <rect x="82" y="90" width="12" height="38" rx="6" fill="#C9A035" opacity="0.9" />
      <rect x="100" y="90" width="12" height="38" rx="6" fill="#C9A035" opacity="0.9" />
      <rect x="116" y="90" width="12" height="35" rx="6" fill="#C9A035" opacity="0.9" />
      {/* Spots */}
      <circle cx="80" cy="65" r="4" fill="#9B7A22" opacity="0.5" />
      <circle cx="95" cy="72" r="3" fill="#9B7A22" opacity="0.5" />
      <circle cx="112" cy="68" r="3.5" fill="#9B7A22" opacity="0.5" />
      <circle cx="70" cy="78" r="3" fill="#9B7A22" opacity="0.5" />
    </svg>
  );
}

export function AlkebulanCrest({ className = "", size = 80 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size * 1.1}
      viewBox="0 0 80 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield shape */}
      <path
        d="M40 4 L72 16 L72 44 C72 62 57 76 40 84 C23 76 8 62 8 44 L8 16 Z"
        fill="#0D3B2E"
        stroke="#C9A035"
        strokeWidth="2"
      />
      {/* Panther eyes in shield */}
      <ellipse cx="30" cy="38" rx="7" ry="8" fill="#C9A035" opacity="0.9" />
      <ellipse cx="50" cy="38" rx="7" ry="8" fill="#C9A035" opacity="0.9" />
      <ellipse cx="28" cy="36" rx="2.5" ry="3" fill="#FAF6F0" opacity="0.6" />
      <ellipse cx="48" cy="36" rx="2.5" ry="3" fill="#FAF6F0" opacity="0.6" />
      {/* Stars */}
      <circle cx="40" cy="22" r="2" fill="#C9A035" />
      <circle cx="32" cy="25" r="1.5" fill="#C9A035" opacity="0.7" />
      <circle cx="48" cy="25" r="1.5" fill="#C9A035" opacity="0.7" />
      {/* Bottom line */}
      <path d="M24 56 Q40 62 56 56" stroke="#C9A035" strokeWidth="1.5" fill="none" opacity="0.8" />
    </svg>
  );
}

export function PantherMotif({ className = "", size = 48, variant = "eyes" }: PantherMotifProps) {
  if (variant === "eyes") return <PantherEyes className={className} size={size} />;
  if (variant === "silhouette") return <PantherSilhouette className={className} size={size} />;
  if (variant === "crest") return <AlkebulanCrest className={className} size={size} />;
  return <AlkebulanCrest className={className} size={size} />;
}
