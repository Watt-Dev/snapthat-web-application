import React from "react";
import './newsfeed.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
    faStream,
    faSearch,
    faCameraRetro,
    faCog,
} from '@fortawesome/free-solid-svg-icons'


import snapThatWhite from '../../images/snapthatWhite.png';
import UserPost from "../userPost";

const NewsFeed = () => {
    const snapthatWhiteLogo = snapThatWhite;

    return (
        <div className="newsfeed">
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
            <div className="menu-area-item">
                <FontAwesomeIcon className="stream-icon" icon={faStream} />
                <div className="menu-area-item-text">
                    Newsfeed
                </div>
            </div>
            <div className="menu-area-item">
                <FontAwesomeIcon className="search-icon" icon={faSearch} />
                <div className="menu-area-item-text">
                    Search
                </div>
            </div>
            <div className="menu-area-item">
                <FontAwesomeIcon className="camera-retro-icon" icon={faCameraRetro} />
                <div className="menu-area-item-text">
                    Create
                </div>
            </div>
            <div className="menu-area-item">
                <FontAwesomeIcon className="cog-icon" icon={faCog} />
                <div className="menu-area-item-text">
                    Settings
                </div>
            </div>
        </div>
        <div className="newsfeed-body">
            {/* TODO: Create function tto get images, then replace the duplicates with */}
            {/* TODO: only one newsfeed post div, which displays several images*/}
            <UserPost />
        </div>
    </div>
    )
}

export default NewsFeed;
