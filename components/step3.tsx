import Logo from '@/assets/logo';
import Image from 'next/image';

const Step3 = () => {
  return (
    <div className="bg-background-250 h-screen max-h-screen overflow-hidden flex flex-col justify-between">
      <div className="pt-10 flex flex-col justify-center">
        <h5 className="text-black text-lg font-medium text-center">DeFi Wrapped</h5>

        <div className="relative flex justify-center mt-[120px]">
          <div className="absolute">
            <Image alt="animation loader" src="/animation.svg" width={220} height={220} />
          </div>

          <p className="text-sm font-medium text-50 w-[45%] text-center z-10 absolute top-60">
            Please wait while we get your information...
          </p>
        </div>
      </div>

      <div className="pb-8 flex flex-col items-center gap-3">
        <Logo />
        <p className="text-xs font-medium text-150">Powered by useliquid.xyz</p>
      </div>
    </div>
  );
};

export default Step3;
