import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@/public/icons';
import Header from './header';
import { DWClickAnimation } from '@/components/UI';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Step5 from './step5';
import Step6 from './step6';
import Step7 from './step7';

const Step5Wrapper = ({ setFooterTextColor }: StepProps) => {
  const [step, setStep] = useState(0);
  const [timer, setTimer] = useState(0);
  const totalSteps = 15;
  const stepDuration = 4;

  const intervalRef = useRef<number | null>(null);
  const currentStepRef = useRef(0);
  const allowAdvanceRef = useRef(true);

  const steps = [
    <Step1 key={0} />,
    <Step2 key={1} />,
    <Step3 key={2} />,
    <Step4 key={3} />,
    <Step5 key={4} />,
    <Step6 key={5} />,
    <Step7 key={6} />,
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
      currentStepRef.current -= 1;
      setStep(currentStepRef.current);
      setTimer(0);
    }
  };

  // useEffect(() => {
  //   if (intervalRef.current) {
  //     clearInterval(intervalRef.current);
  //   }

  //   if (currentStepRef.current < totalSteps) {
  //     intervalRef.current = window.setInterval(() => {
  //       setTimer((prevTimer) => {
  //         if (prevTimer < stepDuration) {
  //           return prevTimer + 0.1;
  //         } else {
  //           next();
  //           return 0;
  //         }
  //       });
  //     }, 100);
  //   }

  //   return () => {
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current);
  //     }
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [step]);

  // useEffect(() => {
  //   if (currentStepRef.current === totalSteps - 1 && timer >= stepDuration) {
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current);
  //       intervalRef.current = null;
  //     }
  //   }
  // }, [timer, step]);

  useEffect(() => {
    if (step <= 2) setFooterTextColor?.('text-150');
    if (step > 2) setFooterTextColor?.('text-700');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

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
