const db = require("./db/models");

db.Post.create({ title: "Test", description: "Test" })
    .then(post => console.log("creating a post", post.get({ plain: true })))
    //we need plain: true to prented in console
    .catch(e => { console.log(e) })

db.Comment.create({ commenter: "Test", description: "Test" })
    .then(post => console.log("creating a comment", post.get({ plain: true })))
    .catch(e => console.log(e));


// find all posts and its comments
db.Post.findAll({ include: [{ model: db.Comment, as: "comments" }] })
    .then(post => post.map(p => console.log(p.get({ plain: true }))))
    .catch(e => console.log(e))