import object from "./Dialogs.module.css";
import DialogsItems from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(function (dialog) {
        return <DialogsItems name={dialog.name} id={dialog.id} />;
      });

      let messagesElement = props.state.messagesData.map(function (message) {
        return <Message message={message.message} />;
      });
  return (
    <div className={object.dialogs}>
      <div className={object.dialogsItems}>{dialogsElements}</div>
      <div className={object.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
