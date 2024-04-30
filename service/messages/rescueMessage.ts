export const rescueMessage = (member: string) => {
    const contents: any = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://firebasestorage.googleapis.com/v0/b/line-bot-award-osaka2024.appspot.com/o/background%2Fv2%2FDALL%C2%B7E%202024-05-01%2001.38.12%20-%20An%20illustration-style%20image%20showing%20the%20release%20of%20all%20Seekers%20from%20the%20game%20'BoTreasure'%2C%20in%20an%20anime%20style%20similar%20to%20the%20image%20with%20ID%20'NoXiElftLnV.webp?alt=media&token=ea67dc7c-c7cd-45c2-8bbf-7e083a8033c8",
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
                    "text": "シーカーが解放！",
                    "weight": "bold",
                    "size": "xxl",
                    "align": "center",
                    "contents": []
                },
                {
                    "type": "text",
                    "text": "〇〇が救助を行ったため、シーカー全員が解放されました！",
                    "color": "#797171FF",
                    "align": "start",
                    "wrap": true,
                    "contents": []
                }
            ]
        }
    }

    contents.body.contents[1].text = `${member}が救助を行ったため、シーカー全員が解放されました！`
    return {
        "type": "flex",
        "altText": "シーカーが解放されました",
        "contents": contents
    }
}