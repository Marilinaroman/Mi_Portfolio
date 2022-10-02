import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import './Navbar.css'

const Navbar = () =>{

    const [toggle,setToggle] = useState({'display':'flex'})

    useEffect(()=>{
        if(window.innerWidth>480){
            setToggle({'display':'flex'})
        } else {
            setToggle({'display':'none'})
        }
    },[])

    const handleToggle = () =>{
        if(window.innerWidth<=480){
            setToggle({'display':'flex'})
            setTimeout(()=>{
                setToggle({'display':'none'})
            },2000)
        } 
        
    }

    return(
        <nav>
            <Link to='/'><img src="../images/logo.png" onClick={handleToggle} alt="logo"/></Link>
            <div>
                <ul className="links_navbar" style={toggle}>
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
                        <a href='../pdf/cv_marilinaroman.pdf' target="_blank" rel="noreferrer"><CgFileDocument/>CV</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar