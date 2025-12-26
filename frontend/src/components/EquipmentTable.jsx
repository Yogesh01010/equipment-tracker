export default function EquipmentTable({ data, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-x-auto">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Last Cleaned</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-3">{item.name}</td>
              <td className="px-4 py-3">{item.type}</td>
              <td className="px-4 py-3">{item.status}</td>
              <td className="px-4 py-3">{item.lastCleaned}</td>
              <td className="px-4 py-3 text-center space-x-3">
                <button
                  onClick={() => onEdit(item)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {data.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center py-6 text-gray-500">
                No equipment found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
