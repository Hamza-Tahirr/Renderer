
import { useState} from 'react';
import PDFUploadComponent from './PDFUploadComponent';


function App() {
  const [selectedText, setSelectedText] = useState('');
  const handlePDFUpload = (file) => {
    console.log('Uploaded PDF:', file.name);
    // Further handling here (e.g., prepare for upload to a server)
  };
  return (

    <div className='App'>
      
      <div className="pdfUploadContainer">
        <PDFUploadComponent onPDFUpload={handlePDFUpload} />
      </div>
     
    </div>
      
  )

}
export default App;