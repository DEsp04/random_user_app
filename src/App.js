import './App.css';
import fetchUser from "./services/rando_user";
import React, { useState, useEffect } from "react";


function App() {

  const [currentUser, setCurrentUser] = useState(null)

  function refreshUser() { 
    console.log("refresh")
  }

  
  useEffect(() => { 
    const search = async () => {
      const data = await fetchUser();

      setCurrentUser(data);
    }

    search();
  },[])



  return (
    <div className="App">
      <header>
        <h1>Random User App</h1>
      </header>
      
      <button onClick={() => { 
       refreshUser()
      }}>Refresh</button>


      <div>{JSON.stringify(currentUser)}</div> 
    </div>
  );
}

export default App;
