import React from 'react'
import { Link } from 'react-router-dom'

export const Homepage = () => {
  return (
    <>
    <div className='container'>Homepage</div>
    <hr />
    <h2>Select either courses or bundle</h2>
      <Link className='btn btn-sm btn-primary' to="/learn/courses">Courses</Link>
      <Link className='btn btn-sm btn-primary' to="/learn/bundles">Bundles</Link>
    </>
      
    
  )
}
