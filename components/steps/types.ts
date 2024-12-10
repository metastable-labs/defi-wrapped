interface StepProps {
  onNext?: () => void;
  setFooterTextColor?: (color: string) => void;
}

interface HeaderProps {
  step: number;
  timer: number;
  totalSteps: number;
}
