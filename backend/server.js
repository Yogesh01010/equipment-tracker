import express from "express";
import cors from "cors";
import equipmentRoutes from "./routes/equipmentRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/equipment", equipmentRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

const PORT = 5001;   // 🔥 CHANGE HERE
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
