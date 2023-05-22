import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import logo from '../assets/lego-shop.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isActiveToys, setIsActiveToys] = useState(false);
    const [isActiveToysCreate, setIsActiveToysCreate] = useState(false);
    const [isActiveMyToys, setisActiveMyToys] = useState(false);

    const isActiveFn = (isActive) => {
        setIsActiveToys(false);
        setIsActiveToysCreate(false);
        setisActiveMyToys(false);
        if (isActive)
            return 'bg-active';
        else return '';
    }

    const handleToysClick = (isActive) => {
        setIsActiveToys(true);
        setIsActiveToysCreate(false);
        setisActiveMyToys(false);
        if (isActive)
            return 'bg-active';
        else return '';
    };

    const handleToysCreateClick = (isActive) => {
        setIsActiveToysCreate(true);
        setIsActiveToys(false);
        setisActiveMyToys(false);
        if (isActive)
            return 'bg-active';
        else return '';
    };
    const handleMyToysClick = (isActive) => {
        setisActiveMyToys(true);
        setIsActiveToys(false);
        setIsActiveToysCreate(false);
        if (isActive)
            return 'bg-active';
        else return '';
    };

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>  <NavLink to='/home' className={({ isActive }) => isActiveFn(isActive)}>Home</NavLink> </li>
                            <li> <NavLink to='/blogs' className={({ isActive }) => isActiveFn(isActive)}>Blog</NavLink> </li>
                            <li> {!user && <NavLink to='/register' className={({ isActive }) => isActiveFn(isActive)}>Register</NavLink>}</li>
                            <li> <NavLink to='/toys' className={({ isActive }) => isActiveToys && handleToysClick(isActive)} exact={true} onClick={handleToysClick}>All Toys</NavLink></li>
                            <li> {user && <NavLink to='/toys/create' className={({ isActive }) => isActiveToysCreate && handleToysCreateClick(isActive)} exact={true} onClick={handleToysCreateClick}>Add A Toy</NavLink>}</li>
                            <li> {user && <NavLink to='/toys/my-toys' className={({ isActive }) => isActiveMyToys && handleMyToysClick(isActive)} exact={true} onClick={handleMyToysClick}>My Toys</NavLink>}</li>
                        </ul>
                    </div>
                    <img src={logo} alt="Logo" className="w-24 h-auto" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li> <NavLink to='/home' className={({ isActive }) => isActiveFn(isActive)}>Home</NavLink> </li>
                        <li> <NavLink to='/blogs' className={({ isActive }) => isActiveFn(isActive)}>Blog</NavLink> </li>
                        <li> {!user && <NavLink to='/register' className={({ isActive }) => isActiveFn(isActive)}>Register</NavLink>}</li>
                        <li> <NavLink to='/toys' className={({ isActive }) => isActiveToys && handleToysClick(isActive)} exact={true} onClick={handleToysClick}>All Toys</NavLink></li>
                        <li> {user && <NavLink to='/toys/create' className={({ isActive }) => isActiveToysCreate && handleToysCreateClick(isActive)} exact={true} onClick={handleToysCreateClick}>Add A Toy</NavLink>}</li>
                        <li> {user && <NavLink to='/toys/my-toys' className={({ isActive }) => isActiveMyToys && handleMyToysClick(isActive)} exact={true} onClick={handleMyToysClick}>My Toys</NavLink>}</li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex items-center gap-2'>
                        <Link className=' font-extrabold text-xl hidden sm:block' to="/home">Welcome to LeGO Shop</Link>

                        {user ?
                            <div className='dropdown dropdown-end'>
                                <div className="tooltip tooltip-left" data-tip={user.displayName}>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </label>
                                </div>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            {/* <span className="badge">New</span> */}
                                        </a>
                                    </li>
                                    <li> <Link onClick={handleLogOut}>Logout</Link></li>
                                </ul>
                            </div>
                            :
                            <NavLink to='/login' className={({ isActive }) => isActive ? 'btn btn-info' : 'btn btn-warning'}>Login</NavLink>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;