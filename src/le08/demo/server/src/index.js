const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {Post} = require('./database');

const app = express();
const PORT =  3000;

app.use(bodyParser.json());
app.use(cors());


app.get('/api/posts', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

app.post('/api/posts', async (req, res) => {
    const { title, content } = req.body;
    const post = new Post({ title, content });
    await post.save();
    res.json(post);
});

app.delete('/api/posts/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
