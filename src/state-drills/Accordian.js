import React from 'react'

class Accordian extends React.Component {
    render() {
        return(
            <ul>
              <li><button>{props.section.title}</button></li>  
            </ul>
        )
    }


}

export default Accordian