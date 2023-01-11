import React from 'react'
import {TiTick} from 'react-icons/ti'

const Services = () => {
  return (
    <div className='mt-5 pt-5'>
       
            <h1 className='text-center bold md:text-3xl text-xl mb-7'>
                Our Services
            </h1>
      
        <div className='grid md:grid-cols-2'>
        <div class="flex justify-center mb-4">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-32 md:h-64 object-cover md:w-64 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <p class="text-gray-700 text-base mb-4">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </p>
      <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
    </div>
  </div>
</div>
<div class="flex justify-center mb-4">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-32 md:h-64 object-cover md:w-64 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <p class="text-gray-700 text-base mb-4">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </p>
      <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
    </div>
  </div>
</div>

<div class="flex justify-center mb-4">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-32 md:h-64 object-cover md:w-64 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <p class="text-gray-700 text-base mb-4">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </p>
      <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
    </div>
  </div>
</div>

<div class="flex justify-center  mb-7">
  <div class="rounded-lg shadow-lg bg-white w-[600px]  ">
        <h1 className='text-center text-3xl bold mt-3 mb-3'>Other Services</h1>
          <div className='ml-6 md:text-2xl text-xl tracking-wide '>
          <div className='flex gap-3 mb-4'><TiTick/> <h1>Oil/oil filter changed.</h1></div>
      <div className='flex gap-3 mb-4'><TiTick/> <h1>Wiper blades replacement.</h1></div>
      <div className='flex gap-3 mb-4'><TiTick/> <h1>Replace air filter.</h1></div>
      <div className='flex gap-3 mb-4'><TiTick/> <h1>Scheduled maintenance.</h1></div>
      <div className='flex gap-3 mb-4'><TiTick/> <h1>Battery replacement.</h1></div>
      <div className='flex gap-3 mb-4'><TiTick/> <h1>Brake work.</h1></div>
      <div className='flex gap-3 mb-4'><TiTick/> <h1>Antifreeze added.</h1></div>
      <div className='flex gap-3 mb-4'><TiTick/> <h1>  Transmission Service</h1></div>
          </div>
  </div>
</div>
        </div>
    </div>
  )
}

export default Services