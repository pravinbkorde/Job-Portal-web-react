import React from 'react'
// import jobs from '../jobs.json'
import JobSingle from './JobSingle'
import { useState, useEffect } from 'react'

export default function JobListing({ isHome = false }) {
  // const jobListings =isHome? jobs.slice(0,3): jobs;
  // console.log(jobs)
  // for(let i =0;i<jobs.length;i++){
  //     console.log(jobs[i].title)
  //     console.log(jobs[i].description)
  // }
  const [jobs, setjobs] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const fetchjobs = async () => {
      const apiurl = isHome ? '/api/jobs?_limit=3':'/api/jobs'
      // for above url we crwating the proxy tha replace the http://localhost:8000 with /api in vite.config.json file soo look in that file
      try {
        const res = await fetch(apiurl);
        const data = await res.json();
        setjobs(data)
      } catch (error) {
        console.log("Error from fetching", error)
      } finally {
        setloading(false)
      }
    }
    fetchjobs();
  }, [])

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Job'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Job Listing 1 --> */}
          {loading ? (<h1>Jobs loading</h1>) : (
            <>
              {jobs.map((values) => (
                <JobSingle jobs={values} key={values.id} />
              ))}
            </>
          )}

        </div>
      </div>
    </section>
  )
}
