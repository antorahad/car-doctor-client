import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-zinc-950 text-white">
            <aside>
                <Link to={'/'}><img src={logo} className="w-[80px] h-[80px]" /></Link>
            </aside>
            <nav>
                <header className="font-bold text-xl text-white">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="font-bold text-xl text-white">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="font-bold text-xl text-white">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;