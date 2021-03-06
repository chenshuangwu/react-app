import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../containers/Header'
import Content from '../containers/Content'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';

import './index.scss'


function createStore(reducer) {
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }
    dispatch({})
    return { getState, dispatch, subscribe }
}

const themeReducer = (state, action) => {
    if(!state) return {
        themeColor: 'red'
    }
    switch(action.type) {
        case "CHANGE_COLOR":
            return { ...state, themeColor: action.themeColor }
        default:
            return state
        
    }
}

const store = createStore(themeReducer)

class Index extends Component {

    render() {
        return (
            <div>
                <Header></Header>
                <Content></Content>
            </div>

        )
    }
}

// 把 Provider 作为组件树的根节点
ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
)