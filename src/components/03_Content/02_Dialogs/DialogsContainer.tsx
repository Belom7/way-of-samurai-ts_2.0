import {StateType} from "../../../Redux/redux-store";
import {compose, Dispatch} from "redux";
import {AddMessageAC} from "../../../Redux/dialogs_reducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import React from "react";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";

const mapStateContainerToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchContainerToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: (newMessage: string) => dispatch(AddMessageAC(newMessage))
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateContainerToProps, mapDispatchContainerToProps)
)(Dialogs)
