import { Elysia } from "elysia";
import { menuRoute } from "./routes/menu";
import { cors } from "@elysiajs/cors";

const port = Number(Bun.env.PORT ?? 3000);

new Elysia()
  .use(
      cors({
          origin: Bun.env.WEB
      })
  )
  .use(menuRoute)
  .listen({
      port,
      hostname: "0.0.0.0"
  });
