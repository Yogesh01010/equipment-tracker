import { useEffect, useState } from "react";
import EquipmentForm from "../components/EquipmentForm";
import EquipmentTable from "../components/EquipmentTable";
import {
  fetchEquipment,
  createEquipment,
  updateEquipment,
  deleteEquipment
} from "../services/api";

export default function Home() {
  const [equipment, setEquipment] = useState([]);
  const [selected, setSelected] = useState(null);

  const loadData = async () => {
    const data = await fetchEquipment();
    setEquipment(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (form) => {
    if (selected) {
      await updateEquipment(selected.id, form);
      setSelected(null);
    } else {
      await createEquipment(form);
    }
    loadData();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Equipment Management
      </h1>

      <EquipmentForm onSubmit={handleSubmit} selected={selected} />

      <EquipmentTable
        data={equipment}
        onEdit={setSelected}
        onDelete={async (id) => {
          await deleteEquipment(id);
          loadData();
        }}
      />
    </div>
  );
}
