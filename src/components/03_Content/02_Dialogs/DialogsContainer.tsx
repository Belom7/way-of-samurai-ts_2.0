import {StateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";
import {AddMessageAC, UpdateNewMessageTextAC} from "../../../Redux/dialogs_reducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import React from "react";

const mapStateContainerToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchContainerToProps = (dispatch: Dispatch) => {
    return {
        onChangeHandler: (value: string) => dispatch(UpdateNewMessageTextAC(value)),
        onClickHandler: (newMessage: string) => dispatch(AddMessageAC(newMessage))
    }

}
export const DialogsContainer = connect(mapStateContainerToProps, mapDispatchContainerToProps)(Dialogs)
