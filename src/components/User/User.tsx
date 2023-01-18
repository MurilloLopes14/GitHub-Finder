//* Styles
import { UserStyle } from "./UserStyle";

//* React-icons
import { MdLocationPin } from "react-icons/md";

//* Components
import { Link } from "react-router-dom";

//* Types
import { UserProps } from "../../types/user";

export const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <UserStyle>
      <img src={avatar_url} alt={login} />
      <h1>{login}</h1>
      {location && (
        <p className="location">
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className="stats">
        <div>
          <p>
            seguidores:
            <p className="number">{followers}</p>
          </p>
        </div>
        <div>
          <p>
            seguindo:
            <p className="number">{following}</p>
          </p>
        </div>
      </div>
      <Link to={`repos/${login}`}>Visualizar repositórios</Link>
    </UserStyle>
  );
};
