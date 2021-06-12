import { CodeBlock, dracula } from "react-code-blocks";

function MyCodeBlock({ code, language }) {
  return (
    <div className='code-block'>
      <p>Code Preview</p>
      <CodeBlock
        text={code}
        language={language}
        theme={dracula}
        showLineNumbers={false}
      />
    </div>
  );
}

export default MyCodeBlock;