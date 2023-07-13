import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-slate-800 text-white p-3 rounded-md'>
            <NavLink to='/'><span className='m-2 p-2 font-bold hover:text-orange-500'>Home</span></NavLink>

            <NavLink to='/blog'><span span className='m-2 p-2 font-bold hover:text-orange-500'>Blog</span></NavLink>
        </div>
    );
};

export default Header;