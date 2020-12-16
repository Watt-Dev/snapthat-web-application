import React, {useState} from "react";
import './createPost.css';
import dummyImage from "../../images/dummyPostImage.png";
// import TextArea from "../TextArea";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line
const CreatePost = () => {

    const [titleText, setTitleText] = useState('test');

    const handle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTitleText(event.target.value);
    }

    /* TODO: Make the post, should be of type user post
    const thePost = ( title, img ) => {
        return (
            <div>
                <img src={dummyImage} className="newsfeed-image" alt="logo"/>

            </div>
        )
    }
    */

    return (
        <div className="create-post">
            <div className="create-post-header" >
                 Create Post
            </div>
            {/* TODO: Create text area component*/}
            <div className="create-post-card">
                <form className="create-post-title">
                    <textarea
                        className="text-area-title"
                        placeholder="Post title"
                        onChange={event => {
                            handle(event)
                        }}
                    />
                </form>
                <img src={dummyImage} className="create-post-image" alt="logo"/>
                <div className="Choose-file">
                    Choose file...
                </div>
                <form className="create-post-caption">
                    <textarea
                        className="text-area-caption"
                        placeholder="Caption"
                        onChange={event => {
                            handle(event)
                        }}
                    />
                </form>
                <form className="create-post-channel">
                    <textarea
                        className="text-area-channel"
                        placeholder="Channel"
                        onChange={event => {
                            handle(event)
                        }}
                    />
                </form>
                <button className="create-post-create-button">
                    <FontAwesomeIcon className="save-icon" icon={faSave} />
                    Create
                </button>
                <button className="create-post-cancel-button">
                    <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default CreatePost;
