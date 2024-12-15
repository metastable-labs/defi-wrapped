import { motion } from 'framer-motion';

import { LoadingIcon } from '@/public/icons';

const DWLoader = ({ variant = 'small', color }: IDWLoader) => {
  let width, height;

  switch (variant) {
    case 'xsmall':
      width = 15;
      height = 15;
      break;
    case 'small':
      width = 20;
      height = 20;
      break;
    case 'medium':
      width = 30;
      height = 30;
      break;
    case 'large':
      width = 40;
      height = 40;
      break;
  }

  return (
    <motion.div
      animate={{
        rotate: 360,
        transition: {
          duration: 2,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        },
      }}
    >
      <LoadingIcon color={color} width={width} height={height} />
    </motion.div>
  );
};

export default DWLoader;
