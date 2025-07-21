"use client";
import NavLink from '@/components/navLink'
import React from 'react'

export default function Navbar() {
    const nav = [
        {
            isi: "Home",
            warna: "text-[#4F006C]",
            bg: "bg-[#F0D4FF] hover:bg-[#D9C6FF] active:bg-[#BFA4FF]",
            link: ()=>(
              console.log("Home clicked")   
            )
        },
        {
            isi: "Our Work",
            warna: "text-[#128900]",
            bg: "hover:bg-[#D4FFDB] active:bg-[#BFA4FF]",
            link: ()=>(
              console.log("Home clicked")   
            )
        },
        {
            isi: "About Us",
            warna: "text-[#004C6C]",
            bg: "hover:bg-[#D4F6FF] active:bg-[#BFA4FF]",
            link: ()=>(
              console.log("Home clicked")   
            )
        },
        {
            isi: "Contact",
            warna: "text-[#6C4E00]",
            bg: "hover:bg-[#FEFFD4] active:bg-[#BFA4FF]",
            link: ()=>(
              console.log("Home clicked")   
            )
        },
        {
            isi: "Career",
            warna: "text-[#004C6C]",
            bg: "hover:bg-[#D4F6FF] active:bg-[#BFA4FF]",
            link: ()=>(
              console.log("Home clicked")   
            )
        },
        {
            isi: "Book Online",
            warna: "text-[#4F006C]",
            bg: "hover:bg-[#D9C6FF] active:bg-[#BFA4FF]",
            link: ()=>(
              console.log("Home clicked")   
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
