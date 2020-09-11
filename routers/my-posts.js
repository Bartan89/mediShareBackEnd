const { Router, response } = require("express")
const myPost = require("../models").myPost
const auth = require("../auth/middleware")
const mypost = require("../models/mypost")

const router = new Router()

// router.get("/", async (req, res) => {
//   const result = await myPost.findAll({ where : {
//     req.body.userId === myPost.userId
//   }})

//   res.send(result)
// })

// router.get("/:id", async (req, res) => {
//   const result = await Post.findByPk(req.params.id)

//   res.send(result)
// })

router.get("/", auth, async (req, res) => {
  const foundPosts = await myPost.findAll({
    where: {
      userId: req.user.dataValues.id
    }
  })

  res.send(foundPosts)
})

router.put("/:id", auth, async (req, res) => {
  try {
    res.send(req.params.id)

    const result = await myPost.update({ translation: req.body.translation }, { where: { id: req.params.id } })

    res.send(result)
  } catch (error) {
    console.log(error.message)
  }
})

router.post("/", auth, async (req, res) => {
  try {
    const result = await myPost.create({
      userId: req.user.dataValues.id,
      content: req.body.content,
      status: req.body.status
    })

    res.send(result)
    console.log("works")
  } catch (error) {
    console.log(error.message)
  }
  //console.log(req.user.dataValues.id)
})

router.delete("/:id", auth, async (req, res) => {
  console.log("hello")
  console.log(req.params.id)
  try {
    const response = await myPost.destroy({
      where: {
        id: req.params.id
      }
    })

    res.send(response)
  } catch (error) {
    console.log(error.message)
  }
})

module.exports = router
