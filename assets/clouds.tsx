import { memo } from 'react';
import { motion } from 'framer-motion';

import { CloudIcon } from '@/public/icons';

const Clouds = memo(({ fill = '#B8D5FF', numberOfClouds = 10 }: { fill?: string; numberOfClouds?: number }) => {
  const generateClouds = (count: number) => {
    const clouds = [];
    const halfCount = Math.floor(count / 2);
    let scaleOneCount = 0;

    for (let i = 0; i < count; i++) {
      let scale;
      if (scaleOneCount < 2 && Math.random() > 0.85) {
        scale = 1;
        scaleOneCount++;
      } else {
        scale = Math.random() * 0.35 + 0.65;
      }

      const isLeftToRight = i < halfCount;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      const y = (() => {
        if (i < 2) return `${Math.random() * 10 + 10}%`;
        if (i >= count - 2) return `${Math.random() * 10 + 70}%`;
        return `${Math.random() * 20 + 40}%`;
      })();

      clouds.push({
        id: i,
        x: isLeftToRight ? '-20%' : '110%',
        y,
        scale,
        isLeftToRight,
        duration,
        delay,
      });
    }
    return clouds;
  };

  const clouds = generateClouds(numberOfClouds);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute"
          style={{
            top: cloud.y,
            left: cloud.x,
            scale: cloud.scale,
          }}
          animate={{
            x: cloud.isLeftToRight ? '1100%' : '-1100%',
          }}
          transition={{
            duration: cloud.duration,
            delay: cloud.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <CloudIcon fill={fill} />
        </motion.div>
      ))}
    </div>
  );
});

Clouds.displayName = 'Clouds';

export default Clouds;
