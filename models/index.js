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

Comment.belongsTo(Blogpost, {
  foreignKey: 'user_id'
});

Blogpost.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

module.exports = { User, Blogpost, Comment };
