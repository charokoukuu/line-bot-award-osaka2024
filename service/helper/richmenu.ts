import { readFileSync } from 'fs';
import { TOKEN } from '../config/secret.config';

const LINE_ME_BASE_URL = 'https://api.line.me/v2/bot';
const LINE_API_BASE_URL = 'https://api-data.line.me/v2/bot';


export async function createRichMenu(richMenu: object) {

    try {
        const response = await fetch(
            `${LINE_ME_BASE_URL}/richmenu`,
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
            console.log('Error uploading rich menu image:', await response.text());
        }
    } catch (error) {
        console.error('Error uploading rich menu image:', error);
    }
}

// リッチメニューをユーザーにリンク
export async function linkRichMenuToUser(userId: string, richMenuId: string) {
    try {
        const response = await fetch(
            `${LINE_ME_BASE_URL}/user/${userId}/richmenu/${richMenuId}`,
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

