import React, { useState } from 'react';
import useMobile from '../hooks/useMobile';
import DesktopGalleryContent from '../components/gallery/DesktopGalleryContent';
import MobileGalleryContent from '../components/gallery/MobileGalleryContent';
import { galleryItems } from '../components/gallery/galleryData';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { isMobile } = useMobile();

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  if (isMobile) {
    return (
      <MobileGalleryContent
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        filteredItems={filteredItems}
      />
    );
  }

  return (
    <DesktopGalleryContent
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      filteredItems={filteredItems}
    />
  );
};

export default Gallery;