'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useEffect } from 'react';

interface Props {
  aioutput: string;
  loading: boolean;
}

const EditorPart = ({ aioutput, loading }: Props) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '', // Initialize with empty content
  });

  useEffect(() => {
    if (!loading && editor) {
      // Set content when `aioutput` changes and `loading` is false
      editor.commands.setContent(aioutput);
    }
  }, [aioutput, loading, editor]);

  return (
    <div className='prose w-full'>
        <EditorContent editor={editor} />
    </div>
  );
};

export default EditorPart;
