import object from "./Dialogs.module.css";
import DialogsItems from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import { Field } from "formik";
import { reduxForm } from "redux-form";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map(function (dialog) {
    return <DialogsItems name={dialog.name} key={dialog.id} id={dialog.id} />;
  });

  let messagesElement = state.messagesData.map(function (message) {
    return <Message message={message.message} key={message.id} />;
  });

  let newMessageBody = state.newMessageBody;

  let addNewMessageChange = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={object.dialogs}>
      <div className={object.dialogsItems}>
        <div>{dialogsElements}</div>
      </div>
      <div className={object.messages}>
        <div>{messagesElement}</div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessageChange} />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSumbit}>
      <div>
        <Field component="textarea" name="newMessageBody" placeholder="Enter your message "
 />
        <textarea
          value={newMessageBody}
          onChange={onNewMessageChange}
          placeholder="Enter your message "
        ></textarea>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;
