import React, { useState } from 'react'
import './Login.css'
import LinkedinLogo from './LinkedinLogo.png'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'


const Login = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const dispatch = useDispatch();
    const auth = getAuth();
    //const user = auth.currentUser;


    const register = () => {
        if (!name) {
            return alert("Please enter your full name.")
        }

       createUserWithEmailAndPassword( auth, email, password)
            .then((userAuth) => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    PhotoURL: profilePicture
                })
                .then(() =>{
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        PhotoURL: profilePicture,
                    }))
                })
            }).catch(error => alert(error));
    };

    const loginToApp = (e) => {
        e.preventDefault();


    }
    return (
        <div className='login'>
            <img src={LinkedinLogo} alt="" />

            <form>
                <input value={name} onChange={(e) => setName(e.target.value)}
                    placeholder='Full name' type="text" required />

                <input value={profilePicture} onChange={(e) => setProfilePicture(e.target.value)}
                    placeholder='Profile picture URL(optional)' type="text" />

                <input value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email' type="email" required />

                <input value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password' type="password" required />

                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?
                <span className='login__register' onClick={register}>Register Now.</span>
            </p>
        </div>
    )
}

export default Login
