import express, { Request, Response } from "express";
import initDB from "./config/dataBase";
import logger from "./middleware/logger";
import { userRoutes } from "./users/user.routes";
import { todoRoutes } from "./todo/todo.routes";
import { authRoutes } from "./auth/auth.routes";

// initializing the Data Base
initDB();

const app = express();

// parse data ot json
app.use(express.json());

// initial route
app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello World!");
});

// users route
app.use("/users", userRoutes);

//todos route
app.use("/todo", todoRoutes);

// auth routes
app.use("/auth", authRoutes);

// 404 status if no router matches
app.use((req, res) => {
  res.status(404).json({
    status: false,
    message: "No route found",
    path: req.path,
  });
});

export default app;
