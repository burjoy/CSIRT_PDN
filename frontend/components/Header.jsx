import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

//Komponen header
const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Menu className="h-8 w-8 text-gray-900" />
              <span className="ml-2 text-xl font-bold text-gray-900">Your Logo</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-gray-900 px-3 py-2">
              Services
            </Link>
            <Link to="/organisasi" className="text-gray-700 hover:text-gray-900 px-3 py-2">
              Organisasi
            </Link>
            <Link to="/rfc" className="text-gray-700 hover:text-gray-900 px-3 py-2">
              RFC-2350
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2">
              Contact
            </Link>
            {/* <a href=''>Contact</a> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;