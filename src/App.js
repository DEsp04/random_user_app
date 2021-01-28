import './App.css';
import fetchUser from "./services/rando_user";
import React, { useState, useEffect } from "react";


function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [refresh, setRefresh] = useState(true);

  function refreshUser() { 
    if (refresh === false) { 
      setRefresh(true);
    }
  }

  
  useEffect(() => { 
    const search = async () => {
      const data = await fetchUser();
      setCurrentUser(data);
    }

  

    if (refresh === true) { 
      search();
      setRefresh(false);
    }

    return function refreshUser(){ 
      console.log("refresh")
    }
    
  })



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
