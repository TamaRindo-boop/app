import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Package, User, Mail, Lock } from 'lucide-react';

export default function Registro() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center p-4 overflow-hidden">
      <div className="bg-white rounded-3xl p-10 shadow-2xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Package className="w-16 h-16 text-[#667eea]" />
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          CREAR CUENTA
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Comienza a gestionar tu inventario
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={formData.nombre}
              onChange={(e) => setFormData({...formData, nombre: e.target.value})}
              placeholder="Nombre completo"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#667eea] focus:ring-2 focus:ring-[#667eea]/20"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Correo electrónico"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#667eea] focus:ring-2 focus:ring-[#667eea]/20"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              placeholder="Contraseña"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#667eea] focus:ring-2 focus:ring-[#667eea]/20"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              placeholder="Confirmar contraseña"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#667eea] focus:ring-2 focus:ring-[#667eea]/20"
            />
          </div>

          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="w-4 h-4 mt-1 text-[#667eea] border-gray-300 rounded"
            />
            <span className="text-sm text-gray-600">
              Acepto términos y condiciones
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all"
          >
            REGISTRARSE
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="text-[#667eea] font-semibold hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
