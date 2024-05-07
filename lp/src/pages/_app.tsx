import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../component/Header";
import Footer from "../component/Footer";
import Head from "next/head";
import "@/styles/Slides.css";
import "swiper/css";
import "swiper/css/pagination";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BOTREASURE LP</title>
        <meta
          name="description"
          content="BOTREASUREは、オーナーとシーカーに分かれた参加者が宝を巡って競い合うゲームです。オーナーは宝を隠し、シーカーはそれを見つけ出します。双方が戦略と推理を駆使して勝利を目指します。さぁ今すぐ冒険を始めよう。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/PulluP-mini-logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="BOTREASURE LP" />
        <meta
          property="og:description"
          content="BOTREASUREは、オーナーとシーカーに分かれた参加者が宝を巡って競い合うゲームです。オーナーは宝を隠し、シーカーはそれを見つけ出します。双方が戦略と推理を駆使して勝利を目指します。さぁ今すぐ冒険を始めよう。"
        />
        <meta property="og:url" content="https://botreasure.com" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/line-bot-award-osaka2024.appspot.com/o/assets%2FBOTREASURE_ogp.png?alt=media&token=a3b6fa12-2a3c-4ed7-8916-5e6ba0370b73"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:site" content="@runticket21" />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/line-bot-award-osaka2024.appspot.com/o/assets%2FBOTREASURE_ogp.png?alt=media&token=a3b6fa12-2a3c-4ed7-8916-5e6ba0370b73"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
