"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Leadership portrait that straddles the top edge of a leader card.
 *
 * Tries to load the real portrait from `src`. Until that file exists, the
 * image request fails and we fall back to the original pink placeholder box
 * showing the role label — so dropping a correctly-named photo into
 * /public/assets/about/leaders_images/ makes it appear automatically.
 */
export default function LeaderPhoto({
  src,
  name,
  role,
}: {
  src: string;
  name: string;
  role: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="absolute left-1/2 top-0 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[var(--radius-card)] border-4 border-bg bg-accent shadow-[var(--shadow-card)] lg:h-56 lg:w-56"
      role="img"
      aria-label={`Photo of ${name}, ${role}`}
    >
      {failed ? (
        <span className="px-2 text-center font-heading text-sm font-semibold uppercase tracking-wide text-text/70">
          {role}
        </span>
      ) : (
        <Image
          src={src}
          alt={`${name}, ${role}`}
          fill
          sizes="(max-width: 1024px) 160px, 224px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
