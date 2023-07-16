import object from "./Dialogs.module.css";
import DialogsItems from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogsData.map(function (dialog) {
        return <DialogsItems name={dialog.name} key={dialog.id} id={dialog.id} />;
      });

      let messagesElement = state.messagesData.map(function (message) {
        return <Message message={message.message} key={message.id} />;
      });

      let newMessageBody = state.newMessageBody

      let onSendMessageClick = () => {
        props.sendMessage()
      }

      let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updataNewMessageBody(body)
      }

      if (! props.isAuth) {
        return <Navigate to="/login" />
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
