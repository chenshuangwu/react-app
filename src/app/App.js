import React, { Component } from 'react';
import './App.css';


const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]

class User extends Component {
  render(){
    const { user } = this.props
    return (
      <div>
        <div>姓名：{user.username}</div>
        <div>年龄：{user.age}</div>
      </div>
    )
  }
}

class PageHeader extends Component {
  render(){

    return (
      <header className="page-hd">
        <img src="http://m.doufu.la/assets/img/logo.png"></img>
        { users.map(user => <User user={user}></User> )}
      </header>
    )
  }
}

class LikeButton extends Component {
  constructor() {
    super()
    this.state = { isLiked: false }
  }

  static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  }

  handleClickOnLikeButton(){
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render(){
    const likedText = this.props.likedText
    const unlikedText = this.props.unlikedText
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        <span>{this.state.isLiked? likedText: unlikedText}</span>👍
      </button>
    )
  }
}

class Title extends Component {
  handleClickOnTitle(e){
  }

  render() {
    return (
      <h1 onClick={this.handleClickOnTitle.bind(this)}>title test</h1>
    )
  }
}

class Test extends Component {
  render(){
    return(
      <di>test</di>
    )
  }
}

function App() {
  const word = 'is solo'
  const badword = <span> hhh </span>
  return (
  <div className="App">
    <PageHeader></PageHeader>
    <header className="App-header" data-test={word}>
      <p>
        Welcome to React App. { word } { 1 + 2}
        {badword}
      </p>
      <Title />
      <LikeButton ></LikeButton>
      <Test></Test>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>

  </div>
  );
}

export default App;