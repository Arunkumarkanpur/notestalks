import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios"
import Login from './Login';



function Signup() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const onSubmit = async (data) => {
const userInfo = {
  fullname: data.fullname,
  email: data.email,
  Password: data.Password
}
await axios
.post("http://localhost:4001/user/signup", userInfo)
.then((res) =>{
  console.log(res.data);
  if (res.data) {
    alert("Signup successfully"); 
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
    <>
      
      <div className='flex h-screen item-center justify-center'>
    <div className="w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">Signup</h3>

    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br />
        <input className='w-80 px-3 py-1 rounded-md outline-non' type="text" placeholder='Enter your fullname'
        {...register("fullname", { required: true })} 
        />
        <br />
        {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
{/* email  */}
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input className='w-80 px-3 py-1 rounded-md outline-non' type="email" placeholder='Enter your email'
        {...register("email", { required: true })}
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
    <div className='flex mt-4 justify-around'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>

        <p>Have Account?{""}
          <Link to="/" className='underline text-blue-500 cursor-pointer'
          >Login</Link>{" "}

  </p> 
  </div>
  </form>
  </div>
</div>
</div>
    </>
  );
}

export default Signup;
