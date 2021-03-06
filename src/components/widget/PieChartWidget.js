import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';

class PieChartWidget extends Component {
   

    state = {
      options: {
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: this.props.value,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      }
      } 
    }


    render() {
    return (
      <div className="lineChartWidget">
      <h2>{this.props.heading} </h2>
      <p className="value">{this.props.value}</p>  
      <div>
       <Pie data={this.state.options.data} />
       <div>
           {this.props.children}
       </div>
      </div>
      
      </div>
    );
  }
}

export default PieChartWidget;
