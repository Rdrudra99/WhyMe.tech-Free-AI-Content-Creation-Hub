'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useEffect } from 'react';
import { ScrollArea } from './ui/scroll-area';
import Loader from './Reuse/Loader';
import EmptyState from './Reuse/EmptyState';

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

  // Ensure editor is initialized before trying to render the content
  if (!editor) {
    return null;
  }

  return (
    <div className='w-full h-full'>
    {loading ? (
      <div className="flex justify-center items-center h-full">
        <Loader />
      </div>
    ) : aioutput ? (
      <EditorContent
        editor={editor}
      />
    ) : (
      <div className="flex justify-center items-center h-full">
        <EmptyState />
      </div>
    )}
  </div>
  
  );
};

export default EditorPart;
