import React from "react";
import { useState } from "react";
import { useEffect } from "react";

let arr = [0, () => {}];

const ProfileStatusWithHooks = () => {
  let [editMode, setEdibMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.state])

  let activateEditMode = () => {
    setEdibMode(true);
  };

  const deactivateEditMode = () => {
    setEdibMode(false);
       props.updataStatus(this.state.status);
  };

  onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
            <b>Status:</b>
          <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
