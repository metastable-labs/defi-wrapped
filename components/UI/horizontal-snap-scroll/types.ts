interface IDWHorizontalSnapScroll {
  children: React.ReactNode;
  step: number;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
}
