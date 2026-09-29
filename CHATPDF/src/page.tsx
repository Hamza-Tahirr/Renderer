import { useState } from 'react';
import FileUpload from './FileUpload';

const Page = () => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="max-w-xl mx-auto p-4">
      <FileUpload onPDFUpload={setFile} />
      {file && <p className="mt-2 text-sm">Selected file: {file.name}</p>}
    </div>
  );
};

export default Page;
