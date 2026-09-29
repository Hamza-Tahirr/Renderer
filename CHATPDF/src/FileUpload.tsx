import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

type Props = {
  onPDFUpload: (file: File) => void;
};

const FileUpload = ({ onPDFUpload }: Props) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const pdfFiles = acceptedFiles.filter((file) => file.type === 'application/pdf');
      if (pdfFiles.length > 0) {
        onPDFUpload(pdfFiles[0]);
      } else {
        alert('No PDF files detected.');
      }
    },
    [onPDFUpload],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
  });

  return (
    <div className="p-2 bg-white rounded-xl">
      <div
        {...getRootProps({
          className:
            'border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col',
        })}
      >
        <input {...getInputProps()} />
        <p className="text-sm text-gray-500">
          {isDragActive ? 'Drop the PDF here' : 'Drag a PDF here, or click to choose one'}
        </p>
      </div>
    </div>
  );
};

export default FileUpload;
