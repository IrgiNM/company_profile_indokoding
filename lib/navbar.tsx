"use client";
import NavLink from '@/components/navLink'
import React, { useState } from 'react'

export default function Navbar() {
    const [bgNav, setBgNav] = useState("Home");
    const nav = [
        {
            isi: "Home",
            warna: "text-[#4F006C]",
            active: "text-[#4F006C] bg-[#D9C6FF]",
            bg: "hover:bg-[#D9C6FF] hover:font-bold active:bg-[#BFA4FF]",
            link: ()=>(
              console.log("Home clicked"),
              setBgNav("Home")   
            )
        },
        {
            isi: "Our Work",
            warna: "text-[#128900]",
            active: "text-[#128900] bg-[#D4FFDB]",
            bg: "hover:bg-[#D4FFDB] hover:font-bold active:bg-[#BFA4FF]",
            link: ()=>(
              console.log("Our Work clicked"),
              setBgNav("Our Work")   
            )
        },
        {
            isi: "About Us",
            warna: "text-[#004C6C]",
            active: "text-[#004C6C] bg-[#D4F6FF]",
            bg: "hover:bg-[#D4F6FF] hover:font-bold active:bg-[#BFA4FF]",
            link: ()=>(
              console.log("About Us clicked"),
              setBgNav("About Us")   
            )
        },
        {
            isi: "Contact",
            warna: "text-[#6C4E00]",
            active: "text-[#6C4E00] bg-[#FEFFD4]",
            bg: "hover:bg-[#FEFFD4] hover:font-bold active:bg-[#BFA4FF]",
            link: ()=>(
              console.log("Contact clicked"),
              setBgNav("Contact")   
            )
        },
        {
            isi: "Career",
            warna: "text-[#004C6C]",
            active: "text-[#004C6C] bg-[#D4F6FF]",
            bg: "hover:bg-[#D4F6FF] hover:font-bold active:bg-[#BFA4FF]",
            link: ()=>(
              console.log("Career clicked"),
              setBgNav("Career")   
            )
        },
        {
            isi: "Book Online",
            warna: "text-[#4F006C]",
            active: "text-[#4F006C] bg-[#D9C6FF]",
            bg: "hover:bg-[#D9C6FF] hover:font-bold active:bg-[#BFA4FF]",
            link: ()=>(
              console.log("Book Online clicked"),
              setBgNav("Book Online")   
            )
        },
    ]
  return (
    <div className='flex flex-row justify-center items-center gap-4 pt-7'>
        {nav.map((x,y)=>(
            <NavLink key={y} warna={x.warna} bg={x.bg} klik={x.link}>{x.isi}</NavLink>
        ))}
    </div>
  )
}
