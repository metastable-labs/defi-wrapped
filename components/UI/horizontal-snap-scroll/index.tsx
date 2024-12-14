'use client';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@/public/icons';
import DWClickAnimation from '../click-animation';

const DWHorizontalSnapScroll = ({ children, setSteps, step }: IDWHorizontalSnapScroll) => {
  const stepContainerRef = useRef<HTMLDivElement>(null);

  const canGoBack = step > 0;
  const canGoNext = step < 3;

  const prev = () => {
    if (canGoBack) {
      setSteps((prevStep) => {
        const newStep = prevStep - 1;
        scrollToStep(newStep);
        return newStep;
      });
    }
  };

  const next = () => {
    if (canGoNext) {
      setSteps((prevStep) => {
        const newStep = prevStep + 1;
        scrollToStep(newStep);
        return newStep;
      });
    }
  };

  const scrollToStep = (newStep: number) => {
    if (stepContainerRef.current) {
      const stepDiv = stepContainerRef.current.children[newStep] as HTMLElement;
      stepDiv.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  };

  const handleScroll = () => {
    if (stepContainerRef.current) {
      const container = stepContainerRef.current;
      const children = Array.from(container.children);
      const scrollLeft = container.scrollLeft;

      const closestIndex = children.reduce(
        (closest, child, index) => {
          const element = child as HTMLElement;
          const childCenter = element.offsetLeft + element.offsetWidth / 2;
          const containerCenter = scrollLeft + container.offsetWidth / 2;
          const distance = Math.abs(containerCenter - childCenter);

          return distance < closest.distance ? { index, distance } : closest;
        },
        { index: 0, distance: Infinity }
      ).index;

      setSteps(closestIndex);
    }
  };

  useEffect(() => {
    const container = stepContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <>
      <div
        ref={stepContainerRef}
        className="flex gap-5 overflow-x-scroll snap-x snap-mandatory scrollbar-hide text-[25px] leading-[29.75px] font-medium text-50 w-full px-14"
      >
        {children}
      </div>

      <div className="flex items-center justify-center gap-[18px]">
        {[
          { icon: <ArrowLeftCircleIcon />, onClick: prev, disabled: !canGoBack },
          { icon: <ArrowRightCircleIcon />, onClick: next, disabled: !canGoNext },
        ].map(({ icon, onClick, disabled }, index) => (
          <DWClickAnimation
            key={index}
            onClick={onClick}
            className={classNames('transition-all duration-500', {
              'opacity-50 pointer-events-none': disabled,
            })}
          >
            {icon}
          </DWClickAnimation>
        ))}
      </div>
    </>
  );
};

export default DWHorizontalSnapScroll;
