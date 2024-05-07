import classNames from "classnames";
import { useInView } from "react-intersection-observer";

export const GradationText = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { children, className } = props;
  const { ref, inView } = useInView({
    rootMargin: "-30% 0% -30% 0%",
  });
  return (
    <div
      ref={ref}
      className={classNames(
        "bg-gradient-to-r from-blue-700 from-10% via-sky-400 via-30% to-blue-600 to-90% bg-clip-text",
        inView ? "animate-gradient" : "",
        className
      )}
    >
      {children}
    </div>
  );
};
