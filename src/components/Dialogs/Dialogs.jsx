import React from "react";
import object from "./Dialogs.module.css";
import {NavLink} from "react-router-dom"

const DialogsItems = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div>
            <NavLink to={path} className={navData => navData.isActive ? object.active : object.dialogsItems}>{props.name}</NavLink>
        </div>
    )
}

const Messages = (props) => {
    let path = "/messages/" + props.id
    return (
        <div>
            <NavLink to={path}  className={navData => navData.isActive ? object.active : object.messages}>{props.message}</NavLink>
        </div>
    )
}
 
const Dialogs = () => {
  return(
     <div className={object.dialogs}>
        <div className={object.dialogsItems}>
            <DialogsItems name="Mickhael" id="1" />
            <DialogsItems name="Tatiana" id="2" />
            <DialogsItems name="Alexandr" id="3" />
            <DialogsItems name="Maria" id="4" />
            <DialogsItems name="Ilia" id="5" />
        </div>
        <div className={object.messages}>
            <Messages message="Hi" id="1"/>
            <Messages message='How are you' id="2" />
            <Messages message="Not bad" id="3" />
            <Messages message="I am fun" id="4" />
            <Messages message="It is cool" id="5" />
        </div>
     </div>
  )
};

export default Dialogs;
