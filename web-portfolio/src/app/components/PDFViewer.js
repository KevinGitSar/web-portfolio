import React from 'react';

const PDFViewer = () => {
  const pdfUrl = '/downloads/Kevin_Sar_-_Resume_2024.pdf';
  const isPdfAvailable = true; // You need to determine whether the PDF is available or not

  return (
    <div className='w-full h-[75vh] overflow-hidden'>
        <object data={pdfUrl} type="application/pdf" width="100%" height="100%">
        <p className='w-1/2 mx-auto mt-10'><b>Unable to render Resume PDF</b>: Please download the Resume PDF to view it: <a href='/downloads/Kevin_Sar_-_Resume_2024.pdf' className='transition ease-in-out delay-100 hover:text-[#3FAA95]' download>Download PDF</a>.</p>
        </object>
    </div>
  );
};

export default PDFViewer;
