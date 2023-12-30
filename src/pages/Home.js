import React from 'react'
import { Link } from 'react-scroll'

function Home() {

  const buttons = [{
    title : "Our Courses",
    link : "courses"
  },{
    title : "Our Teachers",
    link : "teachers"
  }]

  return (
    <div id='home'>
        <img className='h-screen w-full' src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='absolute right-40 top-[300px] text-white'>
            <h3 className='text-4xl font-bold'>This Is The <span className='text-[#48def6]'>Best Course</span> You Will Find</h3>
            <p className='w-[500px] text-lg mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odio, reprehenderit aliquam similique molestiae sunt nemo qui fugit temporibus voluptatum.</p>
            <div className='mt-10'>
              {
                buttons.map((button, index) => (
                  <Link to={button.link} smooth={true} offset={-100} key={index} className='px-4 mx-2 py-2 bg-[#48def6] rounded-lg hover:bg-white border-2 border-[#48def6] hover:text-[#48def6] cursor-pointer'>{button.title}</Link>
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Home