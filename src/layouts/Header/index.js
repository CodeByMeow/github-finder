import { useState } from "react";
import { Routes, Route, Link, createSearchParams, useNavigate } from 'react-router-dom';
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import SearchPage from "../../pages/SearchPage";
import UserDetail from "../../pages/UserDetail";
import NotFoundPage from "../../pages/NotFoundPage";

const Header = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const onChangeHandler = (value) => setInput(value);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/search",
      search: `?${createSearchParams({ q: input })}`
    });
  }

  return (
    <>
      <div className="full-container">
        <header className="header flex justify-between align-center">
          <div className="logo flex justify-between align-center">
            <img src="/github.png" alt="logo" />
            <h2>Github Finder</h2>
          </div>
          <div className='search-bar'>
            <form onSubmit={onSubmitHandler} className="flex">
              <input type="search" value={input} onChange={(e) => onChangeHandler(e.target.value)} placeholder="Search some Github user" />
              <button type="submit" >Search</button>
            </form>
          </div>
          <nav className="nav">
            <ul className="flex justify-between align-center">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/user/:username" element={<UserDetail />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default Header;
