import React, { useState } from 'react';
import { useAppDispatch } from '../../store/store';
import { addTodo } from '../../store/todoSlice';
import { AddContainer, AddFormButton, ButtonsContainer, InputAdd} from './styled-components';
import { nanoid } from 'nanoid';

interface AddFormProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>
};


const AddForm:React.FC<AddFormProps> = ({setShowForm}) => {
    
    const dispatch = useAppDispatch();
    const [textTodo, setTextTodo] = useState('')

    const addTodos = () => {
       dispatch(addTodo({id: nanoid(), text: textTodo}))
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