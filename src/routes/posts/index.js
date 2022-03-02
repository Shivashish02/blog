const { Router } = require('express')
const {
  findAllPosts,
  createNewPost,
  getPostByUserId
} = require('../../controllers/posts')

const route = Router()

route.get('/:id', async (req, res) => {
  let post;
  console.log(req.params.id)
  post = await getPostByUserId(req.params.id)

  if (post) {
    res.status(200).send(post)
  } else {
    res.status(404).send({
      error: 'No such user id or username'
    })
  }
})

route.get('/', async (req, res) => {
  const posts = await findAllPosts()
  res.status(200).send(posts)
})

route.post('/', async (req, res) => {
  const { userId, title, body } = req.body

  if ((!userId) || (!title) || (!body)) {
    return res.status(400).send({
      error: 'Need userid, title and body to create post'
    })
  }

  const post = await createNewPost(userId, title, body)
  res.status(201).send(post)
})


module.exports = {
  postsRoute: route
}