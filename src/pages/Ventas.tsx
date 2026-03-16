import { useState } from 'react';
import { Search, CreditCard, Smartphone, Banknote } from 'lucide-react';

export default function Ventas() {
  const [searchProduct, setSearchProduct] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('efectivo');

  const cartItems = [
    { qty: 2, name: 'iPhone 13', price: 699, total: 1398 },
    { qty: 1, name: 'Audífonos', price: 129, total: 129 },
    { qty: 3, name: 'Cargador', price: 19, total: 57 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const paymentMethods = [
    { id: 'efectivo', icon: Banknote, label: 'EFECTIVO' },
    { id: 'tarjeta', icon: CreditCard, label: 'TARJETA' },
    { id: 'transferencia', icon: Smartphone, label: 'TRANSFERENCIA' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-full">
      <div className="space-y-4 sm:space-y-6">
        <div>
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-800">Nueva Venta</h2>
            <span className="text-xs sm:text-base text-gray-600 font-semibold">#V-001</span>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchProduct}
              onChange={(e) => setSearchProduct(e.target.value)}
              placeholder="Buscar producto..."
              className="w-full pl-11 pr-4 py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:outline-none focus:border-[#4299E1] focus:ring-2 focus:ring-[#4299E1]/20"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md">
          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">Carrito de Compras</h3>
          <div className="space-y-2 sm:space-y-3">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                <div className="flex-1">
                  <p className="font-semibold text-xs sm:text-base text-gray-800">
                    {item.qty}x {item.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">${item.price} c/u</p>
                </div>
                <p className="font-bold text-xs sm:text-base text-gray-800">${item.total}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-gray-800">Resumen</h3>

          <div className="space-y-2 sm:space-y-3 border-t pt-3 sm:pt-4">
            <div className="flex justify-between text-xs sm:text-base text-gray-600">
              <span>SUBTOTAL:</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs sm:text-base text-gray-600">
              <span>IMPUESTO (10%):</span>
              <span className="font-semibold">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg sm:text-2xl font-bold text-gray-800 border-t pt-2 sm:pt-3">
              <span>TOTAL:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md">
          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">Método de Pago</h3>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`p-2 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all ${
                    paymentMethod === method.id
                      ? 'border-[#4299E1] bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`w-5 h-5 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 ${
                    paymentMethod === method.id ? 'text-[#4299E1]' : 'text-gray-400'
                  }`} />
                  <p className={`text-xs font-semibold ${
                    paymentMethod === method.id ? 'text-[#4299E1]' : 'text-gray-600'
                  }`}>
                    {method.label}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <button className="w-full bg-[#48BB78] text-white py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:shadow-lg transform hover:scale-[1.02] transition-all">
          FINALIZAR VENTA
        </button>
      </div>
    </div>
  );
}
