import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Editpage() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    postion: '',
    salary: '',
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        
        const response = await axios.get(`http://localhost:5000/emp/getemp/${id}`);
        setFormData(response.data.data);
      } catch (err) {
        console.error(err);
        toast.error('Failed to fetch employee details.');
      }
    };

    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    if (isNaN(formData.salary) || formData.salary <= 0) {
      toast.error('Please enter a valid salary');
      return;
    }

    try {
      
      const response = await axios.put(`http://localhost:5000/emp/updateemp/${id}`, formData);
      toast.success(response.data.message); 
      navigate('/');
    } catch (err) {
      console.error(err);
      toast.error('Failed to update employee details.');
    }
  };

  return (
    <div className="bg-slate-600 h-screen">
      <ToastContainer />
      <Navbar />
      <div className="bg-neutral-500/30 mx-2 mt-[150px] lg:mt-10 lg:mx-72 rounded-lg py-5">
        <h1 className="text-center text-3xl font-bold my-5">Edit Employee</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center my-10 gap-2 text-2xl font-semibold">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-md border-neutral-400 mx-3"
            />
          </div>
          <div className="flex justify-center my-10 gap-2 text-2xl font-semibold">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-md border-neutral-400 mx-3"
            />
          </div>
          <div className="flex justify-center my-10 gap-2 text-2xl font-semibold">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              value={formData.postion}
              onChange={handleChange}
              className="rounded-md border-neutral-400 mx-3"
            />
          </div>
          <div className="flex justify-center my-10 gap-2 text-2xl font-semibold">
            <label htmlFor="salary">Salary</label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="rounded-md border-neutral-400 mx-3"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-9 text-lg text-center rounded-3xl"
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Editpage;
