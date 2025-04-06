import { Router } from "express";
import { getMessageById, getMessages } from "../db.js";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  const messages = getMessages();
  res.render("pages/index", { messages, activeButton: 'messages' });
});

indexRouter.get("/message/:id", (req, res) => {
  const { id } = req.params;
  const message = getMessageById(parseInt(id));
  res.render("pages/post", { message, activeButton: 'messages' });
});


export default indexRouter;