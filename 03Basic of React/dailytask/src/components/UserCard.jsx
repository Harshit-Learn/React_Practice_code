import React from "react";

const UserCard = ({ name, profession }) => {
  const newname = name || "default value";
  //   const { name, profession } = props;
  return (
    <div style={{ border: "1px solid grey", padding: "10px", margin: "10px" }}>
      <h2>{newname}</h2>
      <p>{profession}</p>
    </div>
  );
};

export default UserCard;
