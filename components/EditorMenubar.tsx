import React from 'react';
import { Editor } from '@tiptap/react'; // Import the Editor type
import { Button } from './ui/button';
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import Link from 'next/link';
import { Bold, Italic, Underline, Strikethrough, Code, RotateCcw, RotateCw, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Code2, Copy, ArrowLeft } from 'lucide-react';
interface EditorMenubarProps {
    editor: Editor | null; // The editor instance or null if not initialized
}

const EditorMenubar: React.FC<EditorMenubarProps> = ({ editor }) => {
    if (!editor) {
        return null; // Don't render the menu if the editor isn't ready
    }

    return (
            <div className="flex justify-center items-center overflow-hidden pt-10">
                <ToggleGroup type="multiple" className="flex space-x-2 flex-wrap">
                    <ToggleGroupItem
                        value="back"
                        aria-label="Toggle back"
                        onClick={() => window.history.back()}
                        className={editor.isActive('bold') ? '' : ''}
                    >
                        <ArrowLeft className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="bold"
                        aria-label="Toggle bold"
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className={editor.isActive('bold') ? '' : ''}
                    >
                        <Bold className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="italic"
                        aria-label="Toggle italic"
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        className={editor.isActive('italic') ? '' : ''}
                    >
                        <Italic className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="strikethrough"
                        aria-label="Toggle strikethrough"
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        className={editor.isActive('strike') ? '' : ''}
                    >
                        <Strikethrough className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="h1"
                        aria-label="Toggle h1"
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        className={editor.isActive('heading', { level: 1 }) ? '' : ''}
                    >
                        <Heading1 className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="h2"
                        aria-label="Toggle h2"
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        className={editor.isActive('heading', { level: 2 }) ? '' : ''}
                    >
                        <Heading2 className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="h3"
                        aria-label="Toggle h3"
                        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                        className={editor.isActive('heading', { level: 3 }) ? '' : ''}
                    >
                        <Heading3 className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="h4"
                        aria-label="Toggle h4"
                        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                        className={editor.isActive('heading', { level: 4 }) ? '' : ''}
                    >
                        <Heading4 className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="h5"
                        aria-label="Toggle h5"
                        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                        className={editor.isActive('heading', { level: 5 }) ? '' : ''}
                    >
                        <Heading5 className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="code"
                        aria-label="Toggle code"
                        onClick={() => editor.chain().focus().toggleCode().run()}
                        className={editor.isActive('code') ? '' : ''}
                    >
                        <Code className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="codeblock"
                        aria-label="Toggle code block"
                        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                        className={editor.isActive('codeblock') ? '' : ''}
                    >
                        <Code2 className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="undo"
                        aria-label="Undo"
                        onClick={() => editor.chain().focus().undo().run()}
                    >
                        <RotateCcw className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="redo"
                        aria-label="Redo"
                        onClick={() => editor.chain().focus().redo().run()}
                    >
                        <RotateCw className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="copy"
                        aria-label="copy"
                        onClick={() => navigator.clipboard.writeText(
                            editor.getText()
                        )}
                    >
                        <Copy className="h-4 w-4" />
                    </ToggleGroupItem>
                </ToggleGroup>

            </div>
    );
};

export default EditorMenubar;
