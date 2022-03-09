import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts.jsx';
import CreatePostForm from './Components/CreatePost/CreatePost.jsx';
import './App.css';
import ActiveButton from './Post/Post.jsx';



function App() {

  const [posts, setPosts] = useState([{name: 'TestName', post: 'Test to see if its working'}])  // this is where I will store all of my post data

  function addNewPost(post){  // this funciion will pull post data from my CreatePost component and save it to my post "hook" above

    let tempPosts = [...posts, post]; // ...  is saving all the existing post data and adding the new post 

    setPosts(tempPosts);  // saving the data in our hook above on line 9
  }


  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Social<small className='text-muted'>Feed</small></h3>
        <div className='col-md-6'>
          <div className='border-box'>
            <CreatePostForm addNewEntry={addNewPost} />   {/* passing in our function so we can pull data to this level and save it */}
          </div>
          <div className='border-box'>
            <DisplayPosts parentEntries={posts} />    {/* passing in our post data so we can map over it and dispaly to user */}
          </div>
        </div>
      </div>   
    </div>
  );
}

export default App;





