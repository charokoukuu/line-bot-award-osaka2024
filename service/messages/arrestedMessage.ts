export const arrestedMessage = (member: string) => {
    const contents: any = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://www.illust-box.jp/db_img/sozai/00024/248148/watermark.jpg",
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
    contents.body.contents[1].text = `${member}が拘束されました。シーカーは監獄へ行き救助してください。`
    return {
        "type": "flex",
        "altText": "プレイヤーが拘束されました",
        "contents": contents
    }
}