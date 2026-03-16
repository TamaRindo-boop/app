import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Dashboard from './pages/Dashboard';
import Inventario from './pages/Inventario';
import Ventas from './pages/Ventas';
import NuevoProducto from './pages/NuevoProducto';
import Estadisticas from './pages/Estadisticas';
import Usuarios from './pages/Usuarios';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />

          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />

          <Route path="/inventario" element={
            <PrivateRoute>
              <Inventario />
            </PrivateRoute>
          } />

          <Route path="/ventas" element={
            <PrivateRoute>
              <Ventas />
            </PrivateRoute>
          } />

          <Route path="/productos/nuevo" element={
            <PrivateRoute>
              <NuevoProducto />
            </PrivateRoute>
          } />

          <Route path="/estadisticas" element={
            <PrivateRoute>
              <Estadisticas />
            </PrivateRoute>
          } />

          <Route path="/usuarios" element={
            <PrivateRoute>
              <Usuarios />
            </PrivateRoute>
          } />

          <Route path="/configuracion" element={
            <PrivateRoute>
              <div className="text-center text-gray-600">
                <p className="text-xl font-semibold">Configuración</p>
                <p className="mt-2">Esta sección está en desarrollo</p>
              </div>
            </PrivateRoute>
          } />

          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
