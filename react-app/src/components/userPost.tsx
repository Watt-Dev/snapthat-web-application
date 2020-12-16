import React from "react";
import './userPost.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleDown, faArrowCircleUp, faComments} from "@fortawesome/free-solid-svg-icons";
import dummyImage from '../images/dummyPostImage.png';

// eslint-disable-next-line
const UserPost = () => {

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
        <div>
            {showImage}
        </div>
        );
}

export default UserPost;
