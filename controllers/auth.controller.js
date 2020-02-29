const passport = require("passport");
const User = require("../models/user.model");

export.getUser = async (req, res) => {
  try {
    const result = await User.find();
    if (!result) res.status(404).json({ post: "Not found" });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/user/no-permission" }),
  async (req, res) => {
    try {
      const { id } = req.user;

      let newUser = new User({ id });

      userSaved = await newUser.save();
      res.redirect("https://mernappdzik.herokuapp.com/");
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

module.exports = router;
