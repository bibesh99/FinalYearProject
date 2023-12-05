"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ThemeSwitcher from '../ThemeChanger'
import {IoIosNotifications} from 'react-icons/io'
import {BiSearchAlt} from 'react-icons/bi'
import { IoMdHelp } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center md:p-3 p-1 dark:bg-slate-950 bg-primaryYellow h-[60px] '>
        <div className='flex justify-center items-center md:space-x-2 space-x-1'>
          <div className='md:hidden flex'><GiHamburgerMenu /></div>
          <Image priority className='flex  md:p-2 md:h-[50px] md:w-[170px] h-[38px] w-auto ' src="/assets/logo/tailor-ease-high-resolution-logo-transparent.png" height={1970} width={1940} alt='Main_logo'/>
        </div>
        <div className='md:flex text-black dark:text-white  space-x-10 hidden'>
            <Link href="" className='md:text-md font-semibold text-sm' >Find Tailor</Link>
            <Link href="" className='md:text-md font-semibold text-sm' >Find Jobs</Link>
            <Link href="" className='md:text-md font-semibold text-sm' >Marketplace</Link>

        </div>
        <div className='flex border-2 rounded-[17px] p-1 border-black dark:border-white md:w-[300px] w-[150px] md:h-[36px] h-[30px] md:flex '>
          <div className='flex justify-center items-center space-x-2'>
            <div><BiSearchAlt/></div>
            <input
              className='flex outline-none bg-transparent '
              placeholder='Search'            
            ></input>
          </div>
        </div>
        <div className='flex justify-center items-center space-x-3 '>
            <div className='flex '> 
              <Link className='flex md:text-md font-semibold text-sm' href="">Sign Up</Link>
            </div>
            <div className='md:flex hidden justify-center items-center space-x-3 '>
              <div className='text-2xl'><IoIosNotifications/></div>
              <div className='text-2xl'><IoMdHelp/></div>
              <div><ThemeSwitcher/></div>
            </div>

        </div>
    </div>
  )
}

export default Navbar