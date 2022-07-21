import styled from "styled-components";

export const HeaderPage = styled.header`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 1.6rem;
  margin-left: 1rem;

  span {
    width: 19px;
    height: 19px;
    background-color: white;
    border-radius: 100%;
    transition: filter 0.3s;
    cursor: pointer;
    &:hover {
      filter: brightness(0.8);
    }

    &.red {
      background: var(--redColor);
    }

    &.yellow {
      background: var(--yellowColor);
    }

    &.green {
      background: var(--greenColor);
    }
  }
`;
