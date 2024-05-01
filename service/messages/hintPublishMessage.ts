export const hintPublishMessage = (message: string) => {
    const contents = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://firebasestorage.googleapis.com/v0/b/line-bot-award-osaka2024.appspot.com/o/background%2Fv2%2FDALL%C2%B7E%202024-05-01%2012.28.38%20-%20An%20illustration-style%20image%20depicting%20a%20hint%20for%20the%20game%20'BoTreasure'%2C%20in%20a%20style%20similar%20to%20the%20image%20with%20ID%20'NoXiElftLnV0jWcU'.%20The%20scene%20features.webp?alt=media&token=df3de751-47a6-4e3c-83e1-ba17450c0687",
            "size": "full",
            "aspectRatio": "1:1",
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
                    "text": "ヒントが出現！！",
                    "weight": "bold",
                    "size": "xxl",
                    "align": "center",
                    "contents": []
                },
                {
                    "type": "text",
                    "text": "プリンターからヒントが出てくるぞ！",
                    "color": "#797171FF",
                    "wrap": true,
                    "contents": []
                }
            ]
        }
    }
    contents.body.contents[0].text = message
    return {
        "type": "flex",
        "altText": "ヒントが出現しました",
        "contents": contents
    }
}