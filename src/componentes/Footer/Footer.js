import {AiFillGithub,AiOutlineMail} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Footer.css'

const Footer = ()=>{

    return(
        <div className="footer">
            <div className="link_contacto">
                <a href="https://github.com/Marilinaroman" target="_blank" rel="noreferrer"><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/marilinaflorenciaroman/" target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
                <a href="mailto:roman.marilinaf@gmail.com" rel="noreferrer"><AiOutlineMail/></a>
            </div>
            <p>Diseñado y Desarrollado por Roman Marilina</p>
        </div>
    )
}

export default Footer