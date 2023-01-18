import styled from "styled-components";

export const RepoStyle = styled.section`
  background-color: var(--color3);
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid aliceblue;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1 0 100%;
  align-items: flex-start;

  .stats {
    display: flex;
    gap: 1rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      border: 1px solid azure;
      border-radius: 3px;
      padding-right: 1.4rem;

      svg {
        background-color: #15e3b2;
        padding: 0.2rem 0.4rem;
        font-size: 2rem;
        fill: #666;
      }
    }
  }

  .repo_btn {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    gap: 0.5rem;
    background-color: var(--color4);
  }
`;
