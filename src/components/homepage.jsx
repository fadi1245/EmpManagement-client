import React, { useEffect, useState } from 'react';
import deleteicon from '../assets/delete.png';
import editicon from '../assets/edit.png';
import Navbar from './navbar';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Homepage() {
  const [data, setdata] = useState([]); 

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get('http://localhost:5000/emp/getdata');
        setdata(response.data.data); 
        console.log('Data fetched:', response.data.data);
      } catch (err) {
        console.log('Failed to fetch data:', err);
      }
    };
    fetchdata();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/emp/deleteemp/${id}`);
      toast.success('Employee deleted successfully');
      setdata(data.filter((item) => item._id !== id)); 
    } catch (err) {
      console.error('Error deleting employee:', err);
      toast.error('Failed to delete employee');
    }
  };

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <h1 className="text-center text-3xl font-bold bg-gradient-to-l from-red-600 to-orange-500 mt-4">
        EMPLOYEES
      </h1>
      <div className="flex justify-between my-2 mx-5">
        <div>
          <input
            type="text"
            name=""
            id=""
            className="p-2 rounded-md border-2 border-neutral-600 lg:w-[400px]"
          />
          <button className="bg-blue-500 px-3 py-2 ml-3 rounded-md">SEARCH</button>
        </div>
        <div>
          <a href="/add">
            <button className="bg-blue-500 px-3 py-2 rounded-md">ADD</button>
          </a>
        </div>
      </div>
      <div className="my-5 mx-3">
        {data.length === 0 ? (
          <p>No employees found.</p>
        ) : (
          data.map((item) => (
            <div
              key={item._id}
              className="bg-neutral-200 flex justify-between px-2 py-2 rounded-lg my-2"
            >
              <div className="flex gap-2 lg:gap-5">
                <div className="lg:flex lg:gap-10 items-center">
                  <h1 className="lg:text-2xl">Name: {item.name}</h1>
                  <h1 className="lg:text-2xl font-bold">{item.postion}</h1>
                </div>
                <div className="lg:flex lg:gap-10 items-center">
                  <h1 className="lg:text-xl">Email: {item.email}</h1>
                  <h1 className="lg:text-2xl">Salary: {item.salary}</h1>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => handleDelete(item._id)}>
                  <img
                    src={deleteicon} className="w-6 h-7 border-2 border-neutral-700 rounded-full p-1 lg:w-10 lg:h-10 lg:p-2"
                    title="delete"
                    alt="delete"
                  />
                </button>
                <Link to={`/edit/${item._id}`}>
                         <img src={editicon}className="w-6 h-7 border-2 border-neutral-700 rounded-full p-1 lg:w-10 lg:h-10 lg:p-2"
                                  title="edit"
                                 alt="edit"
                         />
                 </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Homepage;
