import React from 'react';
import cl from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: number
}

export const Dialog = (props: DialogPropsType) => {
    return (
        <div className={cl.item + ' ' + cl.active}>
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>

    );
};
