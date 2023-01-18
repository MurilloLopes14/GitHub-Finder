//* Styles
import { RepoStyle } from "./RepoStyle";

//* Types
import { ReposProps } from "../../types/repos";

//* React-icons
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { RiGitRepositoryLine } from "react-icons/ri";

export const Repo = ({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
}: ReposProps) => {
  return (
    <RepoStyle>
      <h3>{name}</h3>
      <p>
        <BsCodeSlash /> {language}
      </p>
      <div className="stats">
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
        <a href={html_url} target="_blank" className="repo_btn">
          <span>Ver código</span>
          <RiGitRepositoryLine />
        </a>
      </div>
    </RepoStyle>
  );
};
