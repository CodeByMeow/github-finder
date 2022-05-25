import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import UserCard from "../../components/UserCard";
const SEARCH_URL = "https://api.github.com/search/users";

const SearchPage = () => {
  const [users, setUser] = useState([]);
  const [params] = useSearchParams();

  useEffect(() => {
    const getGithubSearchResult = async () => {
      const response = await fetch(SEARCH_URL + `?q=${params.get("q")}+in:login`)
      const { items } = await response.json();
      setUser(items);
    }
    getGithubSearchResult();
  }, [params]);

  //WARN: Return not found in mouting :(
  if (users.length === 0) {
    return (
      <div className="container">
        <div>No result found.</div>
      </div>
    );
  }

  return (
    <div className="container">
      {users.map((user, index) => <UserCard key={index} user={user} />)}
    </div>
  )
}

export default SearchPage;
