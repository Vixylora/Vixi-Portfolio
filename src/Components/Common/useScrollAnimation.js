import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook to setup scroll animations
 */
export const useScrollAnimation = () => {
  useEffect(() => {
    const triggers = [];

    // Fade in animation
    gsap.utils.toArray('.scroll-animate').forEach((element) => {
      const trigger = gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
      if (trigger.scrollTrigger) triggers.push(trigger.scrollTrigger);
    });

    // Slide in from left
    gsap.utils.toArray('.slide-in-left').forEach((element) => {
      const trigger = gsap.fromTo(
        element,
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
      if (trigger.scrollTrigger) triggers.push(trigger.scrollTrigger);
    });

    // Slide in from right
    gsap.utils.toArray('.slide-in-right').forEach((element) => {
      const trigger = gsap.fromTo(
        element,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
      if (trigger.scrollTrigger) triggers.push(trigger.scrollTrigger);
    });

    // Stagger animation for children
    gsap.utils.toArray('.stagger-children').forEach((element) => {
      const children = element.children;
      const trigger = gsap.fromTo(
        children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
      if (trigger.scrollTrigger) triggers.push(trigger.scrollTrigger);
    });

    // Cleanup - only kill triggers created by this hook
    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);
};
