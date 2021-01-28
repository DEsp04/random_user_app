import UserInfo from "./UserInfo";



function UserSummary(props) { 

  let userInfo;


  if (props.userData === null) {
    userInfo = <h2>There is no user data</h2>;
  } else { 
    userInfo = <UserInfo userInfo={props.userData} />
  }



  return (
    <div>
      {userInfo}
    </div>
  );
}


export default UserSummary;