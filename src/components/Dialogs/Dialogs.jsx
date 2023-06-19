import object from "./Dialogs.module.css";
import DialogsItems from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const dialogsData = [
  { id: 1, name: "Mickhael" },
  { id: 2, name: "Tatiana" },
  { id: 3, name: "Alexandr" },
  { id: 4, name: "Maria" },
  { id: 5, name: "Ilia" },
];

let dialogsElements = dialogsData.map(function (dialog) {
  return <DialogsItems name={dialog.name} id={dialog.id} />;
});

const messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you" },
  { id: 3, message: "Not bad" },
  { id: 4, message: "I am fun" },
  { id: 5, message: "It is cool" },
];

let messagesElement = messagesData.map(function (message) {
  return <Message message={message.message} />;
});

const Dialogs = () => {
  return (
    <div className={object.dialogs}>
      <div className={object.dialogsItems}>{dialogsElements}</div>
      <div className={object.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
