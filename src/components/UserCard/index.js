function UserCard(props) {
  const { user: {login, avatar_url} } = props;
  return (
    <div className="user-card">
      <div className="user-content">
        <div className="user-avartar">
          <img src={avatar_url} />
        </div>
        <div className="user-info">
          <h2>{login}</h2>
          <button>View</button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
