/**
 * A hook which manages scrolling.
 *
 * {options} expects: { x: number, y: number, isSmooth: boolean }.
 */
 export function useScroller({ x, y, isSmooth = false }) {
    // Check if `window` exists.
    // This function can run in NodeJS which doesn't have a global `window` variable.
    // NodeJS is required for unit testing.
    if (!window) {
      return;
    }
  
    return function scroller() {
      // Modern browsers provide a scrolling interface!
      window.scrollTo({
        left: x,
        top: y,
        behavior: isSmooth ? "smooth" : "auto",
      });
    };
  }