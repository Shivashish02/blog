const { Router } = require('express')
const {
  findAllComments,
  createNewComment,
  getCommentsByPostId
} = require('../../controllers/comments')

const route = Router()

route.get('/', async (req, res) => {
  const comments = await findAllComments()
  res.status(200).send(comments)
})

route.get('/:id', async (req, res) => {
  let comments;
  console.log(req.params.id)
  comments = await getCommentsByPostId(req.params.id)

  if (comments) {
    res.status(200).send(comments)
  } else {
    res.status(404).send({
      error: 'No comments'
    })
  }
})

route.post('/', async (req, res) => {
  const { userId, postId, body } = req.body

  if ((!userId) || (!postId) || (!body)) {
    return res.status(400).send({
      error: 'Need userid, postid and body to create post'
    })
  }

  const comment = await createNewComment(userId, postId, body)
  res.status(201).send(comment)
})

module.exports = {
  commentsRoute: route
}