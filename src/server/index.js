import { Hono } from "hono";
const app = new Hono();

app.get("/api/healty", (c) => c.json("yeay healty🔥!"));
app.post("/login", (c) => c.json("yeay healty🔥!"));

export default app;
