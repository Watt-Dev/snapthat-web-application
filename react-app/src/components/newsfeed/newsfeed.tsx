import React from "react";
import './newsfeed.css';
import UserPost from "../userPost";
import dummyImage from '../../images/dummyPostImage.png';



// eslint-disable-next-line
const NewsFeed = () => {

    const dummyPost = {
        id: 1,
        title: "POST TITLE",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n" +
            "                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n" +
            "                    enim ad minim veniam, quis nostrud exercitation",
        image_path: dummyImage,
        score: 200,
        channel_id: 4,
        timestamp: "16.12.2020, 10:30"
    };

    return (
        <div className="newsfeed">
            <div className="newsfeed-body">
                {/* TODO: Create function tto get images, then replace the duplicates with */}
                {/* TODO: only one newsfeed post div, which displays several images*/}
                <UserPost userPost={dummyPost}/>
            </div>
        </div>
    )
}

export default NewsFeed;
