import { app } from "..";
import { GetAllTeamsController } from "../controller/get.controller";
import { test } from "../test/app.test";


export const GetMethods = () => {
    app.get("/test", test);
    app.get("/api/teams", GetAllTeamsController);
}
