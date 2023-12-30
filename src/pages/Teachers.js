import React from 'react'

function Teachers() {

  const teachers = [{
    name : "Patrick A. Norman",
    gender : "male",
    age : "30",
    country : "USA",
    teacherLanguages : "English",
    telephone : "860-527-7848",
    teacherImage : "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    teacherLessons : "Math, OOP, Web Programming"
  },{
    name : "Heljä Hanski",
    gender : "female",
    age : "46",
    country : "Finland",
    teacherLanguages : "English, Finnish",
    telephone : "402-462-2553",
    teacherImage : "https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    teacherLessons : "History"
  },{
    name : "Kristin Scholz",
    gender : "female",
    age : "22",
    country : "Germany",
    teacherLanguages : "English, German",
    telephone : "05553 59 12 54",
    teacherImage : "https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    teacherLessons : "Physics, Math"
  },{
    name : "Gradasso Mailly",
    gender : "male",
    age : "22",
    country : "France",
    teacherLanguages : "French",
    telephone : "05.58.76.08.78",
    teacherImage : "https://images.pexels.com/photos/5212338/pexels-photo-5212338.jpeg",
    teacherLessons : "Math, Chemistry"
  }]

  return (
    <div id='teachers'>
      <h2 className='text-center text-4xl font-bold my-10'>Our <span className='text-[#48def6]'>Teachers</span></h2>
      <div className='grid grid-cols-2'>
        {
          teachers.map((teacher) => (
            <div className=' mx-10'>
              <div className='flex items-center justify-center flex-col my-5'>
                <img className='w-[500px] h-[300px] my-10' src={teacher.teacherImage} alt="" />
                <h2 className='font-bold'>Teacher name : <span className='font-normal'>{teacher.name}</span></h2>
                <h3 className='font-bold'>Languages teacher knows : <span className='font-normal'>{teacher.teacherLanguages}</span></h3>
                <h5 className='font-bold'>Lessons given by teacher : <span className='font-normal'>{teacher.teacherLessons}</span></h5>
              </div>
              
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Teachers