import React from "react";
import classes from "../styles/Login.module.css"
import SULBackground from "../assets/SULBackground.png";
import {useNavigate} from "react-router-dom"
import { useState } from "react";

const Login = () => {
    const navigate = useNavigate();
    const SignUp = () => {
        navigate("/");
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const inputRestriction = (e) => {
        if (e.target.id === "UserEmail"){
            const result = e.target.value.replace(/[^a-z0-9@.]/gi, '');
            setEmail(result);
        } else if(e.target.id === "UserPassword") {
            const result = e.target.value.replace(/[^a-z0-9*&^%$#@!?]/gi, '');
            setPassword(result);
        }
        setMessage(result);
      };

    return(
        <div class="SulPage">
            <img className="LeagueBackground" src={SULBackground}/>
            <div className={`${classes.sulContainer}`}>
                <div className="sulItems">
                <p className="SUL">Login</p>
                    <div className="EmailPassword">
                        <form>
                            <div class="formAttributes">
                                <label htmlFor="UserEmail">Email:</label><br/>
                                <input type="text" id="UserEmail" name="email" maxLength={254} value={email} onChange={inputRestriction}></input>
                            </div>
                            <div class="formAttributes">
                                <label htmlFor="UserPassword">Password:</label><br/>
                                <input type="password" id="UserPassword" name="Password" minLength={8} maxLength={254} value={password} onChange={inputRestriction}></input>
                            </div>
                            <div class="formButton">
                                <button className="sulButton">Login</button>
                            </div>
                            <div className={`${classes.LoginPage}`}>
                                <p className={`${classes.Login}`} onClick={SignUp}>
                                    Don't have an account? SignUp
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default Login