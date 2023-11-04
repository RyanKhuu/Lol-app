import React from "react";
import "../styles/sidebar.css";
import LOLogo from "../assets/ls_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch, faYoutube, faTwitter, faPatreon } from "@fortawesome/free-brands-svg-icons";

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
                    <a href="https://www.twitch.tv/imls" target="blank">
                       <i className="sideNavIcons">
                            <FontAwesomeIcon icon={faTwitch} size="xl"></FontAwesomeIcon>
                        </i> 
                    </a>
                    <a href="https://www.youtube.com/@LSXYZ9" target="blank">
                        <i className="sideNavIcons">
                            <FontAwesomeIcon icon={faYoutube} size="xl"></FontAwesomeIcon>
                        </i>
                    </a>
                    <a href="https://twitter.com/LSXYZ9" target="blank">
                        <i className="sideNavIcons">
                            <FontAwesomeIcon icon={faTwitter} size="xl"></FontAwesomeIcon>
                        </i>
                    </a>
                    <a href="https://www.patreon.com/lsxyz9" target="blank">
                        <i className="sideNavIcons">
                            <FontAwesomeIcon icon={faPatreon} size="xl"></FontAwesomeIcon>
                        </i> 
                    </a>        
                </div>
            </div>
        </nav>
            
    )
}

export default Sidebar