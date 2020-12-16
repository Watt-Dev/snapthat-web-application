import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCameraRetro, faCog, faSearch, faStream } from "@fortawesome/free-solid-svg-icons";
import snapThatWhite from "../images/snapthatWhite.png";
import './TopBar.css';
import CreatePost from "./createpost/createPost";

interface TopBarProps {
    currentTab: string;
}

// eslint-disable-next-line
const TopBar = ( props: TopBarProps ) => {

    const snapthatWhiteLogo = snapThatWhite;

    const [tab, setTab] = useState("newsfeed");

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



                <button
                    type="submit"
                    className="test-button"
                    onClick={event => {
                        setTab("newsfeed")
                    }}
                >
                    <div className="menu-area-item" style={{color: tab === "newsfeed" ? 'black' : 'white'}}>
                    <FontAwesomeIcon className="stream-icon" icon={faStream} />
                    <div className="menu-area-item-text">
                        Newsfeed
                    </div>
                    </div>
                </button>
                <button
                    type="submit"
                    className="test-button"
                    onClick={event => {
                        setTab("create")
                    }}
                >
                    <div className="menu-area-item" style={{color: tab === "create" ? 'black' : 'white'}}>
                    <FontAwesomeIcon className="search-icon" icon={faSearch} />
                    <div className="menu-area-item-text">
                        Search
                    </div>
                    </div>
                </button>


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

export default TopBar;
