import React, { useState } from 'react';

const Curriculum = () =>{
    const url = 
    "https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf"

    pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
        const [numPages, setNumPages] = useState(null);
        const [pageNumber, setPageNumber] = useState(1);

        function onDocumentLoadSuccess({ numPages }) {
            setNumPages(numPages);
            setPageNumber(1);
        }
    return (
        <>
        <div className="main">
        <Document
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
            >
            <Page pageNumber={pageNumber} />
        </Document>
        </div>
        </>
    );
}
export default Curriculum