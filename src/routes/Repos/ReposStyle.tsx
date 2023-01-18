import styled from "styled-components";

export const ReposStyle = styled.section`
  .back_btn {
    position: absolute;
    top: 1rem;
    left: 1rem;
    padding: 0.5rem 1rem;
    color: #9da5d1;
    background-color: var(--color2);
    color: #111;
    font-weight: bold;
    border-radius: 5px;
    opacity: 0.8;
    transition: 0.2s;

    &:hover {
      opacity: 1;
    }
  }

  h2 {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  .repos_container {
    background-color: var(--color4);
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.2rem;
  }
`;
