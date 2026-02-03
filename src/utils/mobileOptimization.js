/**
 * Mobile Optimization Configuration for 4-Man-Fabrics
 * 
 * This file contains utilities and configurations for optimizing
 * the website experience across all mobile devices
 */

// Breakpoint definitions (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,   // Small devices (phones in landscape)
  md: 768,   // Medium devices (tablets)
  lg: 1024,  // Large devices (desktops)
  xl: 1280,  // Extra large devices
  '2xl': 1536 // 2X Extra large devices
};

// Detect device type
export const getDeviceType = () => {
  const width = window.innerWidth;
  if (width < BREAKPOINTS.sm) return 'mobile';
  if (width < BREAKPOINTS.md) return 'tablet-portrait';
  if (width < BREAKPOINTS.lg) return 'tablet-landscape';
  return 'desktop';
};

// Check if mobile device
export const isMobile = () => {
  return window.innerWidth < BREAKPOINTS.md;
};

// Check if touch device
export const isTouchDevice = () => {
  return ('ontouchstart' in window) || 
         (navigator.maxTouchPoints > 0) || 
         (navigator.msMaxTouchPoints > 0);
};

// Optimized scroll behavior for mobile
export const smoothScrollTo = (targetId, offset = 80) => {
  const element = document.getElementById(targetId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Prevent body scroll when mobile menu is open
export const toggleBodyScroll = (lock = true) => {
  if (lock) {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  } else {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
  }
};

// Mobile-optimized image loading
export const getOptimizedImageSrc = (baseSrc, deviceType) => {
  // In a real implementation, this would return different image sizes
  // For now, it's a placeholder for future optimization
  const sizes = {
    mobile: '_mobile',
    'tablet-portrait': '_tablet',
    'tablet-landscape': '_tablet-lg',
    desktop: ''
  };
  
  const suffix = sizes[deviceType] || '';
  return baseSrc.replace(/(\.[^.]+)$/, `${suffix}$1`);
};

// Debounce utility for resize events
export const debounce = (func, wait = 150) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle utility for scroll events
export const throttle = (func, limit = 100) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Handle external link clicks (phone, email, maps)
export const handleExternalLink = (type, value) => {
  const links = {
    phone: `tel:${value.replace(/\s+/g, '')}`,
    whatsapp: `https://wa.me/${value.replace(/\s+/g, '')}`,
    email: `mailto:${value}`,
    maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(value)}`
  };
  
  if (links[type]) {
    window.location.href = links[type];
  }
};

// Viewport height fix for mobile browsers (100vh issue)
export const setMobileVH = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// Initialize mobile viewport height and update on resize
export const initMobileVH = () => {
  setMobileVH();
  window.addEventListener('resize', debounce(setMobileVH, 150));
};

// Mobile-optimized animation configurations
export const mobileAnimationVariants = {
  // Reduced motion for mobile
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.4, ease: "easeOut" }
  },
  
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.3 }
  },
  
  // Scale animation for cards
  scaleOnHover: {
    whileHover: isTouchDevice() ? {} : { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 }
  }
};

// Touch-friendly button configurations
export const touchFriendlyProps = {
  minHeight: '44px', // Apple's recommended minimum touch target
  minWidth: '44px',
  padding: '12px 24px'
};

// Check if element is in viewport
export const isInViewport = (element) => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Format phone number for display
export const formatPhoneNumber = (phone) => {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Format as per Indian standard: +91 XXXXX XXXXX
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return phone;
};

// Lazy load utility for images
export const lazyLoadImage = (img) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;
        const src = image.getAttribute('data-src');
        if (src) {
          image.src = src;
          image.classList.add('loaded');
          observer.unobserve(image);
        }
      }
    });
  }, {
    rootMargin: '50px'
  });
  
  if (img) observer.observe(img);
  return observer;
};

// Mobile menu state manager
export class MobileMenuManager {
  constructor() {
    this.isOpen = false;
    this.callbacks = [];
  }
  
  toggle() {
    this.isOpen = !this.isOpen;
    toggleBodyScroll(this.isOpen);
    this.notify();
  }
  
  close() {
    this.isOpen = false;
    toggleBodyScroll(false);
    this.notify();
  }
  
  subscribe(callback) {
    this.callbacks.push(callback);
    return () => {
      this.callbacks = this.callbacks.filter(cb => cb !== callback);
    };
  }
  
  notify() {
    this.callbacks.forEach(callback => callback(this.isOpen));
  }
}

// Export singleton instance
export const mobileMenuManager = new MobileMenuManager();

// Performance monitoring for mobile
export const measurePerformance = () => {
  if ('performance' in window && 'measure' in performance) {
    const perfData = performance.getEntriesByType('navigation')[0];
    return {
      loadTime: perfData.loadEventEnd - perfData.loadEventStart,
      domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
      firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
    };
  }
  return null;
};

// Mobile-specific CSS classes helper
export const getMobileClasses = (baseClasses, mobileClasses) => {
  if (isMobile()) {
    return `${baseClasses} ${mobileClasses}`;
  }
  return baseClasses;
};

// Safe area insets for notched devices (iPhone X, etc.)
export const getSafeAreaInsets = () => {
  const root = document.documentElement;
  return {
    top: getComputedStyle(root).getPropertyValue('--safe-area-inset-top') || '0px',
    right: getComputedStyle(root).getPropertyValue('--safe-area-inset-right') || '0px',
    bottom: getComputedStyle(root).getPropertyValue('--safe-area-inset-bottom') || '0px',
    left: getComputedStyle(root).getPropertyValue('--safe-area-inset-left') || '0px'
  };
};

export default {
  BREAKPOINTS,
  getDeviceType,
  isMobile,
  isTouchDevice,
  smoothScrollTo,
  toggleBodyScroll,
  getOptimizedImageSrc,
  debounce,
  throttle,
  handleExternalLink,
  setMobileVH,
  initMobileVH,
  mobileAnimationVariants,
  touchFriendlyProps,
  isInViewport,
  formatPhoneNumber,
  lazyLoadImage,
  mobileMenuManager,
  measurePerformance,
  getMobileClasses,
  getSafeAreaInsets
};
