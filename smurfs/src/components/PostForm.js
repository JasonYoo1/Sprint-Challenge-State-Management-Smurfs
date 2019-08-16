import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        age: '',
        height: ''
      };
  
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
  
    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    onSubmit(e) {
      e.preventDefault();
  
      const post = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      };
      //action aka my fetch
      this.props.createPost(post);
    }
  
    render() {
      return (
        <div>
          <h1>Add Post</h1>
          <form onSubmit={this.onSubmit}>
            <div>
              <label>Name: </label>
              <br />
              <input
                type="text"
                name="name"
                onChange={this.onChange}
                value={this.state.name}
              />
            </div>
            <br />
            <div>
              <label>Age: </label>
              <br />
              <input
                name="age"
                onChange={this.onChange}
                value={this.state.age}
              />
            </div>
            <br />
            <div>
              <label>Height:</label>
              <br />
              <input
                name="height"
                onChange={this.onChange}
                value={this.state.height}
              />
            </div>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
  }
  
  PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
  };
  
  export default connect(null, { createPost })(PostForm);
  