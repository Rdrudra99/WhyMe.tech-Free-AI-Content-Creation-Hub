"use client"
import React from 'react'
import { Button } from './ui/button'
import { CopyIcon } from 'lucide-react'
import { toast } from './ui/use-toast'
const Copy = ({output}:any) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(output);
        toast({
            description: "Copied to clipboard 👏",
          })
    }
  return (
    <Button variant="outline" size="icon" onClick={handleCopy}>
      <CopyIcon className="h-4 w-4" />
    </Button>
  )
}

export default Copy