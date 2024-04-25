import { app } from "..";
import { DeleteOneTeamController } from "../controller/delete.controller";

export const DeleteMethods = () => {
    app.delete("/api/team/:teamId", DeleteOneTeamController);
}