import { Box } from "@chakra-ui/layout";
import { motion, useAnimation } from "framer-motion";
import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box)

export const InviewDom: FC = ({ children }) => {
  const boxVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: [0, 1, 0.5, 1],
      transition: {
        duration: 5,
        times: [0, 0.1, 0.9, 1]
      }
    }
  }
  const controls = useAnimation();
  const { inView, ref } = useInView({
    threshold: [0],
    triggerOnce: false
  });
  useEffect(() => {
    console.log(inView)
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (<MotionBox ref={ref} animate={controls} variants={boxVariants}>
    {children}
  </MotionBox>)

}
