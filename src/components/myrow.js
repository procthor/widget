import React, { Component } from 'react';
import MyInput from './myinput';

class MyRow extends Component {
  render() {
    const row = this.props.data;
    // row.amount = row.amount;
    const id = this.props.name[0]
    return (
      <div className="myrow">
        <MyInput name={row.name} val={row.amount} id={id + '0'} addClass="l" onChange={this.props.onChange} />
        <MyInput name="From age" val={row.from_age} id={id + '1'} />
        <MyInput name="To age" val={row.to_age} id={id + '2'} />

      </div>
    );
  }
}

export default MyRow;
