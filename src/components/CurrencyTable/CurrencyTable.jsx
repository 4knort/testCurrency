import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as dataActions from '../../actions/dataActions';

class CurrencyTable extends Component {
  handleClick = (id) => {
    this.props.deleteData(id);
  }
  render() {
    const tableItems = this.props.data.map((item, index) => {
      return (
        <tr key={`table-${index}`}>
          <td>{item.Name}</td>
          <td>{item.Rate}</td>
          <td>{item.Time}</td>
          <td>{item.Date}</td>
          <td><button onClick={() => {this.handleClick(item.id)}}>remove</button></td>
        </tr>
      );
    });
    return (
      <table>
        <tr>
          <th>name</th>
          <th>rate</th>
          <th>time</th>
          <th>date</th>
          <th>delete</th>
        </tr>
        {tableItems}
      </table>
    );
  }
}

export default connect(state => ({
  data: state.dataReducer.data,
}), dataActions)(CurrencyTable);
