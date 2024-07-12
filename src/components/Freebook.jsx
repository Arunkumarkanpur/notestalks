import React, { useEffect, useState } from 'react';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios"

function Freebook() {

  const [book, setBook] = useState([]);
useEffect(() =>{
  const getBook = async() => {
try {
const res = await axios.get("http://localhost:4001/book");

setBook(res.data.filter((data) => data.category === "free"));
console.log(res.data)
} catch (error) {
  console.log(error);
}
  };
  getBook();
},[]);


var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

return (
    <>
    
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-7'>
<div className='mt-20'>
    <h1 className='font-semibold text-xl pb-2 dark:bg-slate-900 dark:text-white text-black'>Free Offered Course</h1>
    <p className='dark:bg-slate-900 dark:text-white text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, illum provident minus consequatur nulla et est labore ipsum ad.
    </p>
</div>
    

<div className='mt-12'>

<Slider {...settings}>

      {book.map((item)=>(
        <Cards item = {item} key = {item.id} />
      ))}  

</Slider>

</div>
</div>

    </>
)
}

export default Freebook;
