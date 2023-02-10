import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Document {
  id: string;
  name: string;
}

const API = "api.com/docs/"

const DocumentsPage = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Document[]>('api.com/docs');
        setDocuments(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const data = new FormData();
      data.append('file', event.target.files![0]);
      const response = await axios.post<Document>(`${API}`, data);
      setDocuments([...documents, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen bg-gray-50">
      <header className="h-24 bg-white dark:bg-gray-900">
        <div className="px-4 py-3">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Documents
          </h3>
          <div className="mt-2 flex">
            <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-gray-300 text-gray-700 mr-2">
              Files
            </span>
            <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-gray-300 text-gray-700 mr-2">
              Embeddings
            </span>
            <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-gray-300 text-gray-700 mr-2">
              Indices
            </span>
            <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-gray-300 text-gray-700">
              Vectors
            </span>
          </div>
        </div>
      </header>
      <main className="p-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="file_input"
        >
          Upload file
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="file_input
          -help"
          id="file_input"
          type="file"
          onChange={handleFileUpload}
        />
        <p
          className="mt-1 text-sm text-gray-500 dark:text-gray-300"
          id="file_input_help"
        >
          SVG, PNG, JPG or GIF (MAX. 800x400px).
        </p>
        <ul className="mt-4 space-y-4">
          {documents.map((document) => (
            <li key={document.id} className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                {document.name}
              </h4>
              <div className="mt-2">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full"
                  onClick={async () => {
                    try {
                      await axios.delete(`${API}/${document.id}`);
                      setDocuments(documents.filter((d) => d.id !== document.id));
                    } catch (error) {
                      console.error(error);
                    }
                  }}
                >
                  Delete
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full ml-2"
                  onClick={async () => {
                    try {
                      const response = await axios.patch(
                        `${API}/edits`
                      );
                      setDocuments(
                        documents.map((d) =>
                          d.id === document.id
                            ? { ...d, ...response.data }
                            : d
                        )
                      );
                    } catch (error) {
                      console.error(error);
                    }
                  }}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default DocumentsPage;