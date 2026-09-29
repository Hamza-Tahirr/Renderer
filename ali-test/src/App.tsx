import { useState } from 'react';
import PDFUploadComponent from './PDFUploadComponent';

function App() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="App">
      <div className="pdfUploadContainer">
        <PDFUploadComponent onPDFUpload={setFile} />
      </div>
      {file && <p>Selected file: {file.name}</p>}
    </div>
  );
}

export default App;
