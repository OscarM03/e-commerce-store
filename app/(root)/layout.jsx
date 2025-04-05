import React from 'react'
import Navbar from '../../components/navigation/Navbar'
import Footer from '@/components/home/Footer'

const layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-grow'>{children}</div>
      <Footer />
    </div>
  )
}

export default layout
