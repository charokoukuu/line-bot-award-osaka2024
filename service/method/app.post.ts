import { app } from "..";
import { BeaconController } from "../controller/debug.controller";
import { CreateUserController, PrintQRController, SaveHintController, ScanController, SchedulerController, TeamBuildingController, TeamJoiningController, WebhookController } from "../controller/post.controller";
import { PrintHintService } from "../usecase/print.usecase";

export const PostMethods = () => {
    //Messaging API
    app.post("/webhook", WebhookController);

    app.post("/api/user", CreateUserController);
    //スケジューラ
    app.post("/api/schedule", SchedulerController);

    //チーム登録
    app.post("/api/team-building", TeamBuildingController);
    app.post("/api/team-joining", TeamJoiningController);

    //QQRスキャン
    app.post("/api/qr-scan", ScanController);

    //プリントサービス
    app.post("/api/create-qr", PrintQRController);
    app.post("/api/hint-print", PrintHintService);

    //debug
    app.post("/api/save/hint", SaveHintController);
    app.post("/api/beacon", BeaconController);

}
