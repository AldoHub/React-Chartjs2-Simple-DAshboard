import React, { Component } from 'react';

class Widget extends Component {
   
    render() {
    return (
      <div className="widget">
      <h2>{this.props.heading} </h2>
      <p className="value">{this.props.value}</p>  
      <div>
          {this.props.children}
      </div>
      
      </div>
    );
  }
}

export default Widget;
