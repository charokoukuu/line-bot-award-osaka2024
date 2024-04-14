export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      さあ、ゲームを始めよう！
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
      <a href="/qr">
        <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          QRコード読み取り
        </button>
      </a>
    </main>
  );
}
