import { NavLink, Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <>
            <header>
                <nav className="flex justify-between px-5 py-8">
                    <h1 className="text-2xl font-bold">Happs</h1>
                    <ul className="flex">
                        <NavLink to="about">About</NavLink>
                        <NavLink to="events">Events</NavLink>
                        <NavLink to="signin">Signin</NavLink>
                    </ul>
                </nav>
            </header>
            <Outlet />
            <footer>
                <p>Designed & Developed By <span>Vaibhav Lohani</span></p>
            </footer>
        </>
    )
}