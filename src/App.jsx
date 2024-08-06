import React from 'react'
import {
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';


export default function App() {
  // add job function
  const Addjob =async(newJob)=>{
    const res = await fetch('/api/jobs', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newJob)
    });
    return; 
  };
   // Delete Job
   const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>} />
    <Route path='/jobs' element={<JobsPage/>} />
    <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} />
    <Route path='/add-job' element={<AddJobPage AddJobSubmit={Addjob} />} />
    <Route path='*' element={<NotFoundPage />}/>
    </Route>
    )
  )
  return <RouterProvider router={router} />
}
