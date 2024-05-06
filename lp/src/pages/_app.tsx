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
        <title>RunTicket LP</title>
        <meta
          name="description"
          content="学内モバイルオーダー「RunTicket」でスピーディーな注文をしてみませんか？PayPay・クレジット決済・Apple Payなど、様々な支払い方法に対応しています。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/PulluP-mini-logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="RunTicket LP" />
        <meta
          property="og:description"
          content="学内モバイルオーダー「RunTicket」でスピーディーな注文をしてみませんか？PayPay・クレジット決済・Apple Payなど、様々な支払い方法に対応しています。"
        />
        <meta property="og:url" content="https://run-ticket.com" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/runticket-6c269.appspot.com/o/OGP%2Fthumbnail-run-ticket.png?alt=media"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:site" content="@runticket21" />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/runticket-6c269.appspot.com/o/OGP%2Fthumbnail-run-ticket.png?alt=media"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
