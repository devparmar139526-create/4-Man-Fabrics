import { useState, useEffect } from 'react';
import { BREAKPOINTS, isMobile, isTouchDevice, getDeviceType } from '../utils/mobileOptimization';

/**
 * Custom hook for mobile-responsive components
 * Provides real-time device type detection and responsive utilities
 */
export const useMobile = () => {
  const [deviceType, setDeviceType] = useState(getDeviceType());
  const [isMobileDevice, setIsMobileDevice] = useState(isMobile());
  const [isTouch, setIsTouch] = useState(isTouchDevice());
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
      setIsMobileDevice(isMobile());
      setScreenWidth(window.innerWidth);
    };

    const handleOrientationChange = () => {
      setTimeout(handleResize, 100); // Small delay for orientation change
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return {
    isMobile: isMobileDevice,
    isTablet: deviceType.includes('tablet'),
    isDesktop: deviceType === 'desktop',
    isTouchDevice: isTouch,
    deviceType,
    screenWidth,
    breakpoints: BREAKPOINTS
  };
};

/**
 * Custom hook for viewport dimensions
 * Useful for responsive calculations
 */
export const useViewport = () => {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewport;
};

/**
 * Custom hook for scroll position
 * Useful for scroll-based animations and sticky elements
 */
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setScrollPosition(currentScrollY);
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollPosition, scrollDirection };
};

/**
 * Custom hook for intersection observer
 * Useful for lazy loading and scroll animations
 */
export const useIntersectionObserver = (
  elementRef,
  options = { threshold: 0.1, rootMargin: '0px' }
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && !hasIntersected) {
        setHasIntersected(true);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, options, hasIntersected]);

  return { isIntersecting, hasIntersected };
};

export default useMobile;
