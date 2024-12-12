'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Step1, Step2, Step3, Step4, Step5, Step6 } from '@/components/steps';
import Logo from '@/assets/logo';
import Clouds from '@/assets/clouds';
import { appearAnimation } from '@/utils/helpers';

export default function Home() {
  const [step, setStep] = useState(0);
  const [shouldTransitionToSix, setShouldTransitionToSix] = useState(false);
  const [footerTextColor, setFooterTextColor] = useState('text-150');
  const [showStepFiveLastStep, setShowStepFiveLastStep] = useState(false);

  const steps = [
    <Step1 key={0} />,
    <Step2 key={1} onNext={() => handleStep(2)} />,
    <Step3 key={2} onNext={() => handleStep(3)} />,
    <Step4 key={3} onNext={() => handleStep(4)} />,
    <Step5
      showStepFiveLastStep={showStepFiveLastStep}
      key={4}
      setFooterTextColor={setFooterTextColor}
      setShouldTransitionToSix={setShouldTransitionToSix}
      setShowStepFiveLastStep={setShowStepFiveLastStep}
    />,
    <Step6
      key={5}
      onPrev={() => {
        setTimeout(() => {
          setStep((prev) => Math.max(prev - 1, 0));
          setShouldTransitionToSix(false);
          setShowStepFiveLastStep(true);
        }, 100);
      }}
      setShouldTransitionToSix={setShouldTransitionToSix}
    />,
  ];

  const handleStep = (nextStep: number) => {
    setStep(nextStep);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step === 0) {
        setStep(1);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [step]);

  useEffect(() => {
    if (shouldTransitionToSix) {
      setStep(5);
      setFooterTextColor('text-50');
    }
  }, [shouldTransitionToSix]);

  return (
    <div className="relative md:bg-black md:w-full md:max-h-screen md:flex md:justify-center p-0 m-0 overflow-hidden">
      <div className="relative md:w-[395px] 2xl:w-96 md:self-center md:rounded-md h-full overflow-hidden">
        <AnimatePresence mode="wait">
          {step >= 1 && step <= 3 && (
            <motion.div
              key="header"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full absolute top-6 left-0 flex items-center justify-center z-50"
            >
              <h5 className="text-black text-lg font-medium text-center">DeFi Wrapped</h5>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="popLayout">
          <motion.div key={`step-${step}`} {...appearAnimation}>
            {steps[step]}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {step === 3 && (
            <motion.div
              key="clouds"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full absolute top-[20%] left-0"
            >
              <Clouds fill="#B8D5FF" />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {step >= 1 && (
            <motion.div
              key="footer"
              initial={{ opacity: 0, bottom: '24px' }}
              animate={{
                opacity: 1,
                bottom: step === 4 ? '16px' : '24px',
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full absolute left-0 flex flex-col items-center gap-3 z-50"
            >
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: step >= 4 ? 0 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Logo />
              </motion.div>
              <a href="https://useliquid.xyz" target="_blank" className={`text-xs font-medium ${footerTextColor}`}>
                Powered by useliquid.xyz
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
