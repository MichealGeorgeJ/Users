import React, { useContext, useEffect, useState } from 'react'
import userImage from '../assets/user.png'
import { API_URL } from '../App';
import axios from 'axios'
import {toast} from 'react-toastify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../utils/UserContextComponent';


const Home = () => {

    const {users,setUsers,name,setName,
        userName,setUserName,
        email,setEmail,
        street,setStreet,
        doorNumber,setDoorNumber,
        city,setCity,
        pincode,setPincode,
        lat,setLat,
        lng,setLng,
        phoneNumber,setPhoneNumber,
        website,setWebsite,
        companyName,setCompanyName,
        catchPhrase,setCatchPhrase,
        business,setBusiness,
        editUser,setEditUser,
        id,setId
        }=useContext(UserContext);
const navigate=useNavigate();
    
    const getUsers=async()=>{

        try{
            const res=await axios.get(API_URL)
            if(res.status===200){
                setUsers(res.data)
                console.log(res.data)
                toast.success("data received")
            }
        }
        catch(error){
           toast.error("error")
        }
    }

    useEffect(()=>{
        getUsers()
    },[])

    const handleDelete = async(id)=>{
        try {
          let res = await axios.delete(`${API_URL}/${id}`)
          if(res.status===200)
          {
            toast.success('Blog Deleted Successfully!')
            getUsers()
          }
        } catch (error) {
          toast.error("Internal Server Error",error)
        }
      }
      
      const handleEdit=(user)=>{
    setName(user.name)
    setUserName(user.userName)
    setEmail(user.email)
    setStreet(user.street)
    setDoorNumber(user.suite)
    setCity(user.city)
    setPincode(user.zipcode)
    setLat(user.lat)
    setLng(user.lng)
    setPhoneNumber(user.phone)
    setWebsite(user.website)
    setCompanyName(user.companyName)
    setCatchPhrase(user.catchPhrase)
    setBusiness(user.business)
    setId(user.id)
        console.log(user.id)
        setEditUser(user);
        console.log(user)
        navigate('edit');

      }

     

  return (
    <div >
        <div className="container mt-5 text-secondary ">
            <div className="row">
                {
                    users && users.map((user,id)=>(
                        <div className="col-lg-6 col-sm-12 mb-4" key={id}>
                        <div className="card p-1">
                          <div className='d-flex justify-content-center flex-column align-items-center bg-secondary'>
                            <img src={userImage} alt="" className='w-25 h-25 mt-3' />
                            <h4 className='text-white'>{user.name}</h4></div>  
                            <div className="card-body p-3">
    <div>
        <h4>Informations</h4>
    </div>
    <hr />
    <div className="d-flex justify-content-between">
        <div><h5><i className="fa-solid fa-envelope"></i> Email</h5>
        <p className='px-4'>{user.email} </p></div>
        
        <div>
        <h5><i className="fa-solid fa-phone"></i> Phone</h5>
        <p >{user.phone} </p>
        </div>
    </div>
    <h5><i className="fa-solid fa-user"></i> User Name</h5>
    <p className='px-4'>{user.userName}</p>
    <h5 className='mt-2'>Details</h5>
    <hr />
    <div className="sec3">
        <h5><i className="fa-solid fa-building"></i> Company </h5>
        <p className='px-4'>{user.companyName}</p>
        <h5><i className="fa-solid fa-location-dot"></i> Location </h5>
        <p className='px-4'>{user.street},{user.suite},{user.city}-{user.zipcode}</p>
        <div className="d-flex"><h5 className='pr-1' ><i className="fa-solid fa-globe"></i></h5> <a className=' text-secondary' href="http://" style={{textDecoration:"none"}}>{user.website}</a>  </div>
        
        <div className='d-flex justify-content-end flex-row '>
               <div> <button onClick={()=>handleEdit(user)} type="submit " className='btn btn-secondary px-2'><i className="fa-solid fa-pen-to-square"></i> Edit</button></div>
               <div className='ml-2'> <button onClick={(e)=>handleDelete(user.id)} type="submit" className='btn btn-danger px-2'><i className="fa-solid fa-trash"></i> Delete</button></div>
            </div>
    
    </div>
                            </div>
                        </div>
                    </div>
                    ))
                }
                
            </div>
            
        </div>
    </div>
  )
}

export default Home