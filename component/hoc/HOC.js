import React, { Component } from 'react';
import ListItem from '../Listitem'

class HOC extends Component {
    
    render(){
        return (
        <div>
         <hr/>
         <h2>This is Hoc page</h2>
         <hr/>
          <div className="App">
            <ListItem title="Hoc_1" body="Click above"></ListItem>
          </div>
         </div>
        );
    }
}
export default HOC;