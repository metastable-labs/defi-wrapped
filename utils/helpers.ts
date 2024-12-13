const appearAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const slideInFromTopToSettle = {
  initial: { opacity: 0, y: -300 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const slideInFromBottomToSettle = {
  initial: { opacity: 0, y: 300 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 300 },
};

const slideInFromLeftToSettle = {
  initial: { opacity: 0, x: -300 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -300 },
};

const slideInFromRightToSettle = {
  initial: { opacity: 0, x: 300 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 300 },
};

const growInAnimation = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
};

/**
 * Generates a consistent color for a given string.
 * The same string will always generate the same color.
 * @param text - The input string to generate a color for.
 * @returns A hex color string.
 */
const generateConsistentColor = (text: string): string => {
  let hash = 0;

  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }

  const color = `#${((hash >> 0) & 0xffffff).toString(16).padStart(6, '0')}`;

  return color;
};

export {
  appearAnimation,
  generateConsistentColor,
  slideInFromBottomToSettle,
  slideInFromTopToSettle,
  slideInFromLeftToSettle,
  slideInFromRightToSettle,
  growInAnimation,
};
