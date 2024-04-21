import { app } from "..";
import { CreateUserController, PrintQRController, SchedulerController, TeamBuildingController, TeamJoiningController, WebhookController } from "../controller/post.controller";
import { PrintHintService } from "../usecase/print.usecase";

export const PostMethods = () => {
    //Messaging API
    app.post("/webhook", WebhookController);

    app.post("/api/user", CreateUserController);
    //スケジューラ
    app.post("/api/scheduler", SchedulerController);

    //チーム登録
    app.post("/api/team-building", TeamBuildingController);
    app.post("/api/team-joining", TeamJoiningController);

    //プリントサービス
    app.post("/api/create-qr", PrintQRController);
    app.post("/api/hint-print", PrintHintService);
}
