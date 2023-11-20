import mainLogo from '../utility/preview.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-purple-800 text-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="logo-container">
                    <img src={mainLogo} className="logo h-16" alt="Logo" />
                </div>
                <div className="nav-items">
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="hover:text-gray-300 hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-gray-300 hover:underline">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-gray-300 hover:underline">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="#cart" className="hover:text-gray-300 hover:underline">
                                Cart
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
