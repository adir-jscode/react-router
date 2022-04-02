import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
        .then(data=>setPost(data))
        
    },[post])

    return (
        <div>
            <h1>Here is post detail of {postId}</h1>
            <p>{post.id}</p>
            <p>{post.body}</p>
            <p><small>{ post.title }</small></p>
        </div>
    );
};

export default PostDetail;