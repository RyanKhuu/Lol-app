import React from "react";
import classes from "../styles/Login.module.css"
import SULBackground from "../assets/SULBackground.png";
import {useNavigate} from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();
    const SignUp = () => {
        navigate("/");
    }

    return(
        <div class="SulPage">
            <img className="LeagueBackground" src={SULBackground}/>
            <div className={`${classes.sulContainer}`}>
                <div className="sulItems">
                <p className="SUL">Login</p>
                    <div className="EmailPassword">
                        <form>
                            <div class="formAttributes">
                                <label for="UserEmail">Email:</label><br/>
                                <input type="text" id="UserEmail" name="email"></input>
                            </div>
                            <div class="formAttributes">
                                <label for="UserPassword">Password:</label><br/>
                                <input type="password" id="UserPassword" name="Password"></input>
                            </div>
                            <div class="formButton">
                                <button class="sulButton">Login</button>
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