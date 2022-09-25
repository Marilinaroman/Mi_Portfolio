import Card from './Card'

const MiProyecto = ({proyectos})=>{

    return(
        <>
        {proyectos?.map((e)=> <Card key={e.id} {...e}/>)}
        </>
    )
}

export default MiProyecto