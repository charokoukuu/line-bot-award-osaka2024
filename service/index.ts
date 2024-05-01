const express = require("express");
import mongoose from "mongoose";
import { MONGODB_URI } from "./config/app.config";
import { CronMethods, GetMethods, PostMethods } from "./method";
import { DeleteMethods } from "./method/app.delete";
import { createRichMenu, linkRichMenuToUser, uploadRichMenuImage } from "./helper/richmenu";
import { EXAMPLE_USER_ID } from "./config/secret.config";
import { seekerMenu } from "./richmenu/seekerMenu";
import { ownerMenu } from "./richmenu/ownerMenu";
import { menuListIds } from "./richmenu/menuListIds";
export const app = express();
const cors = require('cors')
app.use(cors());
mongoose.connect(MONGODB_URI);


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


// メイン関数
const richMenuId = await createRichMenu(seekerMenu());
if (richMenuId) {
  // await uploadRichMenuImage(richMenuId, 'images/richmenu/seeker.png');
  // await linkRichMenuToUser(EXAMPLE_USER_ID, richMenuId); // リッチメニューをリンクするユーザーIDを指定
}
await linkRichMenuToUser("all", menuListIds.home);

GetMethods();
PostMethods();
DeleteMethods();
CronMethods();
const port = 4000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
