// Centralized Framer Motion variants for a smooth, minimal, premium feel.
// Keep these consistent across the site (Mantel Group-esque restraint).

export const EASE_OUT = [0.22, 1, 0.36, 1];

export const viewportOnce = {
  once: true,
  amount: 0.25,
  margin: "-80px",
};

export const fadeIn = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration, delay, ease: EASE_OUT },
  },
});

export const fadeUp = (delay = 0, duration = 0.7, y = 24) => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: EASE_OUT },
  },
});

export const scaleIn = (delay = 0, duration = 0.45, from = 0.96) => ({
  hidden: { opacity: 0, scale: from },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration, delay, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    scale: from,
    transition: { duration: 0.25, ease: EASE_OUT },
  },
});

export const slideLeft = (delay = 0, duration = 0.75, x = 28) => ({
  hidden: { opacity: 0, x: -x },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration, delay, ease: EASE_OUT },
  },
});

export const slideRight = (delay = 0, duration = 0.75, x = 28) => ({
  hidden: { opacity: 0, x },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration, delay, ease: EASE_OUT },
  },
});

export const staggerContainer = (stagger = 0.12, delayChildren = 0.12) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const heroScaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 1.08 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, delay, ease: EASE_OUT },
  },
});

// Micro interactions (buttons/cards)
export const buttonMicro = {
  whileHover: { y: -1, scale: 1.02 },
  whileTap: { y: 0, scale: 0.98 },
  transition: { type: "spring", stiffness: 380, damping: 26, mass: 0.6 },
};

export const cardHover = {
  whileHover: { y: -2, scale: 1.02 },
  whileTap: { scale: 0.99 },
  transition: { type: "spring", stiffness: 320, damping: 28, mass: 0.7 },
};

// Underline hover animation (wrap link in a motion parent with whileHover="hover")
export const underline = {
  rest: { scaleX: 0, opacity: 0.6 },
  hover: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.35, ease: EASE_OUT },
  },
};

// Mobile menu (slide-down)
export const mobileMenu = {
  hidden: { opacity: 0, y: -12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.25, ease: EASE_OUT },
  },
};

export const mobileMenuItem = (i = 0) => ({
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.05 * i, ease: EASE_OUT },
  },
  exit: { opacity: 0, y: -6, transition: { duration: 0.2, ease: EASE_OUT } },
});

// Modal (project previews)
export const modalOverlay = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export const modalContent = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
  exit: { opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.25, ease: EASE_OUT } },
};


