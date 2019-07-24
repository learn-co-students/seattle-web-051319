import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TourDate from './TourDate' 

class Tour extends React.Component {
  state = {
    dates: [
      { city: "New York", date: "March 5th", band: "The Beegees" },
      { city: "Houston", date: "Sept 14th", band: "The Strokes" },
      { city: "New Dehli", date: "October 31st", band: "Daft Punk" }
    ]
  };
  render() {
    return (
      <div>
        <h2>Tour Dates</h2>
        <Router>
          <ul>
            {this.state.dates.map((date, idx) => {
              return <li><Link to={this.props.match.url + "/" + date.city} key={idx}>{date.city}</Link></li>;
            })}
          </ul>
            {this.state.dates.map((date, idx) => {
                return <Route path={`${this.props.match.url}/${date.city}`} render={()=><TourDate date={date}/>}></Route>
            })}
        </Router>
      </div>
    );
  }
}

export default Tour;
