import React, { useState } from 'react'
import Navbar from './navbar'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'

function Addemp() {
    const [data,setdata]=useState({})

    const handlechange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
      }

      const handlesubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/emp/addemp',data).then(res=>{
            toast.success("employee added")
        })
        .catch(err=>{
          toast.error("employee adding failed")
        })
      }
  return (
    <div className='bg-slate-600 h-screen'>
        <ToastContainer/>
      <Navbar/>
      <div className='bg-neutral-500/30 mx-2 mt-[150px] lg:mt-10 lg:mx-72 rounded-lg py-5'>
        <h1 className='text-center text-3xl font-bold my-5'>Add Employee</h1>
        <form onSubmit={handlesubmit}>
        <div className='flex justify-center my-10 gap-2 text-2xl font-semibold'>
        <label htmlFor="">Name</label>
        <input type="text" name="name" id="" className='rounded-md bottom-2 border-neutral-400 mx-3' onChange={handlechange} />
        </div>
        <div className='flex justify-center my-10 gap-2 text-2xl font-semibold'>
            <label htmlFor="">Email</label>
            <input type="text" name="email" id="" className='rounded-md bottom-2 border-neutral-400 mx-3' onChange={handlechange}  />
        </div>
        <div className='flex justify-center my-10 gap-2 text-2xl font-semibold'>
            <label htmlFor="">Position</label>
            <input type="text" name="postion" id="" className='rounded-md bottom-2 border-neutral-400 mx-3' onChange={handlechange} />
        </div>
        <div className='flex justify-center my-10 gap-2 text-2xl font-semibold'>
            <label htmlFor="">Salary</label>
            <input type="text" name="salary" id="" className='rounded-md bottom-2 border-neutral-400 mx-3' onChange={handlechange} />
        </div>
        <div className='flex justify-center'>
        <button className='bg-blue-600 text-white py-4 px-6 text-lg text-center rounded-3xl' type='submit'>ADD</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Addemp
