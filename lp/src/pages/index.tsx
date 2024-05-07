import { Divider, Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LinkButton } from "../component/LinkButton";
import TextAnimation from "../component/TextAnimation";
import Slide from "../component/Slide";
import classNames from "classnames";
import Link from "next/link";
import { GradationText } from "../component/GradiationText";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <main>
        <div className="mx-auto grid w-full max-w-5xl gap-6 p-5 text-white">
          <img
            src="botreasure.svg"
            alt="botreasure logo"
            className="my-3 w-full bg-white"
          />
          <section id="catchphrase" className="heading w-ful mx-auto">
            <GradationText>
              <TextAnimation section="catchphrase" className="text-start">
                全てのゲームを過去にする。
              </TextAnimation>
            </GradationText>
          </section>
          <div className="flex w-full items-center justify-center object-cover">
            <iframe
              className="h-[300px] w-full sm:h-[500px]"
              src="https://www.youtube.com/embed/E0NgJ-HGQCA?si=W54-rCnFJDX-3O4C" // ここを変更
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="m-4 text-center">
            <LinkButton href="">体験する！</LinkButton>
          </div>
          <div
            className="scrollBarHidden scrollbar-none scrollbar-none flex items-end gap-16 overflow-x-scroll whitespace-nowrap sm:overflow-x-auto"
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
          <section className="heading my-3 text-center text-3xl">
            <GradationText>BOTREASUREとは</GradationText>
          </section>
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
          >
            <div className="mx-auto grid">
              <GradationText>
                <h1 className="heading my-3 text-center text-3xl">
                  ランダムな時間でプリンターから
                  <br />
                  ヒントが出てくるぞ！
                </h1>
              </GradationText>
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
            </div>
          </Grid>
        </div>

        <Divider className="bg-gray-600" />

        <div className="border-none bg-white text-center">
          <Grid
            container
            direction={isMobile ? "column" : "row-reverse"}
            justifyContent="center"
            alignItems="center"
            className="mx-auto max-w-5xl gap-10 p-5 text-black"
          >
            <div className="mx-auto grid">
              <GradationText>
                <h1 className="heading my-3 text-center text-3xl">
                  味方同士で
                  <br />
                  チャットが可能！
                </h1>
              </GradationText>
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
          >
            <div className="mx-auto grid">
              <GradationText>
                <h1 className="heading my-3 text-center text-3xl">
                  捕まったシーカーを
                  <br />
                  救助しよう！
                </h1>
              </GradationText>
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
            >
              <div className="mx-auto grid">
                <GradationText>
                  <h1 className="heading my-3 text-center text-3xl">
                    オーナーがプリンターに近づきすぎると
                    <br />
                    スキャナが無効化！
                  </h1>
                </GradationText>
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
        >
          <div className="mx-auto grid">
            <GradationText>
              <h1 className="heading my-3 text-center text-3xl">
                BOTREASURE ゲームルールブック
              </h1>
            </GradationText>
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
        >
          <div className="mx-auto">
            <GradationText>
              <h1 className="heading my-3 text-center text-3xl">
                あなたの冒険を始めよう
              </h1>
            </GradationText>
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
