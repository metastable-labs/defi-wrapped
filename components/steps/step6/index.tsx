import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import useSystemFunctions from '@/hooks/useSystemFunctions';
import ThanksStep from './thanks-step';
import Summary from './summary';
import { appearAnimation } from '@/utils/helpers';
import Clouds from '@/assets/clouds';

const Step6 = ({ onPrev, setShouldTransitionToSix }: StepProps) => {
  const {
    appState: { windowInnerHeight },
  } = useSystemFunctions();
  const [showSummary, setShowSummary] = useState(false);

  const steps = [
    <ThanksStep key={0} replay={onPrev!} setShowSummary={setShowSummary} />,
    <Summary key={1} onPrev={onPrev} setShouldTransitionToSix={setShouldTransitionToSix} />,
  ];

  return (
    <div
      className="bg-background-250 overflow-hidden relative"
      style={{ height: `${windowInnerHeight!}px`, maxHeight: `${windowInnerHeight!}px` }}
    >
      <AnimatePresence mode="popLayout">
        <motion.div {...appearAnimation} key={+showSummary} className="relative z-10">
          {steps[+showSummary]}
        </motion.div>
      </AnimatePresence>

      <div className="w-full h-full absolute top-0 left-0">
        <Clouds fill="#C2D6FF" numberOfClouds={6} />
      </div>
    </div>
  );
};

export default Step6;
