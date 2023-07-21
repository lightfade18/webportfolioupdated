export const animatorChildren = {
    visible: {
        scale: 1,
        opacity: 1,
        transition: { type: 'linear', duration: 0.5 },
    },
    hidden: { scale: 0.5, opacity: 0 },
};

export const leftchild = {
    visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { type: 'linear', duration: 1 },
    },
    hidden: { x: -210, y: -210, opacity: 0 },
};

export const middlechild = {
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'linear', duration: 1 },
    },
    hidden: { y: -210, opacity: 0 },
};

export const rightchild = {
    visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { type: 'linear', duration: 1 },
    },
    hidden: { x: 210, y: -210, opacity: 0 },
};