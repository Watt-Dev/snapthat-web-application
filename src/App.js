import './App.css';
import React from "react";
import NewsFeed from "./components/newsfeed/newsfeed";
import TopBar from "./components/TopBars";

function App() {
    return (
        <div className="App">
            <TopBar />
            <NewsFeed />
        </div>
    );
}

export default App;
