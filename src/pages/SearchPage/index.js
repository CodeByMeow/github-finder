import { useEffect, useState } from "react";
import UserCard from "../../components/UserCard";
const SEARCH_URL = "https://api.github.com/search/users";

const SearchPage = (props) => {
  const { query } = props;
  const [users, setUser] = useState([]);
  useEffect(
    () => {
      fetch(SEARCH_URL + `?q=${query}+in:login`)
        .then(response => response.json())
        .then(data => { setUser(data.items) })
    }, [query]
  );

  return (
    <div className="container">
      {users.map((user, index) => <UserCard key={index} user={user} />)}
    </div>
  )
}

export default SearchPage;
