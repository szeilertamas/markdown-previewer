# Markdown Previewer

This project is a simple Markdown Previewer that allows users to input Markdown text in an editor and preview the rendered HTML output. It is built using React and utilizes the `marked` library for converting Markdown to HTML and `DOMPurify` for sanitizing the HTML output.

You can view this project live here: https://szeilertamas.github.io/markdown-previewer/

## Features

- **Markdown Editor:** Input your Markdown text in the provided editor.
- **Live Preview:** See the live preview of the rendered HTML as you type.

   ## Project Structure

- **index.html:** HTML file containing the root element and script references.
- **main.jsx:** Entry point for the React application, rendering the App component.
- **App.jsx:** Main component containing the Markdown editor and previewer.
- **onLoadMarkdown.js:** Module exporting default Markdown content for initial loading.
- **App.css, index.css:** Stylesheets for the components.

## Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [marked](https://marked.js.org/) - Markdown parser and compiler.
- [DOMPurify](https://github.com/cure53/DOMPurify) - DOM-only, super-fast, and uber-tolerant XSS sanitizer.

## Acknowledgments

This project was created as a part of FreeCodeCamp Front End Libraries Certification.