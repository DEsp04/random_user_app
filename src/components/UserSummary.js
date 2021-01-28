import UserInfo from "./UserInfo";
import React, { useState, useEffect } from "react";
import ShowLessButton from "./ShowLessButton";
import ShowMoreButton from "./ShowMoreButton";


function UserSummary(props) { 

  
  const [showMore, setShowMore] = useState(false);
  
  
  function showMoreClick() { 
    setShowMore(true);
  }
  function showLessClick() { 
    setShowMore(false);
  }

  let button;

  if (showMore) {
   button = <ShowLessButton onClick={showLessClick} />
  } else { 
   button = <ShowMoreButton onClick={showMoreClick} />
  }


  let userInfo;


  if (props.userData === null) {
    userInfo = <h2>There is no user data</h2>;
  } else { 
    userInfo = <UserInfo showMore={showMore} userInfo={props.userData} />
  }



  return (
    <div>
      {button}
      {userInfo}
    </div>
  );
}


export default UserSummary;