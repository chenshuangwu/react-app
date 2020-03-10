import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentInput from '../components/CommentInput'
import { addComment } from '../reducers/comments'

class CommentInputContainer extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onSubmit: PropTypes.func
    }

    constructor() {
        super()
        this.state = { username: '' }
    }

    UNSAFE_componentWillMount() {
        this._loadUsername()
    }

    _loadUsername() {
        const username = localStorage.getItem('username')
        if(username) {
            this.setState({ username })
        }
    }

    _saveUsername(username) {
        localStorage.setItem('username', username)
    }

    handleSubmitComment(comment) {
        if(!comment) return
        if(!comment.username) return alert('请输入用户名')
        if(!comment.content) return alert('请输入评论内容')
        const { comments } = this.props
        const newComments = [...comments, comment]
        localStorage.setItem('comments', JSON.stringify(newComments))
        if(this.props.onSubmit) {
            this.props.onSubmit(comment)
        }
    }

    render() {
        return (
            <div>
                <CommentInput username={this.state.username} onSubmit={this.handleSubmitComment.bind(this)} onUserNameInputBlur={this._saveUsername.bind(this)}></CommentInput>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (comment) => {
            dispatch(addComment(comment))
        }
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(CommentInputContainer)