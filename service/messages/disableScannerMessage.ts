export const disableScannerMessage = (member: string) => {
    const contents: any = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://firebasestorage.googleapis.com/v0/b/line-bot-award-osaka2024.appspot.com/o/background%2Fv2%2FDALL%C2%B7E%202024-05-04%2011.31.10%20-%20An%20illustration-style%20image%20depicting%20a%20child%20character%20from%20the%20game%20'BoTreasure'%20reacting%20to%20their%20smartphone's%20scanner%20app%20being%20disabled%2C%20in%20the%20s.webp?alt=media&token=89b8fecf-9238-41dd-a113-6989754bc244",
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