import React from "react";
import { useSelector } from "react-redux";
import { todoSelectors } from "../../store/todoSlice";
import { HeaderButton, HeaderContainer, Today } from "./styled-componets";

interface HeaderProps {
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
    editMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ setEditMode, editMode }) => {

    const todos = useSelector(todoSelectors.selectTotal)

    return (
        <HeaderContainer>
            <Today>Сегодня</Today>
            {todos > 0 ?
                <HeaderButton onClick={() => { setEditMode(!editMode) }}>
                    {editMode ? 'Отменить' : 'Править'}
                </HeaderButton>
                :
                ''
            }

        </HeaderContainer>
    )
};

export default Header;