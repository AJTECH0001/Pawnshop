'use client'
import React from 'react'
import Link from "next/link"
import ConnectAuth from "./ConnectAuth"

const Navbar = () => {
  
  return (
    <div className='bg-white'>
      <div className="text-black  flex justify-around items-center py-9">
        <div>
            <h1 className=' text-3xl font-bold'>PawnShop</h1>
        </div>

        <div className=' max-sm:hidden'>
            <ul className=' flex gap-12 justify-between flex-row list-none  text-2xl font-normal'>
                <li className=''>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href={"/list"}>Sell</Link>
                </li>
                <li>
                    <Link href={"/about-us"}>Buy</Link>
                </li>
                <li>
                    <Link href={"/contact"}>About Us</Link>
                </li>
            </ul>
        </div>

        <div>
            <ConnectAuth />
        </div>
      </div>
    </div>
  )
}

export default Navbar
