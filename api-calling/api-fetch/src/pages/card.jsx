import React, { useEffect, useState } from 'react';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedPosts, setExpandedPosts] = useState({});

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/posts', {
        method: 'GET',
      });
      const data = await response.json();
      setPosts(data.posts);
    } catch (err) {
      console.log(err);
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  const togglePostExpansion = (id) => {
    setExpandedPosts((prevExpanded) => ({ ...prevExpanded, [id]: !prevExpanded[id] }));
  };

  return (
    <div className="container my-5">
      <h2 align="center" className="mb-4">Posts Data</h2>

      <div className="row justify-content-center">
        {posts.map((post) => (
          <div key={post.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card post-card">
              <div className="card-body d-flex flex-column" style={{height:"220px"}}>
                <h5 className="card-title text-center">{post.title}</h5>
                <p className="card-text">Views: {post.views}</p>
                <p className="card-text">Tags: {post.tags.join(', ')}</p>

                {expandedPosts[post.id] && (
                  <div className="expanded-post-details">
                    <h6>Body:</h6>
                    <p>{post.body}</p>
                    <h6>Reactions:</h6>
                    <p>Likes: {post.reactions.likes}, Dislikes: {post.reactions.dislikes}</p>
                  </div>
                )}

                <button
                  className="btn btn-success btn-block mt-auto"
                  onClick={() => togglePostExpansion(post.id)}
                >
                  {expandedPosts[post.id] ? 'View Less' : 'View More'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsList;