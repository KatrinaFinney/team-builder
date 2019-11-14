import React from "react";

const Members = props => {
  console.log(props);
  return (
    <div className="note-list">
    {props.member.map(member => (
       <div className="member" key={member.id}>
        <h2>{member.title}</h2>
         <h4>{member.location}</h4>
         <p>{member.body}</p>
        </div>
 ))}
     
     
    </div>
  );
};

export default Members;



       