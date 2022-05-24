import SearchPage from '../pages/SearchPage';
function Header(props) {
  const { onChangeHandler, query } = props;
  return (
    <div className="full-container">
      <header className="header flex justify-between align-center">
        <div className="logo flex justify-between align-center">
          <img src="/github.png" alt="logo" />
          <h2>Github Finder</h2>
        </div>
        <div className='search-bar'>
          <input type="search" onChange={(e) => onChangeHandler(e.target.value)} value={query} />
        </div>
        <nav className="nav ">
          <ul className="flex justify-between align-center">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header;
