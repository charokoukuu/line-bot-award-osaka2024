import { app } from "..";
import { GetAllTeamsController, GetOneGameController, GetOneScannerStatusController, GetOneSeekerController } from "../controller/get.controller";
import { test } from "../test/app.test";


export const GetMethods = () => {
    app.get("/test", test);
    app.get("/api/teams", GetAllTeamsController);
    app.get("/api/game/:teamId", GetOneGameController);
    app.get("/api/seeker/:userId", GetOneSeekerController);
    app.get("/api/scannerStatus/:userId", GetOneScannerStatusController);
}

