import React, {useState} from "react";
import './App.css';
import NewsFeed from "./components/newsfeed/newsfeed";
import TopBar from "./components/TopBars";
import CreatePost from "./components/createpost/createPost";

// eslint-disable-next-line
const App = () => {
    const [tab, setTab] = useState("newsfeed")
    const tabNames = ["newsfeed", "search", "create", "settings"]

    /**
     * TODO: MUST ADD FUNCTIONALITY TO SWITCH BETWEEN ALL PAGES
     */
    const onClick = ( () => {
        if (tab === "newsfeed")
            setTab("create");
        else
            setTab("newsfeed");
        }
    )

    return (
        <div className="App">
            <TopBar onClick={onClick} text={tab} tabNames={tabNames}/>
            {/*<TopBar currentTab={currentTab}/>*/}
                {(tab === "newsfeed") ?
                    <NewsFeed />
                : (tab === "search") ?
                    <p>Coming soon</p>
                :(tab === "create") ?
                    <CreatePost />
                : (tab === "settings") ?
                     <p>Coming soon</p>
                : <p>TODO</p>
            }
        </div>
    );
}

export default App;
