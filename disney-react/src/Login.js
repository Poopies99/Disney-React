import "./Login.css";
import React, { useEffect } from 'react';
import './Header.css';
import { auth, provider } from './Firebase';
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState, } from "./userSlice";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const handleAuth = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            setUser(result.user);
            navigate('/home');
        })
        .catch((error) => {
            alert(error.message);
        });
      }

    const setUser = (user) => {
      dispatch(
          setUserLoginDetails({
              name: user.displayName,
              email: user.email,
              photo: user.photoURL,
          })
      );
    };
  
    return (
      <div className="Container">
        <div className="Content">
          <img className="Background"
            src="/images/login-background.jpg"
            alt=""
          />

          <div className="Content__Logo">
            <div>
              <img className="Logo__One"
                src="/images/cta-logo-one.svg"
                alt=""
              />
            </div>

            <div className="Content__Button">
              <button onClick={handleAuth}>GET ALL THERE</button>
            </div>

            <div className="Description">
              Disney will use your data to personalize and improve your Disney+ experience and to send you information about Disney+.
              You can change your communication preferences anytime. We may use your data as described in our Privacy Policy, including
              sharing it with The Walt Disney Family.
            </div>

            <div>
              <img className="Logo__Two"
                src="/images/cta-logo-two.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Login;