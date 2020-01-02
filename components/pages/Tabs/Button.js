import { ButtonContainer } from "./Button";
import styled from "styled-components";

export default (ButtonContainer = styled.button`
  text-transform: captalize;
  font-size: 1.4rem;
  background: transparent blue;
  border: 0.05rem solid dark;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 02rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: pink;
  }
  &focus {
    outline: none;
  }
`);
