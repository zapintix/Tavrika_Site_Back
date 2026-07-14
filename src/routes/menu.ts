import { Elysia, t } from "elysia";
import { getMenu } from "../services/menu.service";


export const menuRoute = new Elysia({
    prefix: "/menu"
})
.get("/",() => {
        return getMenu();
    }
);