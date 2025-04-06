import express from "express";
import logger from "./middleware/logger.js";
import indexRouter from "./routes/indexRouter.js";
import newRouter from "./routes/newRouter.js";

const PORT = process.env.port || 8080;

const app = express();

// EJS setup
app.set("view engine", "ejs");

// Logger middleware
app.use(logger);

// Body parser middleware
app.use(express.urlencoded({ extended: false }));

// Setup static folder
app.use(express.static("public"));

// Routers
app.use(indexRouter);
app.use(newRouter);

// Error handling
app.use((err, req, res, next) => {
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
