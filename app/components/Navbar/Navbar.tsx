'use client'

import React, { useState, useCallback } from 'react'
import Logo from './Logo'
import UserMenue from './UserMenue'
import Container from '@/app/Container'
import { FaGlobe, FaSearch, FaWhatsapp, FaPhone } from 'react-icons/fa'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  return (
    <div className='fixed w-full bg-white z-10 '>
      <div className='py-4 border-b-[1px] border-gray-200'>
        <Container>
          <div className='flex items-center justify-between'>
            {/* Logo */}
            <div className='flex-shrink-0'>
              <Logo />
            </div>
            {/* Navigation items for large screens */}
            <div className='hidden md:flex flex-grow items-center justify-center space-x-8'>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition duration-300">Buy</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition duration-300">Rent</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition duration-300">Blog</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition duration-300">Areas</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition duration-300">Services</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition duration-300">More</a>
              <div className='flex items-center space-x-1'>
                <FaGlobe className="text-lg text-gray-700" />
                <span className="text-sm font-medium text-gray-700">AED</span>
              </div>
            </div>
            {/* Icons and Hamburger Menu for small screens */}
            <div className='md:hidden flex items-center space-x-4'>
              <FaSearch className='text-xl text-gray-700 cursor-pointer' />
              <FaWhatsapp className='text-xl text-green-500 cursor-pointer' />
              <FaPhone className='text-xl text-gray-700 cursor-pointer' />
              <div 
                onClick={toggleMenu}
                className='flex items-center p-2 hover:bg-gray-200 rounded-full transition cursor-pointer'>
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </div>
            </div>
            {/* User Menu */}
            <div className='hidden md:flex'>
              <UserMenue />
            </div>
          </div>
          {/* Dropdown Menu for small screens */}
          {isMenuOpen && (
            <div className='md:hidden fixed top-16 right-0 w-full bg-white border-t-[1px] border-gray-200 shadow-md rounded-b-lg'>
              <div className='flex flex-col py-4 px-6'>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition duration-300 py-2">Buy</a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition duration-300 py-2">Rent</a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition duration-300 py-2">Blog</a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition duration-300 py-2">Areas</a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition duration-300 py-2">Services</a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition duration-300 py-2">More</a>
                <div className='flex items-center space-x-1 mt-4'>
                  <FaGlobe className="text-lg text-gray-700" />
                  <span className="text-sm font-medium text-gray-700">AED</span>
                </div>
                <div className='flex items-center space-x-4 mt-4'>
                  <FaSearch className='text-xl text-gray-700 cursor-pointer' />
                  <FaWhatsapp className='text-xl text-green-500 cursor-pointer' />
                  <FaPhone className='text-xl text-gray-700 cursor-pointer' />
                </div>
                <div className='mt-4'>
                  <UserMenue />
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </div>
  )
}

export default Navbar
