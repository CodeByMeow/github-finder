import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const USER_DETAIL_API = " https://api.github.com/users/"

const UserDetail = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});

  useEffect(
    () => {
      fetch(USER_DETAIL_API + `${username}`)
        .then(response => response.json())
        .then(data => setUser(data));
    }, [username]
  );

  return (
    <div className="container" >
      <div className="user-detail">
        <div className="user-info flex justify-between align-center f-col">
          <div className="user-avartar l-img">
            <img src={user.avatar_url} alt={user.login} />
          </div>
          <div className="user-info">
            <h2>{user.name}</h2>
            <span className="user-bio">{user.bio}</span>
            <span className="user-location">{user.location}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetail;
