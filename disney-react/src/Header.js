import React, { useEffect } from 'react';
import './Header.css';
import { auth, provider } from './Firebase';
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState, } from "./userSlice";


function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const handleAuth = () => {
        if (!userName) {
            auth
                .signInWithPopup(provider)
                .then((result) => {
                    setUser(result.user);
                    navigate('/home');
                })
                .catch((error) => {
                    alert(error.message);
                });
        } else if (userName) {
            auth
                .signOut()
                .then(() => {
                    dispatch(setSignOutState());
                    navigate("/");
                })
                .catch((err) => alert(err.message));
        }
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    const redirectHome = () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                navigate("/home");
            }
        })
    }

    return (
        <div className='Header'>
             <img className='Logo' onClick={redirectHome}
                src="/images/logo.svg"
                alt=""
            />   
            

            {!userName ? (
                <div className='Login' onClick={handleAuth}>Login</div>
            ) : (
                <>
                    <div className='Navigation'>
                        <div className='Home' onClick={redirectHome}>
                            <img className='Menu__image' src='/images/home-icon.svg' alt='HOME' />
                            <span>HOME</span>
                        </div>

                        <div className="Search">
                            <img className='Menu__image' src='/images/search-icon.svg' alt='SEARCH' />
                            <span>SEARCH</span>
                        </div>
                            
                        <div className="Watchlist"> 
                            <img className='Menu__image' src='/images/watchlist-icon.svg' alt='WATCHLIST' />
                            <span>WATCHLIST</span>
                        </div>

                        <div className="Originals">
                            <img className='Menu__image' src='/images/original-icon.svg' alt='ORIGINAL' />
                            <span>ORIGINALS</span>
                        </div>

                        <div className='Movies'>
                            <img className='Menu__image' src='/images/movie-icon.svg' alt='MOVIES' />
                            <span>MOVIES</span>
                        </div>

                        <div className='Series'>
                            <img className='Menu__image' src='/images/series-icon.svg' alt='SERIES' />
                            <span>SERIES</span>
                        </div>
                    </div>

                    <div className='SignOut'>  
                        <img className='UserImage' src={userPhoto} alt={userName} />  
                        <span className='DropDown' onClick={handleAuth}>Sign out</span>
                    </div>
                </>  
            )}
        </div>
    );
};

export default Header
