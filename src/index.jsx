import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Info from './components/Info'

ReactDOM.render(
    <div className="container"> 
        <Info />
    </div>,
    document.getElementById("root")
);