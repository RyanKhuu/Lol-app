import React from "react";
import "../styles/SUL.css"
import SULBackground from "../assets/SULBackground.png";

const SignUp = () => {
    return(
        <div className="SulPage">
            <img className="LeagueBackground" src={SULBackground}/>
            <div className="sulContainer">
                <div className="sulItems">
                    <h4 className="SUL">Create an Account</h4>
                    <div className="EmailPassword">
                        <form>
                            <div class="formAttributes">
                                <label for="UserDisplayName">Display Name</label>
                                <input type="text" id="UserDisplayName" name="DisplayName"></input>
                            </div>
                            <div class="formAttributes">
                                <label for="UserEmail">Email</label>
                                <input type="text" id="UserEmail" name="email"></input>
                            </div>
                            <div class="formAttributes">
                                <label for="UserPassword">Password</label>
                                <input type="text" id="UserPassword" name="Password"></input>
                            </div>
                            <div class="formButton">
                                <button class="sulButton">Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp