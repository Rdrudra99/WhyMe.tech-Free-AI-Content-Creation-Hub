import { IconLoader, IconSignature, IconTruckLoading } from '@tabler/icons-react'
import React from 'react'

const loading = () => {
  return (
    <div className='h-screen flex justify-center items-center w-full overflow-hidden'>
        <IconLoader className='animate-spin' />
    </div>
  )
}

export default loading