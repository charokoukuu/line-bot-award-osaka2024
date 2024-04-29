export const arrestedMessage = (member: string) => {
    const contents: any = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://t3.ftcdn.net/jpg/03/79/75/50/360_F_379755056_D17cESBPHjElxg7i0tdJ48BwaP2EfjIi.jpg",
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
                    "text": "〇〇のスキャナアプリが無効化！",
                    "weight": "bold",
                    "size": "xxl",
                    "align": "center",
                    "wrap": true,
                    "contents": []
                },
                {
                    "type": "text",
                    "text": "オーナーが発券機に近付いたので〇〇のスキャナアプリが一定時間無効化されました。",
                    "color": "#797171FF",
                    "align": "start",
                    "wrap": true,
                    "contents": []
                }
            ]
        }
    }

    contents.body.contents[0].text = `${member}のスキャナアプリが無効化！`
    contents.body.contents[1].text = `オーナーの${member}が発券機に近付いたため、スキャナアプリが一定時間無効化されました。`
    return {
        "type": "flex",
        "altText": "オーナーのスキャナアプリが無効化されました",
        "contents": contents
    }
}