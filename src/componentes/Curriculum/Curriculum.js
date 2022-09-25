import React from 'react';
import './Curriculum.css'



const Curriculum = () =>{

    const URL = '../pdf/cv_marilinaroman.pdf'
    
    return ( 
        <div className='cv'>
            <iframe src={URL} title='mi cv'></iframe>
        </div>
    );
}
export default Curriculum