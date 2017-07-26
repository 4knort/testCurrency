import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as dataActions from '../../actions/dataActions';

class CurrencySelect extends Component {
  state = {
    currencyPair1: 'USD',
    currencyPair2: 'RUB',
  }

  handleSelectChange1 = (e) => {
    this.setState({ currencyPair1: e.target.value });
  }

  handleSelectChange2 = (e) => {
    this.setState({ currencyPair2: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.getData(this.state.currencyPair1, this.state.currencyPair2);
  }

  onRefreshClick = () => {
    let pairs = '';
    
    this.props.data.forEach(item => {
      pairs = pairs + `${item.id}%2C`;
    })

    pairs = `%22${pairs.slice(0, -3)}%22`;

    this.props.refreshData(pairs);
  }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.onSubmit} >
          <select value={this.state.currencyPair1} onChange={this.handleSelectChange1} name="" id="">
            <option value="USD">USD</option>
            <option value="RUB">RUB</option>
            <option value="EUR">EUR</option>
            <option value="UAH">UAH</option>
          </select>
          <select value={this.state.currencyPair2} onChange={this.handleSelectChange2} name="" id="">
            <option value="USD">USD</option>
            <option value="RUB">RUB</option>
            <option value="EUR">EUR</option>
            <option value="UAH">UAH</option>
          </select>
          <input type="submit" value="get currency" />
          <button onClick={this.onRefreshClick} className="refresh-btn">refresh</button>
        </form>
      </div>
    );
  }
}

export default connect(state => ({
  data: state.dataReducer.data,
}), dataActions)(CurrencySelect);
