import { Divider, Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LinkButton } from "../component/LinkButton";
import useIntersectionObServer from "../hooks/useIntersectionObServer";
import { useEffect, useRef } from "react";
import TextAnimation from "../component/TextAnimation";
import Slide from "../component/Slide";
import classNames from "classnames";
import Link from "next/link";

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

  // #eed3a8
  // #f2dcb5
  return (
    <>
      <main>
        <div className="mx-auto grid w-full max-w-5xl gap-6 p-5 text-white">
          <img
            src="botreasure.svg"
            alt="botreasure logo"
            className="my-3 w-full bg-white"
          />
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
            className="heading w-ful mx-auto"
          >
            <TextAnimation section="catchphrase" className="text-start">
              全てのゲームを過去にする。
            </TextAnimation>
          </section>
          <div className="m-4 text-center">
            <LinkButton href="">体験する！</LinkButton>
          </div>
          <div
            className="scrollBarHidden scrollbar-none scrollbar-none flex items-end gap-16 overflow-x-scroll whitespace-nowrap sm:overflow-x-auto"
            ref={containerRef}
            style={{
              justifyContent: isMobile ? "flex-start" : "center",
            }}
          >
            <img
              src="gif/print-qr.gif"
              alt="print qr"
              className="h-auto w-64 rounded-xl"
            />
            <img
              src="mock/scanning.png"
              alt="scan mode"
              className="mt-5 h-auto w-[200px] flex-shrink-0 justify-center object-contain"
            />
          </div>
        </div>

        <Divider className="bg-gray-600" />
        <div className="flex flex-col items-center justify-center">
          <h1
            className="heading my-3 text-center text-3xl"
            style={{
              backgroundImage: `linear-gradient(45deg,rgb(37, 47, 255) ${
                0 - observerPay.intersectionRatio
              }%,rgb(124, 192, 226) ${
                100 - observerPay.intersectionRatio
              }%,rgb(37, 47, 255) ${200 - observerPay.intersectionRatio}%)`,
            }}
          >
            BOTREASUREとは
          </h1>
          <section id="pay" className="max-w-[320px] text-white">
            オーナーとシーカーに分かれ参加者が宝を巡って競い合う！
          </section>
        </div>
        <div className="mx-auto max-w-5xl">
          <Slide
            slides={[
              {
                title: "オーナーが宝を隠す",
                image: "pic/hide-qr.png",
                disc: "オーナーは宝を隠し、シーカーを捕まえろ！",
              },
              {
                title: "シーカーが宝を探す",
                image: "mock/scanning.png",
                disc: "シーカーはオーナーから逃げつつ宝を見つけ出せ！",
              },
              {
                title: "勝利を目指せ",
                image: "mock/win-owner.png",
                disc: "双方が戦略と連携を駆使して勝利を目指せ！",
              },
            ]}
            className={classNames("!grid", {
              "grid-cols-1": isMobile,
              "grid-cols-2": !isMobile,
            })}
          />
        </div>
        <Divider className="bg-gray-600" />
        <div className="border-none bg-white text-center">
          <Grid
            container
            direction={isMobile ? "column" : "row"}
            justifyContent="center"
            alignItems="center"
            className="mx-auto max-w-5xl gap-10 p-5 text-black"
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
                ランダムな時間でプリンターから
                <br />
                ヒントが出てくるぞ！
              </h1>
              <section id="hint" className="mx-auto max-w-[320px] text-center">
                ヒントか出ることによってプリンターに人が集まる！
                オーナーは一網打尽のチャンス！シーカーはヒントを入手し宝を手に入れろ！
              </section>
            </div>
            <div className="mx-auto grid">
              <img
                src="gif/print-hint.gif"
                alt="print hint"
                className="mx-auto w-80 rounded-xl"
              />
              {/* スライドで作ってたヒントのメリットデメリットの出してる画像 */}
            </div>
          </Grid>
          {/* <div className="h-30 flex w-full items-center justify-center border-none bg-white">
            todo:ヒント画像
          </div> */}
        </div>

        <Divider className="bg-gray-600" />

        <div className="border-none bg-white text-center">
          <Grid
            container
            direction={isMobile ? "column" : "row-reverse"}
            justifyContent="center"
            alignItems="center"
            className="mx-auto max-w-5xl gap-10 p-5 text-black"
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
                味方同士で
                <br />
                チャットが可能！
              </h1>
              <section id="chat" className="mx-auto max-w-[320px]">
                チャットを駆使し、味方と情報を共有し連携しよう！
              </section>
            </div>
            <div className="mx-auto grid">
              <img
                src="mock/chat-mode.png"
                alt="chat mode"
                className="mx-auto w-80"
              />
            </div>
          </Grid>
        </div>

        <Divider className="bg-gray-600" />

        <div className="border-none bg-white text-center">
          <Grid
            container
            direction={isMobile ? "column" : "row"}
            justifyContent="center"
            alignItems="center"
            className="mx-auto max-w-5xl gap-10 p-5 text-black"
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
                捕まったシーカーを
                <br />
                救助しよう！
              </h1>
              <section
                id="rescue"
                className="mx-auto max-w-[320px] text-center"
              >
                オーナーに捕まると檻に入れられる。しかし、生存しているシーカーが檻にあるQRコードを読み取ることで、檻が解放される！
              </section>
            </div>
            <div className="mx-auto grid">
              <img
                src="mock/rescue-scan.png"
                alt="qr image"
                className="mx-auto w-80"
              />
            </div>
          </Grid>
          <Divider className="bg-gray-600" />
          <div className="border-none bg-white text-center">
            <Grid
              container
              direction={isMobile ? "column" : "row-reverse"}
              justifyContent="center"
              alignItems="center"
              className="mx-auto max-w-5xl gap-10 p-5 text-black"
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
                    }%,rgb(37, 47, 255) ${
                      200 - observerQr.intersectionRatio
                    }%)`,
                  }}
                >
                  オーナーがプリンターに近づきすぎると
                  <br />
                  スキャナが無効化！
                </h1>
                <section id="scan" className="mx-auto max-w-[320px]">
                  オーナーがプリンターから動かなくて、ヒントが取れない・・・
                  そんな時には、プリンターにLINEビーコンを搭載した接近検知システムがあり、オーナーがプリンターに近づくとスキャナが無効化される！
                </section>
              </div>
              <div className="mx-auto grid">
                <img
                  src="mock/disabled-scan.png"
                  alt="qr image"
                  className="mx-auto w-80"
                />
              </div>
            </Grid>
          </div>
        </div>

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
              BOTREASURE ゲームルールブック
            </h1>
            <section id="game-description" className="mx-auto max-w-lg">
              <p>
                BOTREASUREの詳しい
                <span>
                  <Link href="/rule" className="text-blue-400 underline">
                    ルール
                  </Link>
                </span>
                はこちらをご覧ください。
              </p>
            </section>
          </div>
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
              あなたの冒険を始めよう
            </h1>
            <section id="beta" className="mx-auto max-w-[320px] text-center">
              LINEにBOTREASUREを友達追加。
              <br />
              さあ、今すぐBOTREASUREを始めよう。
            </section>
          </div>
        </Grid>
        <div className="flex items-center justify-center py-12">
          <LinkButton href="">Get Started</LinkButton>
        </div>
      </main>
    </>
  );
}
