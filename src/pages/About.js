import React from 'react'

function About() {
  return (
    <div className='grid grid-cols-2 mx-10 my-10' id='about'>
      <img className='' src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <div className='mx-10 my-10 pt-10'>
        <h2 className='text-center text-4xl font-bold mb-10'>About <span className='text-[#48def6]'>Us</span></h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique alias explicabo iusto esse odio quae aspernatur eaque et. Veritatis quos qui nam fugiat, nisi nobis nostrum quae. Obcaecati, voluptas? Delectus magni saepe aut praesentium non. Fugit voluptas tempora ducimus? Culpa provident accusantium odio eligendi aliquid saepe dicta ipsum praesentium inventore?</p>
      </div>
    </div>
  )
}

export default About