import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import Clock from './Clock'
import Card from './Card'

class CommentApp extends Component {
    constructor(){
        super()
        this.state = {
            comments: [],
            isShowClock: true
        }
    }
    handleSubmitComment(comment){
        if(!comment) return
        if(!comment.username) return alert('请输入用户名')
        if(!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
    }
    handleShowOrHide(){

        this.setState({
            isShowClock: !this.state.isShowClock
        })
    }

    render(){
        return (
            <div className="wrapper">
                <button onClick={this.handleShowOrHide.bind(this)}>显示/隐藏</button>
                {this.state.isShowClock? <Clock></Clock>: null} 
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}></CommentInput>
                <CommentList comments={this.state.comments}></CommentList>
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

export default CommentApp