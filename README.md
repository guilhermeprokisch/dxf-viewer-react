# React DXF Viewer

This project is a React-based DXF viewer application, adapted from the original [Vue.js DXF viewer example](https://github.com/vagran/dxf-viewer-example) by [vagran](https://github.com/vagran). It uses the [dxf-viewer](https://github.com/vagran/dxf-viewer) library to render DXF files in the browser.

## Features

- Load and display DXF files
- Toggle layer visibility
- Load DXF files from local storage or via URL
- Responsive design

## Prerequisites

- Node.js (version 14 or later recommended)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/guilhermeprokisch/react-dxf-viewer.git
   cd react-dxf-viewer
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To start the development server:

```
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

To create a production build:

```
npm run build
```

The built files will be in the `dist` directory.

## Usage

- Use the "Upload File" button to load a local DXF file
- Use the "URL" button to load a DXF file from a URL
- Toggle layer visibility using the checkboxes in the layer list on the right side of the viewer

## Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Material-UI](https://mui.com/)
- [dxf-viewer](https://github.com/vagran/dxf-viewer)

## Acknowledgements

This project is a React adaptation of the [Vue.js DXF viewer example](https://github.com/vagran/dxf-viewer-example) created by [vagran](https://github.com/vagran). The original project and the [dxf-viewer](https://github.com/vagran/dxf-viewer) library provided the foundation for this React implementation.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/guilhermeprokisch/react-dxf-viewer/issues) if you want to contribute.

## Support

If you have any questions or need help with the setup, please open an issue in the GitHub repository.
