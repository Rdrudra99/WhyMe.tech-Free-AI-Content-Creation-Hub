import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useEffect, useState } from 'react';
import { ScrollArea } from './ui/scroll-area';
import { Markdown } from 'tiptap-markdown'; // Import the Markdown extension
import EditorMenubar from './EditorMenubar';

interface Props {
    aioutput: string;
    loading: boolean;
}

const EditorPart: React.FC<Props> = ({ aioutput, loading }) => {
    const [markdownOutput, setMarkdownOutput] = useState<string>('');

    const editor = useEditor({
        extensions: [StarterKit, Markdown],
        content: aioutput,
    });

    useEffect(() => {
        if (editor && !loading) {
            editor.commands.setContent(aioutput);
            setMarkdownOutput(editor.storage.markdown.getMarkdown()); // Set markdown output after content is set
        }
    }, [aioutput, loading, editor]);

    return (
            <div className='prose'>
                <EditorContent editor={editor} />
            </div>
    );
};

export default EditorPart;
