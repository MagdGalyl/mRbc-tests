import React, { Component } from "react";

export class DogsList extends Component {
  render() {
    const { dogs } = this.props;
    return (
      <div>
        {dogs.map((d) => {
          return (
            <div>
              <p>d.name</p>
              <p>d.age</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DogsList;
