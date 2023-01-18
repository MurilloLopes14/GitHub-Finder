//* Styles
import { HomeStyle } from "./HomeStyle";

//* Hooks
import { useState } from "react";

//* Components
import { Search } from "../../components/Search/Search";
import { User } from "../../components/User/User";
import { Error } from "../../components/Error";

//* Types
import { UserProps } from "../../types/user";
import { Loader } from "../../components/Loader/Loader";

export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<Boolean>(false);

  const loadUser = async (userName: string) => {
    setLoading(true);

    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    if (res.status === 404) {
      setLoading(false);
      setError(true);
      return;
    }

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
    setLoading(false);
    setError(false);
  };

  if (loading) return <Loader />;

  return (
    <HomeStyle>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Error />}
    </HomeStyle>
  );
};
