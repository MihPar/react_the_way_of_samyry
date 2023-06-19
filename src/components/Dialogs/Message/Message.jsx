import React from "react";
import object from "./../Dialogs.module.css";



const Message = (props) => {
    let path = "/messages/" + props.id
    return (
        <div className={object.messages}>{props.message}</div>
    )
}

export default Message ;
