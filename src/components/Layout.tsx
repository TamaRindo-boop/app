import { ReactNode, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Package, LayoutDashboard, Package2, DollarSign, Plus, TrendingUp, Users, Settings, LogOut, Bell, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Menu', path: '/dashboard' },
    { icon: Package2, label: 'Inventario', path: '/inventario' },
    { icon: DollarSign, label: 'Ventas', path: '/ventas' },
    { icon: Plus, label: 'Productos', path: '/productos/nuevo' },
    { icon: TrendingUp, label: 'Estadísticas', path: '/estadisticas' },
    { icon: Users, label: 'Usuarios', path: '/usuarios' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getPageTitle = () => {
    const item = menuItems.find(m => m.path === location.pathname);
    return item?.label || 'Menu';
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    setShowMenu(false);
  };

  return (
    <div className="flex flex-col h-screen bg-[#F7FAFC] overflow-hidden">
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between flex-shrink-0 sm:px-8">
        <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">{getPageTitle()}</h1>
        <div className="flex items-center gap-2">
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-all">
            <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-all sm:hidden"
          >
            {showMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {showMenu && (
        <div className="bg-white border-b border-gray-200 px-4 py-2 flex flex-col gap-1 overflow-y-auto flex-1 sm:hidden">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-[#4299E1] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all mt-2"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Cerrar Sesión</span>
          </button>
        </div>
      )}

      <main className="flex-1 overflow-y-auto p-4 sm:p-8">
        {children}
      </main>

      <nav className="bg-white border-t border-gray-200 px-0 py-2 flex items-center justify-around flex-shrink-0 sm:hidden">
        {menuItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all text-xs ${
                isActive
                  ? 'bg-[#4299E1]/10 text-[#4299E1]'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium text-xs">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
