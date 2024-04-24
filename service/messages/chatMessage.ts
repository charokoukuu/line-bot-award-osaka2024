export const chatMessage = () => {
    const contents = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://firebasestorage.googleapis.com/v0/b/line-bot-award-osaka2024.appspot.com/o/background%2FDALL%C2%B7E%202024-04-23%2019.20.03%20-%20A%20futuristic%20chat%20service%20icon%20design%20featuring%20sleek%2C%20modern%20lines%20and%20a%20digital%20aesthetic%20in%20a%20wide%20format.%20The%20icon%20should%20be%20elongated%20horizontall.webp?alt=media&token=50b677f5-476f-4c4b-a879-10a78a5d6574",
            "size": "full",
            "aspectRatio": "20:13",
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
                    "text": "チャットモード",
                    "weight": "bold",
                    "size": "xxl",
                    "align": "center",
                    "contents": []
                },
                {
                    "type": "text",
                    "text": "チャットモードが開始されました。味方同士で会話することができます。",
                    "color": "#797171FF",
                    "align": "start",
                    "wrap": true,
                    "contents": []
                }
            ]
        }
    }

    return {
        "type": "flex",
        "altText": "チャットモードに切り替わりました",
        "contents": contents
    }
}