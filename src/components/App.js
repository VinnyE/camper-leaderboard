import React, { Component } from 'react';

import fetchData from '../utils/api';
import LeaderBoard from './LeaderBoard';

import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: ''
    }
  }

  componentDidMount() {
    fetchData('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then(json => {
      this.setState(() => {
        return {
          apiData: json
        }
      })
    })
  }

  render() {
    const { apiData } = this.state;
    
    return (
      <div className="App">
        {apiData 
        ? <LeaderBoard apiData={apiData} />
        : 'Loading...'}
      </div>
    );
  }
}

export default App;
