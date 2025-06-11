import { useState } from "react";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Document, Page } from "react-pdf";

import RfcPdf from "../src/assets/rfc2350-id.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export const Rfc = () => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function previousPage() {
    setPageNumber((n) => --n);
  }

  function nextPage() {
    setPageNumber((n) => ++n);
  }

  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-5 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <div>
            <Document
              file={RfcPdf}
              onLoadError={console.error}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p class="pb-6">
              Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </p>
            <button
              class="bg-violet-500 hover:bg-violet-700 m-1 min-w-[100px] text-white font-bold py-2 px-4 rounded-full shadow-lg"
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              Previous
            </button>
            <button
              class="bg-violet-500 hover:bg-violet-700 m-1 min-w-[100px] text-white font-bold py-2 px-4 rounded-full shadow-lg"
              type="button"
              disabled={numPages ? pageNumber >= numPages : true}
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
