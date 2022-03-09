import React, { useState } from 'react';
import './Post.css';



// Lastly, you will need to build out the “like” and “dislike” functionality. Within the “Post”
// component, create 2 separate functions – one for when the “like” button is clicked, and
// one for when the “dislike” button is clicked. Bind these functions to their respective
// button’s onClick event. Within these functions, start to lay out the steps that need to
// occur when each button is clicked.

const CustomButton = (props) => {

    const [buttonClass, setButtonClass] = useState("inactive");

    function handleClick(){ // changes buttons color on click
        if(buttonClass === "inactive"){
            setButtonClass("active");
        }
        else {
            setButtonClass("inactive");
        }
    }

    return ( 
        <div>
            <button className={buttonClass} onClick={handleClick}>{props.message}</button>
        </div>
     );
}
 
export default CustomButton;