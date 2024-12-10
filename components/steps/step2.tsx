import Image from 'next/image';

const Step2 = ({ onNext }: StepProps) => {
  return (
    <div className="bg-background-150 h-screen max-h-screen overflow-hidden flex flex-col relative">
      <div className="relative flex justify-center">
        <Image src={'/images/colors.png'} alt="colors" width={300} height={300} className="object-cover w-full" />
      </div>

      <div className="w-full flex flex-col items-center gap-[10px] z-50 absolute top-[50%] left-0">
        <button
          onClick={onNext}
          type="button"
          className="bg-background-200 text-lg font-bold border-[1.5px] border-200 h-[69px] px-20 rounded-full"
        >
          Connect Wallet
        </button>

        <p className="text-xs font-medium text-250 w-[45%] text-center">Securely connect your crypto wallet to proceed...</p>
      </div>
    </div>
  );
};

export default Step2;
