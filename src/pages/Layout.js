import { Outlet, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const pageClassMap = {
  '/tictactoe': 'tictactoe',
  '/diceroll': 'diceroll',
  '/contact': 'contact',
  '/weather': 'weather',
};
const pageClass = pageClassMap[location.pathname] || 'default';
  return (
    <>
      <nav className="bg-white shadow mb-6">
        <div className="container mx-auto flex justify-between items-center p-4 flex-col sm:flex-row">
            <a href="/" class="text-xl font-bold text-green-900">QuoteTime</a>
            <ul className="flex sm:space-x-6 flex-col sm:flex-row text-center sm:text-left">
                <li className="font-semibold transition duration-500 hover:text-green-800">
                    <Link to="/">Home</Link>
                </li>
                <li className="font-semibold transition duration-500 hover:text-green-800">
                    <Link to="/about">About</Link>
                </li>
                <li className="font-semibold transition duration-500 hover:text-green-800">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="font-semibold transition duration-500 hover:text-green-800">
                    <Link to="/aurelius">Aurelius</Link>
                </li>
                <li className="font-semibold transition duration-500 hover:text-green-800">
                    <Link to="/confucius">Confucius</Link>
                </li>   
                <li className="font-semibold transition duration-500 hover:text-green-800">
                    <Link to="/plato">Plato</Link>
                </li>   
                <li className="font-semibold transition duration-500 hover:text-green-800">
                    <Link to="/laozi">Laozi</Link>
                </li>   
                <li id="you_have_found_a_secret" className="hidden font-semibold transition duration-500 hover:text-green-800">
                    <Link to="/doctor">The Doctor</Link>
                </li>     
            </ul>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;