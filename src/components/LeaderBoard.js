import React, { Component } from 'react';

class LeaderBoard extends Component {
  render() {
    const { apiData } = this.props

    return (
      <div className="LeaderBoard">
        <ul>
          {apiData.map(camper => {
            return (
              <li key={camper.username}>
                {camper.username}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
};

export default LeaderBoard