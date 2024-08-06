import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCards'
import JobListing from '../components/JobListing'
import ViewAlljobs from '../components/ViewAlljobs'
export default function HomePage() {
  return (
    <div>
      <Hero/>
      <HomeCard/>
      <JobListing isHome={true}/>
      <ViewAlljobs/>
    </div>
  )
}
