import React,{useState} from 'react'
export const UserContext=React.createContext();
const UserContextComponent = ({children}) => {
    const [users,setUsers]=useState('');
    const [name,setName]=useState('');
    const [userName,setUserName]=useState('')
    const [email,setEmail]=useState('')
    const [street,setStreet]=useState('')
    const [doorNumber,setDoorNumber]=useState('')
    const [city,setCity]=useState('')
    const[pincode,setPincode]=useState('')
    const [lat,setLat]=useState('')
    const [lng,setLng]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
    const[website,setWebsite]=useState('')
    const[companyName,setCompanyName]=useState('')
    const[catchPhrase,setCatchPhrase]=useState('')
    const[business,setBusiness]=useState('');
    const [id,setId]=useState('')
    const[editUser,setEditUser]=useState({
    name:'',
    userName:'',
    email: '',
    street: '',
    suite: '',
    city:'',
    zipcode: '', 
    lat: '',
    lng: '',
    phone:'',
    website: '', 
    company:'',
    catchPhrase: '',
    business: '',
    id:'',
    });
    
  return (
    <div>
<UserContext.Provider value={{users,setUsers,name,setName,
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
    }}>
    {children}
</UserContext.Provider>
    </div>
  )
}

export default UserContextComponent