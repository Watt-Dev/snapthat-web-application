import React from "react";
import './newsfeed.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
    faStream,
    faSearch,
    faCameraRetro,
    faCog, faArrowCircleUp, faArrowCircleDown, faComments,
} from '@fortawesome/free-solid-svg-icons'


import snapThatWhite from '../../images/snapthatWhite.png';
import dummyImage from "../../images/dummyPostImage.png";

const NewsFeed = () => {
    const snapthatWhiteLogo = snapThatWhite;

    // TODO: Change so it takes the correct images
    const numberOfImagesToDisplay = 8;
    const showImage = [...Array(numberOfImagesToDisplay)].map((image, index) =>
        <div className="newsfeed-posts" key={index}>
            <img src={dummyImage} className="newsfeed-image" alt="logo"/>
            <div className="newsfeed-post-text">
                <div className="post-title">
                    Post Title
                </div>
                <div className="post-user">
                    @postUser
                </div>
                <div className="post-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation
                </div>
                <div className="post-interact">
                    <div className="post-interact-vote">
                        238
                        <FontAwesomeIcon className="arrow-circle-up-icon" icon={faArrowCircleUp} />
                        <FontAwesomeIcon className="arrow-circle-down-icon" icon={faArrowCircleDown} />
                    </div>
                    <div className="post-interact-comment">
                        34
                        <FontAwesomeIcon className="comments-icon" icon={faComments} />
                    </div>
                </div>
            </div>
        </div>);

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
            {showImage}
        </div>
    </div>
    )
}

export default NewsFeed;
