import './Inicio.css'
import Typewriter from "typewriter-effect";
import Inicio2 from './Inicio2';

const Inicio = () =>{

    
    return(
        <>
            <div className="inicio">
                <div className="saludo">
                    <h1>Hola! <span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                    </span></h1>
                    <p>Mi nombre es Roman Marilina</p>
                    <div>
                        <Typewriter
                            options={{
                                strings: [
                                "Estudiante de Backend.",
                                "Desarrolladora Frontend.",
                                "Licenciada en Administración.",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                            />
                    </div>
                </div>
                <img src='./images/ilustracion.jpg' alt='ilustracion'></img>
            </div>
            <Inicio2/>
            </>
    )
}

export default Inicio