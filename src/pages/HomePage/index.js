import { useEffect, useState } from "react";
import UserCard from "../../components/UserCard";
const APIURL = "https://api.github.com/users?per_page=15"

function HomePage() {
  const [users, setUsers] = useState([]);
  useEffect(
    () => {
      fetch(APIURL)
        .then(response => response.json())
        .then(data => { setUsers(data) })
    }, []
  );

  return (
    <div className="container">
      {users.map((user, index) => <UserCard key={index} user={user} />)}
    </div>
  )
}

export default HomePage;
