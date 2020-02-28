import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
    constructor(){
        super()
        console.log('constructor')
    }
    
    static propTypes = {
        comment: PropTypes.object.isRequired
    }

    componentWillMount(){
        console.log('component will mount')
    }

    componentDidMount(){
        console.log('component did mount')
    }

    render(){
        console.log('render')
        return(
            <div className="comment">
                <div className="comment-user">
                    <span>{this.props.comment.username}</span>：
                </div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}

export default Comment