import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Save, X } from 'lucide-react';

export default function NuevoProducto() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    categoria: 'electronica',
    precioVenta: '',
    precioCosto: '',
    stockInicial: '',
    sku: '',
    stockMinimo: '',
    descripcion: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/inventario');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Nuevo Producto</h2>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Imagen del Producto
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-[#4299E1] transition-colors cursor-pointer">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600 font-medium">[ + SUBIR IMAGEN ]</p>
              <p className="text-sm text-gray-500 mt-2">Haz clic o arrastra una imagen aquí</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nombre del Producto
              </label>
              <input
                type="text"
                value={formData.nombre}
                onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                placeholder="iPhone 13"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#4299E1] focus:ring-2 focus:ring-[#4299E1]/20"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Categoría
              </label>
              <select
                value={formData.categoria}
                onChange={(e) => setFormData({...formData, categoria: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#4299E1] focus:ring-2 focus:ring-[#4299E1]/20"
              >
                <option value="electronica">Electrónica</option>
                <option value="ropa">Ropa</option>
                <option value="alimentos">Alimentos</option>
                <option value="hogar">Hogar</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Precio de Venta
              </label>
              <input
                type="text"
                value={formData.precioVenta}
                onChange={(e) => setFormData({...formData, precioVenta: e.target.value})}
                placeholder="$699"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#4299E1] focus:ring-2 focus:ring-[#4299E1]/20"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Precio de Costo
              </label>
              <input
                type="text"
                value={formData.precioCosto}
                onChange={(e) => setFormData({...formData, precioCosto: e.target.value})}
                placeholder="$550"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#4299E1] focus:ring-2 focus:ring-[#4299E1]/20"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Stock Inicial
              </label>
              <input
                type="text"
                value={formData.stockInicial}
                onChange={(e) => setFormData({...formData, stockInicial: e.target.value})}
                placeholder="15"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#4299E1] focus:ring-2 focus:ring-[#4299E1]/20"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                SKU
              </label>
              <input
                type="text"
                value={formData.sku}
                onChange={(e) => setFormData({...formData, sku: e.target.value})}
                placeholder="IP13-256-BLACK"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#4299E1] focus:ring-2 focus:ring-[#4299E1]/20"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Stock Mínimo
              </label>
              <input
                type="text"
                value={formData.stockMinimo}
                onChange={(e) => setFormData({...formData, stockMinimo: e.target.value})}
                placeholder="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#4299E1] focus:ring-2 focus:ring-[#4299E1]/20"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Descripción
              </label>
              <textarea
                value={formData.descripcion}
                onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
                placeholder="Descripción del producto..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#4299E1] focus:ring-2 focus:ring-[#4299E1]/20"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 flex items-center justify-center gap-2 bg-[#48BB78] text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all"
          >
            <Save className="w-5 h-5" />
            GUARDAR
          </button>
          <button
            type="button"
            onClick={() => navigate('/inventario')}
            className="flex-1 flex items-center justify-center gap-2 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all"
          >
            <X className="w-5 h-5" />
            CANCELAR
          </button>
        </div>
      </form>
    </div>
  );
}
