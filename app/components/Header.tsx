"use client"
import Image from 'next/image'
import React from 'react'
import { HiBell, HiChat, HiSearch } from 'react-icons/hi'
import { useSession, signIn, signOut } from "next-auth/react"

function Header() {
  const { data: session } = useSession()
  console.log(session);
  return (
    <div className='flex gap-3 md:gap-3 items-center p-6'>
      <Image src={'/logo.png'} alt='logo' width={50} height={50} className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>
      <button className='bg-black text-white p-2 px-4 rounded-full'>Home</button>
      <button className='p-2 px-4 rounded-full font-semibold'>Create</button>
      <div className='bg-[#e9e9e9] p-3 gap-3 items-center rounded-full w-full hidden md:flex'>
        <HiSearch className='text-[25px] text-gray-500'/>
        <input type="text" placeholder='Search' className='bg-transparent outline-none' />
      </div>
        <HiSearch className='text-[25px] text-gray-500 md:hidden'/>
        <HiBell className='text-[25px] md:text-[40px] text-gray-500'/>
        <HiChat className='text-[25px] md:text-[40px] text-gray-500'/>
        {session?.user? <Image src={session.user.image || "/man.png"} alt='user-image' width={50} height={50} className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>:
        <button className='p-2 px-4 rounded-full font-semibold' onClick={() => signIn()}>Login</button> }
    </div>
  )
}

export default Header
