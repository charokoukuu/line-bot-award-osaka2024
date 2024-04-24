export const seekerVictoryMessage = (members: string[]) => {
    const contents: any = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://firebasestorage.googleapis.com/v0/b/line-bot-award-osaka2024.appspot.com/o/background%2FDALL%C2%B7E-2024-04-13-21.07.34-A-joyful-character-escaping-with-a-chest-of-treasures.png?alt=media&token=ce3fa175-483c-4e0e-8cc6-8f18a553c99e",
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
                    "text": "シーカーの勝利！",
                    "weight": "bold",
                    "size": "xxl",
                    "align": "center",
                    "contents": []
                },
                {
                    "type": "text",
                    "text": "全ての宝を手に入れた",
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
        contents.body.contents[3].contents.push({
            "type": "text",
            "text": member,
            "offsetStart": "15px",
            "contents": []
        })
    }


    )
    console.log(contents)
    return {
        "type": "flex",
        "altText": "シーカーの勝利！",
        "contents": contents
    }
}