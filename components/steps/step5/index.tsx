import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@/public/icons';
import { DWClickAnimation } from '@/components/UI';
import Clouds from '@/assets/clouds';
import Header from './header';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Step5 from './step5';
import Step6 from './step6';
import Step7 from './step7';
import Step8 from './step8';
import Step9 from './step9';
import Step10 from './step10';
import Step11 from './step11';
import Step12 from './step12';
// import Step13 from './step13';
import Step14 from './step14';
import Step15 from './step15';
import Step16 from './step16';

const getFillColor = (step: number) => {
  if (step <= 2) return '#F0FFCC';
  if (step <= 6) return '#CAC2FF';
  if (step <= 10) return '#C2D6FF';
  return '#FFA6B0';
};

const Step5Wrapper = ({ setFooterTextColor, setShouldTransitionToSix, refresh }: StepProps) => {
  const [step, setStep] = useState(0);
  const [timer, setTimer] = useState(0);

  const {
    appState: { windowInnerHeight },
  } = useSystemFunctions();

  const stepDuration = 8;

  const intervalRef = useRef<number | null>(null);
  const currentStepRef = useRef(0);

  const steps = [
    <Step1 key={0} />,
    <Step2 key={1} />,
    <Step3 key={2} />,
    <Step4 key={3} />,
    <Step5 key={4} />,
    <Step6 key={5} />,
    <Step7 key={6} />,
    <Step8 key={7} />,
    <Step9 key={8} />,
    <Step10 key={9} />,
    // <Step11 key={10} />,
    <Step12 key={11} />,
    // <Step13 key={12} />,
    <Step14 key={13} />,
    <Step15 key={14} />,
    <Step16 key={15} />,
  ];

  const totalSteps = steps.length;

  const resetTimer = () => {
    setTimer(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const next = () => {
    if (currentStepRef.current < totalSteps - 1) {
      resetTimer();
      currentStepRef.current += 1;
      setStep(currentStepRef.current);
    }
  };

  const prev = () => {
    if (currentStepRef.current > 0) {
      resetTimer();
      currentStepRef.current -= 1;
      setStep(currentStepRef.current);
    }
  };

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    let hasMovedToNext = false;

    intervalRef.current = window.setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer >= stepDuration) {
          if (!hasMovedToNext) {
            hasMovedToNext = true;
            next();
          }
          return 0;
        }
        return prevTimer + 0.1;
      });
    }, 100);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  useEffect(() => {
    if (step <= 2) setFooterTextColor?.('text-150');
    if (step > 2) setFooterTextColor?.('text-700');

    if (step === totalSteps - 1) {
      const timeout = setTimeout(() => {
        setShouldTransitionToSix?.(true);
      }, stepDuration * 1000);

      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, setFooterTextColor, setShouldTransitionToSix]);

  return (
    <div
      className={classNames('flex flex-col relative', {
        'bg-400': step <= 2,
        'bg-450': step > 2 && step <= 6,
        'bg-300': step > 6 && step <= 10,
        'bg-500': step > 10 && step <= 15,
      })}
      style={{ height: `${windowInnerHeight!}px`, maxHeight: `${windowInnerHeight!}px` }}
    >
      <Header step={step} timer={timer} totalSteps={totalSteps} refresh={refresh} />

      <div className="relative z-50 flex-1 w-full flex px-4">
        {[
          { icon: <ArrowLeftCircleIcon />, onClick: prev },
          { icon: <ArrowRightCircleIcon />, onClick: next },
        ].map(({ icon, onClick }, index) => (
          <div
            key={index}
            onClick={onClick}
            className={classNames('w-1/2 flex items-center h-full transition-all duration-500', {
              'justify-end': index === 1,
              'opacity-0 pointer-events-none': (index === 0 && step === 0) || (index === 1 && step === totalSteps - 1),
            })}
          >
            <DWClickAnimation>{icon}</DWClickAnimation>
          </div>
        ))}
      </div>

      <div className="absolute w-full h-full z-10">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            {steps[step]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="w-full h-full absolute top-0 left-0">
        <Clouds fill={getFillColor(step)} numberOfClouds={6} />
      </div>
    </div>
  );
};

export default Step5Wrapper;
