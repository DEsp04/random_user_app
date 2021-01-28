

function UserInfo(props) { 




  return (
    <div>
      <p>Name: {props.userInfo.results[0].name.first} {props.userInfo.results[0].name.last}</p>

      <p>E-mail: {props.userInfo.results[0].email}</p>
    </div>

  )
}


export default UserInfo;