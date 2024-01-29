import axios from "axios"
import { FormEvent, useState } from "react"
import { Link } from "react-router-dom"
import { Bounce, toast } from "react-toastify"

interface SignInFormDataInterface {
  username : string,
  password : string
}

const SignInPage = () => {
  const [loading, setLoading] = useState(false)
  const [signInFormData, setSignInFormData] = useState<SignInFormDataInterface>({
    username : "",
    password : ""
  })
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setSignInFormData({...signInFormData, [e.target.id] : e.target.value})
  }
  const handleSignIn = async (e : FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post('/v1/api/auth/sign-in', signInFormData)
      if(res.data.success){
        toast.success(`Log in success!!`, {
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
      } else {
        toast.error(`Sign in failed`, {
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
      toast.error(`Sign in failed | Reason : ${errorMessage}`, {
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
    <div className="mx-auto p-3 max-w-lg space-y-4">
      <div className="text-3xl font-semibold text-center py-7">
          Signup
      </div>
      <form className="flex flex-col gap-4 items-center" onSubmit={handleSignIn}>
        <input type="text" placeholder="username" id="username" className="border border-gray-300 p-3 rounded-lg w-full" onChange={handleChange} value={signInFormData.username} />
        <input type="password" placeholder="password" id="password" className="border border-gray-300 p-3 rounded-lg w-full" onChange={handleChange}  value={signInFormData.password}/>
        <button className="p-3 bg-gray-800 text-white rounded-lg uppercase w-4/5 hover:opacity-90 disabled:bg-slate-300 disabled:cursor-not-allowed" type="submit" disabled={loading || Object.values(signInFormData).some(item => item === '')}>{loading ? 'Logging in ...' : 'Sign In'}</button>
      </form>
      <div className="flex flex-row space-x-2">
        <div className="font-semibold">Create an account</div>
        <Link to='/sign-up' className="text-blue-500">Sign Up</Link>
      </div>
    </div>
  )
}

export default SignInPage