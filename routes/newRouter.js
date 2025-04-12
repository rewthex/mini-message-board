import { Router } from "express";
import db from "../db/queries.js";

const newRouter = Router();

newRouter.get("/new", (req, res) => {
  res.render("pages/new", { activeButton: "newMessage" });
});

newRouter.post("/new", async (req, res) => {
  const { user, text } = req.body;
  await db.addMessage(user, text);
  res.redirect("/");
});

export default newRouter;
