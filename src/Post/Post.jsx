import React, { useState } from 'react';
import './Post.css';



// Lastly, you will need to build out the “like” and “dislike” functionality. Within the “Post”
// component, create 2 separate functions – one for when the “like” button is clicked, and
// one for when the “dislike” button is clicked. Bind these functions to their respective
// button’s onClick event. Within these functions, start to lay out the steps that need to
// occur when each button is clicked.



// const ActiveButton = (props) => {
//     const [like, setlike] = useState(0);
//     const [dislike, setdislike] = useState(0);
    
//     const [likeactive, setlikeactive] = useState(false);
//     const [dislikeactive, setdislikeactive] = useState(false);
  
//     function likef(){
//       if(likeactive){
//         setlikeactive(false);
//         setlike(like-1);
//       }
//       else {
//         setlikeactive(true);
//         setlike(like+1);
//         if(dislikeactive){
//           setdislikeactive(false);
//           setlike(like+1);
//           setdislike(dislike-1);
//         }
//       }
//     }
  
//     function dislikef(){
//       if(dislikeactive){
//         setdislikeactive(false);
//         setdislike(dislike-1);
//       }
//       else {
//         setdislikeactive(true);
//         setdislike(like+1);
//         if(likeactive){
//           setlikeactive(false);
//           setdislike(dislike+1);
//           setlike(like-1);
//         }
//       }
//     }
  
//     return (
//       <div className="App">
//         <div></div>
//         <button onClick={likef} className={[likeactive ? 'active-like': null,'button'].join('')} >Like {like}</button>
//         <button onClick={dislikef} className={[dislikeactive ? 'active-dislike': null,'button'].join('')} >Dislike {dislike}</button>
//         <div></div>
//       </div>
//     );
//   }
  
//   export default ActiveButton;


const CustomButton = (props) => {

    const [like, setLike] = useState("inactive"); //default values when page is loaded
    const [dislike, setDislike] = useState("inactive")

    function handleLike(){ // changes buttons color on click
        if(like === "inactive"){
            setLike("active");
            setDislike("inactive");
        }
        else {
            setLike("inactive");
        }
    }    
    
    function handleDislike(){ // changes buttons color on click
        if(dislike === "inactive"){
            setDislike("active-dislike");
            setLike("inactive");
        }
        else {
            setDislike("inactive");
        }
    }

    return ( 
        <div>
            <button className={like} onClick={handleLike}>Like</button>
            <button className={dislike} onClick={handleDislike}>Dislike</button>
        </div>
     );
}
 
export default CustomButton;
