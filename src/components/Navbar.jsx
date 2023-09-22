import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex flex-row bg-gray-100 p-2 mt-3 mx-4 rounded">
            <div className="flex flex-row justify-end font-bold">
                <Link 
                    to="/" 
                    className="px-3"
                >
                    <h3>Portraits</h3>
                </Link>
                <Link 
                    to="/motion"
                    className="px-3"
                >
                    <h3>Motion</h3>
                </Link>
                <Link 
                    to="/about"
                    className="px-3"
                >
                    <h3>About</h3>
                </Link>
                <Link 
                    to="/contact"
                    className="px-3"
                >
                    <h3>Contact</h3>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;