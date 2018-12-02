import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputSection from './inputSection';
import { monthlyChange } from '../actions';

class WidgetLeft extends Component {


  render() {
    // console.log(this.props.expenditures);
    return (
      <div className="widget">
        <h2>Your income & spend</h2>
        <InputSection data={this.props.incomes} title="Annual Income" />
        <InputSection data={this.props.expenditures} title="Monthly spending" onChange={this.props.monthlyChange} />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    incomes: state.incomes,
    expenditures: state.expenditures
  };
}




export default connect(mapStateToProps, { monthlyChange })(WidgetLeft);
