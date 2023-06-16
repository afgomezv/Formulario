import { CircularProgress, Button, Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const PdfViewer: React.FC<{ url: string }> = ({ url }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    pdfjs.getDocument(url).promise.then((pdf) => {
      setNumPages(pdf.numPages);
    });
  }, [url]);

  const renderLoader = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress />
    </div>
  );

  const renderError = () => <div>Error al cargar el PDF.</div>;

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    if (typeof numPages === "number") {
      if (currentPage < numPages) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }
  };

  return (
    <div>
      {numPages ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <Document file={url} error={renderError} loading={renderLoader}>
              <Page pageNumber={currentPage} />
            </Document>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              disabled={currentPage === 1}
              onClick={goToPreviousPage}
            >
              Página anterior
            </Button>
            <span style={{ margin: "0 16px", fontSize: "18px" }}>
              Página {currentPage} de {numPages}
            </span>
            <Button
              variant="contained"
              disabled={currentPage === numPages}
              onClick={goToNextPage}
            >
              Siguiente página
            </Button>
          </div>
          <div>
            <Checkbox aria-label="He leído y aceptp términos y condiciones" />
          </div>
        </div>
      ) : (
        renderLoader()
      )}
    </div>
  );
};
