const express = require("express");

const router = express.Router();

const User = require("../../api/user");

router.post("/users", User.postData);
router.get("/users", User.getData);
router.get("/users/:id", User.getAData);
router.put("/users/:id", User.updateData);
router.delete("/users/:id", User.deleteData);

module.exports = router;
