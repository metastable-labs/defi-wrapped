interface StepProps {
  onNext?: () => void;
  onPrev?: () => void;
  setFooterTextColor?: (color: string) => void;
  setShouldTransitionToSix?: (shouldTransition: boolean) => void;
}

interface HeaderProps {
  step: number;
  timer: number;
  totalSteps: number;
}
