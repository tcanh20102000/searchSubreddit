import React from "react";
import Post from "./Post";
import axios from "axios";
import Pagination from "./Pagination";
import { useParams } from "react-router-dom";


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

  const [rdata, setRData] = React.useState([]);
  
  const [currPage, setCurrPage] = React.useState(1);
  const [postPerPage, setPostPerPage] = React.useState(3);
  const [loading, setLoading] = React.useState(false);
  
  
  // React.useEffect(
  //   function () {
  //     fetch(url).then((res) => {
  //       if (res.status !== 200) {
  //         console.log("Request failed");
  //         return;
  //       }

  //       res.json().then((data) => {
  //         if (data != null) {
  //           //setRData(data.data.children);
  //           //console.log(data.data.children);
  //         }
  //       });
  //     });
  //   },
  //   [subreddit]
  // );

  React.useEffect(() => {
    let url = keyWordToURL(subreddit);

    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(url);
      if (res != null) {
        console.log("res.data", res.data.data.children);
        setRData(res.data.data.children);
      }
      setLoading(false);
    };

    fetchPosts();
  }, [subreddit]);

  //Get current posts
  const indexOfLastPost = currPage*postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = rdata.slice(indexOfFirstPost, indexOfLastPost);

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
      ) : (
        <div className="r-content">
          <ListOfPost list={currentPosts} />

          <div className="pagination-div">

            <Pagination
              currentPage={currPage}
              postsperPage={postPerPage}
              totalPosts={rdata.length}
              paginate={paginate}
              setCurrPage={setCurrPage}
            />
          </div>
        </div>
      )}
    </>
  );
}
