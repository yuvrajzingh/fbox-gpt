import { useState } from "react"
import Header from "./Header"

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div className="relative flex items-center justify-center h-screen ">
            <Header />
            <div className="absolute">
                <img src="https://wallpapercave.com/wp/wp7301157.jpg" alt="wallpaper" className=" h-screen w-screen object-cover"/>
                <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>
            <form action="" className=" text-white w-3/12 p-12 bg-black z-10 bg-opacity-70 rounded-md">
                <h1 className="font-bold text-3xl mb-2">{ isSignInForm ? "Sign In": "Sign Up"}</h1>
                {!isSignInForm && (<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-slate-700 rounded-sm" />)}
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-slate-700 rounded-sm" />
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-slate-700 rounded-sm" />
                <button className="p-4 my-4 w-full bg-yellow-600 rounded-sm">{ isSignInForm ? "Sign In": "Sign Up"}</button>
                <input type="checkbox" /> <span>Remember me</span>
                <p className="mt-2 font-medium text-yellow-600 cursor-pointer" onClick={toggleSignInForm}>
                    { isSignInForm ? `New to fbox? Sign Up Now`: "Already registered? Sign In"}
                </p>
            </form>
        </div>  
    )
}

export default Login