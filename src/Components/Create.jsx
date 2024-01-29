import React, { useContext, useEffect, useState } from 'react'
import { API_URL } from '../App';
import {toast} from 'react-toastify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../utils/UserContextComponent';
const Create = () => {
   const {name,setName,
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
    }=useContext(UserContext);

    const navigate=useNavigate();
    const user=
    {
    name:name,
    userName:userName,
    email: email,
    street: street,
    suite: doorNumber,
    city: city,
    zipcode: pincode, 
    lat: lat,
    lng: lng,
    phone:phoneNumber,
    website: website, 
    company:companyName,
    catchPhrase: catchPhrase,
    business: business,
    
}
const addUser=async()=>{
    try{
const res=await axios.post(API_URL,user);
const res2=await axios.get(API_URL);
console.log(res2.data);
console.log(res.data);
if(res.status===201){
    toast.success('new user added')
    setName('')
    setUserName('')
    setEmail('')
    setStreet('')
    setDoorNumber('')
    setCity('')
    setPincode('')
    setLat('')
    setLng('')
    setPhoneNumber('')
    setWebsite('')
    setCompanyName('')
    setCatchPhrase('')
    setBusiness('')
    navigate('/')
}
    }
    catch(error){
        console.error(error)
    }
}

useEffect(()=>{
    
})


  
  return (
    <div>
        <div className="container mt-4">
        <form action="" onSubmit={(e)=>{e.preventDefault(); addUser();}} >
            <div className="row d-flex flex-row">
                
               <div className="col-lg-6 col-sm-12"> <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input onChange={(e)=>setUserName(e.target.value)} value={userName} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Street</label>
                        <input onChange={(e)=>setStreet(e.target.value)} value={street} type="text" className="form-control" />
                    </div><div className="form-group">
                        <label htmlFor="">Door Number</label>
                        <input onChange={(e)=>setDoorNumber(e.target.value)} value={doorNumber} type="text" className="form-control" />
                    </div><div className="form-group">
                        <label htmlFor="">City</label>
                        <input onChange={(e)=>setCity(e.target.value)} value={city} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Pincode</label>
                        <input onChange={(e)=>setPincode(e.target.value)} value={pincode} type="text" className="form-control" />
                    </div></div>
                    <div className="col-lg-6 col-sm-12"><div className="form-group">
                        <label htmlFor="">Lat</label>
                        <input onChange={(e)=>setLat(e.target.value)} value={lat} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Lng</label>
                        <input onChange={(e)=>setLng(e.target.value)} value={lng} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Phone</label>
                        <input onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Website</label>
                        <input onChange={(e)=>setWebsite(e.target.value)} value={website} type="text" className="form-control" />
                    </div><div className="form-group">
                        <label htmlFor="">Company Name</label>
                        <input onChange={(e)=>setCompanyName(e.target.value)} value={companyName} type="text" className="form-control" />
                    </div><div className="form-group">
                        <label htmlFor="">CatchPhrase</label>
                        <input onChange={(e)=>setCatchPhrase(e.target.value)} value={catchPhrase} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Business</label>
                        <input onChange={(e)=>setBusiness(e.target.value)} value={business} type="text" className="form-control" />
                    </div></div>
                
            </div>
            <div className="d-flex justify-content-center mb-5"><button className="btn btn-secondary w-50" type='submit'><h4>Submit</h4></button></div>
            </form>
            <ToastContainer />
        </div>
    </div>
  )
}

export default Create