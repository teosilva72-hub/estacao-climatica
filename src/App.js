import React from 'react';
import { ReactDOM } from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      station: null,
      date: null,
      icon: null
    }
  }

  toObtainStation = (date, latitude) => {
    const yearCurrent = date.getFullYear();

    const dateOne = new Date(yearCurrent, 5, 23);
    const dateTwo = new Date(yearCurrent, 8, 24);
    const dateThree = new Date(yearCurrent, 11, 24);
    const dateFour = new Date(yearCurrent, 2, 21);

    const south = latitude < 0
    if (date >= dateOne && date < dateTwo)
      return south ? 'Primavera' : 'Inverno';
    if (date >= dateTwo && date < dateThree)
      return south ? 'Primavera' : 'Outono';
    if (date >= dateThree && date < dateFour)
      return south ? 'Verão' : 'inverno';
    return south ? 'Outono' : 'Primavera';


  }

  icon = {
    'spring': 'bi bi-flower1',
    'summer': 'bi bi-brightness-high-fill',
    'autumn': 'bi bi-tree-fill',
    'winter': 'bi bi-snow2'
  }
  
  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;