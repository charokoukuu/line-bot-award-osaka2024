import { Divider, Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LinkButton } from "../component/LinkButton";
import { PayCardList } from "../component/PayCardList";
import useIntersectionObServer from "../hooks/useIntersectionObServer";
import { useEffect, useRef } from "react";
import TextAnimation from "../component/TextAnimation";
import AnimatedBox from "../component/AnimatedBox";
import Slide from "../component/Slide";

const slides = [
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
];

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
            className="heading w-full"
          >
            <TextAnimation section="catchphrase" className="text-start">
              全てのゲームを過去にする。
            </TextAnimation>
          </section>
          <div className="m-4 text-center">
            <LinkButton>体験する！</LinkButton>
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
        <div className="flex w-full flex-row items-center justify-center gap-0">
          <Slide slides={slides} className="" />
        </div>
        <Divider className="bg-gray-600" />
        {/* ここに大きいセクションで「BOTREASUREをさらに面白くする４つのシステム」 */}
        <div className="border-none bg-white text-center">
          {/* 文字大きくしたい */}
          <Grid
            container
            direction={isMobile ? "column" : "row"}
            justifyContent="center"
            alignItems="center"
            className="mx-auto max-w-5xl gap-10 p-5 text-black"
            ref={qr}
          >
            <AnimatedBox isVisible={observerQr.intersectionRatio > 50}>
              <div className="mx-auto grid">
                <img
                  src="gif/print-hint.gif"
                  alt="print hint"
                  className="mx-auto w-80 rounded-xl"
                />
                {/* スライドで作ってたヒントのメリットデメリットの出してる画像 */}
              </div>
            </AnimatedBox>
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
              <section id="hint" className="max-w-[320px]">
                <TextAnimation section="hint">
                  ヒントか出ることによってプリンターに人が集まる！
                  オーナーは一網打尽のチャンス！シーカーはヒントを入手し宝を手に入れろ！
                </TextAnimation>
              </section>
            </div>
          </Grid>
          <div className="h-30 flex w-full items-center justify-center border-none bg-white">
            <PayCardList />
            {/* ヒント画像 */}
          </div>
        </div>

        <Divider className="bg-gray-600" />

        <div className="border-none bg-white text-center">
          チャットモード
          {/* 文字大きくしたい */}
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
                LINEアプリから味方同士で
                <br />
                チャットが可能！
              </h1>
              <section id="chat" className="max-w-[320px]">
                <TextAnimation section="chat">
                  チャットを駆使し、味方と情報を共有し連携しよう！
                </TextAnimation>
              </section>
            </div>
            <AnimatedBox isVisible={observerQr.intersectionRatio > 50}>
              <div className="mx-auto grid">
                <img src="qr.png" alt="qr image" className="mx-auto w-80" />
                {/* ここはチャットで連携や情報共有をしている様子*/}
              </div>
            </AnimatedBox>
          </Grid>
        </div>

        <Divider className="bg-gray-600" />

        <div className="border-none bg-white text-center">
          解放システム
          {/* 文字大きくしたい */}
          <Grid
            container
            direction={isMobile ? "column" : "row"}
            justifyContent="center"
            alignItems="center"
            className="mx-auto max-w-5xl gap-10 p-5 text-black"
            ref={qr}
          >
            <AnimatedBox isVisible={observerQr.intersectionRatio > 50}>
              <div className="mx-auto grid">
                <img src="qr.png" alt="qr image" className="mx-auto w-80" />
                {/*解放用QRを読み取っている様子と救助した後に解放されている様子*/}
              </div>
            </AnimatedBox>
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
              <section id="rescure" className="max-w-[320px]">
                <TextAnimation section="rescure">
                  オーナーに捕まると檻に入れられる。しかし、生存しているシーカーが檻にあるQRコードを読み取ることで、檻が解放される！
                </TextAnimation>
              </section>
            </div>
          </Grid>
          <Divider className="bg-gray-600" />
          <div className="border-none bg-white text-center">
            接近検知システム
            {/* 文字大きくしたい */}
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
                    }%,rgb(37, 47, 255) ${
                      200 - observerQr.intersectionRatio
                    }%)`,
                  }}
                >
                  オーナーがプリンターに近づきすぎると
                  <br />
                  スキャナが無効化！
                </h1>
                <section id="scan" className="max-w-[320px]">
                  <TextAnimation section="scan">
                    オーナーがプリンターから動かなくて、ヒントが取れない・・・
                    そんな時には、プリンターに接近検知システムがあり、オーナーがプリンターに近づくとスキャナが無効化される！
                  </TextAnimation>
                </section>
              </div>
              <AnimatedBox isVisible={observerQr.intersectionRatio > 50}>
                <div className="mx-auto grid">
                  <img src="qr.png" alt="qr image" className="mx-auto w-80" />
                  {/* プリンターに接近しすぎてスキャンが無効化されいる様子*/}
                </div>
              </AnimatedBox>
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
              BoTreasure ゲームルールブック
            </h1>
            <section id="game-description" className="max-w-[320px]">
              <TextAnimation section="game-description">
                BoTreasureは、オーナーとシーカーに分かれた参加者が宝を巡って競い合うゲームです。オーナーは宝を隠し、シーカーはそれを見つけ出します。双方が戦略と連携を駆使して勝利を目指します。
              </TextAnimation>
            </section>
          </div>
        </Grid>
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
              必要なもの
            </h1>
            <section id="essential" className="max-w-[320px]">
              <TextAnimation section="essential">
                専用サーマルプリンター、宝用QRコードケース、解放用QRコードケース
              </TextAnimation>
            </section>
          </div>
        </Grid>
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
              チーム作成/参加
            </h1>
            <section id="join-event" className="max-w-[320px]">
              <TextAnimation section="join-event">
                ホストの手順 「チーム作成」を選択してチームを作成。
                プレイ人数とオーナーの人数を選択し、合言葉を設定。
                チーム作成が完了すると、その情報が表示され、参加者を待ちます。
                全員が集まったら、ゲームを開始するかどうかを確認し、「プレイする」を選択。
                <br />
                ゲストの手順
                「チーム参加」を選択し、合言葉を入力して部屋に参加します。
                参加が成功すると、その通知が表示されます。
              </TextAnimation>
            </section>
          </div>
          <AnimatedBox isVisible={observerQr.intersectionRatio > 50}>
            <div className="mx-auto grid">
              <img src="qr.png" alt="qr image" className="mx-auto w-80" />
              {/* LINEでのチーム作成している様子やチーム参加している様子 */}
            </div>
          </AnimatedBox>
        </Grid>
        <Divider className="bg-gray-600" />

        <Grid
          container
          direction={isMobile ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
          className="mx-auto max-w-5xl gap-10 p-5 text-white"
          ref={qr}
        >
          <AnimatedBox isVisible={observerQr.intersectionRatio > 50}>
            <div className="mx-auto grid">
              <img src="qr.png" alt="qr image" className="mx-auto w-80" />
              {/* 宝を隠しているところや、qrコードで宝をスキャンしている様子 */}
            </div>
          </AnimatedBox>
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
              ゲーム開始前の準備
            </h1>
            <section id="game-progress" className="max-w-[320px]">
              <TextAnimation section="game-progress">
                「プレイする」が押された後、ランダムで役割が割り振られます。
                <br />
                オーナーの準備
                サーマルプリンターから指定した枚数の宝とシーカー解放に使用するQRコードが発券されます。
                そのQRコードをケースに入れます。
                オーナーは宝を隠し、その場所のヒントとなる写真を撮影します。
                撮影が終了したら準備完了です。
                <br />
                シーカーの役割
                シーカーはオーナーが宝を隠している間、指定された場所で待機します。
              </TextAnimation>
            </section>
          </div>
        </Grid>
        <Divider className="bg-gray-600" />

        <Grid
          container
          direction={isMobile ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
          className="mx-auto max-w-5xl gap-10 p-5 text-white"
          ref={qr}
        >
          <AnimatedBox isVisible={observerQr.intersectionRatio > 50}>
            <div className="mx-auto grid">
              <img src="qr.png" alt="qr image" className="mx-auto w-80" />
              {/* 宝を隠しているところや、qrコードで宝をスキャンしている様子 */}
            </div>
          </AnimatedBox>
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
              ゲーム開始
            </h1>
            <section id="game-progress" className="max-w-[320px]">
              <TextAnimation section="game-progress">
                ゲームが開始されたら、オーナーは宝を取られないように、シーカーを捕まえてください。
                <br />
                シーカーは、オーナーから逃げつつ宝を見つけてQRコードをスキャンしてください。
              </TextAnimation>
            </section>
          </div>
        </Grid>

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
              確保イベント
            </h1>
            <section id="arrest-event" className="max-w-[320px]">
              <TextAnimation section="arrest-event">
                シーカーが捕まった場合、オーナーはシーカーのマイコードをスキャンします。この際、全体チャットに報告されます。
                捕まったシーカーは檻入れられます。
              </TextAnimation>
            </section>
          </div>
        </Grid>
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
              勝利条件
            </h1>
            <section id="report-event" className="max-w-[320px]">
              <TextAnimation section="report-event">
                オーナーの勝利：ゲーム終了時に全ての宝が見つからない場合、またはシーカーのマイコードを全てスキャンした場合。
                <br />
                シーカーの勝利：時間内に全ての宝を見つけ出した場合。
              </TextAnimation>
            </section>
          </div>
        </Grid>

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
              チャットモード
            </h1>
            <section id="chat-mode" className="max-w-[320px]">
              <TextAnimation section="chat-mode">
                ゲームプレイ中はトーク画面がチャットモードに切り替わります。チャットモードでは、味方同士で会話することができ、オーナーはオーナー同士、シーカーはシーカー同士でのみ会話が送信されます。
              </TextAnimation>
            </section>
          </div>
        </Grid>
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
              ヒントシステム
            </h1>
            <section id="hint-timing" className="max-w-[320px]">
              <TextAnimation section="hint-timing">
                ゲーム開始からランダムな時間にプリンターからヒントが出されます。
                これによりシーカーがプリンターに集まり、オーナーは確保のチャンスが上がります。
                シーカーはヒントを入手できることによって宝を見つけやすくなります。
              </TextAnimation>
            </section>
          </div>
        </Grid>
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
              接近検知について
            </h1>
            <section id="proximity-detection" className="max-w-[320px]">
              <TextAnimation section="proximity-detection">
                BLEビーコンを用いて、オーナーが発券機に近づきすぎた場合はペナルティとし、オーナーのマイコードスキャンアプリが一定時間制限されます。これにより、プリンターの真横でオーナーが待機するのを防ぎます。
              </TextAnimation>
            </section>
          </div>
        </Grid>
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
              解放イベント
            </h1>
            <section id="releaset-event" className="max-w-[320px]">
              <TextAnimation section="release-event">
                檻に設置された解放用のQRコードをシーカーが読み取ると「解放されました」と全体チャットに表示され、捕まったシーカー全員が解放されます。
              </TextAnimation>
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
            <section id="beta" className="max-w-[320px]">
              <TextAnimation section="beta">
                LINEにBOTREASUREを友達追加。
                <br />
                さあ、今すぐBoTreasureを始めよう。
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
