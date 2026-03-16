import { Plus, CreditCard as Edit, Trash2 } from 'lucide-react';

export default function Usuarios() {
  const users = [
    { name: 'Admin Principal', email: 'admin@empresa.com', role: 'Administrador', status: 'active' },
    { name: 'Juan Pérez', email: 'juan@empresa.com', role: 'Vendedor', status: 'active' },
    { name: 'María García', email: 'maria@empresa.com', role: 'Vendedor', status: 'active' },
    { name: 'Carlos López', email: 'carlos@empresa.com', role: 'Almacén', status: 'inactive' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Gestión de Usuarios</h2>
        <button className="flex items-center gap-2 bg-[#4299E1] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all">
          <Plus className="w-5 h-5" />
          Nuevo Usuario
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Nombre</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Correo</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Rol</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Estado</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#4299E1] rounded-full flex items-center justify-center text-white font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <span className="font-medium text-gray-800">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{user.email}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-blue-50 text-[#4299E1] rounded-lg font-semibold text-sm">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-lg font-semibold text-sm ${
                      user.status === 'active'
                        ? 'bg-green-50 text-[#48BB78]'
                        : 'bg-red-50 text-[#F56565]'
                    }`}
                  >
                    {user.status === 'active' ? 'Activo' : 'Inactivo'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-[#4299E1] hover:bg-blue-50 rounded-lg transition-all">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-[#F56565] hover:bg-red-50 rounded-lg transition-all">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Roles y Permisos</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <p className="font-bold text-[#4299E1] mb-1">Administrador</p>
            <p className="text-sm text-gray-600">Acceso completo al sistema</p>
          </div>
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <p className="font-bold text-[#48BB78] mb-1">Vendedor</p>
            <p className="text-sm text-gray-600">Gestión de ventas e inventario</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
            <p className="font-bold text-[#F6AD55] mb-1">Almacén</p>
            <p className="text-sm text-gray-600">Gestión de stock y productos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
