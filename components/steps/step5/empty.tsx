import { motion } from 'framer-motion';
import classNames from 'classnames';

import Grumpy from '@/assets/grumpy';
import Sad from '@/assets/sad';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { slideInFromTopToSettle } from '@/utils/helpers';

const icons = {
  primary: <Grumpy />,
  secondary: <Sad />,
};

const EmptyState = ({ title, variant = 'primary' }: IEmptyState) => {
  const {
    appState: { windowInnerHeight },
  } = useSystemFunctions();

  const sharedAnimation = {
    initial: { y: 300, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
    },
    transition: {
      y: { duration: 1, type: 'spring', delay: 0.5 },
      opacity: { duration: 1, delay: 0.5 },
    },
  };

  const variantSpecificAnimation = {
    primary: {
      animate: {
        ...sharedAnimation.animate,
        rotateY: [0, 15, -15, 15, 0],
      },
      transition: {
        ...sharedAnimation.transition,
        rotateY: {
          duration: 1,
          repeat: Infinity,
        },
      },
    },
    secondary: {
      animate: {
        ...sharedAnimation.animate,
        rotate: [0, 5, -5, 5, 0],
      },
      transition: {
        ...sharedAnimation.transition,
        rotate: {
          duration: 1,
          repeat: Infinity,
        },
      },
    },
  };

  return (
    <div
      className={classNames('flex flex-col items-center flex-1 h-full', {
        'justify-center gap-5': variant === 'primary',
        'justify-center gap-12': variant === 'secondary',
      })}
    >
      <motion.div
        {...slideInFromTopToSettle}
        className={classNames('text-50 text-center font-medium max-w-60 flex items-end justify-center', {
          'text-38': windowInnerHeight! >= 800,
          'text-32': windowInnerHeight! < 800,
          'text-[28px] leading-[30.28px]': windowInnerHeight! < 750,
          'flex-1': variant === 'primary',
        })}
      >
        <p>{title}</p>
      </motion.div>

      <motion.div
        initial={sharedAnimation.initial}
        animate={variantSpecificAnimation[variant].animate}
        transition={variantSpecificAnimation[variant].transition}
        className="flex items-center justify-center"
      >
        {icons[variant]}
      </motion.div>
    </div>
  );
};

export default EmptyState;
