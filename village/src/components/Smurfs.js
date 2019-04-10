import React, { Component } from "react";
import "./Smurfs.css";

import Smurf from "./Smurf";

class Smurfs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul className="smurfsList">
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                updateSmurfs={this.props.updateSmurfs}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
