#import "@preview/codetastic:0.2.2": ean13, qrcode

#set page(
  width: 60mm, 
  height: 60mm, 
  margin: 0mm, 
  background: image("./img/yokoyoko_treasure.svg", width: 100%, height: 100%)
)

#let data = json("./qr.json")

#let generateQR(groupName:"",qr:"") = {
  pad(
    10mm,
    align(
      center + horizon,
      [
        #text(size: 12pt, groupName)
        #qrcode(
          qr,
          width:44mm
        )
      ]
    )
  )
}

// qr分のQRコードを生成
#let i = 0
#for qr in data.qr {
  generateQR(
    groupName: data.groupName,
    qr: qr
  )
}
  
// {
//   "keyword": "あいことば",
//   "qr": [
//     "https://github.com/typst/typst",
//     "https://github.com/typst/typst",
//     "https://github.com/typst/typst"
//   ]
// }
