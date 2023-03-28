import React from "react";


const Popup = ({currentPage, maxIndex, minIndex, onSetPage}) =>{
    const [pageIndex, setPageIndex] = React.useState(currentPage);

    function handleChange(event){
        const { name, value, type, checked } = event.target;
        if(!value){
          setPageIndex('');  
          return;
        }
        if(event.target.validity.valid){
          let intVal = parseInt(value);
          if(intVal > maxIndex){
              intVal = maxIndex;
          }
          else if(intVal < minIndex){
              intVal = minIndex;
          }
          setPageIndex(intVal); 
        }
    }
    function handleSubmit(event){
      event.preventDefault();
      Number.isInteger(pageIndex)? onSetPage(pageIndex): onSetPage(currentPage);
    }
    return (
        <form onSubmit={handleSubmit} className="popup-container">
          <input
            type="tel"
            pattern="[0-9]*"
            value={pageIndex}
            name="pageIndex"
            onChange={handleChange}
            className="popup-input"
          />
          <button className="popup-button">Go</button>
        </form>
    );
};
export default Popup;