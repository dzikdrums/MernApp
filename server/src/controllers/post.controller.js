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

exports.addPost = async (req, res) => {
  console.log(req.body);
  console.log("dd");
  try {
    const { title, author, text } = req.body;
    console.log(title, author, text);

    let newPost = new Post({ title, author, text });
    // newPost.id = uuid();

    postSaved = await newPost.save();
    res.status(200).json(postSaved);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deletePost = async (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(result => {
      if (!result) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    })
    .catch(err => res.sendStatus(500));
};
