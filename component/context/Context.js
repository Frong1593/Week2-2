import React, { Component } from 'react';
import List from './List'
import ThemeContextProvider from './ThemeContext'
class Context extends Component {
    render(){
        return (
            <div>
                <hr/>
                <h2>This is Context page</h2>
                <hr/>
                <ThemeContextProvider>
                <List/>
                </ThemeContextProvider>
            </div>
        );
    }
}
export default Context;