import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';
import { LOGO } from '../utils/constants';


const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = ()=>{
    const auth = getAuth();
    signOut(auth)
    .then(() => {

    })
    .catch((error) => {

    });
  }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
        if(user){ //for when user signsin or signsup
            const { uid, email, displayName, photoURL } = user;
            dispatch(addUser({uid, email, displayName, photoURL}));
            navigate("/browse")
        }else{ //for when user signsout
            dispatch(removeUser())
            navigate("/")
        }
    })

    return ()=> unsubscribe();
  }, [])

    return (
      <div className='absolute top-0 left-0 l-10 t-5 p-5 w-full z-10 bg-gradient-to-b from-black flex justify-between'>
          <a href="/"><img src={LOGO} alt="logo" className='w-36'/></a>
         

          {user && (<div className='flex items-center gap-3'>
            {/* <img className='w-11 h-11' src="https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbtfh6ZTRjDOY3r7RJHMEac-mEzooDHyoT_By_iFiaRAs1wVxE5RL6x0p7ttZKIHc6jwTL7ipBOmbcaOltxH7K2DL0GhpQk.png?r=cab" alt="user icon" /> */}
            <img src="https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbtfh6ZTRjDOY3r7RJHMEac-mEzooDHyoT_By_iFiaRAs1wVxE5RL6x0p7ttZKIHc6jwTL7ipBOmbcaOltxH7K2DL0GhpQk.png?r=cab" alt="logo" className='w-11 rounded-full'/>

            <button onClick={handleSignOut} className='font-bold p-2 rounded-sm text-white border border-yellow-500 bg-yellow-500 hover:bg-slate-100 hover:text-yellow-500'>Sign Out</button>
          </div>)}

      </div>
    )
  }

export default Header