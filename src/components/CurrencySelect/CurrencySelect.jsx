import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as dataActions from '../../actions/dataActions';

class CurrencySelect extends Component {
  state = {
    pair1: 'USD',
    pair2: 'RUB',
  }

  handleSelectChange1 = (e) => {
    this.setState({pair1: e.target.value});
  }

  handleSelectChange2 = (e) => {
    this.setState({pair2: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.getData(this.state.pair1, this.state.pair2);
  }
  render() {
    console.log(this.props.data, 'currencyselect')
    return <form action="" onSubmit={this.onSubmit} >
      <select value={this.state.pair1} onChange={this.handleSelectChange1} name="" id="">
        <option value="USD">USD</option>
        <option value="RUB">RUB</option>
      </select>
      <select value={this.state.pair2} onChange={this.handleSelectChange2} name="" id="">
        <option value="USD">USD</option>
        <option value="RUB">RUB</option>
      </select>
      <input type="submit" value="get currency" />
    </form>;
  }
}

export default connect(state => ({
  data: state.dataReducer.data,
}), dataActions)(CurrencySelect);
