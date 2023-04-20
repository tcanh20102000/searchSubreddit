import React from "react";
import { TbArrowBigUp } from "react-icons/tb";
import styles from "./ToTopButton.module.css";

const LIMIT_SCROLL_PX = 300;

export default function ToTopButton(){
    const [visible, setVisible] = React.useState(false);

    const toggleVisible = () =>{
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > LIMIT_SCROLL_PX) {
            setVisible(true);
        }
        else{
            setVisible(false);
        }
    }

    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
        })
    }

    window.addEventListener("scroll", toggleVisible);

    return (
      <div  
        className={styles.square} 
        onClick={scrollToTop}
        style={{display : visible ? '' : 'none'}}>
        <TbArrowBigUp className={styles.arrow} size="1.5em" />
      </div>
    );
}