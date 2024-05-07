import { ReactElement, useCallback } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  section: string;
  className?: string;
};

const TextAnimation = (props: Props): ReactElement => {
  const textRef = useCallback(
    (node: any) => {
      if (node !== null) {
        const text = node.innerHTML; //テキストを読み込む
        const height = node.clientHeight; //高さを取得する
        node.innerHTML = ""; //テキストを削除する
        node.style.height = height + "px"; //高さを設定する
        setAnimation(text);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const setAnimation = (text: any) => {
    const numText = text.length;
    const selector = "#" + props.section;

    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(`${selector} .animation-text`, {
      duration: numText * 0.07,
      text: {
        value: text,
      },
      ease: "none",
      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
        end: "bottom 40%",
      },
    });
  };

  return (
    <div
      ref={textRef}
      className={classNames("animation-text", props.className)}
    >
      {props.children}
    </div>
  );
};

export default TextAnimation;
