import React, { useRef, useState } from 'react';
import EditTaskItem from './EditTaskIrem';
import { CheckBoxContainer, Checked, FakeCheckBox, LabelCheckbox, RemoveTaskIcon, TaskCheckbox, TaskItemContainer } from './styled-componets';
import { CSSTransition } from 'react-transition-group';
import { removeTodo, ToDo } from '../../store/todoSlice';
import { useAppDispatch } from '../../store/store';

interface TaskItemProps {
    editMode: boolean;
    todo?: ToDo
};

// Компонент рендерит отдельный пункт списка, а также форму редактирования пункта.
const TaskItem: React.FC<TaskItemProps> = ({ editMode, todo }) => {

    const dispatch = useAppDispatch();
    const checkbox = useRef<HTMLInputElement | null>(null);
    const [checked, setChecked] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const check = () => {
        checkbox.current?.click();
        setChecked(!checked);
    };

    const editTask = () => {
        if(editMode){
            setShowForm(true)
        }
    };

    const removeTask = () => {
      if(todo?.id){
        dispatch(removeTodo(todo.id))
      }
    };

    return (
        <TaskItemContainer>
            <CheckBoxContainer onClick={check}>
                {
                    editMode ?
                        <RemoveTaskIcon onClick={removeTask}>
                            <div style={{ width: '10px', height: '2px', backgroundColor: '#FFFFFF' }}></div>
                        </RemoveTaskIcon>
                        :
                        <FakeCheckBox>
                            <Checked checked={checked} />
                        </ FakeCheckBox>}
                <TaskCheckbox ref={checkbox}></TaskCheckbox>
            </CheckBoxContainer>
            <LabelCheckbox editMode={editMode} onClick={editTask}>{todo?.text}</LabelCheckbox>
            <CSSTransition in={showForm} timeout={500} mountOnEnter unmountOnExit>
                <EditTaskItem todo={todo} setShowForm={setShowForm} />
            </CSSTransition>
        </TaskItemContainer>
    )
};

export default TaskItem;