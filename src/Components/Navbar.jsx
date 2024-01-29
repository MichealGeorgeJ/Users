import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div className="container-fluid mt-1 p-2 bg-secondary navbar ">
            <div className="row d-flex flex-row  ">
              <div className='ml-5'> <Link to='/' className=' text-white'style={{textDecoration:"none"}}  ><h3><i className="fa-solid fa-house-user"></i> Home</h3></Link></div>
               <div className='ml-5  '><Link to='create'className='text-white ' style={{textDecoration:"none"}}  ><h3 ><i className="fa-solid fa-user-plus"></i> AddUser</h3></Link></div>
               <div className='ml-5'> <Link to='edit' className=' text-white'style={{textDecoration:"none"}}  ><h3><i className="fa-solid fa-pen-to-square"></i> Edit</h3></Link></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar