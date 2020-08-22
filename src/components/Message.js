import React from "react";

const Message = (props) => {
  console.log(props);
  return (
    <div>
      <h3 className="text-center message">
        {props.validate === true ? "Form Is Complete" : "Form Is Incomplete"}
      </h3>
    </div>
  );
};

export default Message;
