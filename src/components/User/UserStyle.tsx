import styled from "styled-components";

export const UserStyle = styled.section`
  background-color: #2c3040;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  img {
    width: 140px;
    height: 140px;
    border: 4px solid var(--color4);
    border-radius: 50%;
  }

  .location {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    svg {
      fill: #15e3b2;
      font-size: 1.5rem;
    }

    span {
      color: var(--color2);
      font-weight: bold;
    }
  }

  .stats {
    display: flex;

    div {
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;

      &:first-child {
        border-right: 1px solid var(--color1);
      }

      .number {
        background-color: #15e3b2;
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
        color: #555;
      }
    }
  }

  a {
    text-align: center;
    background-color: var(--color3);
    padding: 1rem;
    border-radius: 5px;
    opacity: 0.8;
    transition: all 0.3s;

    &:hover {
      opacity: 1;
    }
  }
`;
