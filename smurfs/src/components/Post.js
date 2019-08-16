import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
    //first life cycle method
    componentWillMount() {
      //not using the actual fetch api here,
      //just using the logic and calling the function placed into a prop
        this.props.fetchPosts();
      }
    
      componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
          this.props.posts.unshift(nextProps.newPost);
        }
      }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
            <h3>{post.name}</h3>
            <p>{post.age}</p>
            <p>{post.height}</p>
            </div>
        ));
        return (
            <div>
            <h1>Posts</h1>
            { postItems }
            </div>
        );
    }
}

// propTypes will check props passed to your 
// components against those definitions, and warn in development if they don’t match.

// Posts.propTypes = {
//     // fetchPosts: PropTypes.func.isRequired,
//     // posts: PropTypes.array.isRequired,
//     // newPost: PropTypes.object
//   };
  

  //I needed to get new items from state and i used 
  //mapStateToProps to get the state from redux and map it to props
  //used posts. see index.js inside reducer directory
  const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
  });



  export default connect(mapStateToProps, { fetchPosts })(Posts);