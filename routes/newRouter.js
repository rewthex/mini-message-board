import { Router } from "express";
import { addMessage } from "../db.js";

const newRouter = Router();

newRouter.get("/new", (req, res) => {
  res.render("pages/new", { activeButton: "newMessage" });
});

newRouter.post("/new", (req, res) => {
  const { user, text } = req.body;
  addMessage(user, text);
  res.redirect("/");
});

export default newRouter;
