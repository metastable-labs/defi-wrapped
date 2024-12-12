interface StepProps {
  onNext?: () => void;
  onPrev?: () => void;
  setFooterTextColor?: (color: string) => void;
  setShouldTransitionToSix?: (shouldTransition: boolean) => void;
  setShowStepFiveLastStep?: (show: boolean) => void;
  showStepFiveLastStep?: boolean;
}

interface HeaderProps {
  step: number;
  timer: number;
  totalSteps: number;
}
