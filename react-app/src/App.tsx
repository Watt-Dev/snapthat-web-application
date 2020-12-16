import React, {useState} from "react";
import './App.css';
import NewsFeed from "./components/newsfeed/newsfeed";
import TopBar from "./components/TopBars";
import CreatePost from "./components/createpost/createPost";
import TopBar2 from "./components/TopBars2";

// eslint-disable-next-line
const App = () => {


    const [tab, setTab] = useState("newsfeed")
    const tabNames = ["newsfeed", "create", "search"]

    const onClick = ( () => {
        if (tab === "newsfeed")
            setTab("create");
        else
            setTab("newsfeed");
        }
    )

    return (
        <div className="App">
            <TopBar2 onClick={onClick} text={tab} tabNames={tabNames}/>
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
