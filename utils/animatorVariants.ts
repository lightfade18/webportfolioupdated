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
        transition: { type: 'linear', duration: 0.5 },
        ...visible,
      },
      hidden: { scale: 0.5, opacity: 0, ...hidden },
    };
  },
};

export default animatorVariants;