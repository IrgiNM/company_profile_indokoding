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
        }
    ]
  return (
    <div className='flex flex-row justify-center items-center gap-4 pt-7'>
        {nav.map((x,y)=>(
            <NavLink key={y} warna={x.warna} bg={x.bg} klik={x.link}>{x.isi}</NavLink>
        ))}
    </div>
  )
}
