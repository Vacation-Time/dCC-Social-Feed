import React,{ useState } from "react";

// function App() {
//     const [state, setState] = useState(false)
  
//     const toggle=()=>{
//       setState(!state);
//     }
  
//     return (
//       <div className="App">
//         <button onClick={toggle} className={'toggle--button' + (state ?  'toggle--close': '')}>
//           {state ? 'close' : 'open'}
//         </button>
//       </div>
//     );
//   }
  
//   export default App;
  
function App() {
  const [like, setlike] = useState()
  const [dislike, setdislike] = useState()
  
  const [likeactive, setlikeactive] = useState(false)
  const [dislikeactive, setdislikeactive] = useState(false)

  function likef(){
    if(likeactive){
      setlikeactive(false)
      setlike(like-1)
    }
    else {
      setlikeactive(true)
      setlike(like+1)
      if(dislikeactive){
        setdislikeactive(false)
        setlike(like+1)
        setdislike(dislike-1)
      }
    }
  }

  function dislikef(){
    if(dislikeactive){
      setdislikeactive(false)
      setdislike(dislike-1)
    }
    else {
      setdislikeactive(true)
      setdislike(like+1)
      if(likeactive){
        setlikeactive(false)
        setdislike(dislike+1)
        setlike(like-1)
      }
    }
  }

  return (
    <div className="App">
      <div></div>
      <button onClick={likef} className={[likeactive? 'active-like': null,'button'].join('')} >Like {like}</button>
      <button onClick={dislikef} className={[dislikeactive? 'active-dislike': null,'button'].join('')} >dislike {dislike}</button>
      <div></div>
    </div>
  );
}

export default App;