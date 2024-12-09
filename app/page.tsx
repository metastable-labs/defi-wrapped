'use client';

import { useEffect, useState } from 'react';

import Step1 from '@/components/step1';
import Step2 from '@/components/step2';
import Step3 from '@/components/step3';

export default function Home() {
  const [step, setStep] = useState(0);

  const handleStep = () => {
    setStep((step) => step + 1);
  };

  const steps = [<Step1 key={0} />, <Step2 key={1} handleStep={handleStep} />, <Step3 key={2} />];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (step === 0) {
        handleStep();
      }
    }, 3500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="md:bg-black md:w-full md:max-h-screen md:flex md:justify-center p-0 m-0">
      <div className="md:w-[395px] 2xl:w-96 md:self-center md:rounded-md">{steps[step]}</div>
    </div>
  );
}
