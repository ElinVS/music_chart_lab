import React from "react"
import './App.css';
import SongContainer from "./containers/SongContainer";

function App() {
  return (
    <>
    <header><h1>Current UK Top 20 Songs</h1></header>
      
      <SongContainer></SongContainer>
    </>
   
  );
}

export default App;
