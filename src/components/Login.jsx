import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      Password: data.Password
    }
    await axios
    .post("http://localhost:4001/user/login", userInfo)
    .then((res) =>{
      console.log(res.data);
      if (res.data) {
        alert("Login successfully");
      };
      localStorage.setItem("Users", JSON.stringify(res.data.user));
    })
    .catch((err) =>{
      if (err.response) {
        
    
      console.log(err);
      alert("Error: " + err.response.data.message);
    }
    })
    };

  return (
    <div>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
      onClick={() =>document.getElementById("my_modal_3").close()}
      >✕
      </Link>
    
    <h3 className="font-bold text-lg">Login</h3>
{/* email  */}
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input className='w-80 px-3 py-1 rounded-md outline-non' type="email" placeholder='Enter your email' {...register("email", { required: true })}
        />
        <br />
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

    </div>
    {/* password */}
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input className='w-80 px-3 py-1 rounded-md outline-non' type="text" placeholder='Enter your password'
        {...register("Password", { required: true })}
        />
        <br />
        {errors.Password && <span className='text-sm text-red-500'>This field is required</span>}

    </div>
    {/* button  */}
    <div className='flex mt-6 justify-around'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
        <p>Not register?{" "} 
          <Link to="/Signup"
          className='underline text-blue-500 cursor-pointer'>
          Signup</Link> {" "} 
    </p>
    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}
  
export default Login;
