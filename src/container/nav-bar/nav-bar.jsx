import { Link } from "react-router-dom"
import style from "./nav-bar.module.css"

const NavBar = () => {

    return (
        <nav>
            <ul className={style.container}>
                <li>
                    <Link to="/first/2">First</Link>
                </li>
                <li>
                    <Link to="/second">Second</Link>
                </li>
                <li>
                    <Link to="/third">Third</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar