import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

interface AnimatedBoxProps {
  isVisible: boolean;
  children: React.ReactNode;
}

const AnimatedBox = ({ isVisible, children }: AnimatedBoxProps) => {
  const boxRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      TweenMax.to(boxRef.current, 0.5, {
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
      });
    }
  }, [isVisible]);

  return (
    <div
      ref={boxRef}
      style={{
        opacity: 0,
        transform: "translateY(50px)",
        transition: "opacity .3s ease-in-out, transform .3s ease-in-out",
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedBox;
