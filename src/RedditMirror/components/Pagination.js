import React from 'react'
import Popup from './Popup';
const NUM_OF_DISPLAY_DIGITS = 4;

//This function handle how the numbers show in pagination component
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

    let digitsBefore = Math.floor(NUM_OF_DISPLAY_DIGITS / 2) - 1;
    //There would be 1 number before the current page

    let digitsAfter = NUM_OF_DISPLAY_DIGITS - digitsBefore - 1;
    //There would be 2 number behind the current page

    let startDisplayedIndex = 0;
    let endDisplayIndex = 0;

    //Page currently at the end of list and dot at beginning. Ex: ... 7 8 [9] 10
    //Recalculate number of display digit in case digitsAfter overflow max-index
    if (currentPage >= max_index - digitsAfter) {
      digitsAfter = Math.min(
        Math.floor(NUM_OF_DISPLAY_DIGITS / 2),
        max_index - currentPage
      );
      digitsBefore = NUM_OF_DISPLAY_DIGITS - digitsAfter - 1;

      startDisplayedIndex = currentPage - digitsBefore;
      endDisplayIndex = max_index;
      dottedCase = 2;

      for (let i = startDisplayedIndex; i <= endDisplayIndex; i++) {
        pageNum.push(i);
      }
      console.log("Case, ", dottedCase);
    }

    //Page currently at the middle of this list and dot at near the end. Ex: 2 [3] 4 ... 10
    else {
      //Recalculate number of display digit in case digitsBefore overflow min-index
      digitsBefore = Math.min(
        Math.floor(NUM_OF_DISPLAY_DIGITS / 2) - 1,
        currentPage - min_index
      );

      //Since max-index and currpage always being displayed,
      //the behind rendered number must be minus 2.
      digitsAfter = NUM_OF_DISPLAY_DIGITS - digitsBefore - 2;

      startDisplayedIndex = Math.max(currentPage - digitsBefore, 1);
      endDisplayIndex = currentPage + digitsAfter;
      dottedCase = 1;
      for (let i = startDisplayedIndex; i <= endDisplayIndex; i++) {
        pageNum.push(i);
      }
      pageNum.push(max_index);
      console.log("Case, ", dottedCase);
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

//Add ... in suitable position in list (for pagination)
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

// function isClicked(){
//   console.log('Dotted button clicked');
// }



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
    <>
        <ul className='pagination'>
            {listOfPages}
        </ul>
    </>
  )
}

export default Pagination;
