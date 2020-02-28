import React, { Component } from 'react'

class Card extends Component {
    render(){
        console.log(this.props.children)
        return(
            <div className="card">
                <div className="card-content">
                    1：{this.props.children[0]}
                    2: {this.props.children[1]}
                    3: {this.props.children[3]}
                </div>
            </div>
        )
    }
}


export default Card