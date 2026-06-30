"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const WORD = "Gallery";

/**
 * One-time intro splash for the Gallery page: the word "Gallery" drops in
 * letter-by-letter with a soft bounce, holds briefly, then the whole overlay
 * lifts away and unmounts — revealing the grid below. Skipped entirely for
 * users who prefer reduced motion.
 */
export default function GalleryIntro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  // Auto-dismiss after the letters have settled.
  useEffect(() => {
    if (reduce) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => setShow(false), 1900);
    return () => clearTimeout(t);
  }, [reduce]);

  // Lock page scroll while the splash is up.
  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -48 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <span
            aria-hidden="true"
            className="flex font-heading text-[clamp(3rem,12vw,8rem)] font-bold tracking-tight text-text"
          >
            {WORD.split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: i * 0.08,
                  type: "spring",
                  stiffness: 320,
                  damping: 13,
                }}
                className={i === WORD.length - 1 ? "text-accent-strong" : ""}
              >
                {ch}
              </motion.span>
            ))}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
