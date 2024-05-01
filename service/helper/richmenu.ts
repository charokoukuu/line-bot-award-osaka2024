import { readFileSync } from 'fs';
import { TOKEN } from '../config/secret.config';

const LINE_API_BASE_URL = 'https://api.line.me/v2/bot';

export async function createRichMenu() {
    const richMenu = {
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

    try {
        const response = await fetch(
            `${LINE_API_BASE_URL}/richmenu`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(richMenu),
            }
        );

        const responseData: any = await response.json();
        const richMenuId = responseData.richMenuId;
        console.log(`Rich menu created with ID: ${richMenuId}`);

        return richMenuId;
    } catch (error) {
        console.error('Error creating rich menu:', error);
    }
}

// リッチメニューの背景画像のアップロード
export async function uploadRichMenuImage(richMenuId: string, imagePath: string) {
    try {
        const imageBuffer = readFileSync(imagePath);

        const response = await fetch(
            `${LINE_API_BASE_URL}/richmenu/${richMenuId}/content`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                    'Content-Type': 'image/png',
                },
                body: imageBuffer,
            }
        );

        if (response.ok) {
            console.log('Rich menu image uploaded successfully.');
        } else {
            // console.error('Error uploading rich menu image:', await response.text());
            console.log('Error uploading rich menu image:', await response);
        }
    } catch (error) {
        console.error('Error uploading rich menu image:', error);
    }
}

// リッチメニューをユーザーにリンク
export async function linkRichMenuToUser(userId: string, richMenuId: string) {
    try {
        const response = await fetch(
            `${LINE_API_BASE_URL}/user/${userId}/richmenu/${richMenuId}`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                },
            }
        );

        if (response.ok) {
            console.log(`Rich menu linked to user ${userId}`);
        } else {
            console.error('Error linking rich menu to user:', await response);
        }
    } catch (error) {
        console.error('Error linking rich menu to user:', error);
    }
}


