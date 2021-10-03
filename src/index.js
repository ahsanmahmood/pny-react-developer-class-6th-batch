import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AllData from './App';
// import FunctionalComponent from './DisplayName';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

ReactDOM.render(
  <React.StrictMode>
    <AllData text="ahsan"  />
    {/* <FunctionalComponent id={0} name="ahsan" /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
