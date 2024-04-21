import { app } from "..";
import { PrintQRController, SchedulerController, TeamBuildingController, TeamJoiningController, WebhookController } from "../controller/app.controller";
import { PrintHintService } from "../usecase/print.usecase";

export const PostMethods = () => {
    //Messaging API
    app.post("/webhook", WebhookController);

    //スケジューラ
    app.post("/scheduler", SchedulerController);

    //チーム登録
    app.post("/team-building", TeamBuildingController);
    app.post("/team-joining", TeamJoiningController);

    //プリントサービス
    app.post("/create-qr", PrintQRController);
    app.post("/hint-print", PrintHintService);
}
