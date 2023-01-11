import { Input, Textarea } from '@material-tailwind/react'
import React from 'react'

const ContactUs = () => {
  return (
    <div className='mt-6'>
        <div className='grid md:grid-cols-2 gap-2'>
       <div>
        
       </div>
                <div className='border border-gray-500 shadow-sm rounded-sm'>
                    <h1 className='text-center md:text-3xl text-2xl mt-4 '>Contact Us</h1>
                    <h1 className='text-center md:text-md  text-md italic '>Send Us A Message</h1>
                    <div className="  w-full">
                     <form action="" className='flex-col md:ml-15 md:pl-15 justify-center mx-3'>
                   
                    <div className='mb-4 w-full'>
                      <label className='md:text-xl text-md mb-3'>Full Name</label>
                    <Input  color='teal' className='text-md font-bold' type='standard' />
                    </div>
                    <label className='md:text-xl text-md mb-3'>Email Or Phone Number</label>
                    <div className='mb-4 w-full'>
                       <Input  color='teal' className='text-md font-bold'  type='standard' />
                    </div>
                    <label className='md:text-xl text-md mb-3'>Message</label>
                    <div className='w-full mb-4'>
                    <Textarea color='teal' className='text-md font-bold' />
                    </div>
                      </form>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ContactUs