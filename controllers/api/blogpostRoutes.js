const router = require('express').Router();
const { Blogpost, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlogpost = await Blogpost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogpost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
  console.log(req.params.id)
  console.log(req.session.user_id)    
    const blogpostData = await Blogpost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogpostData) {
      res.status(404).json({ message: 'No Blogpost found with this id!' });
      return;
    }

    res.status(200).json(blogpostData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  //update blog post
  try {
    const updatedBlogPost = await Blogpost.update(
      req.body,
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
  res.status(200).json(updatedBlogPost);
} catch (err) {
  res.status(400).json(err);
} 
})

module.exports = router;
