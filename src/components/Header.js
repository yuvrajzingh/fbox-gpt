import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = ()=>{
    const auth = getAuth();
    signOut(auth)
    .then(() => {
      navigate("/")
    })
    .catch((error) => {
      navigate("/error")
    });
  }


    return (
      <div className='absolute top-0 left-0 l-10 t-5 p-5 w-full z-10 bg-gradient-to-b from-black flex justify-between'>
          <img src="https://fbox.to/assets/sites/fbox/logo.png" alt="logo" className='w-40'/>
         

          {user && (<div className='flex items-center gap-3'>
            {/* <img className='w-11 h-11' src="https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbtfh6ZTRjDOY3r7RJHMEac-mEzooDHyoT_By_iFiaRAs1wVxE5RL6x0p7ttZKIHc6jwTL7ipBOmbcaOltxH7K2DL0GhpQk.png?r=cab" alt="user icon" /> */}
            <img src={user && user.photoURL ? user.photoURL : "https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbtfh6ZTRjDOY3r7RJHMEac-mEzooDHyoT_By_iFiaRAs1wVxE5RL6x0p7ttZKIHc6jwTL7ipBOmbcaOltxH7K2DL0GhpQk.png?r=cab"} alt="logo" className='w-11 rounded-full'/>

            <button onClick={handleSignOut} className='font-bold p-2 rounded-sm text-white border border-yellow-500 bg-yellow-500 hover:bg-slate-100 hover:text-yellow-500'>Sign Out</button>
          </div>)}

      </div>
    )
  }

export default Header