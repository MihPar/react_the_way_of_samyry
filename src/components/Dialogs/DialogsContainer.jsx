import {
  sendMessageCreator,
  updataNewMessageBodyCreator,
} from "../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux"


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updataNewMessageBody: (body) => {
            dispatch(updataNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
