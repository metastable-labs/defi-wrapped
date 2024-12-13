import { motion } from 'framer-motion';
import classNames from 'classnames';

const DWButton = ({ title, disabled, loading, onClick, variant = 'primary', bounceOnRender }: IDWButton) => (
  <motion.button
    disabled={disabled || loading}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    type="button"
    className={classNames('text-lg font-bold border-[1.5px] h-[69px] px-20 rounded-full text-50', {
      'bg-background-200 border-200 text': variant === 'primary',
      'bg-300 border-50': variant === 'secondary',
    })}
    initial={bounceOnRender ? { y: -100, opacity: 0 } : undefined}
    animate={bounceOnRender ? { y: 0, opacity: 1 } : undefined}
    transition={
      bounceOnRender
        ? {
            type: 'spring',
            stiffness: 500,
            damping: 20,
            opacity: { duration: 0.3 },
          }
        : undefined
    }
  >
    {title}
  </motion.button>
);

export default DWButton;
