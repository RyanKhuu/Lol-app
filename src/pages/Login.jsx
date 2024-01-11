import React from "react";
import classes from "../styles/Login.module.css"
import SULBackground from "../assets/SULBackground.png";
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    const navigate = useNavigate();
    const SignUp = () => {
        navigate("/");
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inputType, setInputType] = useState("password");
    const [faIcon, setFaIcon] = useState(faEyeSlash);
    const [inputValue, setValue] = useState(0);
    const inputTypes = ["password", "text"]
    const iconTypes = [faEyeSlash, faEye]

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

    const changeInputType = (e) => {
        if(inputValue == 0){
            setValue(1)
            setFaIcon(iconTypes[inputValue])
            setInputType(inputTypes[inputValue])
        } else if(inputValue == 1){
            setValue(0)
            setFaIcon(iconTypes[inputValue])
            setInputType(inputTypes[inputValue])
        }
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
                                <div className="pdl">
                                    <label htmlFor="UserEmail">Email:</label><br/>
                                    <input type="text" id="UserEmail" name="email" maxLength={254} value={email} onChange={inputRestriction}></input>
                                </div>
                            </div>
                            <div class="formAttributes">
                                <div className="pdl">
                                    <label htmlFor="UserPassword">Password:</label><br/>
                                </div>
                                <div className="inputDiv">
                                    <div className="passwordDiv">
                                        <input type={inputType} id="UserPassword" className={`${classes.password}`} minLength={8} maxLength={25} value={password} onChange={inputRestriction}></input>
                                    </div>
                                    <div className="tU">
                                       <i className="passwordView">
                                        <FontAwesomeIcon icon={faIcon} size="2xl" value="hidden" onClick={changeInputType}/>
                                        </i> 
                                    </div>
                                </div>
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