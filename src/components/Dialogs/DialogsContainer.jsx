import StoreContext from "../../storeContenxt";
import {
  sendMessageCreator,
  updataNewMessageBodyCreator,
} from "../redux/dialogs_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        let onNewMessageChange = (body) => {
          store.dispatch(updataNewMessageBodyCreator(body));
        };
        return (
          <Dialogs
            updataNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={store.getState().dialogsPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let f2 = () => {
    return {

    }
}

const SuperDialogsContainer = connect(mapStateToProps, f2)(Dialogs)

export default DialogsContainer;
