import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import enrollRoutes from "./routes/enrollRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";




const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enroll", enrollRoutes);
app.use(errorHandler);


app.get("/", (req, res) => {
  res.send("Course Management Backend Running 🏃‍♂️");
});

export default app;
