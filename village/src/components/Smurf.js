import React from "react";
import "./Smurf.css";
import axios from "axios";

const Smurf = props => {
  const deleteItem = () => {
    axios
      .delete(`http://localhost:3333/smurfs/${props.id}`)
      .then(res => {
        props.updateSmurfs(res.data);
        alert(`${props.name} has been deleted!`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="Smurf">
      <div className="Smurf-buttons">
        <span onClick={deleteItem}>X</span>
      </div>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
