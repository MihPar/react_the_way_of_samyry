import {
  sendMessageCreator,
  updataNewMessageBodyCreator,
} from "../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux"
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import { compose } from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);
