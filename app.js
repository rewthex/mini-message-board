import express from "express";
import logger from "./middleware/logger.js";
import indexRouter from "./routes/indexRouter.js";
import newRouter from "./routes/newRouter.js";
import { rateLimit } from "express-rate-limit";

const PORT = process.env.port || 8080;

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 16,
  message: "7h3 m4ch1n35 423 11573n1n9...",
});

app.use(limiter);

app.set("trust proxy", true);

// EJS setup
app.set("view engine", "ejs");

// Logger middleware
app.use(logger);

// Body parser middleware
app.use(express.urlencoded({ extended: false }));

// Cache styles
app.use(
  "/styles.css",
  express.static("public/styles.css", {
    maxAge: "1y",
  })
);

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
