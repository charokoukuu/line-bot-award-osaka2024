export const ownerVictoryMessage = (members: string[]) => {
    const contents: any = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://firebasestorage.googleapis.com/v0/b/line-bot-award-osaka2024.appspot.com/o/background%2FDALL%C2%B7E%202024-04-23%2019.44.19%20-%20An%20exciting%20and%20dramatic%20illustration%20showing%20the%20victory%20of%20the%20'Owner'%20in%20the%20game%20'BoTreasure'.%20The%20scene%20depicts%20the%20Owner%2C%20a%20cunning%20and%20clever%20c.webp?alt=media&token=c0ca4865-0332-4d6c-ba7a-11c48f428a33",
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
                    "text": "オーナーの勝利！",
                    "weight": "bold",
                    "size": "xxl",
                    "align": "center",
                    "contents": []
                },
                {
                    "type": "text",
                    "text": "宝を守り切った",
                    "weight": "regular",
                    "color": "#797171FF",
                    "align": "center",
                    "contents": []
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
                            "contents": []
                        }
                    ]
                }
            ]
        },
        "footer": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "spacer",
                    "size": "xs"
                }
            ]
        }
    }

    members.map((member) => {
        contents.body.contents.push({
            "type": "text",
            "text": member,
            "offsetStart": "15px",
            "contents": []
        })
    }

    )
    return {
        "type": "flex",
        "altText": "オーナーの勝利！",
        "contents": contents
    }
}