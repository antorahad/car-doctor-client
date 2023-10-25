import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'

const Header = () => {
    return (
        <div className="navbar bg-base-100 py-5">
            <div className="navbar-start">
                <Link to={'/'}><img src={logo} className="w-[60px] h-[60px]" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-xl font-medium">
                    <li className='px-2'><Link to={'/'}>Home</Link></li>
                    <li className='px-2'><Link to={'/about'}>About</Link></li>
                    <li className='px-2'><Link to={'/service'}>Service</Link></li>
                    <li className='px-2'><Link to={'/blog'}>Blog</Link></li>
                    <li className='px-2'><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-transparent hover:bg-transparent focus:bg-transparent border border-orange-500 hover:border-orange-500 focus:border-orange-500 rounded-md text-orange-500">Appointment</a>
            </div>
        </div>
    );
};

export default Header;