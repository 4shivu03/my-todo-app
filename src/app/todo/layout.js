import Navbar from '@/components/navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
    <Navbar/>
        {children}
    </div>
  )
}

export default layout
