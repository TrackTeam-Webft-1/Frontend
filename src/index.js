import React from 'react';
import ReactDOM from 'react-dom';

function App () {
    return(
        <h1>Hi, this is App</h1>
    )
}

ReactDOM.render(    
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
  );