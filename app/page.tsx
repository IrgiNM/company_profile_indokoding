import NavLink from '@/components/navLink'
import AboutUs from '@/lib/aboutUs'
import ClientDetails from '@/lib/clientDetails'
import ContactUs from '@/lib/contactUs'
import Navbar from '@/lib/navbar'
import React from 'react'

export default function page() {
  return (
    <>
        <Navbar />
        <AboutUs />
        <ClientDetails />
        <ContactUs />
    </>
  )
}
