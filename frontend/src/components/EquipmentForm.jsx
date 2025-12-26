import { useState, useEffect } from "react";

const initialState = {
  name: "",
  type: "",
  status: "",
  lastCleaned: ""
};

export default function EquipmentForm({ onSubmit, selected }) {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selected) setForm(selected);
  }, [selected]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some(v => !v)) {
      setError("All fields are required");
      return;
    }
    onSubmit(form);
    setForm(initialState);
    setError("");
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        {selected ? "Edit Equipment" : "Add New Equipment"}
      </h2>

      {error && (
        <p className="mb-3 text-sm text-red-600 bg-red-50 px-3 py-2 rounded">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Equipment Name"
          className="input"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <select
          className="input"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option value="">Select Type</option>
          <option>Machine</option>
          <option>Vessel</option>
          <option>Tank</option>
          <option>Mixer</option>
        </select>

        <select
          className="input"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="">Select Status</option>
          <option>Active</option>
          <option>Inactive</option>
          <option>Under Maintenance</option>
        </select>

        <input
          type="date"
          className="input"
          value={form.lastCleaned}
          onChange={(e) => setForm({ ...form, lastCleaned: e.target.value })}
        />

        <button
          type="submit"
          className="col-span-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition"
        >
          {selected ? "Update Equipment" : "Add Equipment"}
        </button>
      </form>
    </div>
  );
}
