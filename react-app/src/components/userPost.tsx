import React from "react";
import './userPost.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleDown, faArrowCircleUp, faComments} from "@fortawesome/free-solid-svg-icons";
import dummyImage from '../images/dummyPostImage.png';
import {Userposttype} from "../types/userposttype";

interface UserPostProp {
    userPost: Userposttype;
}

// eslint-disable-next-line
const UserPost = (props: UserPostProp) => {

    const { title, caption, image_path, score } = props.userPost;

    // TODO: Change so it takes the correct images
    const numberOfImagesToDisplay = 8;
    const showImage = [...Array(numberOfImagesToDisplay)].map((image, index) =>
        <div className="newsfeed-posts" key={index}>
            <img src={image_path} className="newsfeed-image" alt="logo"/>
            <div className="newsfeed-post-text">
                <div className="post-title">
                    {title}
                </div>
                <div className="post-user">
                    @postUser
                </div>
                <div className="post-text">
                    {caption}
                </div>
                <div className="post-interact">
                    <div className="post-interact-vote">
                        {score}
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
