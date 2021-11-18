import { Nav, NavUL, NavLink } from "./navbar.style"

const Navbar = () => {
    return (
        <Nav>
            <NavUL>
                <NavLink to="/">home</NavLink>
                <NavLink to="/tweets">tweets</NavLink>
                <NavLink to="/troops">troops</NavLink>
            </NavUL>
        </Nav>
    )
}

export default Navbar
