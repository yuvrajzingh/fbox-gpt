import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';
import { LOGO, SUPPORTED_LANGUAGES, USER_PFP } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)
  const handleSignOut = ()=>{
    const auth = getAuth();
    signOut(auth)
    .then(() => {

    })
    .catch((error) => {

    });
  }

  const handleAiSearchClick = () => {
    // toggle GPT Search 
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
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
          {user && (
          <div className='flex items-center gap-3 text-white font-bold'>
            {showGptSearch && (<select name="" id="" className='p-2 bg-gray-900 text-white' onChange={handleLanguageChange}> 
              {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select>)}
            <button className='py-2 px-4 my-2 mx-4 rounded-sm bg-gradient-to-tr from-amber-500 to-violet-600 hover:bg-gradient-to-tl hover:from-amber-500 hover:to-violet-600' onClick={handleAiSearchClick}>{showGptSearch ? "Home" : "AI Search"}</button>
            <img src={USER_PFP} alt="logo" className='w-11 rounded-full'/>
            <button onClick={handleSignOut} className=' p-2 rounded-sm  border border-yellow-500 bg-yellow-500 hover:bg-slate-100 hover:text-yellow-500'>Sign Out</button>
          </div>
        )}
      </div>
    )
  }

export default Header