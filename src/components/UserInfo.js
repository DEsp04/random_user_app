

function UserInfo(props) { 

  const showMore = props.showMore
  console.log(props.userInfo.results[0]);

  if (showMore) {

    return (
      <div>
        <img src={props.userInfo.results[0].picture.large} />
        <p>Name: {props.userInfo.results[0].name.first} {props.userInfo.results[0].name.last}</p>
        <p>E-mail: {props.userInfo.results[0].email}</p>
        <p>Street: {props.userInfo.results[0].location.street.name}</p>
        <p>City: {props.userInfo.results[0].location.city}</p>
        <p>State: {props.userInfo.results[0].location.state}</p>
        <p>User Name: {props.userInfo.results[0].login.username}</p>
      </div>

    )
  } else { 
    return (
      <div>
        <p>Name: {props.userInfo.results[0].name.first} {props.userInfo.results[0].name.last}</p>

        <p>E-mail: {props.userInfo.results[0].email}</p>
      </div>
    )
  }
}


export default UserInfo;