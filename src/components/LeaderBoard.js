import React, { Component } from 'react';

const TableData = props => <td>{props.tableData}</td>

const TableRow = props => 
  <tr>
    <TableData tableData={props.rank} />
    <TableData tableData={props.username} />
    <TableData tableData={props.recent} />
    <TableData tableData={props.alltime} />
  </tr>

const TableHeader = props => <th>{props.category}</th>

const HeaderTableRow = props =>
  <tr>
    <TableHeader category={props.categoryOne} />
    <TableHeader category={props.categoryTwo} />
    <TableHeader category={props.categoryThree} />
    <TableHeader category={props.categoryFour} />
  </tr>

const Table = props =>  
  <table>
    <thead>
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
      categoryTwo: 'Camper Name',
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