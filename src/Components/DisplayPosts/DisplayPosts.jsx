import CustomButton from '../../Post/Post';
import './DisplayPosts.css';

// Within the “DisplayPosts” component, create the feed where all your posts will be displayed in your app. All posts should be passed into this component using props. Then, utilize the “map” higher order array method to map each post to its own Post component.

// Lastly, you will need to build out the “like” and “dislike” functionality. Within the “Post”
// component, create 2 separate functions – one for when the “like” button is clicked, and
// one for when the “dislike” button is clicked. Bind these functions to their respective
// button’s onClick event. Within these functions, start to lay out the steps that need to
// occur when each button is clicked.


const DisplayPosts = (props) => {
  return ( 
      <table className="table">
          <tbody>
            {props.parentEntries.map((posts, index) => { // we got parentEntries from passing down props from app.js
              return (
                  <tr key = {index}>
                      <td>{posts.name}</td>   {/* these get their data from the map above */}
                      <td>{posts.post}</td>
                      <CustomButton message="Like"/>
                      <CustomButton message="Dislike"/>
                  </tr>
              )
           })}
        </tbody>
      </table>
   );
}

export default DisplayPosts;

