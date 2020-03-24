import React,{Component} from 'react';
import {ThemeContext} from  './ThemeContext'

class List extends Component {
    static contextType = ThemeContext
    render(){
        console.log(this.context);
        const { LightTheme,Light,dark } = this.context;
        const theme = LightTheme ? Light : dark;
        return(
            <div className="book-list" style={{color: theme.syntax,background: theme.bg}}>
                <ul>
                    <li style={{background: theme.ui}}>Context_1</li><hr/>
                    <li style={{background: theme.ui}}>Context_2</li><hr/>
                    <li style={{background: theme.ui}}>Context_3</li><hr/>
                </ul>
            </div>
        )
    }
}
export default List