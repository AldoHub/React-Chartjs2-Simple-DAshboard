import React, { Component } from 'react';

class SpanWidget extends Component {
   
    render() {
    return (
      <div className="spanWidget">
      <h2>{this.props.heading} </h2>
      <div className="listValue">{this.props.value.map((prop, index) => {
          return(
              <div className="user" key={index}>
               <img src={prop.picture.thumbnail} />
                <p>{prop.name.first} {prop.name.last}</p>
               
              </div>
          )
      })}</div>  
      <div>
          {this.props.children}
      </div>
      
      </div>
    );
  }
}

export default SpanWidget;
