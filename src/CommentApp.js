import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import Clock from './Clock'
import Card from './Card'
import wrapWithLoadData from './wrapWithLoadData'

class CommentApp extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: props.data,
            isShowClock: true
        }
    }


    handleSubmitComment(comment){
        if(!comment) return
        if(!comment.username) return alert('请输入用户名')
        if(!comment.content) return alert('请输入评论内容')
        const comments = this.state.comments
        comments.push(comment)
        this.setState({ comments: comments })
        this.props.saveData(comments)
    }
    handleShowOrHide(){

        this.setState({
            isShowClock: !this.state.isShowClock
        })
    }

    handleDeleteComment(index) {
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({comments})
        this.props.saveData(comments)
    }

    render(){
        return (
            <div className="wrapper">
                <button onClick={this.handleShowOrHide.bind(this)}>显示/隐藏</button>
                {this.state.isShowClock? <Clock></Clock>: null} 
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}></CommentInput>
                <CommentList onDeleteComment={this.handleDeleteComment.bind(this)} comments={this.state.comments}></CommentList>
                <Card>
                    <div className='book-1'>
                        book-1
                    </div>
                    <div className='book-2'>
                        book-2
                    </div>
                </Card>
            </div>
        )
    }
}

CommentApp = wrapWithLoadData(CommentApp, 'comments')

export default CommentApp