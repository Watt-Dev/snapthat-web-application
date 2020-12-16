import React from "react";
import './newsfeed.css';
import UserPost from "../userPost";

// eslint-disable-next-line
const NewsFeed = () => {

    return (
        <div className="newsfeed">
            <div className="newsfeed-body">
                {/* TODO: Create function tto get images, then replace the duplicates with */}
                {/* TODO: only one newsfeed post div, which displays several images*/}
                <UserPost />
            </div>
        </div>
    )
}

export default NewsFeed;
