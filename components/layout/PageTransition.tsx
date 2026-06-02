"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

/**
 * The single, site-wide route-change effect: a clean fade + ~10px upward
 * slide, ~280ms. Keyed on the pathname so it replays on every navigation.
 * This is the ONLY page-level motion in the site — keep it that way.
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
