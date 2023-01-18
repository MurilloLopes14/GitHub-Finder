//* Styles
import { SearchStyle } from "./SearchStyle";

//* React-icons
import { BsSearch } from "react-icons/bs";

//* Hooks
import { useState } from "react";

//* Types
type IProps = { loadUser: (userName: string) => Promise<void> };
import { KeyboardEvent } from "react";

export const Search = ({ loadUser }: IProps) => {
  const [userName, setUserName] = useState<string>("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };
  return (
    <SearchStyle>
      <h2>Busque por um usuário</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className="search_container">
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </SearchStyle>
  );
};
