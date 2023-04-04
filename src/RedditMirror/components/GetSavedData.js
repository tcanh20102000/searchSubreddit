import React from "react";
import Post from "./Post";
import axios from "axios";
import Pagination from "./Pagination";
import { useParams } from "react-router-dom";

const TIMEOUT = 900;


function keyWordToURL(input) {
  return `https://www.reddit.com/r/${input}.json`;
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

export default function GetSavedData(props) {
  const{subreddit} = useParams();

  const [rdata, setRData] = React.useState({data: [], search: true});
  
  const [currPage, setCurrPage] = React.useState(1);
  const [postPerPage, setPostPerPage] = React.useState(3);
  const [loading, setLoading] = React.useState(false);
  

  React.useEffect(() => {
    let url = keyWordToURL(subreddit);

    const fetchPosts = async () => {
      try{
        setLoading(true);
        const res = await axios.get(url, {timeout: TIMEOUT});
        if (res != null) {
          console.log("res.data", res.data.data.children);
          setRData({ data: res.data.data.children, search: true });
        }
        setLoading(false);
      }
      catch(err){
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

  //Get current posts
  const indexOfLastPost = currPage*postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = rdata.data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageIndex) =>{
    setCurrPage(pageIndex);
    //console.log('Click:', currPage);
  }

  // const listOfPost = currentPosts.map((post, index) =>{
  //   return (
  //     <Post
  //       key={index}
  //       {...post.data}
  //     />
  //   )
  // })

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (rdata.search) ? (
        <div className="r-content">
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
          </div>):(
            <div>
            Not found
          </div>)
        }
    </>
  );
}
