let blogPosts = [];
export const getAllBlogs = (req, res) => {
  res.json(blogPosts);
};

export const addBlog = (req, res) => {
  const newPost = req.body;
  blogPosts.push(newPost);
  res.status(201).json(newPost);
};

export const deleteBlog = (req, res) => {
  const postId = req.params.id;
  blogPosts = blogPosts.filter((post) => post.id !== postId);
  res.sendStatus(204);
};

export const updateBlog = (req, res) => {
  const postId = req.params.id;
  const updatedPost = req.body;

  blogPosts = blogPosts.map((post) => {
    if (post.id === postId) {
      return { ...post, ...updatedPost };
    }
    return post;
  });

  res.json(updatedPost);
};

export const replaceBlog = (req, res) => {
  const postId = req.params.id;
  const updatedPost = req.body;

  blogPosts = blogPosts.map((post) => {
    if (post.id === postId) {
      return updatedPost;
    }
    return post;
  });

  res.json(updatedPost);
};
