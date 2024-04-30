export const playGameMessage = (members: string[], teamName: string, treasureCount: number) => {
    const contents: any = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://firebasestorage.googleapis.com/v0/b/line-bot-award-osaka2024.appspot.com/o/background%2FDALL%C2%B7E%202024-04-30%2017.17.13%20-%20Another%20illustration-style%20cover%20image%20for%20the%20game%20'BoTreasure'.%20The%20scene%20shows%20one%20main%20character_%20the%20'Seeker'.%20The%20Seeker%2C%20wearing%20an%20explorer's%20.webp?alt=media&token=4d999220-72f4-4b1a-81e4-7a83c2835362",
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
                    "text": "BoTreasure",
                    "weight": "bold",
                    "size": "xxl",
                    "contents": []
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "チーム",
                            "weight": "bold",
                            "size": "lg",
                            "align": "start",
                            "contents": []
                        },
                        {
                            "type": "text",
                            "text": "hogehoge",
                            "offsetStart": "15px",
                            "contents": []
                        }
                    ]
                },
                {
                    "type": "separator"
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "メンバー",
                            "weight": "bold",
                            "size": "lg",
                            "align": "start",
                            "contents": []
                        }
                    ]
                },
                {
                    "type": "separator"
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "宝の数",
                            "weight": "bold",
                            "size": "lg",
                            "align": "start",
                            "contents": []
                        },
                        {
                            "type": "text",
                            "text": "3",
                            "offsetStart": "15px",
                            "contents": []
                        }
                    ]
                },
                {
                    "type": "text",
                    "text": "さあはじめましょう！",
                    "weight": "bold",
                    "size": "sm",
                    "color": "#AAAAAA",
                    "align": "center",
                    "wrap": true,
                    "contents": []
                }
            ]
        },
        "footer": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "button",
                    "action": {
                        "type": "message",
                        "label": "プレイする！",
                        "text": "プレイする"
                    },
                    "color": "#905C44",
                    "style": "primary"
                }
            ]
        }
    }

    contents.body.contents[1].contents[1].text = teamName
    contents.body.contents[5].contents[1].text = treasureCount.toString()
    members.map((member) => {
        contents.body.contents[3].contents.push({
            "type": "text",
            "text": member,
            "offsetStart": "15px",
            "contents": []
        })
    })
    return {
        "type": "flex",
        "altText": "ゲームを開始しますか？",
        "contents": contents
    }
}