import './App.css';
import fetchUser from "./services/rando_user";
import React, { useState, useEffect } from "react";
import UserSummary from "./components/UserSummary";


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


  })



  return (
    <div className="App">
      <header>
        <h1>Random User App</h1>
      </header>
      
      <button onClick={() => { 
        refreshUser()
      }}>Refresh</button>

      <UserSummary userData={currentUser} />
      {/* <div>{JSON.stringify(currentUser)}</div>  */}
    </div>
  );
}

export default App;
