export const hintPublishMessage = () => {
    const contents = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://firebasestorage.googleapis.com/v0/b/line-bot-award-osaka2024.appspot.com/o/background%2FDALL%C2%B7E%202024-04-23%2019.47.36%20-%20An%20intriguing%20illustration%20depicting%20a%20mysterious%20clue%20in%20the%20game%20'BoTreasure'.%20The%20scene%20features%20an%20ancient%2C%20weathered%20scroll%20partially%20unrolled%20on.webp?alt=media&token=d5ee4ca5-2641-4735-b417-76a4f586c95a",
            "size": "full",
            "aspectRatio": "4:3",
            "aspectMode": "cover",
            "action": {
                "type": "uri",
                "label": "Action",

                "uri": "https://linecorp.com"
            }
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            "action": {
                "type": "uri",
                "label": "Action",
                "uri": "https://linecorp.com"
            },
            "contents": [
                {
                    "type": "text",
                    "text": "ヒントが出現しました！",
                    "size": "xl",
                    "align": "center",
                    "color": "#797171FF",
                    "contents": []
                }
            ]
        }
    }
    return {
        "type": "flex",
        "altText": "ヒントが出現しました",
        "contents": contents
    }
}