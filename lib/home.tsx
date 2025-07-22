import React from 'react'

export default function Home() {
  return (
    <div className='w-full h-200 relative flex flex-col pt-25 items-center justify-start '>
        <img src="/logo.svg" alt="" className='w-35 h-35'/>
        <h1 className='text-6xl font-bold text-[#4F006C] mt-5'>BESPOKE SOFTWARE FOR</h1>
        <h1 className='text-6xl font-bold text-[#4F006C] mt-1 pl-80'>BUSINESSES</h1>
        <div className='flex flex-row justify-center items-center gap-4 mt-9'>
            <p className='text-sm text-[#4F006C] font-bold'>&lt;indokoding/&gt;</p>
            <div className='w-[2px] h-5 bg-[#4F006C]'></div>
            <p className='text-sm text-[#4F006C]'>IT Services</p>
        </div>
        <button className='px-12 py-3 text-xl text-white font-semibold mt-13 rounded-full bg-[#AD48FF]'>Start Book Now</button>

        <p className='text-6xl font-bold italic text-[#4F006C] px-10 pt-3 pb-5 border-5 rounded-full border-[#AD48FF] backdrop-blur absolute left-67 top-80 -rotate-4'>Growing</p>
        <img src="/assets/image/3line_purple.png" alt="gambar-icon-3garis" className='w-17 -rotate-30 absolute left-52 top-83'/>
        <div className='absolute -left-20 -top-20 w-130 h-130 rounded-full bg-[#F1D6FF] -z-1'></div>
        <div className='absolute right-50 -top-30 w-50 h-50 rounded-full bg-[#D6FFDC]'></div>
        <div className='absolute -right-30 top-40 w-130 h-130 rounded-full bg-[#D6E9FF] -z-1'></div>


    </div>
  )
}
