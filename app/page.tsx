"use client";
import NavLink from '@/components/navLink'
import Home from '@/lib/home'
import { BookOnline } from '@/lib/bookOnline';
import Navbar from '@/lib/navbar'
import Service from '@/lib/ourServices';

import React from 'react'
import Footer from '@/components/footer'

export default function page() {
  return (
    <div className='w-full flex flex-col items-center justify-center overflow-hidden'>
      <Navbar />
      <Home />
      <Service />
      <BookOnline />
      <Footer />
    </div>
  )
}
