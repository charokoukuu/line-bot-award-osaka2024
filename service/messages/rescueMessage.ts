export const rescueMessage = (member: string) => {
    const contents: any = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://media.istockphoto.com/id/1186508256/ja/ベクター/非常口左-非常口右-脱出ルート標識-ベクトル図.jpg?s=612x612&w=0&k=20&c=ScUqEHv1vNnUgxn5AuAgXnhaR6I2CmMUjVPKqsDGzE4=",
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