import { AddContainer, AddFormButton, ButtonsContainer } from "../AddForm/styled-components"
import { InputEditTask } from "./styled-componets";
import React, { useState } from 'react';
import { ToDo, updateTodo } from "../../store/todoSlice";
import { useAppDispatch } from "../../store/store";

interface EditTaskItemProps {
    setShowForm : React.Dispatch<React.SetStateAction<boolean>>;
    todo?: ToDo;
};

export const EditTaskItem:React.FC<EditTaskItemProps> = ({setShowForm, todo}) => {

    const dispatch = useAppDispatch();
    const [val, setVal] = useState(todo?.text);
    const saveChanges = () => {
      if(todo?.id){
        dispatch(updateTodo({id: todo.id, changes: {text: val}}))
      }
    };

    return (
        <AddContainer>
            <div style={{display: 'flex', justifyContent:'center', marginTop:'42px'}}>
            <InputEditTask value={val} onChange={(e) => {setVal(e.target.value)}}/>
            </div>
            <ButtonsContainer>
              <AddFormButton onClick={() => {setShowForm(false)}} color='#4D4D4D' background='#F2F2F2'>Закрыть</AddFormButton>
              <AddFormButton onClick={saveChanges} color='#FFFFFF' background='#23A3FF'>Cохранить</AddFormButton>
            </ButtonsContainer>
        </AddContainer>
    )
};

export default EditTaskItem;