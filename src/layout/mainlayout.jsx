import Sidebar from '../components/sidebar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex-shrink-0">
        <Sidebar />
      </div>

      {/* Nội dung chính */}
      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}
