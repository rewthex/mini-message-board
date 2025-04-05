import { Router } from "express";
import { getMessages } from "../db.js";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  const messages = getMessages();
  res.render("pages/index", { messages, activeButton: 'messages' });
});

export default indexRouter;