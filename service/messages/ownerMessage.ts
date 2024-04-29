export const ownerMessage = () => {
    const contents: any = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://www.silhouette-illust.com/wp-content/uploads/2016/06/2889-600x600.jpg",
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