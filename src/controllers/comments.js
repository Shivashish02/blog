const { Comments, Posts, Users } = require('../db/models')

async function createNewComment(userId, postId, body) {
    const comment = await Comments.create({
        body,
        userId,
        postId
    })

    return comment
}

async function findAllComments(query) {
    const comments = await Comments.findAll({
        include: [Users],
        include: [Posts]
    })

    return comments
}

async function getCommentsByPostId(postId) {
    return await Comments.findAll({ where: { postId }, include: [Posts] })
}


module.exports = {
    createNewComment,
    findAllComments,
    getCommentsByPostId
}