import styled from "styled-components";

export const BaseButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  border: none;
  outline: none;
  transition: 0.2s;
  border-radius: 999px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.2s;
  }
`;
