import React, {Component} from 'react';
import './App.css';
import Messages from './Messages'

class App extends Component {
  render() {
    return(
      <div>
        <h1>YOUR APPLICATION NAME!</h1>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
      </div>
    );
  }
}

export default App;