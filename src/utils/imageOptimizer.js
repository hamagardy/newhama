// Image optimization utility
export const optimizeImage = (src, options = {}) => {
  const {
    width = 800,
    quality = 75,
    format = 'webp'
  } = options;

  // For external images, return as-is
  if (src.startsWith('http')) {
    return src;
  }

  // For local images, you can add optimization logic here
  // This is a placeholder for future optimization
  return src;
};

// Lazy load images with intersection observer
export const lazyLoadImage = (imageElement) => {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  imageObserver.observe(imageElement);
};

// Preload critical images
export const preloadImage = (src) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};
