import { Grid } from "@mui/material";
import AnimatedBox from "../AnimatedBox";
import TextAnimation from "../TextAnimation";
import { MutableRefObject } from "react";
import { useIntersectionObServerResult } from "@/src/hooks/useIntersectionObServer";

interface Props {
  observer: useIntersectionObServerResult;
  isMobile: boolean;
  id: string;
  title: string;
  image: string;
  children: React.ReactNode;
}
export const LeftImageContent = (props: Props) => {
  return (
    <Grid
      container
      direction={props.isMobile ? "column-reverse" : "row"}
      justifyContent="center"
      alignItems="center"
      className="mx-auto max-w-5xl gap-10 p-5 text-white"
    >
      <AnimatedBox isVisible={props.observer.intersectionRatio > 50}>
        <div className="mx-auto grid">
          <img src={props.image} alt="pay image" className="mx-auto w-80" />
        </div>
      </AnimatedBox>
      <div className="mx-auto grid">
        <h1
          className="heading my-3 text-center text-3xl"
          style={{
            backgroundImage: `linear-gradient(45deg,rgb(37, 47, 255) ${
              0 - props.observer.intersectionRatio
            }%,rgb(124, 192, 226) ${
              100 - props.observer.intersectionRatio
            }%,rgb(37, 47, 255) ${200 - props.observer.intersectionRatio}%)`,
          }}
        >
          スムーズな決済
        </h1>
        <section id={props.title} className="japanese_thin max-w-[320px]">
          <TextAnimation section={props.title}>
            様々な電子決済に対応。もう財布を出す必要はありません。
            お気に入りの決済方法を選んで、スムーズに支払いを完了しましょう。
          </TextAnimation>
        </section>
      </div>
    </Grid>
  );
};
