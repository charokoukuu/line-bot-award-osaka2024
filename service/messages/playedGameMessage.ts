export const playedGameMessage = () => {
    const contents: any = {
        "type": "bubble",
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
                    "text": "ゲームが開始されました！",
                    "weight": "bold",
                    "size": "xl",
                    "align": "center",
                    "wrap": true,
                    "contents": []
                }
            ]
        }
    }

    return {
        "type": "flex",
        "altText": "ゲームが開始されました",
        "contents": contents
    }
}