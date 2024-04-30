export const disableScannerMessage = (member: string) => {
    const contents: any = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://firebasestorage.googleapis.com/v0/b/line-bot-award-osaka2024.appspot.com/o/background%2Fv2%2FDALL%C2%B7E%202024-05-01%2001.55.41%20-%20An%20illustration-style%20image%20showing%20a%20teenage%20Owner%20character%20from%20the%20game%20'BoTreasure'%20with%20their%20scanning%20app%20disabled%2C%20in%20an%20anime%20style%20similar%20t.webp?alt=media&token=2aec18be-7d1c-4545-ba26-7865ffb2543c",
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