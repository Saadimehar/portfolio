import { useEffect, useState } from 'react';

export const useScrollspy = (sectionIds: string[], offset: number = 100) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      // Get all sections
      const sections = sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          return { id, element };
        })
        .filter((item) => item.element !== null);

      // Find which section is currently in view
      let current = '';
      for (const { id, element } of sections) {
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the element is in view (top of element is above viewport middle)
          if (rect.top <= offset) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
};
