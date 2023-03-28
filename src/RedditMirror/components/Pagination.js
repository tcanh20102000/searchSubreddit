import React from 'react'
import Popup from './Popup';
const NUM_OF_DISPLAY_DIGITS = 4;

function calDisplayIndex(
  min_index,
  max_index,
  NUM_OF_DISPLAY_DIGITS,
  currentPage
) {
  let dottedCase = 0; 
  // Check if the display contained '...' button.
  // 0: no dot, 1: dot at near the end, 2: dot at beginning.

  const pageNum = [];

  if (max_index > NUM_OF_DISPLAY_DIGITS) {
    //yes dot
    let digitsBefore = Math.floor((NUM_OF_DISPLAY_DIGITS - 2) / 2);
    let digitsAfter = NUM_OF_DISPLAY_DIGITS - 2 - digitsBefore;
    let startDisplayedIndex = 0;
    let endDisplayIndex = 0;
    //currently at the end of list and dot at beginning. Ex: ... 7 8 9 10

    if (currentPage >= max_index - digitsAfter) {
      startDisplayedIndex = currentPage - digitsBefore;
      endDisplayIndex = max_index;
      dottedCase = 2;

      for (let i = startDisplayedIndex; i <= endDisplayIndex; i++) {
        pageNum.push(i);
      }
    }
    //currently at the middle of this list and dot at near the end. Ex: 2 3 4 ... 10
    else {
      startDisplayedIndex = Math.max(currentPage - digitsBefore, 1);
      endDisplayIndex = currentPage + digitsAfter;
      dottedCase = 1;
      for (let i = startDisplayedIndex; i <= endDisplayIndex; i++) {
        pageNum.push(i);
      }
      pageNum.push(max_index);
    }
  }
  else {
    
    //no dot
    dottedCase = 0;
    for (let i = min_index; i <= max_index; i++) {
      pageNum.push(i);
    }
  }
  return [pageNum, dottedCase];
}

function displayList( pageNum, dottedCase) {
    let resList = [];
    if(dottedCase === 1){
      resList = [
        ...pageNum.slice(0, -1),
        "...",
        ...pageNum.slice(-1),
      ];
    }
    else if(dottedCase === 2){
      resList = ['...', ...pageNum];
    }
    return resList;

  }

function isClicked(){
  console.log('Dotted button clicked');
}



const Pagination = ({currentPage, postsperPage, totalPosts, paginate, setCurrPage}) => {
  let min_index = 1;
  let max_index = Math.ceil(totalPosts / postsperPage);
  const [isPopUp, setIsPopUp] = React.useState(false);
  

  const [pageNum, dottedCase] = calDisplayIndex(min_index,
     max_index, NUM_OF_DISPLAY_DIGITS, currentPage);

  const resList = displayList(pageNum, dottedCase);
  const listOfPages = resList.map((item, id)=>{
      if(Number.isInteger(item)){
        return (
          <li key={id}>
            <button
              onClick={() => {paginate(item); setIsPopUp(false);}}
              className={item === currentPage ? "page-item-bold" : "page-item"}
            >
              {item}
            </button>
          </li>
        );
      }
      else{
        return (
          <li key={id} className='goToButton'>
            <button
              onClick={() => setIsPopUp((oldValue) => !oldValue)}
              className={"page-item"}
            >
              {item}
            </button>
            {isPopUp ? (
              <Popup
                currentPage={currentPage}
                maxIndex={max_index}
                minIndex={min_index}
                onSetPage={setCurrPage}
              />
            ) : (
              <></>
            )}
          </li>
        );
      }
  })

           
  return (
    <nav>
        <ul className='pagination'>
            {listOfPages}
        </ul>
    </nav>
  )
}

export default Pagination;
