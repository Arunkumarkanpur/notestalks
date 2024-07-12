import React from 'react';
import banner from "../../public/banner.jpg";

function Banner() {
return (
<>
<div className='max-w-screen-2xl container mx-auto md:px-20 px-7 dark:bg-slate-900 dark:text-white flex flex-col md:flex-row my-16'>
<div className='order-2 md:order-1 w-full md:w-1/2 mt-10 md:mt-30'>
<div className='space-y-10'>
<h1 className='text-4xl font-bold mt-16 text-blue-500'>Hello, welcomes here to learn something 
        <span className='text-pink-500'> new everyday!!!
        </span>
    </h1>
    <p className='text-md dark:bg-slate-900 dark:text-white text-black'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, quo optio dolor assumenda laudantium a quidem enim aut ab. Fugit.
    </p>
</div>

<div className='mt-24'>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
</div>

<button className="btn mt-6 btn-secondary">Get Started</button>


</div>
<div className='order-1 w-full md:w-1/2 mt-12 md:mt-30 flex flex-col md:flex-row space-y-5 dark:bg-slate-900 dark:text-white'>

    <img className='w-80 h-80 rounded-full dark:bg-slate-900 dark:image-white' src={banner} alt="" />
</div>
</div>
</>
)
}

export default Banner
