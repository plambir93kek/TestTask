import styled, { keyframes } from "styled-components";

const showForm = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const hideForm = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
`;


export const AddContainer = styled.div`
  width: 375px;
  height: 680px;
  position: absolute;
  top: 132px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
  border-radius: 40px 40px 0px 0px;
  z-index: 5;
  background-color: #FFFFFF;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  &.enter-active {
  animation: ${showForm} 0.5s forwards;
};
 &.exit-active {
  animation: ${hideForm} 0.5s forwards;
}
`;



export const InputAdd= styled.textarea`
  display: block;
  width: 295px;
  height: 160px;
  margin-top: 42px;
  font-family: var(--family);
  padding: 20px;
  color: #999999;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid #E6E6E6;
  box-sizing: border-box;
  border-radius: 10px;
  resize: none;
`

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 21px;
  justify-content: center;
`;

interface ButtonProps {
    color: string;
    background: string;
};

export const AddFormButton = styled.button<ButtonProps>`
  width: 137px;
  height: 40px;
  color: ${props => props.color};
  background-color: ${props => props.background};
  padding: 0;
  border: none;
  border-radius: 10px;
  font-family: var(--family);
  font-weight: 500;
  font-size: 16px;
  &:hover {
    opacity: 0.8;
  }
`