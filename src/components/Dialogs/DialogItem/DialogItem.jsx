import React from "react";
import object from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom"
import Post from "../../Profile/MyPosts/Posts/Post";

const DialogsItems = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={object.dialogs + " " + object.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogsItems;
