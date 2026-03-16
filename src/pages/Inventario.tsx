import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Folder, Zap, Tag } from 'lucide-react';

export default function Inventario() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('todos');

  const products = [
    { name: 'Laptop HP', price: '$899', stock: 15, status: 'high' },
    { name: 'iPhone 13', price: '$699', stock: 8, status: 'medium' },
    { name: 'Audífonos', price: '$129', stock: 23, status: 'high' },
    { name: 'Teclado', price: '$89', stock: 12, status: 'high' },
    { name: 'Mouse', price: '$45', stock: 3, status: 'low' },
  ];

  const getStockColor = (status: string) => {
    if (status === 'high') return 'text-[#48BB78] bg-green-50';
    if (status === 'medium') return 'text-[#F6AD55] bg-orange-50';
    return 'text-[#F56565] bg-red-50';
  };

  const filters = [
    { id: 'todos', icon: Folder, label: 'Todos' },
    { id: 'bajo', icon: Zap, label: 'Bajo stock' },
    { id: 'categorias', icon: Tag, label: 'Categorías' },
  ];

  return (
    <div className="space-y-3 sm:space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar producto..."
            className="w-full pl-11 pr-4 py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:outline-none focus:border-[#4299E1] focus:ring-2 focus:ring-[#4299E1]/20"
          />
        </div>
        <button
          onClick={() => navigate('/productos/nuevo')}
          className="flex items-center justify-center gap-2 bg-[#4299E1] text-white px-4 sm:px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all text-sm sm:text-base"
        >
          <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
          Nuevo Producto
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {filters.map((filter) => {
          const Icon = filter.icon;
          return (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl font-medium transition-all text-sm flex-shrink-0 ${
                activeFilter === filter.id
                  ? 'bg-[#4299E1] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="whitespace-nowrap">{filter.label}</span>
            </button>
          );
        })}
      </div>

      <div className="bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700">Producto</th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700">Precio</th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700">Stock</th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-xs sm:text-base text-gray-800">{product.name}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-base text-gray-600">{product.price}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-base text-gray-600">{product.stock}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4">
                    <span className={`px-2 sm:px-3 py-1 rounded-lg font-semibold text-xs sm:text-sm ${getStockColor(product.status)}`}>
                      {product.stock}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-gray-50 px-3 sm:px-6 py-3 sm:py-4 border-t border-gray-200">
          <p className="text-xs sm:text-sm text-gray-600">
            <span className="font-semibold">85 productos</span> | <span className="font-semibold">$12,450</span> valor total
          </p>
        </div>
      </div>
    </div>
  );
}
