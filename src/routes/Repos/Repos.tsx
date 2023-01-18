//*Styles
import { ReposStyle } from "./ReposStyle";

//* Hooks
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

//* Components
import { Loader } from "../../components/Loader/Loader";
import { Repo } from "../../components/Repo/Repo";

//*Types
import { ReposProps } from "../../types/repos";

export const Repos = () => {
  const [repos, setRepos] = useState<ReposProps[] | [] | null>(null);
  const [loading, setLoading] = useState(false);

  const { username } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const loadingRepos = async (username: string) => {
      setLoading(true);

      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();

      setRepos(data);
      setLoading(false);
    };
    if (username) {
      loadingRepos(username);
    }
  }, []);

  if (loading) return <Loader />;

  return (
    <ReposStyle>
      <button onClick={() => navigate(-1)} className="back_btn">
        Voltar
      </button>

      <h2>Explore os repositórios do usuário: {username}</h2>
      {repos && repos.length === 0 && (
        <h3>Não há repositórios para este usuário</h3>
      )}
      {repos && repos.length > 0 && (
        <div className="repos_container">
          {repos.map((repo: ReposProps) => (
            <Repo key={repo.name} {...repo} />
          ))}
        </div>
      )}
    </ReposStyle>
  );
};
