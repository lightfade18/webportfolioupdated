'use client';

// imports
import { useRef, useEffect } from 'react'
import type { Variants } from 'framer-motion';
import { motion, useAnimation, useInView } from 'framer-motion';

interface AnimatorProps {
    children: React.ReactNode;
    variants: Variants;
    className?: string;
    key?: string | number;
}

const Animator: React.FC<AnimatorProps> = ({ children, ...props}) => {
    const control = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
          control.start('visible');
        }
    }, [control, isInView]);

    return (
        <motion.div ref={ref} animate={control} initial='hidden' {...props}>
            {children}
        </motion.div>
    )
}

export default Animator;