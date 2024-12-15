/**
 *
 * @description - Provides a dynamic offset value based on the current window height and specified fractions
 *                for different screen height ranges. This hook centralizes the offset calculation logic,
 *                making it reusable and easy to maintain across components.
 *
 * @param {number} windowHeight - The current height of the window (e.g., from `window.innerHeight`).
 * @param {Object} fractions - An object containing fractions for calculating the offset for different screen heights:
 *                             - `small`: Fraction used for window heights less than 700px.
 *                             - `medium`: Fraction used for window heights less than 750px.
 *                             - `large`: Fraction used for window heights greater than or equal to 750px.
 *
 * @returns {string} - A CSS-compatible offset value (e.g., `-140px`) calculated dynamically based on the input.
 *
 * @example
 * const offset = useOffsetValue(window.innerHeight, {
 *   small: 0.2,
 *   medium: 0.13,
 *   large: 0.025,
 * });
 *
 * <div style={{ bottom: offset }}>Hello World</div>
 */
import { useState, useEffect } from 'react';

const useOffsetValue = (windowHeight: number, fractions: { small: number; medium: number; large: number }) => {
  const [offset, setOffset] = useState<string>('');

  useEffect(() => {
    if (windowHeight < 700) {
      setOffset(`${windowHeight * fractions.small}px`);
    } else if (windowHeight < 750) {
      setOffset(`${windowHeight * fractions.medium}px`);
    } else {
      setOffset(`${windowHeight * fractions.large}px`);
    }
  }, [windowHeight, fractions]);

  return offset;
};

export default useOffsetValue;
