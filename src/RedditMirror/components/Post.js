import React from "react";
import '../styling/style.css';
// import parse from "html-react-parser";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUpLong } from "@fortawesome/free-solid-svg-icons";
// import {
//   BiChevronLeft,
//   BiChevronRight,
//   BiChevronsLeft,
//   BiChevronsRight,
// } from "react-icons/bi";
import {TbArrowBigUp} from "react-icons/tb";

function displayUpvote(score){
  let int_score = Number(score);
  let res_score_text = score;
  if(int_score > 1000000){
    res_score_text = (int_score/1000000).toFixed(1);
    res_score_text = res_score_text + 'm';
  }
  else if(int_score > 1000){
    res_score_text = (int_score / 1000).toFixed(1);
    res_score_text = res_score_text + "k";
  }
  return res_score_text;
}


export default function Post(props){
    const {title, thumbnail, permalink, url, selftext, subreddit, author} = props
    const r_post_text = selftext ? selftext.replaceAll('\n', '<br>'): '';
    
    let r_score_text = displayUpvote(props.score);
    console.log(title, props);
    
    const r_srlink = `https://www.reddit.com/r/${subreddit}`;
    const r_permalink = `https://www.reddit.com${permalink}`;
    return (
      <div className="r-whole-post">
        <div className="r-score">
          <TbArrowBigUp className="upvote" size="1.5em" />
          <p>{r_score_text}</p>
        </div>
        <div className="reddit-post">
          {subreddit && (
            <div className="r-meta">
              <a href={`${r_srlink}`}>
                <span>{`r/${subreddit} \u00B7 Posted by u/${author}`}</span>
              </a>
            </div>
          )}
          <div className="r-title">
            <a href={`${r_permalink}`} className="r-title1">
              <h3>{title}</h3>
            </a>
            <a href={`${url}`}>
              <p>To post</p>
            </a>
          </div>
          <div
            className="reddit-flair"
            style={{
              backgroundColor: `${props.link_flair_background_color}`,
              color: `${props.link_flair_text_color}`,
              fontWeight: "bold",
            }}
          >
            <span>{props.link_flair_text}</span>
          </div>
          {/* <div className="r-text">
            <p>{parse(r_post_text)}</p>
          </div> */}
        </div>
      </div>
    );
}