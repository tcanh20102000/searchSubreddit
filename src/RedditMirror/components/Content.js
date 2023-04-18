import React from "react";
import GetSavedData from "./GetSavedData";
import Navbar from "./Navbar";
import Home from './Home';
import "../styling/style.css";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';


export default function Content() {
  const [subreddit, setSubreddit] = React.useState('');
  console.log('Sub:', subreddit)
  return (
    <Router>
      <Navbar subreddit={subreddit} onSearchSubmit={setSubreddit} />
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/r/:subreddit" element={<GetSavedData />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </>     
    </Router>
  );
}
//<GetSavedData subreddit={subreddit} />;