import ColorsIcon from '@/assets/colors';
import Logo from '@/assets/logo';

const Step2 = ({ handleStep }: { handleStep: () => void }) => {
  return (
    <div className="bg-background-150 h-screen max-h-screen overflow-hidden flex flex-col justify-between">
      <div className="pt-10 flex flex-col justify-center">
        <h5 className="text-black text-lg font-medium text-center">DeFi Wrapped</h5>

        <div className="relative flex justify-center">
          <div className="absolute">
            <ColorsIcon />
          </div>
        </div>
      </div>

      <div className="gap-40 flex flex-col">
        <div className="flex flex-col items-center gap-[10px] z-50">
          <button
            onClick={handleStep}
            type="button"
            className="bg-background-200 text-lg font-bold border-[1.5px] border-200 h-[69px] px-20 rounded-full"
          >
            Connect Wallet
          </button>

          <p className="text-xs font-medium text-250 w-[45%] text-center">Securely connect your crypto wallet to proceed...</p>
        </div>

        <div className="pb-8 flex flex-col items-center gap-3">
          <Logo />
          <p className="text-xs font-medium text-150">Powered by useliquid.xyz</p>
        </div>
      </div>
    </div>
  );
};

export default Step2;
