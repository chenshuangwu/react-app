import React, { Component } from 'react'
import CommentInput from './containers/CommentInput'
import CommentList from './containers/CommentList'
import Clock from './Clock'
import Card from './Card'

class CommentApp extends Component {
    constructor(){
        super()
        this.state = {
            isShowClock: true
        }
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
                <CommentInput></CommentInput>
                <CommentList ></CommentList>
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