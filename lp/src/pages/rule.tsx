import ReactMarkdown from "react-markdown";

const markdown = `
# BOTREASURE ゲームルールブック

## **ゲームの概要**

BOTREASUREは、オーナーとシーカーに分かれた参加者が宝を巡って競い合うゲームです。オーナーは宝を隠し、シーカーはそれを見つけ出します。双方が戦略と推理を駆使して勝利を目指します。

## 必要なもの

専用サーマルプリンター、宝用QRコードケース、解放用QRコードケース

## チーム作成

### **チーム作成者の手順**

「チーム作成」を選択してチームを作成。
プレイ人数とオーナーの人数を選択し、合言葉を設定。
チーム作成が完了すると、その情報が表示され、参加者を待ちます。
全員が集まったら、ゲームを開始するかどうかを確認し、「プレイする」を選択。

### **チーム参加者の手順**
「チーム参加」を選択し、合言葉を入力して部屋に参加します。
参加が成功すると、その通知が表示されます。

## 開始前の準備

「プレイする」が押された後、ランダムで役割が割り振られます。

### **オーナーの準備**

サーマルプリンターから指定した枚数の宝とシーカー解放に使用するQRコードが発券されます。

そのQRコードをケースに入れます。
オーナーは宝を隠し、その場所のヒントとなる写真を撮影します。
撮影が終了したら準備完了です。

### **シーカーの準備**

シーカーはオーナーが宝を隠している間、指定された場所で待機します。

## ゲーム開始

ゲームが開始されたら、オーナーは宝を取られないように、シーカーを捕まえてください。

シーカーは、オーナーから逃げつつ宝を見つけてQRコードをスキャンしてください。

## **確保イベント**

シーカーが捕まった場合、オーナーはシーカーのマイコードをスキャンします。この際、全体チャットに報告されます。
捕まったシーカーは檻入れられます。

## **勝利条件**

オーナーの勝利：ゲーム終了時にすべての宝が見つからない場合、またはシーカーのマイコードをすべてスキャンした場合。
シーカーの勝利：時間内にすべての宝を見つけ出した場合。

## **チャットモード**

ゲームプレイ中はトーク画面がチャットモードに切り替わります。チャットモードでは、味方同士で会話することができ、オーナーはオーナー同士、シーカーはシーカー同士でのみ会話が送信されます。

## **ヒントシステム**

ゲーム開始からランダムな時間にプリンターからヒントが出されます。

これによりシーカーがプリンターに集まり、オーナーは確保のチャンスが上がります。

シーカーはヒントを入手できることによって宝を見つけやすくなります。

## **接近検知について**

BLEビーコンを用いて、オーナーが発券機に近づきすぎた場合はペナルティとし、オーナーのマイコードスキャンアプリが一定時間制限されます。これにより、プリンターの真横でオーナーが待機するのを防ぎます。

## **解放イベント**

檻に設置された解放用のQRコードをシーカーが読み取ると「解放されました」と全体チャットに表示され、捕まったシーカー全員が解放されます。
`;

export default function Rule() {
  return (
    <main className="prose mx-auto max-w-5xl bg-white p-4 prose-headings:my-6 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </main>
  );
}
