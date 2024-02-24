'use client'
import React from 'react';
import {useDropzone} from 'react-dropzone';


const FileUpload = ({onPDFUpload}) => {
    const onDrop = React.useCallback((acceptedFiles) => {
        // Filter for PDF files
        const pdfFiles = acceptedFiles.filter(file => file.type === 'application/pdf');
        if (pdfFiles.length > 0) {
          // Assuming you want to handle the first PDF file
          onPDFUpload(pdfFiles[0]);
        } else {
          alert("No PDF files detected.");
        }
      }, [onPDFUpload]);

      const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: {'application/pdf'},
      });

  return (
    <div className='p-2 bg-white rounded-xl'>
        <div {...getRootProps({
            className: 'border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col'
        })}>
            <input {...getInputProps()} />
        </div>
    </div>
  )
}

export default FileUpload

