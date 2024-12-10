'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Step1, Step2, Step3, Step4, Step5 } from '@/components/steps';
import { Step } from '@/components/UI/step-cascade';
import Logo from '@/assets/logo';
import Clouds from '@/assets/clouds';

export default function Home() {
  const [step, setStep] = useState(0);
  const [footerTextColor, setFooterTextColor] = useState('text-150');

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

        <AnimatePresence mode="wait">
          {step === 0 && (
            <Step key="step1" enter="rtl" exit="rtl" variant="primary">
              <Step1 />
            </Step>
          )}
          {step === 1 && (
            <Step key="step2" enter="rtl" exit="rtl" variant="secondary">
              <Step2 onNext={() => handleStep(2)} />
            </Step>
          )}
          {step === 2 && (
            <Step key="step3" enter="rtl" exit="rtl" variant="primary">
              <Step3 onNext={() => handleStep(3)} />
            </Step>
          )}

          {step === 3 && (
            <Step key="step4" enter="rtl" exit="rtl" variant="primary">
              <Step4 onNext={() => handleStep(4)} />
            </Step>
          )}

          {step === 4 && (
            <Step key="step5" enter="rtl" exit="rtl" variant="primary">
              <Step5 setFooterTextColor={setFooterTextColor} />
            </Step>
          )}
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
                animate={{ opacity: step === 4 ? 0 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Logo />
              </motion.div>
              <p className={`text-xs font-medium ${footerTextColor}`}>Powered by useliquid.xyz</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
