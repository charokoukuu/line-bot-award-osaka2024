export const seekerMessage = () => {
    const contents: any = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://firebasestorage.googleapis.com/v0/b/line-bot-award-osaka2024.appspot.com/o/background%2Fv2%2FDALL%C2%B7E%202024-04-30%2023.11.59%20-%20An%20illustration-style%20image%20of%20the%20'Owner'%20character%20from%20the%20game%20'BoTreasure'%2C%20in%20the%20same%20style%20as%20the%20image%20with%20ID%20'UHQjN02gwHee4MQ1'.%20The%20Owner%20.webp?alt=media&token=5d534652-59c6-4dbb-867f-e4dd20b0cdf1",
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
                    "text": "シーカー",
                    "weight": "bold",
                    "size": "xxl",
                    "align": "center",
                    "contents": []
                },
                {
                    "type": "text",
                    "text": "あなたはシーカーになりました。宝を探し、オーナーから逃げてください。",
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
        "altText": "シーカーになりました",
        "contents": contents
    }
}