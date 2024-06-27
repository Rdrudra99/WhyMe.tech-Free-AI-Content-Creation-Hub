import React, { useEffect } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

interface Props {
  aioutput: string;
}

const EditorPart = ({ aioutput }: Props) => {
  const editorRef = React.useRef<any>(null);

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aioutput);
  }, [aioutput]);

  return (
    <div>
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="800px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        ref={editorRef}
        plugins={[colorSyntax, codeSyntaxHighlight]}
        onChange={() => {
          console.log(editorRef.current.getInstance().getMarkdown());
        }}
      />
    </div>
  );
};

export default EditorPart;
