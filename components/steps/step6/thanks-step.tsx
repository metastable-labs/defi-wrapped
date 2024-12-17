import classNames from 'classnames';

import Logo from '@/assets/logo';
import Pop from '@/assets/pop';
import { DWClickAnimation } from '@/components/UI';
import useOffsetValue from '@/hooks/useOffsetValue';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { ReplayIcon } from '@/public/icons';

const ThanksStep = ({ replay, setShowSummary }: IThankStep) => {
  const {
    appState: { windowInnerHeight },
  } = useSystemFunctions();

  const paddingTop = useOffsetValue(windowInnerHeight!, {
    small: 0.1,
    medium: 0.15,
    large: 0.2,
  });

  const actions = [
    { title: 'View Summary', onClick: () => setShowSummary(true) },
    { title: 'Replay', onClick: replay, icon: <ReplayIcon /> },
  ];

  return (
    <div
      className="overflow-hidden relative flex flex-col justify-between h-full gap-7 pb-16"
      style={{ height: `${windowInnerHeight!}px`, maxHeight: `${windowInnerHeight!}px`, paddingTop }}
    >
      <div className="w-full absolute top-6 left-0 flex items-center justify-center z-50">
        <h5 className="text-black text-lg font-medium text-center">DeFi Wrapped</h5>
      </div>

      <div className="flex flex-col gap-4 items-center relative z-10">
        <p
          className={classNames('text-50 font-medium text-center', {
            'text-38': windowInnerHeight! >= 800,
            'text-[32px] leading-[34.28px]': windowInnerHeight! < 800,
            'text-[30px] leading-[32.28px]': windowInnerHeight! < 750,
          })}
        >
          Thank you for <br /> being based!
        </p>

        <div className="flex flex-col gap-2">
          {actions.map(({ onClick, title, icon }, index) => (
            <DWClickAnimation
              key={index}
              className={classNames('w-[212px] px-20 rounded-[33px] border-[1.5px] border-50 flex items-center justify-center', {
                'bg-300': index == 0,
                'bg-1050': index == 1,
                'h-[66px]': windowInnerHeight! >= 800,
                'h-[56px]': windowInnerHeight! < 800,
                'h-[48px]': windowInnerHeight! < 750,
                'gap-1': icon,
              })}
              onClick={onClick}
            >
              {icon && <div className="min-w-fit">{icon}</div>}
              <span
                className={classNames('text-50 text-center font-bold whitespace-nowrap', {
                  'text-[18px] leading-[23.76px]': windowInnerHeight! > 750,
                  'text-[15px] leading-[18.76px]': windowInnerHeight! < 750,
                })}
              >
                {title}
              </span>
            </DWClickAnimation>
          ))}
        </div>
      </div>

      <div className="-mt-16 relative z-0">
        <Pop />
      </div>

      <div className="w-full absolute left-0 bottom-3 flex flex-col items-center gap-3 z-50">
        <div>
          <Logo />
        </div>

        <a href="https://useliquid.xyz" target="_blank" className="text-xs font-medium text-150">
          Powered by useliquid.xyz
        </a>
      </div>
    </div>
  );
};

export default ThanksStep;
