export const seekerMessage = () => {
    const contents: any = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://thumb.ac-illust.com/93/9312ca5b8ed97986c87c15d6dcb2f827_t.jpeg",
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