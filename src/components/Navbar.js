import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'
import logo from './../assets/pokemon.svg';
import {ButtonSign, MenuItems} from './MenuItems';
import Cookies from 'js-cookie';
import { logoutService } from '../service/logoutService';

const Navbar = ()=>{
    const token = Cookies.get("jwtToken");
    const username = Cookies.get('username');
    return (
        <nav id="mainNav" className="navbar navbar-dark navbar-expand-md sticky-top py-3">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <span className="bs-icon-sm bs-icon-circle bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon">
                        <img src={logo} alt='logo'></img>
                    </span>
                    <span className='logo-name'>Pokemon</span>
                </Link>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1">
                    <span className="visually-hidden">Toggle navigation</span>
                    <svg class="bi bi-caret-down" xmlns="http://www.w3.org/2000/svg" width="2em" height="1em" fill="currentColor" viewBox="0 0 16 16">
    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"></path>
</svg>
                </button>
                <div id="navcol-1" className="collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto nav-menu">
                        {MenuItems.map((item,key)=>{
                            return(
                                <li key={key} className="nav-item"><Link className={item.className} to={item.url}>{item.title}</Link></li>
                            )
                        })}
                    </ul>
                    {
                        token?
                        <div className='dropbox'>
                            <div className="dropdown">
                            <button className='btn btn-primary shadow btnLogout dropdown-toggle' data-bs-toggle="dropdown"><span className="material-symbols-outlined">account_circle</span>{username}</button>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" onClick={logoutService}>Logout</Link>
                            </div>
                        </div>
                        </div>
                        :<Link className={ButtonSign.className} role="button" to={ButtonSign.url}>{ButtonSign.title}</Link>}
                </div>
            </div>
        </nav>
    )
}
export default Navbar;