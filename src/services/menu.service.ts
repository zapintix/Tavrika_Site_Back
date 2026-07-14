import { iikoFetch } from "../lib/iiko";


export function getMenu() {

    return iikoFetch(
        "/api/2/menu/by_id",
        {
            externalMenuId: Bun.env.MENU_ID,
            organizationIds: [
                Bun.env.ORGANIZATION_ID
            ],
            version: 2
        }
    );
}