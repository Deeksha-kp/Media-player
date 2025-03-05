// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import {toast} from 'react-toastify'
// import { checkEmailApi, registerApi } from '../Services/allApis'
// import { useNavigate } from 'react-router-dom'
// //import { registerApi } from '../Services/allApis'

// function Register() {
//     const [user,setUser]=useState({
//         username:"",email:"",password:""
//     })
//     const nav=useNavigate()
//     const handleRegister=async()=>{
//         console.log(user);
//         const {username,email,password}=user
//         if(!username||!email||!password){
//             toast.warning("Enter valid input")
//         }
//         else{
//             const result=await checkEmailApi(email)
//             console.log(result)
//             if(result.data.length>0){
//                 toast.warning(" Email ID already in User!!")
//             }
//             else{
//                 const result=await registerApi(user)
//                 if(result.status==201){
//                     toast.success("success")
//                     setUser({
//                         email:"",username:"",password:""
//                     })
//                     nav('/login')
//                 }
//                 else{
//                     toast.error("Registration Failed")
//                     console.log(result);
//                 }
//             }
//         }
//     }
//   return (
//     <>
//     <div className='d-flex justify-content-center align-items-center' style={{height:"80vh"}}>
//         <div className='w-75 border shadow bg-light p-5'>
//             <h1>Register</h1>
//             <input type="email" className='form-control mb-3' placeholder='Enter Email ID' 
//             onChange={(e)=>{setUser({...user,email:e.target.value})}}/>
//             <input type="trxt"  name='' placeholder='Enter Username' id='' className='form-control mb-3'
//             onChange={(e)=>{setUser({...user,username:e.target.value})}} />
//             <input type="password"  name='' placeholder='Enter Password' id='' className='form-control mb-3'
//             onChange={(e)=>{setUser({...user,password:e.target.value})}} />
//             <div className='d-flex justify-content-between'>
//                 <button className='btn btn-success' onClick={handleRegister}>Register</button>
//                 <Link to={'/login'}>Already a User?</Link>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Register