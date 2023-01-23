import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {

const user = useSelector(selectUser);
const dispatch = useDispatch();
console.log(user);
const auth = getAuth();
useEffect(() => {
  onAuthStateChanged(auth, (userAuth) =>{
    if(userAuth){
      //user logged in
      dispatch(login({
        email: userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoURL: userAuth.photoURL,
      }))
    }else{
      //user logged out 
      dispatch(logout())
    }
  })
}, [])

  return (
    <div className="app">
      <Header />
    {!user ? (<Login />) : (
      <div className="app__body">
        
        <Sidebar />
        <Feed />
        {/* widgets */}
    </div>
     )}
    
    </div>
  )
}

export default App;
