import NavLink from '@/components/navLink'
import Home from '@/lib/home'
import Navbar from '@/lib/navbar'
import React from 'react'

export default function page() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <Navbar />
      <Home />
    </div>
  )
}
