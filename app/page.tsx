"use client";
import NavLink from '@/components/navLink'
import { BookOnline } from '@/lib/bookOnline';
import Navbar from '@/lib/navbar'
import Service from '@/lib/ourServices';

import React from 'react'

export default function page() {
  return (
    <>
        <Navbar />
        <Service />
        <BookOnline />
    </>
  )
}
