import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link} from 'react-scroll';


export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={` w-full fixed top-0 z-50 px-5 md:px-20 flex justify-between items-center h-20 transition-colors duration-300 ${scroll ? 'bg-green-600 text-white' : ' text-white'}`}>
                <div className='flex items-center'>
                    <a className="text-4xl font-bold" href="#">Portfo<span className={scroll ? 'text-black' : 'text-green-600'}>lio.</span></a>
                </div>
                <div className="flex items-center">
                    <ul className="hidden md:flex space-x-8 text-xl font-bold">
                        <li><Link activeClass='active' smooth={true} duration={200} offset={-70}  to='Home' className={`nav-link ${scroll ? 'hover:text-black' : 'hover:text-green-600'}`}>Home</Link></li>
                        <li><Link activeClass='active' smooth={true} duration={200} offset={-70}  to='About' className={`nav-link ${scroll ? 'hover:text-black' : 'hover:text-green-600'}`} >About</Link> </li>
                        <li><Link activeClass='active' smooth={true} duration={200} offset={-70}  to='Skills' className={`nav-link ${scroll ? 'hover:text-black' : 'hover:text-green-600'}`} >Skills</Link></li>
                        <li><Link activeClass='active' smooth={true} duration={200} offset={-70}  to='Projects' className={`nav-link ${scroll ? 'hover:text-black' : 'hover:text-green-600'}`}> Projects</Link> </li>
                        <li><Link activeClass='active' smooth={true} duration={200} offset={-70}  to='Education' className={`nav-link ${scroll ? 'hover:text-black' : 'hover:text-green-600'}`}> Education</Link> </li>
                        <li><Link activeClass='active' smooth={true} duration={200} offset={-70}  to='Achievements' className={`nav-link ${scroll ? 'hover:text-black' : 'hover:text-green-600'}`}> Achievements</Link> </li>
                        <li><Link activeClass='active' smooth={true} duration={200} offset={-70}  to='Contact' className={`nav-link ${scroll ? 'hover:text-black' : 'hover:text-green-600'}`}> Contact</Link> </li>
                    </ul>
                    <div onClick={handleMenu} className='md:hidden cursor-pointer'>
                        {!menu ? <MenuIcon fontSize="large" /> : <CloseIcon fontSize="large" />}
                    </div>
                </div>
            </div>

            {menu && (
                <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-40">
                    <ul className='flex flex-col items-center space-y-4 text-xl font-semibold '>
                        <li><Link  onClick={handleMenu} activeClass='active' smooth={true} duration={200} offset={-70} to='Home' className={`nav-link ${scroll ? 'hover:text-green-600' : ''}`}>Home</Link></li>
                        <li><Link onClick={handleMenu}  activeClass='active' smooth={true} duration={200} offset={-70} to='About' className={`nav-link ${scroll ? 'hover:text-green-600' : ''}`} >About</Link> </li>
                        <li><Link onClick={handleMenu}  activeClass='active' smooth={true} duration={200} offset={-70}  to='Skills' className={`nav-link ${scroll ? 'hover:text-green-600' : ''}`} >Skills</Link></li>
                        <li><Link onClick={handleMenu}  activeClass='active' smooth={true} duration={200} offset={-70} to='Projects' className={`nav-link ${scroll ? 'hover:text-green-600' : ''}`}> Projects</Link> </li>
                        <li><Link  onClick={handleMenu} activeClass='active' smooth={true} duration={200} offset={-70} to='Education' className={`nav-link ${scroll ? 'hover:text-green-600' : ''}`}> Education</Link> </li>
                        <li><Link  onClick={handleMenu} activeClass='active' smooth={true} duration={200} offset={-70} to='Achievements' className={`nav-link ${scroll ? 'hover:text-green-600' : ''}`}> Achievements</Link> </li>
                        <li><Link onClick={handleMenu}  activeClass='active' smooth={true} duration={200} offset={-70}  to='Contact' className={`nav-link ${scroll ? 'hover:text-green-600' : ''}`}> Contact</Link> </li>
                    </ul>
                </div>
            )}
        </>
    );
}
