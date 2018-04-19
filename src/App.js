import { connect } from 'react-redux';
import React, { Component } from 'react';
import './App.css';
import { createTodo, completedTodo, deletedTodo, deletedAllCompletedTodo, fetchTodos } from './actions/todos';
import Todo from './components/Todo';

class App extends Component {
  state = {
    text: '',
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  _handleSubmit = e => {
    e.preventDefault();
    this.props.createTodo(this.state.text);
    this.setState({
      text: '',
    });
  }

  _handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  _handleComplete = id => {
    this.props.completedTodo(id);
  }

  _handleDeleted = id => {
    this.props.deletedTodo(id);
  }

  _handleDeletedAllCompleted = () => {
    this.props.deletedAllCompletedTodo();
  }

  render() {
    if (!this.props.todos.isFetched) {
      return (<h1>Loading...</h1>);
    }
    return (
      <div className="App">
        <form className="App-intro" onSubmit={this._handleSubmit}>
          <input
            onChange={this._handleChange}
            value={this.state.text}
            type="text"
            name="text"
            placeholder="Create a todo..."
          />
        </form>
        <br />
        {this.props.todos.data.map(todo => (
          <Todo {...todo} key={todo.id} />
        ))}
        <br />
        <hr />
        <br />
        <button onClick={this._handleDeletedAllCompleted}>Delete all completed</button>
      </div>
    );
  }
}

export default connect(state => ({
  todos: state.todos,
}), { createTodo, completedTodo, deletedTodo, deletedAllCompletedTodo, fetchTodos })(App);
