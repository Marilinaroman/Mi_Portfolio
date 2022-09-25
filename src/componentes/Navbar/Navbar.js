import { Link } from "react-router-dom"
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import './Navbar.css'
const Navbar = () =>{


    return(
        <nav>
            <Link to='/'><img src="../images/logo.png" alt="logo"/></Link>
            <div>
                <ul className="links_navbar">
                    <li className="link">
                        <Link to='/'><AiOutlineHome/> Inicio</Link>
                    </li>
                    <li className="link">
                        <Link to='/SobreMi'><AiOutlineUser/> Sobre mi</Link>
                    </li>
                    <li className="link">
                        <Link to='/MisProyectos'><AiOutlineFundProjectionScreen/> Proyectos</Link>
                    </li>
                    <li className="link">
                        <Link to='/CvRomanMarilina'><CgFileDocument/>CV</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar