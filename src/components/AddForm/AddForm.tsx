import React, { useState } from 'react';
import { useAppDispatch } from '../../store/store';
import { addTodo } from '../../store/todoSlice';
import { AddContainer, AddFormButton, ButtonsContainer, InputAdd} from './styled-components';
import { nanoid } from 'nanoid';

interface AddFormProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
    editMode: boolean;
};

// Форма добавления в список дел. Создает Id и диспатчит в стейт.
const AddForm:React.FC<AddFormProps> = ({setShowForm, setEditMode, editMode}) => {
    
    const dispatch = useAppDispatch();
    const [textTodo, setTextTodo] = useState('')

    const addTodos = () => {
        if(textTodo){
          dispatch(addTodo({id: nanoid(), text: textTodo}))
          if(editMode){
            setEditMode(false)
          }
        }
    }

    return (
        <AddContainer>
            <InputAdd onChange={(e) => {setTextTodo(e.target.value)}}></InputAdd>
            <ButtonsContainer>
              <AddFormButton onClick={()=>{setShowForm(false)}} color='#4D4D4D' background='#F2F2F2'>Закрыть</AddFormButton>
              <AddFormButton onClick={addTodos} color='#FFFFFF' background='#23A3FF'>Добавить</AddFormButton>
            </ButtonsContainer>
        </AddContainer>
    )
};

export default AddForm;