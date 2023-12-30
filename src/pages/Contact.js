import React from 'react'
import { useFormik } from 'formik';
import validationSchema from "../Validations/validations"
function Contact() {

    const {handleSubmit, handleBlur, isSubmitting, handleChange, values, errors, touched} = useFormik({
        initialValues: {
            firstName : "",
            lastName : "",
            email : "",
            message : ""
        },
        
        onSubmit: async(values, bag) => {
            await new Promise((r) => setTimeout(r, 1000))

            console.log(values)
            bag.resetForm()
        }, 
        
        validationSchema : validationSchema
    })

  return (
    <div id='contact'>
        <h1 className='text-center my-10 text-4xl font-bold'>Contact <span className='text-[#48def6]'>Us</span></h1>

        <form action="" onSubmit={handleSubmit} className='flex items-center justify-center flex-col'>
            <input className='my-2 w-[400px] px-4 py-2 border-2 rounded-xl border-[#48def6]' onBlur={handleBlur("firstName")} disabled={isSubmitting} value={values.firstName} id='firstName' name='firstName' placeholder='First Name' onChange={handleChange("firstName")} />
            {errors.firstName && touched.firstName && <div className='text-red-600 font-semibold'>{errors.firstName}</div>}
            <input className='my-2 w-[400px] px-4 py-2 border-2 rounded-xl border-[#48def6]' onBlur={handleBlur("lastName")} disabled={isSubmitting} value={values.lastName} id='lastName' name='lastName' placeholder='Last Name' onChange={handleChange("lastName")} />
            {errors.lastName && touched.lastName && <div className='text-red-600 font-semibold'>{errors.lastName}</div>}
            <input className='my-2 w-[400px] px-4 py-2 border-2 rounded-xl border-[#48def6]' onBlur={handleBlur("email")} disabled={isSubmitting} value={values.email} id='email' name='email' type='email' placeholder='E-mail' onChange={handleChange("email")} />
            {errors.email && touched.email && <div className='text-red-600 font-semibold'>{errors.email}</div>}
            <textarea className='my-2 resize-none w-[400px] h-[100px] px-4 py-2 border-2 rounded-xl border-[#48def6]' onBlur={handleBlur("message")} value={values.message} name="message" id="message" placeholder='Message' onChange={handleChange("message")}></textarea>
            {errors.message && touched.message && <div className='text-red-600 font-semibold'>{errors.message}</div>}
            <button className='my-2 border-2 text-[#48def6] px-4 py-2 border-[#48def6] rounded-xl hover:bg-[#48def6] hover:text-white' type='submit' disabled={isSubmitting}>Submit</button>
            
        </form>
        
    </div>
  )
}

export default Contact