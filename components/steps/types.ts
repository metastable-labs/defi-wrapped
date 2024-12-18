interface StepProps {
  onNext?: () => void;
  onPrev?: () => void;
  setFooterTextColor?: (color: string) => void;
  setShouldTransitionToSix?: (shouldTransition: boolean) => void;
  refresh?: () => void;
}

interface HeaderProps {
  step: number;
  timer: number;
  totalSteps: number;
  refresh?: () => void;
}
