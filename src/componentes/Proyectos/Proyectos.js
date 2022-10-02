import { useEffect, useState } from "react"
import { showProyectos } from "./archivoProyectos"
import MiProyecto from "./MiProyecto"
import './Proyectos.css'


const Proyectos = () =>{

    const [proyectos, setProyectos] = useState()

    useEffect(() => {
        document.title = 'Marilina Roman';
    },[]);

    useEffect(()=>{
        showProyectos().then(e =>{
            setProyectos(e)
        })
    })

    return(
        <>
            <h1>Mis Proyectos</h1>
            <div className="mis_proyectos">
                <MiProyecto proyectos={proyectos}/>
            </div>
        </>
    )
        
}

export default Proyectos