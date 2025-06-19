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

const Rfc = () => {
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
    <section class="text-gray-400 bg-gradient-to-br from-slate-800 to-slate-900 body-font">
      <div class="container px-5 py-5 mx-auto">
        <div className="text-center pt-10 mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            Dokumen{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              RFC 2350
            </span>
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-violet-600 inline-flex"></div>
          </div>
        </div>
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
              class="bg-gradient-to-r from-blue-500 to-purple-600 text-white mr-3 px-4 sm:px-4 py-2.5 sm:py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base"
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              Previous
            </button>
            <button
              class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-7 sm:px-7 py-2.5 sm:py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base"
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
export default Rfc;
