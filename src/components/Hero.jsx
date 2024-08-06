import React from 'react'

export default function Hero({title='BECOME A DEVELOPER',subtitle='FIND THE JOB THAT SUIT`S YOUR SKILL'}) {
  return (
    <section className="bg-indigo-700 py-20 mb-4">
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="text-center">
        <h1
          className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="my-4 text-xl text-white" style={{marginLeft:'220px'}}>
        <marquee direction="up" loop='1' > <b>{subtitle}</b></marquee>
        </p>
      </div>
    </div>
  </section>
  )
}
