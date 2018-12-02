import React, { Component } from 'react';
import MyRow from './myrow';



class InputSection extends Component {
  renderRows() {
    const inc = this.props.data;
    return inc.map((row) => {
      return (
        <MyRow data={row} key={row.name} name={row.name} onChange={this.props.onChange} />
      );
    });
  }

  render() {
    return (
      <div className="input_section">
        <h3>{this.props.title}</h3>
        {this.renderRows()}
      </div>
    );
  }
}

export default InputSection;
