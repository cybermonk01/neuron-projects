function fetchBlogs() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      displayBlogs(data);
    })
    .catch((error) => {
      console.log("Error fetching blogs:", error);
    });
}

function displayBlogs(blogs) {
  const blogList = document.getElementById("blogList");

  blogList.innerHTML = "";

  blogs.forEach((blog) => {
    const blogContainer = document.createElement("div");
    blogContainer.className = "blog";

    const title = document.createElement("h3");
    title.textContent = blog.title;

    const body = document.createElement("p");
    body.textContent = blog.body;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Me !";
    deleteBtn.addEventListener("click", () => {
      deleteBlog(blog.id);
    });

    blogContainer.appendChild(title);
    blogContainer.appendChild(body);
    blogContainer.appendChild(deleteBtn);

    blogList.appendChild(blogContainer);
  });
}

function addBlog(e) {
  e.preventDefault();

  const titleInput = document.getElementById("titleInput");
  const bodyInput = document.getElementById("bodyInput");

  const newBlog = {
    title: titleInput.value,
    body: bodyInput.value,
    userId: 1,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBlog),
  })
    .then((response) => response.json())
    .then((data) => {
      titleInput.value = "";
      bodyInput.value = "";

      fetchBlogs();
    })
    .catch((error) => {
      console.log("Error adding blog:", error);
    });
}

function deleteBlog(blogId) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        fetchBlogs();
      } else {
        console.log("Error deleting blog:", response.statusText);
      }
    })
    .catch((error) => {
      console.log("Error deleting blog:", error);
    });
}

function init() {
  fetchBlogs();

  const addBlogForm = document.getElementById("addBlogForm");
  addBlogForm.addEventListener("submit", addBlog);
}

// Call init function when the page is loaded
window.addEventListener("load", init);
