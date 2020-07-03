import React from 'react';
import PostList from '../Components/List'
import Navigation from '../Components/Navigation'
import { Link } from 'react-router-dom';
import axios from 'axios'; 

class Homepage extends React.Component {
    state = {
        posts: [],
        text: '',
      }
      getPosts = () => {
        axios.get('http://127.0.0.1:8000/api/posts/')
        .then(response => {
          const newPosts = response.data.map(post => {
            return {
              id: post.id,
              text: post.text,
              post_choice: post.post_choice
            };
          });
    
          const newState = Object.assign({}, this.state, {
            posts: newPosts
          });
    
    
    
          this.setState(newState);
        })
        .catch(error => console.log(error))
    
        
    
      }
      
      
      componentDidMount() {
        this.getPosts();
      }
    
      render() {
        return (
          <div className='App'>
            <Navigation />
            <Link to='/post'>Add New Post</Link>
            <PostList posts={this.state.posts} />
          </div>
          
        )
      }
}

export default Homepage;