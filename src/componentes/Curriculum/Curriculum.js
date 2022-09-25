import React from 'react';
import { Document,Page } from 'react-pdf';


const Curriculum = () =>{
    const URL = "https://github.com/Marilinaroman/Mi_Portfolio/blob/main/public/pdf/cv_marilinaroman.pdf"
        return (
            <div>
                <Document file={URL} className="d-flex justify-content-center">
                    <Page pageNumber={1}/>
                </Document>
            </div>
        );
}
export default Curriculum