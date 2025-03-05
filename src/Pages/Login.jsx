// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { loginApi } from '../Services/allApis'
// import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'


// function Login() {
//     const nav = useNavigate()
//     const [user, setUser] = useState({
//         email: "", password: ""
//     })
//     const handleLogin = async () => {
//         console.log(user);
//         const { email, password } = user
//         if (!email || !password) {
//             toast.warning("Enter valid input!!")
//         }
//         else {
//             const result = await loginApi(email, password)
//             if (result.status == 200) {
//                 if (result.data.length > 0) {
//                     console.log(result.data[0]);
//                     sessionStorage.setItem('userData', JSON.stringify(result.data[0]))

//                     toast.success("login successfull!")
//                     nav('/home')
//                 }
//                 else {
//                     toast.warning(" invalid email/password")
//                 }

//             }
//             else {
//                 toast.error("something went wrong")
//                 console.log(result)
//             }
//         }
//     }
//     return (
//         <>
//             <div className='d-flex justify-content-center align-items-center' style={{ height: "80vh" }}>
//                 <div className='w-75 border shadow bg-light p-5'>
//                     <h1>Login</h1>
//                     <input type="email" onChange={(e) => { setUser({ ...user, email: e.target.value }) }} className='form-control mb-3' placeholder='Enter Email ID' />
//                     <input type="password" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} name='' placeholder='Enter Password' id='' className='form-control mb-3' />
//                     <div className='d-flex justify-content-between'>
//                         <button className='btn btn-success' onClick={handleLogin}>Login</button>
//                         <Link to={'/register'}>New User?</Link>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Login