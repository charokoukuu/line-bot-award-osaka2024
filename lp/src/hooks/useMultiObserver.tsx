import { useState, useEffect, RefObject } from "react";

type useIntersectionObserverArgs = {
  targets: RefObject<Element>[];
  rootMargin?: string;
  threshold?: number[];
};

type ObserverResult = {
  isVisible: boolean;
  intersectionRatio: number;
};

const useMultiObserver = ({
  targets,
  rootMargin = "0px",
  threshold = [1.0],
}: useIntersectionObserverArgs): ObserverResult[] => {
  const [results, setResults] = useState<ObserverResult[]>([]);

  useEffect(() => {
    const observers = targets.map((target, index) => {
      if (!target.current) return null;

      const updateResults = (isVisible: boolean, ratio: number) => {
        setResults((prevResults) => {
          const newResults = [...prevResults];
          newResults[index] = { isVisible, intersectionRatio: ratio * 100 };
          return newResults;
        });
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          updateResults(entry.isIntersecting, entry.intersectionRatio);
        },
        { rootMargin, threshold }
      );

      observer.observe(target.current);

      // 結果配列に初期値を設定
      updateResults(false, 0);

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [targets, rootMargin, threshold]);

  return results;
};

export default useMultiObserver;
