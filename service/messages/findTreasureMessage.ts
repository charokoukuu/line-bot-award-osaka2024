export const findTreasureMessage = (name: string, restTreasureCount: number) => {
    const contents: any = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://firebasestorage.googleapis.com/v0/b/line-bot-award-osaka2024.appspot.com/o/background%2FDALL%C2%B7E%202024-04-23%2019.49.34%20-%20A%20detailed%20and%20vivid%20illustration%20of%20a%20treasure%20chest%20in%20a%20magical%20setting%2C%20suitable%20for%20the%20game%20'BoTreasure'.%20The%20chest%20is%20ornately%20designed%20with%20in.webp?alt=media&token=f8af1707-79c8-4de5-8068-9236b5363a98",
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
                    "text": "",
                    "weight": "bold",
                    "size": "xl",
                    "align": "start",
                    "wrap": true,
                    "contents": []
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                        {
                            "type": "spacer",
                            "size": "lg"
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "残りの宝の数:",
                                    "weight": "bold",
                                    "size": "lg",
                                    "margin": "sm",
                                    "contents": []
                                },
                                {
                                    "type": "text",
                                    "text": "1",
                                    "color": "#006C9B",
                                    "weight": "bold",
                                    "size": "lg",
                                    "contents": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "spacer"
                }
            ]
        }
    }
    contents.body.contents[0].text = name + "が宝を見つけた！"
    contents.body.contents[1].contents[1].contents[1].text = restTreasureCount.toString()
    if (restTreasureCount <= 1) {
        contents.body.contents[1].contents[1].contents[1].color = "#ff0000"
    }


    return {
        "type": "flex",
        "altText": "宝が見つかりました！",
        "contents": contents
    }
}