// utils/animations.ts

export const fadeIn = (delay = 0) => ({
     hidden: { opacity: 0, y: 30 }, // Am pus 30px pentru o mișcare puțin mai vizibilă
     visible: {
          opacity: 1,
          y: 0,
          transition: {
               duration: 0.6,
               ease: "easeOut",
               delay: delay,
          },
     },
});
