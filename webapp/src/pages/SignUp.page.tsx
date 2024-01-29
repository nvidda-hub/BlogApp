import { Link, useNavigate } from "react-router-dom"
import React, { useState } from "react"
import axios from "axios"
import { Bounce, ToastContainer, toast } from "react-toastify"

interface signUpFromDataInterface {
  username : string,
  firstName : string,
  lastName : string,
  password : string,
  email : string
}

const SignUpPage = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [signUpFromData, setSignUpFromData] = useState<signUpFromDataInterface>({
    username : "",
    firstName : "",
    lastName : "",
    password : "",
    email : ""
  })
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setSignUpFromData(
      {
      ...signUpFromData, 
      [e.target.id] : e.target.value
    })
  }

  const handleSignUp = async (e : React.FormEvent) => {
    setLoading(true)
    try{
      e.preventDefault()
      const res = await axios.post('/v1/api/auth/sign-up', signUpFromData)
      if(res.data.success){
        console.log("user creation success")
        toast.success('Sign up Success!!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        navigate('/sign-in')
      } else {
        toast.error('Sign up failed', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }
    } catch(error : any) {
      const errorMessage = error?.response?.data?.message || "Internal server error"
      toast.error(`Sign up failed | Reason : ${errorMessage}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
    setLoading(false)

  }

  return (
    <div className="p-3 max-w-lg mx-auto space-y-4">
      <ToastContainer />
      <div className="text-3xl font-semibold text-center py-7">
          Signup
      </div>
      <form className="flex flex-col gap-4 items-center" onSubmit={handleSignUp}>
        <input type="text" placeholder="username" id="username" className="border border-gray-300 p-3 rounded-lg w-full" onChange={handleChange} value={signUpFromData.username} />
        <input type="text" placeholder="firstname" id="firstName" className="border border-gray-300 p-3 rounded-lg w-full" onChange={handleChange} value={signUpFromData.firstName} />
        <input type="text" placeholder="lastname" id="lastName" className="border border-gray-300 p-3 rounded-lg w-full" onChange={handleChange} value={signUpFromData.lastName} />
        <input type="email" placeholder="email" id="email" className="border border-gray-300 p-3 rounded-lg w-full" onChange={handleChange}  value={signUpFromData.email}/>
        <input type="password" placeholder="password" id="password" className="border border-gray-300 p-3 rounded-lg w-full" onChange={handleChange}  value={signUpFromData.password}/>
        <button className="p-3 bg-gray-800 text-white rounded-lg uppercase w-4/5 hover:opacity-90 disabled:bg-slate-300 disabled:cursor-not-allowed" type="submit" disabled={loading || Object.values(signUpFromData).some(item => item === '')}>{loading ? 'Loading ...' : 'Sign Up'}</button>
      </form>
      <div className="flex flex-row space-x-2">
        <div className="font-semibold">Have an account?</div>
        <Link to='/sign-in' className="text-blue-500">Sign in</Link>
      </div>
    </div>
  )
}

export default SignUpPage