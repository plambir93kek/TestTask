import styled from "styled-components";

export const TaskItemContainer = styled.div`
 margin-left: 40px;
 display: flex;
 align-items: center;
`;

export const CheckBoxContainer = styled.div`
  width:22px;
  height: 22px;
  position: relative;
`;

export const TaskCheckbox = styled.input.attrs({
    type:'checkbox',
})`
  display: none;
`;

export const FakeCheckBox = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid #D9D9D9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface LabelCheckboxProps {
  editMode?: boolean
};

export const LabelCheckbox = styled.p<LabelCheckboxProps>`
  margin: 0;
  margin-left: 14px;
  font-family: var(--family);
  font-weight: 500;
  font-size: 18px;
  line-height: 21.6px;
  display: flex;
  align-items: center;
  height: 22px;
  cursor: ${props => props.editMode===true? 'pointer' : 'text'};
  &:hover {
    opacity: ${props=> props.editMode===true? 0.8 : 1};
  }
`;

interface CheckedProps {
    checked: boolean;
}
export const Checked = styled.div<CheckedProps>`
  width: 12px;
  height: 12px;
  background-color: #23A3FF;
  border-radius: 50%;
  display: ${props => props.checked? 'block' : 'none'};
`;

export const RemoveTaskIcon = styled.div`
  height: 22px;
  width: 22px;
  background-color: #E85C5C;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputEditTask = styled.input.attrs({
  type: 'text'
})`
  width: 295px;
  height: 50px;
  border: 2px solid #E6E6E6;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: var(--family);
  font-weight: 500;
  color: #333333;
  line-height: 22px;
  padding: 14px 20px;
  margin: auto;
`