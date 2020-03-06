import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Index extends Component {
    static childContextTypes = {
        themeColor: PropTypes.string
    }

    constructor() {
        super()
        this.state = { themeColor: 'red' }
    }

    getChildContext() {
        return { themeColor: this.state.themeColor }
    }

    render() {
        return (
            <div>
                <Header></Header>
                <Main></Main>
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <h2>This is Header</h2>
                <Title></Title>
            </div>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <div>

                <h2>This is main</h2>
                <Content></Content>
            </div>
        )
    }
}

class Title extends Component {
    static contextTypes = {
        themeColor: PropTypes.string
    }



    render() {
        return (
            <h1 style={{ color: this.context.themeColor }}>标题题</h1>
        )
    }
}

class Content extends Component {
    render() {
        return (
            <h2>内容</h2>
        )
    }
}

export default Index