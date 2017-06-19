import React, { Component } from 'react';

import '../styles/LeaderBoard.css';

const TableRow = props => 
  <tr className="LeaderBoard-table-row">
    <td className='LeaderBoard-table-row-item rank-col'>{props.rank}</td>
    <td className='LeaderBoard-table-row-item'>{props.username}</td>
    <td className='LeaderBoard-table-row-item'>{props.recent}</td>
    <td className='LeaderBoard-table-row-item'>{props.alltime}</td>
  </tr>

const HeaderTableRow = props =>
  <tr className="LeaderBoard-table-row">
    <th className='LeaderBoard-table-head-item rank-col'>{props.categoryOne}</th>
    <th className='LeaderBoard-table-head-item'>{props.categoryTwo}</th>
    <th className='LeaderBoard-table-head-item'>{props.categoryThree}</th>
    <th className='LeaderBoard-table-head-item'>{props.categoryFour}</th>
  </tr>

const Table = props =>  
  <table className="LeaderBoard-table">
    <thead className="LeaderBoard-table-head">
      <HeaderTableRow {...props.tableCategories} />
    </thead>
    <tbody>
      {props.apiData.map((user, key) => {
        return <TableRow key={key + 1} rank={key + 1} {...user} />
      })}
    </tbody>
  </table>
 
class LeaderBoard extends Component {
  render() {
    const { apiData } = this.props
    const tableCategories = {
      categoryOne: 'Rank',
      categoryTwo: 'Username',
      categoryThree: 'Points in past 30 days',
      categoryFour: 'All time points'
    }

    return (
      <div className="LeaderBoard">
        <Table tableCategories={tableCategories} apiData={apiData} />
      </div> 
    )
  }
};

export default LeaderBoard