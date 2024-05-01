export const homeMenu = () => {
    return {
        "size": {
            "width": 2500,
            "height": 843
        },
        "selected": true,
        "name": "homeRichMenu",
        "chatBarText": "home",
        "areas": [
            {
                "bounds": {
                    "x": 0,
                    "y": 0,
                    "width": 1250,
                    "height": 843
                },
                "action": {
                    "type": "uri",
                    "uri": "https://www.google.co.jp/"
                }
            },
            {
                "bounds": {
                    "x": 1250,
                    "y": 0,
                    "width": 1250,
                    "height": 843
                },
                "action": {
                    "type": "uri",
                    "uri": "https://www.google.co.jp/"
                }
            }
        ]
    }
}