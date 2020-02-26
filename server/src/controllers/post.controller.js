const Post = require("../models/post.model");
const uuid = require("uuid");

exports.getPosts = async (req, res) => {
  try {
    const result = await Post.find().select("author title text");
    if (!result) res.status(404).json({ post: "Not found" });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getSinglePost = async (req, res) => {
  try {
    const result = await Post.findById(req.params.id);
    if (!result) res.status(404).json({ post: "Not found" });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.addPost = async function(req, res) {
  try {
    const { title, author, text } = req.body;

    let newPost = new Post({ title, author, text });
    newPost.id = uuid();

    postSaved = await newPost.save();
    console.log(postSaved);
    res.status(200).json(postSaved);
  } catch (err) {
    res.status(500).json(err);
  }
};
