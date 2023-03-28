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
      <div className="r-page">
        <Navbar subreddit={subreddit} onSearchSubmit={setSubreddit} />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/r/:subreddit"
              element={<GetSavedData />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
//<GetSavedData subreddit={subreddit} />;