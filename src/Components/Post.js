import React from 'react';
import axios from 'axios'
class Post extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            post_choice: 'Roast'
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }
    hanldeCheck = (e) => {
        let { name, value } = e.target;
        if (e.target.type === 'checkbox') {
            value = e.target.checked;
        }
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { text } = this.state;
    
        axios.post('http://127.0.0.1:8000/api/posts/', { text })
          .then((result) => {
            console.log(result.data)
          });
          window.location.href = ('/')
      }


    render() {
        
        return (
            
            <form onSubmit={this.handleSubmit}>
                <input type='checkbox' name='post_choice' checked={this.state.post_choice} onChange={this.hanldeCheck} />
                <input type='text' name='text' onChange={this.handleChange} />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Post;