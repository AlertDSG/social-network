import {connect} from 'react-redux';
import {addMessageAC} from "../../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {WithAuthRedirect} from "../../../hoc/withAuthRedirect";

const mapStateToProps = (state: any) => {
    return {
        messagesData: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: (value: string) => {
            let action = addMessageAC(value)
            dispatch(action)
        }
    }
}

export const DialogsContainer = WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))