import { useNavigate } from 'react-router-dom';
import { Package, DollarSign, AlertTriangle, Folder, Package2, ShoppingCart, Download, BarChart3, TrendingUp, Settings } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();

  const stats = [
    { icon: Package, label: 'Productos totales', value: '234', color: 'bg-blue-500' },
    { icon: DollarSign, label: 'Ventas hoy', value: '$12,450', color: 'bg-green-500' },
    { icon: AlertTriangle, label: 'Stock bajo', value: '15', color: 'bg-red-500' },
  ];

  const modules = [
    { icon: Package2, label: 'Inventario', path: '/inventario', color: 'bg-blue-500' },
    { icon: ShoppingCart, label: 'Ventas', path: '/ventas', color: 'bg-green-500' },
    { icon: Download, label: 'Entradas', path: '/productos/nuevo', color: 'bg-purple-500' },
    { icon: BarChart3, label: 'Reportes', path: '/estadisticas', color: 'bg-orange-500' },
    { icon: TrendingUp, label: 'Estadísticas', path: '/estadisticas', color: 'bg-pink-500' },
    { icon: Settings, label: 'Configuración', path: '/configuracion', color: 'bg-gray-500' },
  ];

  const lowStock = [
    { name: 'Producto A', units: 3 },
    { name: 'Producto B', units: 2 },
    { name: 'Producto C', units: 1 },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-3 gap-2 sm:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02]"
            >
              <div className="flex items-center gap-2 sm:gap-4">
                <div className={`${stat.color} p-2 sm:p-3 rounded-lg sm:rounded-xl`}>
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg sm:text-2xl font-bold text-gray-800">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <Folder className="w-5 h-5 sm:w-6 sm:h-6 text-[#4299E1]" />
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">MÓDULOS RÁPIDOS</h2>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <button
                key={index}
                onClick={() => navigate(module.path)}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] text-left"
              >
                <div className={`${module.color} w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-4`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <p className="font-semibold text-xs sm:text-base text-gray-800">{module.label}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-[#F56565]" />
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">PRODUCTOS BAJO STOCK</h2>
        </div>
        <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-md">
          <div className="space-y-2 sm:space-y-3">
            {lowStock.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 sm:p-4 bg-red-50 rounded-lg sm:rounded-xl border border-red-200"
              >
                <span className="font-semibold text-xs sm:text-base text-gray-800">{product.name}</span>
                <span className="text-[#F56565] font-bold text-xs sm:text-base">{product.units} unidades</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
