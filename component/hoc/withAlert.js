import React from 'react';

export default WrappedComponent =>
props => <WrappedComponent {...props} 
alert={(msg) => alert(`ALERT: ${msg}`)}/>