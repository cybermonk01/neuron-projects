import express from "express";
import blogRoutes from "./routes/blogRoutes.js";

const app = express();
app.use(express.json());

app.use("/", blogRoutes);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
