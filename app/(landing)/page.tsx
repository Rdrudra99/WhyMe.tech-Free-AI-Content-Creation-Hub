import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <Button variant="outline">
                <Link href="/sign-in">Sign In</Link>
        </Button>
    </div>
  )
}

export default page
