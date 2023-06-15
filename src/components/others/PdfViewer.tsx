import React from "react";
import { Document, Page } from "react-pdf";

interface PDFViewerProps {
  pdfPath: string;
}

export const PdfViewer: React.FC<PDFViewerProps> = ({ pdfPath }) => {
  return (
    <div>
      <Document file={pdfPath}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};
