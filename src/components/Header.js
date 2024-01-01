import React from 'react'
import { Link } from 'react-scroll'

function Header() {

  const items = [{
    name : "Home",
    link : "home"
  }, {
    name : "About Us",
    link : "about"
  }, {
    name : "Teachers",
    link : "teachers"
  }, {
    name : "Courses",
    link : "courses"
  }, {
    name : "Contact Us",
    link : "contact"
  }]
  

  return (
    <div className="z-50 flex sticky top-0 bg-white items-center justify-around h-[80px] border-b-2 py-2 border-[#22d3ee]">
      <div className='flex items-center justify-around '>
      <img src="https://resmim.net/cdn/2023/12/30/Zy5tbh.png" className='h-[50px] w-[50px]' alt="" />
      <p className='text-xl font-bold mx-4 text-[#22d3ee]'>Educate</p>
      </div>
      <ul className='flex items-center justify-center'>
        {
          items.map((item, index) => <Link key={index} to={item.link} smooth={true} offset={-100} className='cursor-pointer hover:underline underline-offset-8 hover:text-[#22d3ee] mx-2 font-semibold text-lg'>{item.name}</Link>)
        }
      </ul> 
    </div>
  )
}

export default Header