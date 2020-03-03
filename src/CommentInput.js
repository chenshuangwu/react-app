import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    }

    constructor(){
        super()
        this.state = {
            username: '',
            content: ''
        }
    }

    componentDidMount() {
        this.textarea.focus()
        this.setState({
            username: localStorage.getItem('username') || ''
        })
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    _saveUsername(username) {
        localStorage.setItem('username', username)
    }

    handleUsernameBlur(event) {
        this._saveUsername(event.target.value)
    }

    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit(event) {
        if(this.props.onSubmit) {
            const { username, content } = this.state
            this.props.onSubmit({username, content , createdTime: Date.now()})
        }
        this.setState({ content: '' })
    }


    render(){
        return(
            <div className="comment-input">
                <div className="comment-field">
                    <label className="comment-field-name">用户名：</label>
                    <div className="comment-field-input">
                        <input value={this.state.username} onChange={this.handleUsernameChange.bind(this)} onBlur={this.handleUsernameBlur.bind(this)}></input>
                    </div>
                </div>
                <div className="comment-field">
                    <label className="comment-field-name">评论内容：</label>
                    <div className="comment-field-input">
                        <textarea ref={(textarea) => this.textarea = textarea} value={this.state.content} onChange={this.handleContentChange.bind(this)}></textarea>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>

            </div>
        )
    }
}

export default CommentInput