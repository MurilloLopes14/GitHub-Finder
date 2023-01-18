import styled from "styled-components";

export const SearchStyle = styled.div`
  background-color: #2c3040;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  p {
    color: var(--color2);
  }

  .search_container {
    display: flex;
    gap: 0.5rem;

    input,
    button {
      padding: 0.6rem;
      border-radius: 3px;
      border: none;
      color: var(--color3);
    }

    button {
      display: flex;
      align-items: center;
      background-color: var(--color4);
      color: aliceblue;
      cursor: pointer;
    }
  }
`;
