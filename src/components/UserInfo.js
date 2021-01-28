

function UserInfo(props) { 

  const showMore = props.showMore
  console.log(props.userInfo.results[0]);

  if (showMore) {

    return (
      <div>
        <p>Name: {props.userInfo.results[0].name.first} {props.userInfo.results[0].name.last}</p>

        <p>E-mail: {props.userInfo.results[0].email}</p>

        <p>Street: {props.userInfo.results[0].location.street.name}</p>
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