const express = require("express");

const app = express();
const PORT = 5000;

app.get("/post", (req, res) => {
  const posts = [];
  for (let i = 1; i <= 20; i++) {
    posts.push({ id: i, title: `Post ${i}`, body: `This is post number ${i}` });


//  this can also be used
//     const posts = Array.from({ length: 20 }, (_, index) => ({
//         id: index + 1,
//         title: `Post ${index + 1}`,
//         content: `This is the content of post ${index + 1}`
//   }

  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
