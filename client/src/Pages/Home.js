import React from 'react';
import {Link} from 'react-router-dom'
// import jobtracker from '../assets/Images/jobtracker.svg';
import jobtracker from '../assets/Images/jobtracker.jpg';

const Home = () => {
  return (
    <div className='container mx-auto p-6 h-screen grid bg-slate-100 font-serif '>
      <nav className='text-blue-500 font-extrabold text-2xl'>
         JobTracker
      </nav>
      <div className='flex flex-col   items-center overflow-hidden sm:grid grid-cols-2 '>
        <div className='max-w-xl space-y-4'>
           <h1 className='text-5xl'>Job<span className='text-blue-300'>Trackr</span></h1>
           <p className='text-xl'>With JobTracker, say goodbye to the hassle of managing multiple spreadsheets or notes. Focus on what
           truly matters - landing your ideal job.Experience the efficiency, convenience, and confidence that JobTracker brings to your job search journey.</p>
           <div>
           <Link to="/register" type="button" className='bg-blue-400 rounded-md inline-block p-3 px-4 text-blue-50'>
            Login/Register
           </Link>
           </div>
        </div>
        <div>
          <img src={jobtracker} alt=""  className='sm:block hidden w-9/12 h-9/12' />
          {/* <jobtracker/> */}
        </div>
      </div>

    </div>
  )
}

export default Home