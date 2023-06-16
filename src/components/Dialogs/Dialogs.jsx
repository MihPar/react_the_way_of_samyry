import React from "react";
import object from "./Dialogs.module.css";

const Dialogs = () => {
  return(
     <div className={object.dialoges}>
        <div className={object.dialogesItems}>
            <div className={object.dialog + " " + object.active}>UserOne</div>
            <div className={object.dialog}>UserTwo</div>
            <div className={object.dialog}>UserThree</div>
            <div className={object.dialog}>UserFour</div>
        </div>
        <div className={object.messages}>
            <div className={object.message}>Hi</div>
            <div className={object.message}>How are your?</div>
            <div className={object.message}>Not bad</div>
            <div className={object.message }>I am fun</div>
        </div>
     </div>
  )
};

export default Dialogs;
