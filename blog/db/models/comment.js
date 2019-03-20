'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment',
    {
      commenter: DataTypes.STRING,
      description: DataTypes.STRING
    },
    { tableName: "comments" }
  );
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.Post, {
      foreignKey: "post_id",
      onDelete: "CASCADE" //if we want to delete the post, it should delete all comments it has
      // CASEADE manes all
    });
  };
  return Comment;
};