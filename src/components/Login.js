import { useRef, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import Header from "./Header"
import { checkValidData } from '../utils/validate'
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {

    const navigate = useNavigate();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();

    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const handleButtonClick = () =>{
        // Validate the form data
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message);

        if(message) return; // if there is a msg that means either or both fields are not valid, so don't execute further.
        
        //sign In sign up logic
        if(!isSignInForm){
            //sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
               
            .then((userCredential) => {  // Signed up successfully
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/88030872?v=4"
                  }).then(() => { // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser; //trying to get the details of the updated value of the user
                        dispatch(
                            addUser({uid, email, displayName, photoURL})
                        )
                    
                    navigate("/browse")
                  }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message);
                  });

                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });
        }else{
            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigate("/browse")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage)
            });
        }
    }

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
            <form onSubmit={(e)=>e.preventDefault()} action="" className=" text-white w-3/12 p-12 bg-black z-10 bg-opacity-70 rounded-md">
                <h1 className="font-bold text-3xl mb-2">{ isSignInForm ? "Sign In": "Sign Up"}</h1>

                {!isSignInForm && (<input type="text" placeholder="Full Name" ref={name} className="p-4 my-4 w-full bg-slate-700 rounded-sm" />)}

                <input type="text" placeholder="Email Address" ref={email} className="p-4 my-4 w-full bg-slate-700 rounded-sm" />

                <input type="password" placeholder="Password" ref={password} className="p-4 my-4 w-full bg-slate-700 rounded-sm" />

                <p className="text-yellow-600 font-medium">{errorMessage}</p>

                <button className="p-4 my-4 w-full bg-yellow-600 rounded-sm font-medium" onClick={handleButtonClick}>{ isSignInForm ? "Sign In": "Sign Up"}</button>

                <input type="checkbox" /><span>Remember me</span>

                <p className="mt-2 font-medium text-yellow-600 cursor-pointer" onClick={toggleSignInForm}>
                    { isSignInForm ? `New to fbox? Sign Up Now`: "Already registered? Sign In"}
                </p>

            </form>
        </div>  
    )
}

export default Login