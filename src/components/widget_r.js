import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from './slider';
import { monthlyChange } from '../actions';

class WidgetRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      save: 0,
      mortgageSave: 0,
      billsSave: 0,
      generalSave: 0
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e) {

    //var save = this.state.save + e.target.name;
    var val = parseInt(e.target.value);
    if (e.target.name === "mortgage") { this.setState({ mortgageSave: val }) }
    if (e.target.name === "bills") { this.setState({ billsSave: val }) }
    if (e.target.name === "spend") { this.setState({ generalSave: val }) }



  }
  updateSave() {

    var save =
      parseInt(this.state.mortgageSave) +
      parseInt(this.state.billsSave) +
      parseInt(this.state.generalSave);
    return save;

  }

  render() {
    const save = '£' + this.updateSave();
    return (
      <div className="widget">
        <h2>Spend Less</h2>

        <div className="t_means">
          Try reduce your monthly spending to see<br /> how your forecast could improve
        </div>

        <Slider name="mortgage" value={this.state.mortgageSave} max={this.props.expenditures[0].amount} onChange={this.handleChange} />
        <Slider name="bills" value={this.state.billsSave} max={this.props.expenditures[1].amount} onChange={this.handleChange} />
        <Slider name="spend" value={this.state.generalSave} max={this.props.expenditures[2].amount} onChange={this.handleChange} />

        <div className="t_means">
          This means you're saving
             <span> {save} </span>
          per month
        </div>
        
        <button>Find ways to save</button>
        
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return { expenditures: state.expenditures };
}




export default connect(mapStateToProps, { monthlyChange })(WidgetRight);