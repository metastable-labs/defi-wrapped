import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@/public/icons';
import { DWClickAnimation } from '@/components/UI';
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
import Step13 from './step13';
import Step14 from './step14';
import Step15 from './step15';
import Step16 from './step16';

const Step5Wrapper = ({ setFooterTextColor, setShouldTransitionToSix, showStepFiveLastStep, setShowStepFiveLastStep }: StepProps) => {
  const [step, setStep] = useState(0);
  const [timer, setTimer] = useState(0);
  const totalSteps = 16;
  const stepDuration = 4;

  const intervalRef = useRef<number | null>(null);
  const currentStepRef = useRef(0);
  const allowAdvanceRef = useRef(true);
  const transitionPendingRef = useRef(false); // Prevent double updates

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
    <Step11 key={10} />,
    <Step12 key={11} />,
    <Step13 key={12} />,
    <Step14 key={13} />,
    <Step15 key={14} />,
    <Step16 key={15} />,
  ];

  const next = () => {
    if (currentStepRef.current < totalSteps - 1 && allowAdvanceRef.current) {
      allowAdvanceRef.current = false;
      currentStepRef.current += 1;
      setStep(currentStepRef.current);
      setTimer(0);

      setTimeout(() => {
        allowAdvanceRef.current = true;
      }, 100);
    }
  };

  const prev = () => {
    if (currentStepRef.current > 0) {
      if (currentStepRef.current === totalSteps - 1) {
        setShouldTransitionToSix?.(false);
      }
      currentStepRef.current -= 1;
      setStep(currentStepRef.current);
      setTimer(0);
    }
  };

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (currentStepRef.current < totalSteps) {
      intervalRef.current = window.setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer < stepDuration) {
            return prevTimer + 0.1;
          } else if (currentStepRef.current < totalSteps - 1) {
            // Advance to the next step if not the last step
            next();
            return 0;
          } else {
            // Handle transition when on the last step and step duration completes
            if (currentStepRef.current === totalSteps - 1 && !transitionPendingRef.current) {
              transitionPendingRef.current = true; // Prevent multiple triggers
              setTimeout(() => {
                setShouldTransitionToSix?.(true);
              }, stepDuration * 1000); // Wait for the step duration
            }
            return prevTimer; // Keep the timer as-is
          }
        });
      }, 100);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  useEffect(() => {
    if (step <= 2) setFooterTextColor?.('text-150');
    if (step > 2) setFooterTextColor?.('text-700');
  }, [step, setFooterTextColor]);

  useEffect(() => {
    if (showStepFiveLastStep) {
      currentStepRef.current = 15;
      setStep(15);
      setShowStepFiveLastStep?.(false);
    }
  }, [showStepFiveLastStep, setShowStepFiveLastStep]);

  return (
    <div
      className={classNames('h-screen max-h-screen overflow-hidden flex flex-col relative', {
        'bg-400': step <= 2,
        'bg-450': (step > 2 && step <= 6) || (step > 10 && step <= 15),
        'bg-300': step > 6 && step <= 10,
        'bg-500': step > 10 && step <= 15,
      })}
    >
      <Header step={step} timer={timer} totalSteps={totalSteps} />

      <div className="relative z-50 flex-1 w-full flex px-4">
        {[
          { icon: <ArrowLeftCircleIcon />, onClick: prev },
          { icon: <ArrowRightCircleIcon />, onClick: next },
        ].map(({ icon, onClick }, index) => (
          <div
            key={index}
            onClick={onClick}
            className={classNames('w-1/2 flex items-center h-full', {
              'justify-end': index === 1,
              invisible: index === 0 && step === 0,
            })}
          >
            <DWClickAnimation>{icon}</DWClickAnimation>
          </div>
        ))}
      </div>

      <div className="absolute w-full h-full">
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
    </div>
  );
};

export default Step5Wrapper;
