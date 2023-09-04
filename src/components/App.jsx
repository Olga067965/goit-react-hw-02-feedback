import React, { Component } from 'react';
import Feedback from './feedback'; 

class App extends Component {
  render() {
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column', // змінено на flexDirection: 'column' для відображення компонента Feedback внизу
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
          color: 'darkblue'
        }}
      >
        <h1>Expresso Cafe Feedback</h1>
        <Feedback /> {/* додамо компонент Feedback для збору відгуків */}
      </div>
    );
  }
}

export default App;