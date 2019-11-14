import React, { useState } from "react";

const MemberForm = props => {
  const [member, setMember] = useState({ title: "", body: "", location: ""});

  const handleChanges = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ title: "", body: "" , location: ""});
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Name</label>
      <input
        id="title"
        type="text"
        name="title"
        onChange={handleChanges}
        value={member.title}
      />
      <label htmlFor="location">Location</label>
      <input 
        id="location"
        type= "text"
        name="location"
        value={member.location}
        onChange={handleChanges}
      />
      <label htmlFor="role">Role</label>
      <input
        id="role"
        type= "text"
        name="body"
        value={member.body}
        onChange={handleChanges}
      />
      <button type="submit">Join the Team</button>
    </form>
  );
};

export default MemberForm;
