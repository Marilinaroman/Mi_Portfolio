import Conocimientos from './Conocimientos'
import './SobreMi.css'

const SobreMi = () =>{

    return(
        <div className='sobre_mi'>
            <h1>Acerca de mi</h1>
            <div className='presentacion_informal'>
                <p className='descripcion'>
                    Soy <strong className="purple">Roman Marilina</strong> vivo en Buenos Aires, Argentina.<br/>
                    Recientemente realice la carrera de <strong className="purple">Programación Frontend </strong>en Coderhouse.<br/>
                    Actualmente estoy estudiando <strong className="purple">Programación Backend con Node.js</strong> en Coderhouse.<br/>
                    Además de programar, mis actividades favoritas son:<br/>
                    👉 Nadar<br/>
                    👉 Viajar<br/>
                    👉 Leer<br/>
                </p>
                <img className='presentacion_informal_img' src='../images/ilustracion_3.jpg' alt='ilustracion programadora'/>
            </div>
            <Conocimientos/>
        </div>
    )
}

export default SobreMi