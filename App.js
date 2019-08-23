import React, {Component} from 'react';
import './App.css';
import Messages from './Messages'
import Tabs from './states/Tabs';
import Accordian from './state-drills/Accordian';
import sectionsData from './state-drills/sectionsData';


class App extends Component {
  constructor(props) {
    super(props)
    //I had put the sections array into a separate file, and then set the sections as the current state.
    this.state = {
      sections: sectionsData
    }
  }

  

  render() {
    //The below is trying to have the sections title, and content create a separate LI for each section.
    const sectionItems = sectionsData.map(items => <Accordian title={items.title} content={items.content}/>)

    return(
      <div>
        {sectionItems}
      </div>
    )
  }
}

export default App;