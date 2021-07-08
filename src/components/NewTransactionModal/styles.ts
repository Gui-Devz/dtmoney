import styled from "styled-components";
import { darken, lighten } from "polished";

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;

    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .close-modal-btn {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    width: 40px;
    height: 40px;
    background: transparent;
    border: 0;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#12A454",
  red: "#E52E4D",
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${(props) =>
    props.isActive ? lighten(0.4, colors[props.activeColor]) : "transparent"};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    height: 20px;
    width: 20px;
  }

  span {
    font-size: 1rem;
  }
`;
