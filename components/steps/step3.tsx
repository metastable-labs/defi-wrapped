import { useEffect } from 'react';
import Image from 'next/image';

const Step3 = ({ onNext }: StepProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext?.();
    }, 4000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-background-250 h-screen max-h-screen overflow-hidden flex flex-col pt-40 items-center gap-4">
      <Image alt="animation loader" src="/images/loading.gif" width={220} height={220} />
      <p className="text-sm font-medium text-50 w-[45%] text-center">Please wait while we get your information...</p>
    </div>
  );
};

export default Step3;
