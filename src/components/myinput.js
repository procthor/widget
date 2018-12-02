import React, { Component } from 'react';


function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}


class MyInput extends Component {


  render() {
    //console.log(this.props.val);
    let cl = 'myinput';
    let val = this.props.val;
    if (this.props.addClass === 'l') {
      cl = cl + ' l';
      //val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      val = '£' + numberWithCommas(val);
    }
    if (!this.props.onChange) {
      return (
        <div className={cl}>
          <label>{this.props.name}:</label>
          <input defaultValue={val} id={this.props.id} />
        </div>
      );
    } else {
      return (
        <div className={cl}>
          <label>{this.props.name}:</label>
          <input value={val} id={this.props.id} onChange={this.props.onChange} />
        </div>
      );


    }
  }
}

export default MyInput;
