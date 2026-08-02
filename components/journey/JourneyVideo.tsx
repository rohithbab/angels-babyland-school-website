"use client";

import { useEffect, useRef } from "react";

/**
 * The looping school-journey preview video. Autoplays muted and loops as a
 * silent ambient montage. We set `muted` imperatively too, because React does
 * not reliably apply the `muted` attribute on the server-rendered element,
 * which some browsers require before they allow autoplay.
 */
export default function JourneyVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.muted = true;
  }, []);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[var(--radius-card)] border border-border bg-bg-alt shadow-[var(--shadow-card)]">
      <video
        ref={ref}
        className="h-full w-full object-cover object-top"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/journey/journey-01.jpg"
        aria-label="A montage of moments from the Angels Babyland journey"
      >
        <source src="/assets/journey/journey.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
