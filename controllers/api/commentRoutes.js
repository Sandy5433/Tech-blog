const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postComment = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postComment) {
      res.status(404).json({ message: 'No comment found with this post!' });
      return;
    }

    res.status(200).json(postComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
    //update comment
    try {
      const updatedComment = await Comment.update({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
    
    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(400).json(err);
  } 
  })
  

module.exports = router;
