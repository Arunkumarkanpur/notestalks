import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'



function Courses() {
  return (
    <>
    <div className='menu menu-sm dropdown-content h-16 bg-base-100 shadow'>
<Navbar/>
    </div>
    
   <div className='min-h-screen'> 
    <Course/>
   </div>
    <Footer/>
    </>
  );
}

export default Courses;
