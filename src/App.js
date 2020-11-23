import './App.css';
import React from "react";
import NewsFeed from "./components/newsfeed/newsfeed";
import TopBar from "./components/TopBars";
import CreatePost from "./components/createpost/createPost";

function App() {

    const currentTab = "create";

    return (
        <div className="App">
            <TopBar currentTab={currentTab}/>
            {(currentTab === "newsfeed") ?
                    <NewsFeed />
                : (currentTab === "search") ?
                    <p>Comming soon</p>
                :(currentTab === "create") ?
                    <CreatePost />
                : (currentTab === "settings") ?
                     <p>Comming soon</p>
                : <p>TODO</p>
            }
        </div>
    );
}

export default App;
