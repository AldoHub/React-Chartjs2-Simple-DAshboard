import React, { Component } from 'react';

class UrgentWidget extends Component {
   
    render() {
    return (
      <div className="urgentWidget">
      <h2>{this.props.heading} </h2>
      <p className="value">{this.props.value}</p>  
      <div>
          {this.props.children}
      </div>
      
      </div>
    );
  }
}

export default UrgentWidget;
