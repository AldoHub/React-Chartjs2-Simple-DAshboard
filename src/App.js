import React, { Component } from 'react';
import Widget from "./components/widget/widget";
import SpanWidget from "./components/widget/spanWidget";
import UrgentWidget from "./components/widget/urgentWidget";
import LineChartWidget from "./components/widget/LineChartWidget";
import PieChartWidget from "./components/widget/PieChartWidget";

class App extends Component {

  state = {
    totalTickets: 25,
    urgentTickets: 3,
    recentUsersList: [],
    lineChartData: [12, 19, 3, 23, 2, 45],
    pieChartData: [12, 19, 3, 23, 2, 45]
  }


  componentDidMount = () => {
    //get users 
    fetch("https://randomuser.me/api/?results=12")
    .then(response => {
      return response.json();
    }).then(json => {
      console.log(json.results);
      this.setState({recentUsersList: json.results});
    })
    .catch( err => {
      console.log(err);
    })
  

  }

  
  render() {
    return (
      <div className="App">
        <header>
          <h1>React Dashboard</h1>
          <p>Simple dashboard created with Reactjs</p>
        </header>
        <div className="container">
         <SpanWidget heading="List Of Recent Users" value={this.state.recentUsersList} /> 
         <Widget heading="Total Tickets" value={this.state.totalTickets}>
          <div>
            <h3>Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui magna, ornare a mi ut, laoreet lobortis tellus. Ut quam velit, ornare non purus in</p>
          </div>
         </Widget>
         <UrgentWidget heading="Urgent Tickets"  value={this.state.urgentTickets}>
         <div>
            <h3>Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui magna, ornare a mi ut, laoreet lobortis tellus. Ut quam velit, ornare non purus in</p>
          </div>
         </UrgentWidget>  
         <LineChartWidget heading="Line Chart"  value={this.state.lineChartData}>
         <div>
            <h3>Line Chart Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui magna, ornare a mi ut, laoreet lobortis tellus. Ut quam velit, ornare non purus in</p>
          </div>
         </LineChartWidget> 
         <PieChartWidget heading="Pie Chart"  value={this.state.pieChartData}>
         <div>
            <h3>Line Chart Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui magna, ornare a mi ut, laoreet lobortis tellus. Ut quam velit, ornare non purus in</p>
          </div>
         </PieChartWidget> 
        
        </div>
      </div>
    );
  }
}

export default App;
