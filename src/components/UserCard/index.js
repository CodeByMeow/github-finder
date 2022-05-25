import { useNavigate } from "react-router-dom";

function UserCard(props) {
  const { user: { login, avatar_url } } = props;
  const navigate = useNavigate();

  const onClickHandler = () => navigate(`/user/${login}`);

  return (
    <div className="user-card">
      <div className="user-content">
        <div className="user-avartar">
          <img src={avatar_url} />
        </div>
        <div className="user-info">
          <h2>{login}</h2>
          <button onClick={onClickHandler}>View</button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
