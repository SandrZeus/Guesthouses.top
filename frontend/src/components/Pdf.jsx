import React from 'react';
import "../style/index.css";
import { Worker, Viewer } from '@react-pdf-viewer/core';

function PDF({ pdf }) {
  if (!pdf || !pdf.path) {
      return <div>Error: No PDF path provided</div>; // Error handling if path is missing
  }

  return (
      <div>
        <div className="pdf-container">
          <div className='page-text'>
            <div className='page-pdf'>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer fileUrl={`https://api.guesthouses.top/${pdf.path}`} />
              </Worker>
            </div>
          </div>
          </div>
      </div>
  );
}

export default PDF;
