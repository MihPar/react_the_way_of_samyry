import object from "./Dialogs.module.css";
import DialogsItems from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import {sendMessageCreator, updataNewMessageBodyCreator} from "./../redux/state.js"

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogsData.map(function (dialog) {
        return <DialogsItems name={dialog.name} id={dialog.id} />;
      });

      let messagesElement = state.messagesData.map(function (message) {
        return <Message message={message.message} />;
      });

      let newMessageBody = state.newMessageBody

      let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
      }

      let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updataNewMessageBodyCreator(body))
      }

  return ( 
    <div className={object.dialogs}>
        <div className={object.dialogsItems}>
            <div>{dialogsElements}</div>
            <div>
                <div>
                    <textarea value={newMessageBody}
                    onChange={onNewMessageChange}
                     placeholder="Enter your message ">
                     </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>send</button>
                </div>
            </div>
        </div>
      <div className={object.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
