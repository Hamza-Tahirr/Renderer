import { ChangeEvent } from 'react';

type Props = {
  onPDFUpload: (file: File) => void;
};

function PDFUploadComponent({ onPDFUpload }: Props) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type === 'application/pdf') {
      onPDFUpload(file);
    } else {
      alert('Please choose a PDF file.');
      event.target.value = '';
    }
  };

  return <input type="file" accept="application/pdf" onChange={handleChange} />;
}

export default PDFUploadComponent;
