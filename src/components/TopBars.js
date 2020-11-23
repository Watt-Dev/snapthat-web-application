import React from "react";
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCameraRetro, faCog, faSearch, faStream } from "@fortawesome/free-solid-svg-icons";
import snapThatWhite from "../images/snapthatWhite.png";
import './TopBar.css';

const TopBar = ( props ) => {

    const snapthatWhiteLogo = snapThatWhite;

    const currentTab = "newsfeed";

    return (
        <div>
            <div className="top-area">
                <span className="user-menu">
                     <FontAwesomeIcon className="angle-down-icon" icon={faAngleDown} />
                     <div className="user-menu-text">
                         Hi, user
                     </div>
                </span>
                <div>
                    <span className="logo">
                        <img src={snapthatWhiteLogo} className="logo-white" alt="logo" />
                    </span>
                    <span className="title">
                        <h2 className="title-name">
                            SNAPTHAT
                        </h2>
                    </span>
                </div>

            </div>
            <div className="menu-area">
                <div className="menu-area-item" style={{color: props.currentTab === "newsfeed" ? 'black' : 'white'}}>
                    <FontAwesomeIcon className="stream-icon" icon={faStream} />
                    <div className="menu-area-item-text">
                        Newsfeed
                    </div>
                </div>
                <div className="menu-area-item" style={{color: props.currentTab === "search" ? 'black' : 'white'}}>
                    <FontAwesomeIcon className="search-icon" icon={faSearch} />
                    <div className="menu-area-item-text">
                        Search
                    </div>
                </div>
                <div className="menu-area-item" style={{color: props.currentTab === "create" ? 'black' : 'white'}}>
                    <FontAwesomeIcon className="camera-retro-icon" icon={faCameraRetro} />
                    <div className="menu-area-item-text">
                        Create
                    </div>
                </div>
                <div className="menu-area-item" style={{color: props.currentTab === "settings" ? 'black' : 'white'}}>
                    <FontAwesomeIcon className="cog-icon" icon={faCog} />
                    <div className="menu-area-item-text">
                        Settings
                    </div>
                </div>
            </div>
        </div>
    )
}

TopBar.propTypes = {
    currentTab: PropTypes.string
}


export default TopBar;