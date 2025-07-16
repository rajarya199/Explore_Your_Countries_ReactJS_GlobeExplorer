import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Navbar/>
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;