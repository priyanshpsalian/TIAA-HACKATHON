const express = require("express");
var ObjectId = require("mongodb").ObjectId;
const router = express.Router();
require("../../db/conn");
const blog_model = require("../../models/blog");
const user_model = require("../../models/register_user");
const cors = require("cors");
router.use(express.json());
router.use(cors());
const res = require("express/lib/response");
const { default: mongoose } = require("mongoose");
const blog = require("../../models/blog");
router.get("/", async (req, res) => {
  const all_blogs = await blog_model.find();
  res.send(all_blogs);
});
router.post("/addBlog", async (req, res) => {
  try {
    const userId = req.body.user;
    let userfound;
    try {
      userfound = await user_model.findById(userId);
      //   console.log(userfound);
    } catch (e) {
      console.log(e);
    }
    if (!userfound) {
      res.status(400).send("User Not Found");
    }
    // console.log("OO");
    const makeblog=new blog_model(req.body)
    // const makeblog = new blog_model({
    //   title: req.body.title,
    //   description: req.body.description,
    //   image: req.body.image,
    //   user: req.body.user,
    // });

    // session.startTransaction();
    await makeblog.save();
    userfound.blogs.push(makeblog);
    await userfound.save();
    // await session.commitTransaction();

    res.status(201).send(makeblog);
  } catch (e) {
    console.log(e);
    res.send("error");
  }
});
// router.put("/updateBlog/:id", async (req, res) => {
//   try {
//     // console.log("K");
//     let blogId = req.params.id;
//     const { title, description } = req.body;
//     // console.log("L");
//     const update = await blog_model.findByIdAndUpdate(blogId, {
//       title,
//       description,
//     });
//     res.status(201).send(update);
//   } catch (e) {
//     console.log(e);
//   }
// });
router.get("/getBlogByuserId/:id", async (req, res) => {
  try {
    // console.log("K");
    let blogId = req.params.id;
    // const { title, description } = req.body;
    // console.log("L");
    // const update = await blog_model.findById(blogId);
    const update = await blog_model.find({"user":ObjectId(`${blogId}`)});

    // console.log("KKK");
    res.status(201).send(update);
  } catch (e) {
    console.log(e);
  }
});
router.get("/getToEditBlogById/:id", async (req, res) => {
  try {
    // console.log("K");
    let blogId = req.params.id;
    // const { title, description } = req.body;
    // console.log("L");
    const update = await blog_model.findById(blogId);
    // const update = await blog_model.find({ user: ObjectId(`${blogId}`) });

    // console.log("KKK");
    res.status(201).send(update);
  } catch (e) {
    console.log(e);
  }
});
router.delete("/deleteBlogById/:id", async (req, res) => {
  try {
    // console.log("K");
    let blogId = req.params.id;
    // console.log(blogId);
    // const { title, description } = req.body;
    // console.log("L");
    try {
      // const update = await blog_model
      //   .findByIdAndRemove(blogId)
      // .populate("register");

      var update = await blog_model.findByIdAndRemove(blogId);
      update = ObjectId(blogId);
      // console.log(update);
      // console.log(update.user);
      // console.log(user_model);
      const ans=await user_model.updateMany({}, 
        {$pull: {blogs: update}}, 
        // {multi: true}
      );
      // console.log(ans);
      // await user_model.save();
     res.status(201).send(update);
    } catch (e) {
      console.log(e);
    }

    // res.status(201).send(update);
  } catch (e) {
    console.log(e);
  }
});
router.put("/updateBlog/:id", async (req, res) => {
  try {
    // console.log("K");
    let blogId = req.params.id;
    // const { title, description } = req.body;
    // console.log("L");
    const update = await blog_model.findByIdAndUpdate(blogId,req.body);
    res.status(201).send(update);
  } catch (e) {
    console.log(e);
  }
});
router.get("/updateBlogGuestList/:id/:gid", async (req, res) => {
  try {
    // console.log("K");
    let blogId = req.params.id;
    let guestId = req.params.gid;
    // const { title, description } = req.body;
    // console.log("L");
    // const update = await blog_model.findByIdAndUpdate(blogId, req.body);
    blogfound = await blog_model.findById(blogId);
    userfound = await user_model.findById(guestId);
    const biddata = {
      userId: guestId,
      bidPrice: 0,
    };

    blogfound.guest_list.push(biddata);
    userfound.joined.push(blogId);

    await blogfound.save();
    await userfound.save();
    res.status(201).send(blogfound);
  } catch (e) {
    console.log(e);
  }
});
router.get("/removeGuestfromList/:id/:gid", async (req, res) => {
  try {
    // console.log("K");
    let blogId = req.params.id;
    let guestId = req.params.gid;
    // const { title, description } = req.body;
    // console.log("L");
    // const update = await blog_model.findByIdAndUpdate(blogId, req.body);
    blogfound = await blog_model.findById(blogId);

    blogfound.guest_list.pop(guestId);
    await blogfound.save();
    res.status(201).send(blogfound);
  } catch (e) {
    console.log(e);
  }
});
// ------------------------------------------------------------------------
router.get("/editBlogPrice/:id/:gid/:price", async (req, res) => {
  try {
    // console.log("K");
    let blogId = req.params.id;
    let guestId = req.params.gid;
    let price = req.params.price;
    // const { title, description } = req.body;
    // console.log("L");
    // const update = await blog_model.findByIdAndUpdate(blogId, req.body);
    blogfound = await blog_model.findById(blogId);
    userfound = await user_model.findById(guestId);
    const biddata = {
      userId: guestId,
      bidPrice: 0,
    };

    blogfound.guest_list.push(biddata);
    userfound.joined.push(blogId);

    await blogfound.save();
    await userfound.save();
    res.status(201).send(blogfound);
  } catch (e) {
    console.log(e);
  }
});
// router.get("/join/:id/:gid", async (req, res) => {
//   try {
//     // console.log("K");
//     let blogId = req.params.id;
//     let guestId = req.params.gid;
//     // const { title, description } = req.body;
//     // console.log("L");
//     // const update = await blog_model.findByIdAndUpdate(blogId, req.body);
//     userfound = await user_model.findById(guestId);

//     blogfound.guest_list.pop(guestId);
//     await blogfound.save();
//     res.status(201).send(blogfound);
//   } catch (e) {
//     console.log(e);
//   }
// });
module.exports = router;
