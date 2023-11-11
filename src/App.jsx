import { useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import onLoadMarkdown from "./onLoadMarkdown";
import "./App.css";

function App() {
  const [markdownText, setMarkdownText] = useState(onLoadMarkdown);

  function handleChange(event) {
    const typedInMarkdownText = event.target.value;
    setMarkdownText(typedInMarkdownText);
  }

  const html = marked(markdownText, { breaks: true });

  const sanitizedHtml = DOMPurify.sanitize(html);

  return (
    <>
      <div className="container">
        <h1>Editor</h1>
        <textarea id="editor" value={markdownText} onChange={handleChange}></textarea>
        <h1>Preview</h1>
        <div id="preview" dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></div>
      </div>
    </>
  );
}

export default App;
