import './DisplayPosts.css';

// Within the “DisplayPosts” component, create the feed where all your posts will be displayed in your app. All posts should be passed into this component using props. Then, utilize the “map” higher order array method to map each post to its own Post component.

const DisplayPosts = (props) => {
  return ( 
      <table className="table">
          <tbody>
            {props.parentEntries.map((posts, index) => { // we got parentEntries from passing down props from app.js
              return (
                  <tr key = {index}>
                      <td>{posts.name}</td>   {/* these get their data from the map above */}
                      <td>{posts.post}</td>
                      <button>Like</button>
                      <button>Dislike</button>
                  </tr>
              )
           })}
        </tbody>
      </table>
   );
}

export default DisplayPosts;

