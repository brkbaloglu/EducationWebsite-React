import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-scroll';

function Footer() {

  const items = [{
    name : "Home",
    link : "home"
  },{
    name : "About Us",
    link : "about"
  },{
    name : "Teachers",
    link : "teachers"
  },{
    name : "Courses",
    link : "courses"
  },{
    name : "Contact Us",
    link : "contact"
  }]


  return (
    <div className='grid grid-cols-3 py-2 h-[300px]'>
      <div className='flex items-center justify-center flex-col'>
      <img src="https://resmim.net/cdn/2023/12/30/Zy5tbh.png" className='h-[100px] w-[100px]' alt="" />
      <p className='text-3xl font-bold mx-4 text-[#22d3ee]'>Educate</p>
      </div>
      <div className='border-x-2 border-[#22d3ee]'>
        <ul className='flex items-center flex-col mt-10'>
          {
            items.map((item, index)=>(
              <Link to={item.link} smooth={true} offset={-100} className='my-1 cursor-pointer text-lg font-semibold hover:underline underline-offset-8 hover:text-[#22d3ee]' key={index}>{item.name}</Link>
            ))
          }
        </ul>
      </div>
      <div>
        <ul className='flex items-center justify-center mt-10'> 
          <Link to='#'><FaFacebookSquare size={50} className='p-2 hover:text-[#22d3ee] cursor-pointer' /></Link>
          <Link to='#'><FaTwitter size={50} className='p-2 hover:text-[#22d3ee] cursor-pointer' /></Link>
          <Link to='#'><FaWhatsapp size={50} className='p-2 hover:text-[#22d3ee] cursor-pointer' /></Link>
          <Link to='#'><FaLinkedin size={50} className='p-2 hover:text-[#22d3ee] cursor-pointer' /></Link>
        </ul>
      </div>
    </div>
  )
}

export default Footer