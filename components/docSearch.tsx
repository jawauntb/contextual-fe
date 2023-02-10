import React, { useState, useEffect } from "react";
import axios from "axios";

const ylangylang = "https://ylangylang.jawaunbrown.repl.co/"

const api = axios.create({
  baseURL: ylangylang,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
});

const QueryForm: React.FC = () => {
  const [documents, setDocuments] = useState<Array<{ id: number; name: string }>>([]);
  const [selectedDocument, setSelectedDocument] = useState<number | undefined>(undefined);
  const [queryInput, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState<string>("");

  useEffect(() => {
    // Fetch the documents from the server
    api
      .get("/docs")
      .then((response) => {
        setDocuments(
          response.data.map((doc: { id: number; name: string }) => {
            return {
              id: doc.id,
              name: doc.name,
            };
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (e?: any) => {
    if (e) {
      e.preventDefault();
    }
    console.log('handleSubmit', selectedDocument)
    if (!selectedDocument) {
      console.log("Please select a document first!");
      return;
    }


    axios
      .post(`${ylangylang}docs/${selectedDocument}/query`,
        JSON.stringify({ query: queryInput }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
      .then((response) => {
        setQueryResult(response.data.result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="document-select" className="block text-gray-700 font-medium mb-2">
          Document
        </label>
        <select
          id="document-select"
          className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          onChange={(event) => setSelectedDocument(parseInt(event.target.value))}
          defaultValue="orange"
        >
          <option value="" disabled>
            Select a document
          </option>
          {documents.map((doc) => (
            <option key={doc.id} value={doc.id}>
              {doc.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="query-input" className="block text-gray-700 font-medium mb-2">
          Query
        </label>
        <input
          id="query-input"
          className="appearance-none block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={queryInput}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded"
        type="button"

        onClick={handleSubmit}
      >
        Submit Query
      </button>
      {queryResult && < div className="mt-4">
        <textarea
          className="w-full p-2 border border-gray-400"
          readOnly
          value={queryResult || ""}
        />
      </div>}
    </div >
  );
}

export default QueryForm;
