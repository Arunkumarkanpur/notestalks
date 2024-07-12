import React, { useEffect, useState } from 'react'

import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios";

function Course() {
const [book,setBook] = useState([])
useEffect(() =>{
  const getBook = async() => {
try {
const res = await axios.get("http://localhost:4001/book");
console.log(res.data)
setBook(res.data)
} catch (error) {
  console.log(error);
}
  };
  getBook();
},[]);
  return (
    <>
    
<div className='max-w-screen-2xl container mx-auto md:px-20 px-7 dark:bg-slate-900 dark:text-white'>
  <div className='mt-28 item-centre justify-center text-center'><h1 className='text-2xl dark:bg-slate-900 dark:text-white text-black  font-semibold md:text-4xl '>We're delighted to have you <span className='text-pink-500'>Here!!</span></h1>
  <p className='mt-12 dark:bg-slate-900 dark:text-white text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum deleniti provident est ea assumenda, eveniet mollitia, nemo alias dolore praesentium repellat? Rem illo aliquid earum doloremque libero alias veniam iure. Vero asperiores a omnis atque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolorem quam quae?

</p>
<Link to="/">
<button className='mt-6 text-black bg-pink-400 rounded-md py-2 px-6 hover:bg-pink-600'>Back</button> </Link>

  </div>

<div className=' mt-12 grid grid-cols-1 md:grid-cols-4 '>
  {book.map((item) =>(
  <Cards key = {item.id} item = {item}/>
))

  }
</div>


</div>

    </>
  )
}

export default Course
