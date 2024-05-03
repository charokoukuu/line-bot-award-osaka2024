import { useState, useEffect } from "react";

type useIntersectionObServerArgs = {
  target: React.RefObject<Element>;
  rootMargin?: string;
  threshold?: number[];
};

export type useIntersectionObServerResult = {
  isVisible: boolean;
  intersectionRatio: number;
};

const useIntersectionObServer = ({
  target,
  rootMargin = "0px",
  threshold = [1.0],
}: useIntersectionObServerArgs): useIntersectionObServerResult => {
  const [isVisible, setIsVisible] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState(0);

  useEffect(() => {
    if (!target.current) return;

    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        setIntersectionRatio(entry.intersectionRatio);
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin, threshold }
    );

    observer.observe(target.current);

    return () => observer.disconnect();
  }, [target, rootMargin, threshold]);

  return { isVisible, intersectionRatio: intersectionRatio * 100 };
};

export default useIntersectionObServer;
