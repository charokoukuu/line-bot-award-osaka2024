export const ownerMessage = () => {
    const contents: any = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://firebasestorage.googleapis.com/v0/b/line-bot-award-osaka2024.appspot.com/o/background%2Fv2%2FDALL%C2%B7E%202024-04-30%2022.57.55%20-%20An%20illustration-style%20image%20of%20the%20'Owner'%20character%20from%20the%20game%20'BoTreasure'%2C%20in%20the%20same%20style%20as%20the%20image%20with%20ID%20'UHQjN02gwHee4MQ1'.%20The%20Owner%20.webp?alt=media&token=0ea9d761-c664-4ad4-984f-5356a7dc18da",
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
                    "text": "オーナー",
                    "weight": "bold",
                    "size": "xxl",
                    "align": "center",
                    "wrap": true,
                    "contents": []
                },
                {
                    "type": "text",
                    "text": "あなたはオーナーになりました。宝を守り、シーカーを捕まえてください。",
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
        "altText": "オーナーになりました",
        "contents": contents
    }
}