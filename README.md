# CSV to JSON Converter

A simple React application that allows users to upload CSV files, convert them to JSON format, and download the converted JSON file. The application features drag-and-drop functionality for easy file uploads.

## Features

- Drag and drop CSV file upload
- CSV to JSON conversion using [PapaParse](https://www.papaparse.com/)
- JSON preview
- Download functionality for the converted JSON file
- User-friendly interface with error handling

## Technologies Used

- React
- React Dropzone
- PapaParse
- CSS for styling

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ponaalagar/csvToJson.git
   cd csvToJson
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

1. Drag and drop a CSV file into the designated area or click to select a file.
2. The application will automatically convert the CSV data to JSON format.
3. Preview the converted JSON data.
4. Click the "Download" button to download the JSON file.
5. Use the "Exit" button to clear the current data and start over.

## Example CSV Format

To test the application, you can use a CSV file with the following format:

name,age,city\n
John,30,New York\n
Jane,25,Los Angeles\n
Bob,35,Chicago\n
## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
