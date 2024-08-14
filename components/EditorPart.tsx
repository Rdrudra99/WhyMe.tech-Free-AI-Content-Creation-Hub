'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useEffect } from 'react';
import Loader from './Reuse/Loader';
import EmptyState from './Reuse/EmptyState';
import { MemoizedReactMarkdown } from './markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

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
      <MemoizedReactMarkdown
      className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
      remarkPlugins={[remarkGfm, remarkMath]}
      components={{
        p({ children }) {
          return <p className="mb-2 last:mb-0">{children}</p>
        },
      }}
    >
      {aioutput}
    </MemoizedReactMarkdown>
    ) : (
      <div className="flex justify-center items-center h-full">
        <EmptyState />
      </div>
    )}
  </div>
  
  );
};

export default EditorPart;
