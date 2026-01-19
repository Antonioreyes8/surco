// Import React hooks we need
// useState: manages state (data that can change)
// useEffect: runs code when component mounts or when dependencies change
import { useState, useEffect } from 'react';

// Export our custom hook so other components can use it
// Takes an array of section IDs as input (like ['section1', 'section2', etc.])
export const useActiveSection = (sectionIds) => {
  
  // Create state to track which section is currently active
  // Starts as empty string, will be updated to 'section1', 'section2', etc.
  const [activeSection, setActiveSection] = useState('');

  // useEffect runs this code when component mounts and when sectionIds changes
  useEffect(() => {
    
    // Create an IntersectionObserver - this watches elements and tells us when they enter/leave the viewport
    const observer = new IntersectionObserver(
      
      // This callback function runs whenever any watched element enters or leaves the viewport
      (entries) => {
        
        // entries is an array of all the elements that changed visibility
        // Loop through each entry (each section that changed)
        entries.forEach((entry) => {
          
          // entry.isIntersecting is true when the element is visible in the viewport
          if (entry.isIntersecting) {
            
            // entry.target is the actual HTML element
            // entry.target.id is the ID attribute of that element (like 'section1')
            // Update our state to mark this section as active
            setActiveSection(entry.target.id);
          }
        });
      },
      
      // Configuration options for the observer
      {
        // threshold: How much of the element needs to be visible to trigger
        // Multiple values means it will trigger at different visibility percentages
        // [0, 0.1, 0.2...] means trigger at 0%, 10%, 20%, etc. visibility
        threshold: 0.4,
        
        // rootMargin: Shrinks or expands the viewport area used for calculations
        // '-10% 0px -10% 0px' means ignore the top 10% and bottom 10% of viewport
        // This creates a "middle zone" where sections become active
        // Format: top, right, bottom, left (like CSS margin)
        rootMargin: '0px'
      }
    );

    // Start watching each section for visibility changes
    // Loop through each section ID we were given
    sectionIds.forEach((id) => {
      
      // Find the actual HTML element with this ID in the page
      const element = document.getElementById(id);
      
      // If the element exists (safety check)
      if (element) {
        
        // Tell the observer to start watching this element
        observer.observe(element);
      }
    });

    // Cleanup function - runs when component unmounts or when sectionIds changes
    // This prevents memory leaks and removes event listeners
    return () => {
      
      // Stop watching each section
      sectionIds.forEach((id) => {
        
        // Find the element again
        const element = document.getElementById(id);
        
        // If it exists, stop watching it
        if (element) {
          observer.unobserve(element);
        }
      });
    };
    
  }, [sectionIds]); // Dependency array: re-run this effect if sectionIds changes

  // Return the current active section ID to whoever calls this hook
  // This is what gets used in the Sidebar component
  return activeSection;
};