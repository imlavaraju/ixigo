import {  NavLink } from 'react-router-dom';
import user from "../assets/user.png"
import home from "../assets/home.png"
import heart from "../assets/heart.png"
const Navbar = () => {
    return (
        <nav className="bg-[#778899] text-white p-4 flex justify-between rounded mb-2 mt-1">
            <h1 className="text-xl font-bold text-black ">News Reader</h1>
            <div className='flex flex-row px-2'>
                
            <NavLink to="/likes" className="mr-4"><img src={heart} alt='profile' className='w-8 h-8'/></NavLink>
                <NavLink to="/" className="mr-4"><img src={home} alt='profile' className='w-8 h-8'/></NavLink>
                <NavLink to="/profile"><img src={user} alt='profile' className='w-8 h-8 text-white'/></NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
