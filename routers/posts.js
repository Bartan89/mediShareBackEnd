const { Router, response } = require("express")
const Post = require("../models/").post
const auth = require("../auth/middleware")

const router = new Router()

router.get("/", auth, async (req, res) => {
  const result = await Post.findAll()

  res.send(result)
})

router.get("/:id", async (req, res) => {
  const result = await Post.findByPk(req.params.id)

  res.send(result)
})

router.post("/", async (req, res) => {
  console.log(req.body.content)
  const result = await Post.create({
    content: req.body.content,
    status: req.body.status
  })

  res.send(result)
})

module.exports = router
