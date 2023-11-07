import React from "react";
import "../styles/SUL.css"

const Login = () => {
    return(
        <div class="sulPage">
            <div className="sulContainer">
                <div className="sulItems">
                    <div className="EmailPassword">
                        <img></img>
                        <form>
                            <h4 className="SUL">Login</h4>
                            <div class="formAttributes">
                                <label for="UserEmail">Email</label>
                                <input type="text" id="UserEmail" name="email"></input>
                            </div>
                            <div class="formAttributes">
                                <label for="UserPassword">Password</label>
                                <input type="text" id="UserPassword" name="Password"></input>
                            </div>
                            <div class="formButton">
                                <button class="sulButton">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login