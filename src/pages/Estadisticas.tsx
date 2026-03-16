import { Calendar, Trophy, TrendingDown, DollarSign, Package } from 'lucide-react';

export default function Estadisticas() {
  const chartData = [
    { day: 'L', value: 180 },
    { day: 'M', value: 220 },
    { day: 'M', value: 150 },
    { day: 'J', value: 280 },
    { day: 'V', value: 260 },
    { day: 'S', value: 200 },
    { day: 'D', value: 140 },
  ];

  const maxValue = 300;

  const topProducts = [
    { name: 'iPhone', amount: '$5,000', position: 1 },
    { name: 'Laptop', amount: '$3,200', position: 2 },
    { name: 'Audífonos', amount: '$1,050', position: 3 },
  ];

  const lowStock = [
    { name: 'Producto X', units: 2, critical: false },
    { name: 'Producto Y', units: 1, critical: false },
    { name: 'Producto Z', units: 0, critical: true },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Estadísticas</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-all">
          <Calendar className="w-5 h-5" />
          Últimos 7 días
          <span className="text-gray-400">▼</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-6">Ventas Diarias</h3>
        <div className="relative h-64">
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-sm text-gray-500">
            <span>300</span>
            <span>200</span>
            <span>100</span>
            <span>0</span>
          </div>
          <div className="ml-12 h-full flex items-end justify-around gap-4">
            {chartData.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gradient-to-t from-[#4299E1] to-[#667eea] rounded-t-lg transition-all hover:shadow-lg"
                     style={{ height: `${(item.value / maxValue) * 100}%` }}>
                </div>
                <span className="text-sm font-semibold text-gray-600">{item.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-6 h-6 text-[#F6AD55]" />
            <h3 className="text-lg font-bold text-gray-800">TOP PRODUCTOS</h3>
          </div>
          <div className="space-y-3">
            {topProducts.map((product) => (
              <div key={product.position} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#4299E1] text-white rounded-full flex items-center justify-center font-bold">
                    {product.position}
                  </span>
                  <span className="font-semibold text-gray-800">{product.name}</span>
                </div>
                <span className="font-bold text-[#48BB78]">{product.amount}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <TrendingDown className="w-6 h-6 text-[#F56565]" />
            <h3 className="text-lg font-bold text-gray-800">BAJO STOCK</h3>
          </div>
          <div className="space-y-3">
            {lowStock.map((product, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-xl ${
                  product.critical ? 'bg-red-50 border border-red-200' : 'bg-orange-50 border border-orange-200'
                }`}
              >
                <span className="font-semibold text-gray-800">{product.name}</span>
                <span className={`font-bold ${product.critical ? 'text-[#F56565]' : 'text-[#F6AD55]'}`}>
                  {product.units}u
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#4299E1] to-[#667eea] rounded-2xl p-6 shadow-md text-white">
        <div className="flex items-center justify-around">
          <div className="flex items-center gap-3">
            <DollarSign className="w-10 h-10" />
            <div>
              <p className="text-3xl font-bold">$12,450</p>
              <p className="text-blue-100">Ventas totales</p>
            </div>
          </div>
          <div className="w-px h-12 bg-white/30"></div>
          <div className="flex items-center gap-3">
            <Package className="w-10 h-10" />
            <div>
              <p className="text-3xl font-bold">89</p>
              <p className="text-blue-100">Unidades vendidas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
