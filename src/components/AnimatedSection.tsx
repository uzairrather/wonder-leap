import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  className?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (direction) {
      case 'left':
        return 'animate-slide-in-left opacity-100';
      case 'right':
        return 'animate-slide-in-right opacity-100';
      case 'up':
        return 'animate-slide-in-up opacity-100';
      case 'down':
        return 'animate-slide-in-down opacity-100';
      default:
        return 'animate-slide-in-up opacity-100';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};