import React, { useState } from 'react';
import AddForm from '../AddForm/AddForm';
import Header from '../Header/Header';
import TaskItem from '../TaskItem/TaskItem';
import { AddIcon, EmptyListText, MainContainer, MainWrapper, TaskList } from './styled-componets';
import { CSSTransition } from 'react-transition-group';
import addicon from '../../incons/addicon.svg';
import { useAppSelector } from '../../store/store';
import { todoSelectors } from '../../store/todoSlice';

//Главный компонент, рендерит все остальные, отвечает за состояния рекдактирования и добавления.
const TaskDesk = () => {
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const todosObject = useAppSelector(todoSelectors.selectEntities);
  const todos = Object.values(todosObject);

  const toggleForm = () => {
    setShowForm(true)
  }


    return (
  <MainWrapper>
  <MainContainer>
    <Header setEditMode={setEditMode} editMode={editMode}></Header>
    <TaskList>
      {todos?.length > 0? 
       todos?.map(todo => 
        <TaskItem todo={todo} editMode={editMode}></TaskItem>
        )
        :
        <EmptyListText>Список задач пуст</EmptyListText>
     }
    </TaskList>
  </MainContainer>
   <AddIcon onClick={toggleForm}>
     <img src={addicon} />
   </AddIcon>
   <CSSTransition in={showForm} timeout={500} mountOnEnter unmountOnExit>
      <AddForm setShowForm={setShowForm} />
   </CSSTransition>
  </MainWrapper>
    )
};

export default TaskDesk;