import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useObserverEffect = () => {
  const [variant, setVariant] = useState("hidden");
  const { ref, inView } = useInView({
    rootMargin: '0px 0px -30px 0px',
    threshold: 0,
    triggerOnce: true,
  });

  // observable to detect current position of a slide
  useEffect(() => {
    if (inView) {
      setVariant("visible");
    } else setVariant("hidden");
  }, [inView,]);
  // observable to detect current position of a slide

  return {
    ref,
    variant
  };
};

export default useObserverEffect;
