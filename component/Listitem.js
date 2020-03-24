import React from 'react';
import withBorder from '../component/hoc/withBorder'
import withAlert from '../component/hoc/withAlert'

export default withAlert(withBorder(props =>(
    <div>
        <h4 onClick={()=> props.alert(props.title)}>{props.title}</h4>
        <p>{props.body}</p>
    </div>
)));