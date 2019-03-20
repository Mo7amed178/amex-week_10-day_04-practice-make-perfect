'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post',
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING
    },
    { tableName: "posts" }
  );
  Post.associate = function (models) {
    // associations can be defined here
    Post.hasMany(models.Comment, {
      foreignKey: "post_id",
      as: "Comments"
    })
  };
  return Post;
};