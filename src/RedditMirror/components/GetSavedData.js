import React from "react";
import Post from "./Post";
import axios from "axios";
import Pagination from "./Pagination";
import ToTopButton from "./ToTopButton/ToTopButton";
import { useParams } from "react-router-dom";
import ItemsPerPage from "./ItemsPerPage";

const TIMEOUT = 5000
const FixedPostsPerPage = [5, 10, 20];

// function keyWordToURL(input) {
//   return `https://www.reddit.com/r/${input}.json`;
// }

function keyWordToQuery(input){
  return `https://www.reddit.com/search.json?q=${input}&limit=100&type=link&sr_detail=1&raw_json=1`;
}

const ListOfPost = ({list}) =>{
  if (!list) {
    return <></>;
  }
  const listOfPost = list.map((post, index) => {
    return <Post key={index} {...post.data} />;
  });
  return (
    <>
      {listOfPost}
    </>);
}

export default function GetSavedData() {
  //get value of subreddit in url
  const { subreddit } = useParams();
  //get data 
  const [rdata, setRData] = React.useState({ data: [], search: true });

  const [currPage, setCurrPage] = React.useState(1);
  const [postPerPage, setPostPerPage] = React.useState(FixedPostsPerPage[0]); //set numbers of posts per page

  //put loading screen when waiting for response
  const [loading, setLoading] = React.useState(false); 

  React.useEffect(() => {
    let url = keyWordToQuery(subreddit);

    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(url, { timeout: TIMEOUT });
        if (res != null) {
          console.log("res.data", res.data.data.children);
          setRData({ data: res.data.data.children, search: true });
        }
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
        setRData((prevData) => ({
          ...prevData,
          search: false,
        }));
      }
    };

    fetchPosts();
  }, [subreddit]);

  //Get the corresponding posts for the current page
  const indexOfLastPost = currPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = rdata.data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageIndex) => {
    setCurrPage(pageIndex);
    //console.log('Click:', currPage);
  };

  const noResult = (
      <>
        <div className="r-whole-post">
          <div className="reddit-post" style={{ textAlign: "center" }}>
            <h3>It seem that the search "{subreddit}" return no result.</h3>
            <p style={{ color: "#8a8a8a" }}>
              Double-check your spelling or try other keywords in the{" "}
              <a href="#searchbar">searchbar</a>
            </p>
          </div>
        </div>
      </>
  );
  
  
  const timeOut = (
      <>
        <div className="r-whole-post">
          <div className="reddit-post" style={{ textAlign: "center" }}>
            <h3>The request of searching "{subreddit}" has been timed out.</h3>
            <p style={{ color: "#8a8a8a" }}>
              Please try again after a few minutes
            </p>
          </div>
        </div>
      </>
  );

  const yesResult = (
    <>
      <div className="r-content">
        <ItemsPerPage
          setPostPerPage={setPostPerPage}
          fixedPostsPerPage={FixedPostsPerPage}
          postPerPage={postPerPage}
        />

        <ListOfPost list={currentPosts} />

        <div className="pagination-div">
          <Pagination
            currentPage={currPage}
            postsperPage={postPerPage}
            totalPosts={rdata.data.length}
            paginate={paginate}
            setCurrPage={setCurrPage}
          />
        </div>

        <ToTopButton />
      </div>
    </>
  );
  

  function ShowSearchResult(){
    let res = '';
    if(!rdata.search){
      res = timeOut;
    }
    if(rdata.search && !rdata.data){
      res = noResult;
    }
    else{
      res = yesResult;
    }
    
    console.log('SHow', res);
    return res;
  }

  return(
  <>
    <ShowSearchResult/>
  </>)
  
}


// return (
//   <>
//     {loading ? (
//       <h2>Loading...</h2>
//     ) : rdata.search & rdata.data ? (
//       <div className="r-content">
//         <ItemsPerPage
//           setPostPerPage={setPostPerPage}
//           fixedPostsPerPage={FixedPostsPerPage}
//           postPerPage={postPerPage}
//         />

//         <ListOfPost list={currentPosts} />

//         <div className="pagination-div">
//           <Pagination
//             currentPage={currPage}
//             postsperPage={postPerPage}
//             totalPosts={rdata.data.length}
//             paginate={paginate}
//             setCurrPage={setCurrPage}
//           />
//         </div>
//       </div>
//     ) : (
//       <div className="r-whole-post">
//         <div className="reddit-post" style={{ textAlign: "center" }}>
//           <h3>It seem that the search "{subreddit}" return no result.</h3>
//           <p style={{ color: "#8a8a8a" }}>
//             Double-check your spelling or try other keywords in the{" "}
//             <a href="#searchbar">searchbar</a>
//           </p>
//         </div>
//       </div>
//     )}
//   </>
// );