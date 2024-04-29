import clsx from "clsx";
import { Stick } from "next/font/google";

const stick = Stick({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-stick",
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-24 p-12 text-2xl">
      <h1 className={clsx(stick.className, "text-3xl font-bold")}>
        BoTreasure
      </h1>
      <div className="flex justify-center items-center gap-4">
        <a href="/host">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            作成する
          </button>
        </a>
        <a href="/guest">
          <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            参加する
          </button>
        </a>
      </div>
      <a href="/scan">
        <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          QRコード読み取り
        </button>
      </a>
    </main>
  );
}
