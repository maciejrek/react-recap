import React, { useState, useEffect } from "react";
//Import Component
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  //State
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const [name, setName] = useState("Dev Ed");
  const message = "message";

  //Efects
  useEffect(() => {
    console.log("We run a function");
  }, [textInput]);

  return (
    <div>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
