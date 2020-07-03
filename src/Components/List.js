import React from "react";


const PostList = ({ posts }) => {
    return (
        <div>
            <h1>Post List</h1>
            {posts.map((post) => (
                <div class='card'>
                    <div class='card-body'>
                        <p class='card-text'>{post.text} | {post.post_choice}</p>
                        <button>Upvote</button>
                        <button>Downvote</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostList;