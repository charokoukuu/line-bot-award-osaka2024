import { Divider, Grid } from "@mui/material";
import Head from "next/head";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LinkButton } from "../component/LinkButton";
import { PayCardList } from "../component/PayCardList";
import { YouTubeMovie } from "../component/YouTubeMovie";
import useIntersectionObServer from "../hooks/useIntersectionObServer";
import { useEffect, useRef } from "react";
import TextAnimation from "../component/TextAnimation";
import AnimatedBox from "../component/AnimatedBox";
import { LeftImageContent } from "../component/contents/LeftImageContent";

export default function Home() {
  const targetRef = useRef(null);
  const threshold = [new Array(100).fill(0).map((_, i) => i / 100)].flat();
  const pay = useRef(null);
  const qr = useRef(null);
  const beta = useRef(null);
  const { intersectionRatio } = useIntersectionObServer({
    target: targetRef,
    rootMargin: "-300px 0px 0px 0px",
    threshold: threshold,
  });

  const observerPay = useIntersectionObServer({
    target: pay,
    rootMargin: "0px",
    threshold: [0.5],
  });
  const observerQr = useIntersectionObServer({
    target: qr,
    rootMargin: "0px",
    threshold: [0.5],
  });
  const observerBeta = useIntersectionObServer({
    target: beta,
    rootMargin: "0px",
    threshold: [0.5],
  });

  const isMobile = useMediaQuery("(max-width: 600px)");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let requestId: number | null = null;
    let scrollSpeed = 0.8;
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollWidth, clientWidth } = containerRef.current;
        containerRef.current.scrollLeft += scrollSpeed;
        if (containerRef.current.scrollLeft >= scrollWidth - clientWidth) {
          scrollSpeed = 0;
        }
      }
      requestId = requestAnimationFrame(handleScroll);
    };

    handleScroll();
    return () => {
      if (requestId) cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <>
      <main>
        <div className="mx-auto grid w-full max-w-5xl gap-6 p-5 text-white">
          <h1 className="japanese_thin my-3 text-3xl">モバイルオーダー</h1>
          <img src="runticket.png" alt="RunTicket" className="my-3 w-96 " />
          <section
            id="catchphrase"
            ref={targetRef}
            style={{
              backgroundImage: `linear-gradient(45deg,rgb(37, 47, 255) ${
                0 - intersectionRatio
              }%,rgb(124, 192, 226) ${
                100 - intersectionRatio
              }%,rgb(37, 47, 255) ${200 - intersectionRatio}%)`,
            }}
            className="heading w-full"
          >
            <TextAnimation section="catchphrase" className="text-start">
              スムーズな決済。スピーディーに注文。モバイルオーダーRunTicketで学食を快適に。
            </TextAnimation>
          </section>
          <div className="m-4 text-center">
            <LinkButton>Get Started</LinkButton>
          </div>
          <div
            className="scrollBarHidden scrollbar-none scrollbar-none flex items-end gap-16 overflow-x-scroll whitespace-nowrap sm:overflow-x-auto"
            ref={containerRef}
            style={{
              justifyContent: isMobile ? "flex-start" : "center",
            }}
          >
            <img
              src="menu.png"
              alt="pay image"
              className="mt-5 h-auto w-[200px] flex-shrink-0 justify-center object-contain"
            />
            <img
              src="restaurant.png"
              alt="pay image"
              className="h-auto w-[400px] flex-shrink-0 object-contain"
            />
          </div>
        </div>
        <div className="m-3 mx-auto flex max-w-5xl items-center justify-center">
          <YouTubeMovie />
        </div>

        <Divider className="bg-gray-600" />
        <div ref={pay}>
          <LeftImageContent
            observer={observerPay}
            isMobile={isMobile}
            id={"pay"}
            title={"スムーズな決済"}
            image={"pay.png"}
          >
            様々な電子決済に対応。もう財布を出す必要はありません。
            お気に入りの決済方法を選んで、スムーズに支払いを完了しましょう。
          </LeftImageContent>
        </div>

        <div className="japanese_thin border-none bg-white text-center">
          対応している決済方法
          <div className="h-30 flex w-full items-center justify-center border-none bg-white">
            <PayCardList />
          </div>
        </div>

        <Divider className="bg-gray-600" />
        <Grid
          container
          direction={isMobile ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
          className="mx-auto max-w-5xl gap-10 p-5 text-white"
          ref={qr}
        >
          <div className="mx-auto grid">
            <h1
              className="heading my-3 text-center text-3xl"
              style={{
                backgroundImage: `linear-gradient(45deg,rgb(37, 47, 255) ${
                  0 - observerQr.intersectionRatio
                }%,rgb(124, 192, 226) ${
                  100 - observerQr.intersectionRatio
                }%,rgb(37, 47, 255) ${200 - observerQr.intersectionRatio}%)`,
              }}
            >
              スピーディーに注文
            </h1>
            <section id="speedy" className="japanese_thin max-w-[320px]">
              <TextAnimation section="speedy">
                もうあの長い列に並ぶ必要はありません。事前に注文しておけば、スピーディーに料理を受け取ることが可能です。
              </TextAnimation>
            </section>
          </div>
          <AnimatedBox isVisible={observerQr.intersectionRatio > 50}>
            <div className="mx-auto grid">
              <img src="qr.png" alt="qr image" className="mx-auto w-80" />
            </div>
          </AnimatedBox>
        </Grid>
        <Divider className="bg-gray-600" />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className="mx-auto max-w-5xl gap-10 p-5 text-white"
          ref={beta}
        >
          <div className="mx-auto">
            <h1
              className="heading my-3 text-center text-3xl"
              style={{
                backgroundImage: `linear-gradient(45deg,rgb(37, 47, 255) ${
                  0 - observerBeta.intersectionRatio
                }%,rgb(124, 192, 226) ${
                  100 - observerBeta.intersectionRatio
                }%,rgb(37, 47, 255) ${200 - observerBeta.intersectionRatio}%)`,
              }}
            >
              オーダーを開始する
            </h1>
            <section id="beta" className="japanese_thin max-w-[320px]">
              <TextAnimation section="beta">
                アプリダウンロードは不要です。
                <br />
                さあ、今すぐRunTicketを始めよう。
              </TextAnimation>
            </section>
          </div>
        </Grid>
        <AnimatedBox isVisible={observerBeta.intersectionRatio > 50}>
          <div className="flex items-center justify-center py-12">
            <LinkButton>Get Started</LinkButton>
          </div>
        </AnimatedBox>
      </main>
    </>
  );
}
