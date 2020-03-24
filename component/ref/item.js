import React, { Component } from 'react';
import PropType from 'prop-types';
class Form extends Component{
    static propType ={
        fourth: PropType.shape({value: PropType.instanceOf({HTMLInputElement})})
    }
    render(){
        return <input type="text" defaultValue="Fourth" ref={this.props.fourth}/>;
         }   
    }
    
export default class item extends Component {
    third = React.createRef();
    fourth = React.createRef();

    handleSunmite = e => {
        e.preventDefault();
        console.log(this.refs.first , this.second, this.third.value , this.fourth.value);
        //console.log(this.third.value.value);
    };
    render(){
        return(
            <form onSubmit={e => this.handleSunmite(e)}>
                <input type="text" defaultValue="First" ref="first"></input>
                <input type="text" defaultValue="Second" ref={input => (this.second = input)}></input>
                <input type="text" defaultValue="Third" ref={this.third}></input>
            <Form fourth={this.fourth}/>

            <button>Submit</button>
            </form>
        )
    }
}
    