import type { Variants } from 'framer-motion';

const variantDefaultValue = {
  visible: {},
  hidden: {},
}

const animatorVariants = {
  sample({ visible, hidden }: Variants = variantDefaultValue): Variants {
    return {
      visible: {
        scale: 1,
        opacity: 1,
        transition: { type: 'linear', duration: 1 },
        ...visible,
      },
      hidden: { scale: 0.5, opacity: 0, ...hidden },
    };
  },

  motionZoomIn({ visible, hidden }: Variants = variantDefaultValue) {
    return {
      visible: {
        scale: 1,
        opacity: 1,
        transition: { type: 'linear', duration: 1.5 },
        ...visible,
      },
      hidden: { scale: 0.5, opacity: 0, ...hidden },
    };
  },

  motionDownToUp({ visible, hidden }: Variants = variantDefaultValue) {
    return {
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'linear', duration: 1.5 },
        ...visible,
      },
      hidden: { y: 100, opacity: 0, ...hidden },
    };
  },

  motionDownToUpwChil({ visible, hidden }: Variants = variantDefaultValue) {
    return {
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'linear', duration: 1, delayChildren: 1, staggerChildren: 0.2},
        ...visible,
      },
      hidden: { y: 50, opacity: 0, ...hidden },
    };
  },

  motionZoomInwChil({ visible, hidden }: Variants = variantDefaultValue) {
    return {
      visible: {
        scale: 1,
        opacity: 1,
        transition: { type: 'linear', duration: 1, delayChildren: 1, staggerChildren: 0.2},
        ...visible,
      },
      hidden: { scale: 0.75, opacity: 0, ...hidden },
    };
  },
};

export default animatorVariants;