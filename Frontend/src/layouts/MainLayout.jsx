import { NavLink, Outlet } from "react-router-dom";

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
                <p>Designed & Developed By <span>Vaibhav Lohani</span></p>
            </footer>
        </>
    )
}