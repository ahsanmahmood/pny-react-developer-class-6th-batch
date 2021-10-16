import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import AllData from './App';
// import FunctionalComponent from './DisplayName';
import reportWebVitals from './reportWebVitals'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import MainLayout from './layouts/MainLayout'

import { compose, applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import rootReducer from './store/reducers'

const appStore = createStore(rootReducer, compose(applyMiddleware(reduxThunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <MainLayout />
      {/* <button className="button">main index file</button> */}
      {/* <FunctionalComponent id={0} name="ahsan" /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
