import { app } from "..";
import { test } from "../test/app.test";


export const GetMethods = () => {
    app.get("/test", test);
}
