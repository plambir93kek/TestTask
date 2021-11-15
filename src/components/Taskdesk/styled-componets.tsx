import styled from 'styled-components';

export const MainWrapper = styled.div`
   width: 375px;
   height: 812px;
   margin: auto;
   display:flex;
   flex-direction: column;
   justify-content: space-between;
   overflow: hidden;
   background-color: #FFFFFF;
`;

export const MainContainer = styled.div`
   width: 375px;
`;

export const TaskList = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 31px;
`
export const AddIcon = styled.div`
  width: 60px;
  height: 60px;
  background: #FFFFFF;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
  margin-left: 275px;
  margin-bottom: 40px;
  border-radius: 50%;
  border: 1px solid transparent;
  display:flex;
  justify-content:center;
  align-items: center;
  &:hover{
    border: 1px solid #23A3FF;
  }
`;

export const EmptyListText = styled.div`
   width: 295px;
   height: 22px;
   font-family: var(--family);
   font-size: 18px;
   display: flex;
   align-items: center;
   line-height: 21px;
   margin: 0 40px;
   color: #000000;
`;