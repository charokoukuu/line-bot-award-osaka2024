export const chatMessage = () => {
    const contents = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://firebasestorage.googleapis.com/v0/b/line-bot-award-osaka2024.appspot.com/o/background%2Fv2%2FDALL%C2%B7E%202024-04-30%2021.39.57%20-%20An%20illustration-style%20image%20of%20a%20chat%20bubble%20for%20the%20game%20'BoTreasure'%2C%20in%20the%20same%20style%20as%20the%20image%20with%20ID%20'UHQjN02gwHee4MQ1'.%20The%20image%20features%20.webp?alt=media&token=3d49c42c-8945-4fb4-8dda-94e389f3cf8d",
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
        },

    }

    return {
        "type": "flex",
        "altText": "チャットモードに切り替わりました",
        "contents": contents
    }
}