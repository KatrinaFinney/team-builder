import React, { useState } from "react";
import MemberForm from "./MemberForms";
import Members from "./Members";
import "./App.css";

function App() {

  const [teammates, setTeammate] = useState([
    {
      id: 0,
      title: "John",
      location: "CapeTown",
      body:
        "Software Engineer"

    },
    {
      id: 1,
      location: "Barbados",
      title: "Jacob",
      body:
        "Web Developer"
    },
    {
      id: 2,
      location: "Los Angeles",
      title: "Jingle",
      body:
        "UI/UX Designer "
    },
    {
      id: 3,
      location: "New York",
      title: "Heimer",
      body:
        "Backend Developer"
    },
    {
      id: 4,
      location: "Atlanta",
      title: "Schmidt",
      body:
        "Full Stack Web Developer"
    }
  ]);
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      title: member.title,
      location:member.location,
      body: member.body

    };
    setTeammate([...teammates, newMember]);
  };

return (
  <div className="App">
     <div className= "App-header" >
    <h1>Team-Builder</h1>
    </div>

    <div  className= "App-link">
    <MemberForm addNewMember={addNewMember} />
    </div>
   
    <Members member={teammates} />
    
  </div>
);
}


export default App;