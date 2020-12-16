import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCameraRetro, faCog, faSearch, faStream } from "@fortawesome/free-solid-svg-icons";
import snapThatWhite from "../images/snapthatWhite.png";
import './TopBar.css';

interface TopBarProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    text: string;
    tabNames: string[];
}

// eslint-disable-next-line
const TopBar = ( props: TopBarProps ) => {

    const snapthatWhiteLogo = snapThatWhite;

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
                    onClick={props.onClick}
                >
                    <div className="menu-area-item" style={{color: props.text === "newsfeed" ? 'black' : 'white'}}>
                        <FontAwesomeIcon className="stream-icon" icon={faStream} />
                        <div className="menu-area-item-text">
                            {props.tabNames[0]}
                        </div>
                    </div>
                </button>
                <button
                    type="submit"
                    className="test-button"
                    onClick={props.onClick}
                >
                    <div className="menu-area-item" style={{color: props.text === "search" ? 'black' : 'white'}}>
                        <FontAwesomeIcon className="search-icon" icon={faSearch} />
                        <div className="menu-area-item-text">
                            {props.tabNames[1]}
                        </div>
                    </div>
                </button>
                <button
                    type="submit"
                    className="test-button"
                    onClick={props.onClick}
                >
                    <div className="menu-area-item" style={{color: props.text === "create" ? 'black' : 'white'}}>
                        <FontAwesomeIcon className="camera-retro-icon" icon={faCameraRetro} />
                        <div className="menu-area-item-text">
                            {props.tabNames[2]}
                        </div>
                    </div>
                </button>
                <button
                    type="submit"
                    className="test-button"
                    onClick={props.onClick}
                >
                    <div className="menu-area-item" style={{color: props.text === "settings" ? 'black' : 'white'}}>
                        <FontAwesomeIcon className="cog-icon" icon={faCog} />
                        <div className="menu-area-item-text">
                            {props.tabNames[3]}
                        </div>
                    </div>
                </button>

            </div>
        </div>
    )
}

export default TopBar;
