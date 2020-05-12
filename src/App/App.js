import React from 'react';
import './App.scss';

import goatData from '../helpers/data/goatData';
import GoatCoral from '../components/GoatCoral/GoatCoral';

class App extends React.Component {
  state = {
    goats: [],
  }
  // outside render - anything that modifies state

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  useAGoat = (goatId) => {
    goatData.useGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    // inside render - anything we need to do to modify the UI
    const { goats } = this.state;

    return (
      <div className="App">
        <h3>GOAT YOGA LTD</h3>
        <GoatCoral goats={goats} useAGoat={this.useAGoat}/>
      </div>
    );
  }
}

export default App;
