import React from "react";
import "../styles/SignUp.css"
import SULBackground from "../assets/SULBackground.png";
import {useNavigate} from "react-router-dom"

const SignUp = () => {
    const navigate = useNavigate();
    const Login = () => {
        navigate("/Login");
    }

    return(
        <div className="SulPage">
            <img className="LeagueBackground" src={SULBackground}/>
            <div className="sulContainer">
                <div className="sulItems">
                    <p className="SUL">Create an Account</p>
                    <div className="EmailPassword">
                        <form>
                            <div class="formAttributes">
                                <label for="UserDisplayName">Display Name:</label><br/>
                                <input type="text" id="UserDisplayName" name="DisplayName"></input>
                            </div>
                            <div class="formAttributes">
                                <label for="UserEmail">Email:</label><br/>
                                <input type="text" id="UserEmail" name="email"></input>
                            </div>
                            <div class="formAttributes">
                                <label for="UserPassword">Password:</label><br/>
                                <input type="password" id="UserPassword" name="Password"></input>
                            </div>
                            <div class="formButton">
                                <button class="sulButton">Create Account</button>
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