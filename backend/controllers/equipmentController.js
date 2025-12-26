import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, "../data/equipment.json");

const readData = () => {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
};

const writeData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

export const getEquipment = (req, res) => {
  const data = readData();
  res.json(data);
};

export const addEquipment = (req, res) => {
  const { name, type, status, lastCleaned } = req.body;

  if (!name || !type || !status || !lastCleaned) {
    return res.status(400).json({ message: "All fields required" });
  }

  const data = readData();
  const newItem = {
    id: Date.now().toString(),
    name,
    type,
    status,
    lastCleaned
  };

  data.push(newItem);
  writeData(data);

  res.status(201).json(newItem);
};

export const updateEquipment = (req, res) => {
  const data = readData();
  const index = data.findIndex(i => i.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Not found" });
  }

  data[index] = { ...data[index], ...req.body };
  writeData(data);

  res.json(data[index]);
};

export const deleteEquipment = (req, res) => {
  const data = readData();
  const updated = data.filter(item => item.id !== req.params.id);
  writeData(updated);
  res.json({ message: "Deleted" });
};
