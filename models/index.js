const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment')

User.hasMany(Blogpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blogpost.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Blogpost, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
});

Blogpost.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'SET NULL'
})

module.exports = { User, Blogpost, Comment };
