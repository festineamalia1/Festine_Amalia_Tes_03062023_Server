const router = require("express").Router();
const { users } = require("../controllers");

router.get("/user", users.getDataUser);

module.exports = router;
