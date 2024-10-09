// useAnimateOnScroll.js
import { useEffect } from 'react';

export default function useAnimateOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Check the class or data attribute to determine which animation to apply
          if (entry.target.classList.contains('notLeftAnimated')) {
            entry.target.classList.add('leftAnimated'); // Apply only the fade animation
          } else if (entry.target.classList.contains('notRightAnimated')) {
            entry.target.classList.add('rightAnimated'); // Apply only the color change animation
          } else if (entry.target.classList.contains('notUpAnimated')) {
            entry.target.classList.add('upAnimated');
          } else if (entry.target.classList.contains('notShrinkAnimated')) {
            entry.target.classList.add('shrinkAnimated');
          }
        } 
        else {
        //   // Remove both classes to reset the animation
        //   entry.target.classList.remove('leftAnimated');
        //   entry.target.classList.remove('rightAnimated');
          entry.target.classList.remove('shrinkAnimated');
        }
      });
    });

    // Select elements with either of the animation classes
    const notAnimatedElements = document.querySelectorAll('.notRightAnimated, .notLeftAnimated, .notUpAnimated, .notShrinkAnimated');
    notAnimatedElements.forEach((el) => observer.observe(el));

    // Cleanup function to disconnect the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);
}
