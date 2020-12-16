import React from "react";
import './App.css';
import NewsFeed from "./components/newsfeed/newsfeed";
import TopBar from "./components/TopBars";
import CreatePost from "./components/createpost/createPost";

// eslint-disable-next-line
const App = () => {

    const currentTab = "newsfeed";

    return (
        <div className="App">
            <TopBar currentTab={currentTab}/>
                {(currentTab === "newsfeed") ?
                    <NewsFeed />
                : (currentTab === "search") ?
                    <p>Coming soon</p>
                :(currentTab === "create") ?
                    <CreatePost />
                : (currentTab === "settings") ?
                     <p>Coming soon</p>
                : <p>TODO</p>
            }
        </div>
    );
}

export default App;
