import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func,
        username: PropTypes.any,
        onUserNameInputBlur: PropTypes.func
    }

    static defaultProps = {
        username: ''
    }

    constructor(props){
        super(props)
        this.state = {
            username: props.username, 
            content: ''
        }
    }

    componentDidMount() {
        this.textarea.focus()

    }

    handleUsernameBlur(event) {
        if(this.props.onUserNameInputBlur) {
            this.props.onUserNameInputBlur(event.target.value)
        }
    }
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
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