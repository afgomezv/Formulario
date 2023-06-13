import { useState } from "react";
import { Document, Page } from "react-pdf";

const FramerPage = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPreviousPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  };

  const goToNextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  return (
    <div>
      <Document file="../" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Página {pageNumber} de {numPages}
      </p>
      <div>
        <button onClick={goToPreviousPage} disabled={pageNumber <= 1}>
          Anterior
        </button>
        <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default FramerPage;
