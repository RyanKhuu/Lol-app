import React from "react";
import "../styles/SignUp.css"
import SULBackground from "../assets/SULBackground.png";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {

    const navigate = useNavigate();
    const Login = () => {
        navigate("/Login");
    }

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   const inputRestriction = (e) => {

        if(e.target.id === "UserDisplayName"){
            const result = e.target.value.replace(/[^a-z0-9]/gi, '');
            setDisplayName(result);
        } else if (e.target.id === "UserEmail"){
            const result = e.target.value.replace(/[^a-z0-9@.]/gi, '');
            setEmail(result);
        } else if(e.target.id === "UserPassword") {
            const result = e.target.value.replace(/[^a-z0-9*&^%$#@!?]/gi, '');
            setPassword(result);
        }
        setMessage(result);
      };

    return(
        <div className="SulPage">
            <img className="LeagueBackground" src={SULBackground}/>
            <div className="sulContainer">
                <div className="sulItems">
                    <p className="SUL">Create an Account</p>
                    <div className="EmailPassword">
                        <form>
                            <div class="formAttributes">
                                <div className="pdl">
                                    <label htmlFor="UserDisplayName">Display Name:</label><br/>
                                    <input type="text" id="UserDisplayName" name="DisplayName" maxLength={25} value={displayName} onChange={inputRestriction}></input>
                                </div>
                            </div>
                            <div class="formAttributes">
                                <div className="pdl">
                                     <label htmlFor="UserEmail">Email:</label><br/>
                                    <input type="text" id="UserEmail" name="email"maxLength={254} value={email} onChange={inputRestriction}></input>
                                </div >
                            </div>
                            <div class="formAttributes">
                                <div className="pdl">
                                    <label htmlFor="UserPassword">Password:</label><br/>
                                </div>
                                <div className="inputDiv">
                                    <input type="password" id="UserPassword" name="Password" minLength={8} maxLength={25} value={password} onChange={inputRestriction}></input>
                                    <div className="tU">
                                       <i className="passwordView">
                                        <FontAwesomeIcon icon={faEyeSlash} size="2xl"/>
                                        </i> 
                                    </div>
                                </div>
                            </div>
                            <div class="formButton">
                                <button className="sulButton">Create Account</button>
                            </div>
                            <div className="SwitchPage">
                                <p className="Switch" onClick={Login}>
                                    Already have an account? Login
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp