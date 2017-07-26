import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as dataActions from '../../actions/dataActions';

class CurrencyTable extends Component {
  render() {
    const tableItems = this.props.data.map((item, index) => {
      return (
        <tr key={`table-${index}`}>
          <td>{item.Name}</td>
          <td>{item.Rate}</td>
          <td>{item.Time}</td>
          <td>{item.Date}</td>
        </tr>
      )
    })
    return <table>
      <tr>
        <th>name</th>
        <th>rate</th>
        <th>time</th>
        <th>date</th>
      </tr>
        {tableItems}
    </table>
  }
}

export default connect(state => ({
  data: state.dataReducer.data
}), dataActions)(CurrencyTable);