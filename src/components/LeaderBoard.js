import React, { Component } from 'react';

import '../styles/LeaderBoard.css';

const TableData = props => 
  <td className={`LeaderBoard-table-row-item ${props.leftAlign ? "left-align" : ''}`}>
    {props.tableData}
  </td>

const TableRow = props => 
  <tr className="LeaderBoard-table-row">
    <TableData tableData={props.rank} />
    <TableData tableData={props.username} leftAlign={true} />
    <TableData tableData={props.recent} />
    <TableData tableData={props.alltime} />
  </tr>

const TableHeader = props => 
  <th className={`LeaderBoard-table-head-item ${props.center ? "centered" : ''}`}>
    {props.category}
  </th>

const HeaderTableRow = props =>
  <tr className="LeaderBoard-table-row">
    <TableHeader category={props.categoryOne} />
    <TableHeader category={props.categoryTwo} />
    <TableHeader category={props.categoryThree} />
    <TableHeader category={props.categoryFour} />
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