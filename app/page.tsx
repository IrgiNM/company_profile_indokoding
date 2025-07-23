"use client";
import NavLink from '@/components/navLink'
import AboutUs from '@/lib/aboutUs'
import ClientDetails from '@/lib/clientDetails'
import ContactUs from '@/lib/contactUs'
import Home from '@/lib/home'
import { BookOnline } from '@/lib/bookOnline';
import Navbar from '@/lib/navbar'
import Service from '@/lib/ourServices';

import React from 'react'
import Footer from '@/components/footer'
import OurWork from '@/lib/ourWork'
import { Service2 } from '@/lib/ourServices2';

export default function page() {
  return (
    <div className='w-full flex flex-col items-center justify-center overflow-hidden'>
      <Navbar/>
      <Home/>
      <OurWork/>
      <Service />
      <BookOnline />
<<<<<<< HEAD
      <Service2 />
=======
      <AboutUs />
      <ClientDetails />
      <ContactUs />
>>>>>>> 1a102385d58d946a037ddf32cdbe794918844964
      <Footer />
       
    </div>
  )
}
