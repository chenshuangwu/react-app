import React, { Component } from 'react'

export default (WrappedComponent, name) => {
    class LoacalStorageActions extends Component {
        constructor() {
            super()
            this.state = { data: null}
        }

        UNSAFE_componentWillMount() {
            let data = localStorage.getItem(name)
            try {
                this.setState({ data: JSON.parse(data)})
            } catch(e) {
                this.setState({ data })
            }
        }

        saveData(data) {
            try {
                localStorage.setItem(name, JSON.stringify(data))
            } catch(e) {
                localStorage.setItem(name, data)
            }
        }

        render() {
            return <WrappedComponent data={this.state.data} saveData={this.saveData.bind(this)} {...this.props}></WrappedComponent>
        }
    }

    return LoacalStorageActions
}