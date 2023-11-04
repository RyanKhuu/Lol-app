import React from "react";
import "../styles/sidebar.css";
import LOLogo from "../assets/ls_logo.png";

const Sidebar = () => {
    return(
        <nav>
            <div className="sideNavBody">
                <div className="container">
                    <div className="logo">
                        <a href="/">
                            <img src={LOLogo} height={75} width={90}></img>
                        </a>
                    </div>
                </div>  
                <div id="mainListDiv" className="main_list">
                    <ul className="navLinks">
                        <li>
                            <a href="links">Drafting</a>
                        </li>
                        <li>
                            <a href="links">Tier Lists</a>
                        </li>
                        <li>
                            <a href="links">Champions</a>
                        </li>
                        <li>
                            <a href="links">Items</a>
                        </li>
                        <li>
                            <a href='links'>Damage Calculator</a>
                        </li>
                        <li>
                            <a href="links">Builds</a>
                        </li>
                    </ul>
                </div>
                <div className="icon_links">
                    
                </div>
            </div>
        </nav>
            
    )
}

export default Sidebar