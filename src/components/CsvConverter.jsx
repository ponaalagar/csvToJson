import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import './CsvConverter.css';

const CsvConverter = () => {
  const [jsonData, setJsonData] = useState(null);
  const [error, setError] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setError(null);
    
    if (file) {
      if (file.type !== 'text/csv' && !file.name.endsWith('.csv')) {
        setError('Please upload a valid CSV file');
        return;
      }

      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          if (results.errors.length) {
            setError('Error parsing CSV file: ' + results.errors[0].message);
            return;
          }

          if (results.data.length === 0) {
            setError('The CSV file is empty');
            return;
          }

          setJsonData(results.data);
        },
        error: (error) => {
          setError('Error reading file: ' + error.message);
        }
      });
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'text/csv': ['.csv']
    },
    multiple: false
  });

  const handleDownload = () => {
    if (jsonData) {
      const jsonString = JSON.stringify(jsonData, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'converted.json';
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  const handleExit = () => {
    setJsonData(null);
    setError(null);
  };

  return (
    <div className="csv-converter">
      <div className="header">
        <h1>csv → json</h1>
      </div>
      
      <div className="content">
        <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''} ${error ? 'error' : ''}`}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the CSV file here...</p>
          ) : (
            <div className="upload-content">
              <p>Drag and drop a CSV file here, or click to select a file</p>
              <small>Only .csv files are accepted</small>
            </div>
          )}
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <div className="buttons-container">
          <button 
            onClick={handleDownload} 
            className={`action-button download-btn ${!jsonData ? 'disabled' : ''}`}
            disabled={!jsonData}
          >
            <span className="icon">📥</span>
            download
          </button>
          
          <button 
            onClick={handleExit} 
            className="action-button exit-btn"
          >
            <span className="icon">←</span>
            exit
          </button>
        </div>

        {jsonData && (
          <div className="preview">
            <h2>Preview:</h2>
            <pre>{JSON.stringify(jsonData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default CsvConverter;