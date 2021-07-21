import React, {useState, useEffect} from 'react';
import {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import GIFSearch from './Components/GIFSearch';


import Msgs from "./Components/Msgs";
import MsgForm from './Components/MsgForm';

const App = () => {
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    const localMsgs = localStorage.getItem("msgs");
    if(localMsgs){
      setMsgs(JSON.parse(localMsgs));
    }
  }, []);

  const addMsgs = async msg => {
    setMsgs([...msgs, msg]);
  };

  useEffect(() => {
    localStorage.setItem("msgs", JSON.stringify(msgs));
  }, [msgs]);

  const markComplete = id => {
    setMsgs(msgs.filter(msg => msg.id !== id));
  };


  return(
    <Container fluid>
      <h1>Your Timeline</h1>
      <Msgs msgs={msgs} markComplete= {markComplete}/>
      <MsgForm addMsgs={addMsgs}/>
      <GIFSearch />
    </Container>
  );
};


export default App;
