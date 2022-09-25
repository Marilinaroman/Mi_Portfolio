import { DiJavascript1, DiReact, DiNodejs, DiPython, DiGit,DiSass} from "react-icons/di";
import {SiFirebase, SiBootstrap,SiHtml5,SiCss3,SiVisualstudiocode} from "react-icons/si";

const Conocimientos = () =>{

    return(
        <div className="conocimientos">
            <h2>Conocimientos</h2>
            <div className="lenguajes">
                <DiJavascript1/>
                <DiNodejs/>
                <DiReact/>
                <DiPython/>
                <SiBootstrap/>
                <DiSass/>
                <SiHtml5/>
                <SiCss3/>
            </div>
            <h2>Tools</h2>
            <div className="herramientas">
                <SiVisualstudiocode/>
                <SiFirebase/>
                <DiGit/>
            </div>
        </div>
    )
}

export default Conocimientos