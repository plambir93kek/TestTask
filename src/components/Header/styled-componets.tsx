import styled from 'styled-components';

export const Today = styled.div`
  font-family: var(--family);
  width: 113px;
  height: 41px;
  font-weight: 800;
  font-size: 28px;
  line-height: 41px;
  color: #1C1C1C;
  margin-left: 40px;
  flex-grow: 1;
  letter-spacing: 0.01em;
`;

export const HeaderContainer = styled.div`
  display: flex;
  margin-top: 60px;
  align-items: center;
`;

export const HeaderButton = styled.button`
  border: none;
  background-color: #F2F2F2;
  width: 86px;
  height: 27px;
  font-family: var(--family);
  font-size: 14px;
  line-height: 19.6px;
  margin-right: 40px;
  font-weight: 500;
  padding: 0;
  border-radius: 4px;
  letter-spacing: 0.01em;
  &:hover {
    opacity: 0.7;
  }
`;