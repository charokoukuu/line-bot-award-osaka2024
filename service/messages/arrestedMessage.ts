export const arrestedMessage = (member: string, isEnd: boolean) => {
    const contents: any = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://firebasestorage.googleapis.com/v0/b/line-bot-award-osaka2024.appspot.com/o/background%2Fv2%2FDALL%C2%B7E%202024-05-01%2001.48.33%20-%20An%20illustration-style%20image%20showing%20a%20Seeker%20character%20from%20the%20game%20'BoTreasure'%20being%20caught%20by%20an%20Owner%2C%20in%20an%20anime%20style%20similar%20to%20the%20image%20wit.webp?alt=media&token=54d7b991-b007-42b9-9309-4ad25d42d94e",
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
                    "text": "〇〇が拘束！",
                    "weight": "bold",
                    "size": "xxl",
                    "align": "center",
                    "wrap": true,
                    "contents": []
                },
                {
                    "type": "text",
                    "text": "〇〇が拘束されました。▲へ行き救助してください。",
                    "color": "#797171FF",
                    "align": "start",
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
                    "type": "spacer",
                    "size": "xxl"
                }
            ]
        }
    }

    contents.body.contents[0].text = `${member}が拘束された！`
    contents.body.contents[1].text = `${member}が拘束されました。${!isEnd ? "シーカーは監獄へ行き救助してください。" : ""}`
    return {
        "type": "flex",
        "altText": "プレイヤーが拘束されました",
        "contents": contents
    }
}