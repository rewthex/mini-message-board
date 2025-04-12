import { Router } from "express";
import db from "../db/queries.js";

const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
  const messages = await db.getAllMessages();
  messages.sort((a, b) => b.added - a.added);
  messages.forEach((msg) => {
    msg.added = new Date(msg.added).toISOString().split("T")[0];
  });
  res.render("pages/index", { messages, activeButton: "messages" });
});

indexRouter.get("/message/:id", async (req, res) => {
  const { id } = req.params;
  const message = await db.getMessageById(parseInt(id));
  res.render("pages/post", { message, activeButton: "messages" });
});

export default indexRouter;
