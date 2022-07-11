import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostsView = () => {
    const { isLoading, posts, error } = useSelector(state => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [])
    return (
        <div>
            <h2>Posts</h2>
            { isLoading && <h3>Loading...</h3> }
            { error && <h3>{error}</h3> }
            { posts && posts.map(post => {
                return <article key={post.id}>
                    <h5>{post.title}</h5>
                    <p>{post.body}</p>
                </article>
            }) }
        </div>
    );
};

export default PostsView;