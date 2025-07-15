import { NavLink, Outlet } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa6";

export default function MainLayout(){
    return(
        <>
            <header>
                <nav className="main-nav">
                    <NavLink to='/'><h1>Happs</h1></NavLink>
                    <div>
                        <NavLink to='about'>About</NavLink>
                        <NavLink to='login' className="login-btn">Login</NavLink>
                    </div>
                </nav>
            </header>
            <Outlet />
            <footer>
                <p><FaRegCopyright /> {new Date().getFullYear()} Happs</p>
            </footer>
        </>
    )
}