import React from 'react'

export default function Practice() {
    const name = ['john','mery','sara','uday']
  const course = ['computer','electrical','civil','mechanical','MCA']
  const x = 10
  const y = 50
  const logedin = false
  const myname = 'Pravin'
  return (
    <>
        <div className='text-5xl'>
      App
    </div>
    <div>
    {name.map((values,index)=>(
      <p key={index}>{values}</p>
    ))}
    </div>
    <h1>Courses</h1>
    <ul>
      {course.map((values,index)=>(
        <li key={index}>{values}</li>
      ))}
    </ul>
    <p>the sum of {x} and {y} is {x+y}</p>
    {/* {logedin ? <p>welcome {myname}</p> :<p>welcome Guest</p>} */}
    {logedin && <h1>Welcome {myname}</h1>}
    </>
  )
}
