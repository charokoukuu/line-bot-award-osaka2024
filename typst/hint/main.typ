#set text(font: "Stick")

#set page(
  width: 60mm, 
  height: 120mm, 
  margin: 0mm,
  background: image(
    "./img/hogehoge_hint.svg",
    width: 100%, height: 100%
  ),
)
#set par(justify: true)

#pad(
  top: 20mm,
  bottom: 10mm,
  left: 10mm,
  right: 10mm,
  [
   #json("./hint.json").text 
  ],
)

