import React, { useEffect, useState } from "react";

function App() {
  // state variable will contain our data from back-end API for re-rendering
  const [backendData, setBackendData] = useState([{}]);

  // fetch back end data
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        // remember that since backendData is immutable, we set the new state of it with the setBackendData function
        setBackendData(data);
      });
  }, []); // empty array specifies that this only runs on the first render of the component

  return (
    <div>
      
      {(typeof backendData.users === "undefined") ? (
      // if user data type is undefined (meaning we havent fetched users yet)
        <p>Loading...</p>
      ) : (
      // else, call our users variable and use map function to map users to a p tag. i is the key for each user.
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
}

export default App;
