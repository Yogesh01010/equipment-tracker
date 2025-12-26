import express from "express";
import cors from "cors";
import equipmentRoutes from "./routes/equipmentRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// ONLY THESE ROUTES
app.use("/api/equipment", equipmentRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend running fine");
});

// ❌ DO NOT ADD ANY OTHER app.use() BELOW THIS

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
