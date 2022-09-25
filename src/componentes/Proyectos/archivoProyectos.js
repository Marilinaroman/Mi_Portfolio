const misProyectos = [
    {
        id:'1',
        name:'Turisteando',
        description:'Sitio WEB de turismo. Este proyecto fue realizado para el curso de Desarrollo WEB. Use HTML, SCSS, JavaScript y Bootstrap.',
        pathGithub:'https://github.com/Marilinaroman/dubai.git',
        pathDemo:'https://marilinaroman.github.io/dubai/',
        img:'../images/compuDubai.png'
    },
    {
        id:'2',
        name:'Amapolas',
        description:'E-commerce de pasteleria. Realizado durante el curso de JavaScript. Principalmente utlice HTML, JavaScript, SCSS, Bootstrap, librerias para generar alertas y comunicaciones vía email.',
        pathGithub:'https://github.com/Marilinaroman/Amapolas.git',
        pathDemo:'https://marilinaroman.github.io/Amapolas/',
        img:'../images/compuAmapolas.png'
    },
    {
        id:'3',
        name:'Golden House',
        description:'Es el E-commerce de un bazar realizada con React JS. Este proyecto lo desarrolle con React y Firebase',
        pathGithub:'https://github.com/Marilinaroman/goldenhouse.git',
        pathDemo:'https://goldenhouse.vercel.app/',
        img:'../images/compuGH.png'
    }
]

export const showProyectos = () =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(misProyectos)
        },1000)
    })
}